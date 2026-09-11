#!/usr/bin/env python3
"""Validate Starlight PV Carport Lab contracts without third-party packages."""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path
from typing import Any, Iterable

LAB_ROOT = Path(__file__).resolve().parents[1]


def load_json(path: Path) -> dict[str, Any]:
    with path.open("r", encoding="utf-8") as handle:
        data = json.load(handle)
    if not isinstance(data, dict):
        raise ValueError(f"{path}: expected a JSON object")
    return data


def duplicates(values: Iterable[str]) -> set[str]:
    seen: set[str] = set()
    repeated: set[str] = set()
    for value in values:
        if value in seen:
            repeated.add(value)
        seen.add(value)
    return repeated


def validate_offer_catalog(catalog: dict[str, Any]) -> list[str]:
    errors: list[str] = []
    offers = catalog.get("offers")
    if not isinstance(offers, list) or not offers:
        return ["offer-catalog: offers must be a non-empty array"]

    ids = [offer.get("id") for offer in offers if isinstance(offer, dict)]
    errors.extend(f"offer-catalog: duplicate offer id {item}" for item in duplicates(ids))

    valid_statuses = {"concept", "prototype", "pilot", "ready"}
    for index, offer in enumerate(offers):
        prefix = f"offer-catalog.offers[{index}]"
        if not isinstance(offer, dict):
            errors.append(f"{prefix}: must be an object")
            continue
        for key in ("id", "name", "owner", "status", "salesAllowed", "promise", "excludes", "releaseGates"):
            if key not in offer:
                errors.append(f"{prefix}: missing {key}")
        status = offer.get("status")
        if status not in valid_statuses:
            errors.append(f"{prefix}: invalid status {status!r}")
        if status in {"concept", "prototype"} and offer.get("salesAllowed") is not False:
            errors.append(f"{prefix}: concept/prototype offers cannot be sales-enabled")
        if offer.get("salesAllowed") is True and not offer.get("releaseGates"):
            errors.append(f"{prefix}: sales-enabled offer needs release gates")
    return errors


def validate_affiliate_policy(policy: dict[str, Any]) -> list[str]:
    errors: list[str] = []
    authority = policy.get("authority", {})
    if policy.get("status") != "inactive-pre-pilot":
        errors.append("affiliate-policy: initial repository policy must remain inactive-pre-pilot")
    expected = {
        "contractSigning": "human-only",
        "payoutApproval": "human-only",
        "moneyMovement": "none",
        "attributionOverride": "named-human-with-reason",
    }
    for key, value in expected.items():
        if authority.get(key) != value:
            errors.append(f"affiliate-policy.authority.{key}: expected {value!r}")
    required_fields = set(policy.get("requiredAttributionFields", []))
    required_minimum = {
        "sourceId", "offerId", "projectId", "orderState", "netRevenue",
        "directCosts", "incrementalGrossProfit", "payoutState",
    }
    missing = sorted(required_minimum - required_fields)
    if missing:
        errors.append(f"affiliate-policy: missing attribution fields {', '.join(missing)}")
    return errors


def validate_safety_policy(policy: dict[str, Any]) -> list[str]:
    errors: list[str] = []
    allowed = set(policy.get("allowedPrintUses", []))
    prohibited = set(policy.get("prohibitedPrintUses", []))
    overlap = sorted(allowed & prohibited)
    if overlap:
        errors.append(f"safety-policy: print uses cannot be both allowed and prohibited: {', '.join(overlap)}")
    if not allowed or not prohibited:
        errors.append("safety-policy: allowed and prohibited print-use lists must be non-empty")

    gates = policy.get("gates", [])
    gate_ids = [gate.get("id") for gate in gates if isinstance(gate, dict)]
    errors.extend(f"safety-policy: duplicate gate id {item}" for item in duplicates(gate_ids))
    for index, gate in enumerate(gates):
        prefix = f"safety-policy.gates[{index}]"
        if not gate.get("ownerRole"):
            errors.append(f"{prefix}: missing ownerRole")
        if not gate.get("requiredForStates"):
            errors.append(f"{prefix}: missing requiredForStates")
        if not gate.get("acceptedStatuses"):
            errors.append(f"{prefix}: missing acceptedStatuses")
    return errors


def validate_workflow(workflow: dict[str, Any]) -> list[str]:
    errors: list[str] = []
    agents = workflow.get("agents", [])
    ids = [agent.get("id") for agent in agents if isinstance(agent, dict)]
    errors.extend(f"agent-workflow: duplicate agent id {item}" for item in duplicates(ids))
    for index, agent in enumerate(agents):
        prefix = f"agent-workflow.agents[{index}]"
        if agent.get("canApproveGate") is not False:
            errors.append(f"{prefix}: agents may not approve gates")
        if agent.get("externalSideEffects") != []:
            errors.append(f"{prefix}: pre-pilot agents must have no external side effects")
        if not agent.get("owner"):
            errors.append(f"{prefix}: missing human owner")
    prohibited = set(workflow.get("prohibitedAuthority", []))
    for required in ("structural-approval", "electrical-approval", "money-movement", "public-publish"):
        if required not in prohibited:
            errors.append(f"agent-workflow: prohibitedAuthority missing {required}")
    for index, transition in enumerate(workflow.get("transitions", [])):
        if transition.get("from") not in {"discover", "education"} and not transition.get("humanGate"):
            errors.append(f"agent-workflow.transitions[{index}]: regulated transition needs a humanGate")
    return errors


def validate_project(project: dict[str, Any], policy: dict[str, Any]) -> list[str]:
    errors: list[str] = []
    required = {
        "schemaVersion", "projectId", "state", "mode", "jurisdiction", "site",
        "goals", "evidence", "gates", "printIntents", "assumptions",
    }
    missing = sorted(required - set(project))
    if missing:
        errors.append(f"project: missing fields {', '.join(missing)}")
        return errors
    if project.get("schemaVersion") != "2026-07-18":
        errors.append("project.schemaVersion: unsupported version")
    if not str(project.get("projectId", "")).startswith("PVC-"):
        errors.append("project.projectId: must start with PVC-")

    allowed = set(policy.get("allowedPrintUses", []))
    prohibited = set(policy.get("prohibitedPrintUses", []))
    for index, intent in enumerate(project.get("printIntents", [])):
        use = intent.get("use")
        disposition = intent.get("disposition")
        if use in prohibited and disposition != "rejected":
            errors.append(f"project.printIntents[{index}]: prohibited print use {use!r} must be rejected")
        elif use not in allowed and use not in prohibited:
            errors.append(f"project.printIntents[{index}]: unknown print use {use!r}")

    state = project.get("state")
    project_gates = project.get("gates", {})
    for gate in policy.get("gates", []):
        if state not in gate.get("requiredForStates", []):
            continue
        gate_id = gate.get("id")
        result = project_gates.get(gate_id, {})
        if result.get("status") not in gate.get("acceptedStatuses", []):
            errors.append(f"project.gates.{gate_id}: state {state!r} requires accepted human status")
        if not result.get("owner") or not result.get("evidenceRef"):
            errors.append(f"project.gates.{gate_id}: accepted gate requires owner and evidenceRef")

    for gate_id, result in project_gates.items():
        if result.get("status") in {"approved", "approved-with-conditions", "not-required-with-evidence"}:
            if not result.get("owner") or not result.get("evidenceRef"):
                errors.append(f"project.gates.{gate_id}: approval requires owner and evidenceRef")
    return errors


def validate_design_evidence(evidence: dict[str, Any], root: Path = LAB_ROOT) -> list[str]:
    errors: list[str] = []
    required = {
        "version", "task", "surface", "audience", "standards", "references",
        "direction", "asset_quality", "artifacts", "checks", "score", "decision",
    }
    missing = sorted(required - set(evidence))
    if missing:
        return [f"design-evidence: missing fields {', '.join(missing)}"]

    asset_quality = evidence.get("asset_quality", {})
    if asset_quality.get("tier") in {"D", "blocked", None}:
        errors.append("design-evidence.asset_quality: shippable prototype requires Tier A, B, or C")
    if asset_quality.get("context_tested") is not True:
        errors.append("design-evidence.asset_quality: final asset must be context-tested")

    score = evidence.get("score", {})
    total = score.get("total")
    maximum = score.get("max")
    if not isinstance(total, (int, float)) or not isinstance(maximum, (int, float)):
        errors.append("design-evidence.score: total and max must be numeric")
    elif evidence.get("decision") == "ship" and (maximum != 30 or total < 26):
        errors.append("design-evidence.score: ship decision requires at least 26/30")

    repository_root = root.parents[1]
    for index, artifact in enumerate(evidence.get("artifacts", [])):
        prefix = f"design-evidence.artifacts[{index}]"
        if artifact.get("inspected") is not True:
            errors.append(f"{prefix}: artifact must be inspected")
        path = artifact.get("path_or_url", "")
        if not path:
            errors.append(f"{prefix}: path_or_url is required")
        elif "://" not in path and not (repository_root / path).exists():
            errors.append(f"{prefix}: local artifact does not exist: {path}")

    checks = evidence.get("checks", [])
    check_names = {check.get("name") for check in checks if isinstance(check, dict)}
    for required_check in {
        "asset-tier", "desktop-export-inspection", "mobile-export-inspection",
        "interaction-safety", "accessibility-and-motion",
        "console-and-runtime", "factual-and-provenance-integrity",
    }:
        if required_check not in check_names:
            errors.append(f"design-evidence.checks: missing {required_check}")
    for index, check in enumerate(checks):
        if check.get("status") != "pass":
            errors.append(f"design-evidence.checks[{index}]: status must be pass for ship evidence")
    return errors


def run_validation(root: Path = LAB_ROOT) -> list[str]:
    catalog = load_json(root / "contracts" / "offer-catalog.json")
    affiliate = load_json(root / "contracts" / "affiliate-policy.json")
    safety = load_json(root / "contracts" / "safety-policy.json")
    workflow = load_json(root / "contracts" / "agent-workflow.json")
    project = load_json(root / "examples" / "pilot-project.json")
    design_evidence = load_json(root / "design-loop-evidence.json")

    errors: list[str] = []
    errors.extend(validate_offer_catalog(catalog))
    errors.extend(validate_affiliate_policy(affiliate))
    errors.extend(validate_safety_policy(safety))
    errors.extend(validate_workflow(workflow))
    errors.extend(validate_project(project, safety))
    errors.extend(validate_design_evidence(design_evidence, root))
    return errors


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--json", action="store_true", help="emit a machine-readable receipt")
    args = parser.parse_args()

    try:
        errors = run_validation()
    except (OSError, ValueError, json.JSONDecodeError) as exc:
        errors = [str(exc)]

    receipt = {
        "lab": "starlight-pv-carport-lab",
        "version": "2026-07-18",
        "status": "pass" if not errors else "fail",
        "checks": 6,
        "errors": errors,
    }
    if args.json:
        print(json.dumps(receipt, indent=2))
    elif errors:
        print("PV Carport Lab validation FAILED")
        for error in errors:
            print(f"- {error}")
    else:
        print("PV Carport Lab validation PASS (6 contract and evidence groups)")
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
