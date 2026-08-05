from __future__ import annotations

import copy
import importlib.util
import json
import unittest
from pathlib import Path

LAB_ROOT = Path(__file__).resolve().parents[1]
SPEC = importlib.util.spec_from_file_location("validate_lab", LAB_ROOT / "scripts" / "validate_lab.py")
assert SPEC and SPEC.loader
validate_lab = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(validate_lab)


def fixture(path: str) -> dict:
    with (LAB_ROOT / path).open("r", encoding="utf-8") as handle:
        return json.load(handle)


class LabPolicyTests(unittest.TestCase):
    def setUp(self) -> None:
        self.safety = fixture("contracts/safety-policy.json")

    def test_repository_contracts_pass(self) -> None:
        self.assertEqual([], validate_lab.run_validation(LAB_ROOT))

    def test_structural_print_is_rejected(self) -> None:
        project = fixture("examples/pilot-project.json")
        project["printIntents"].append(
            {"use": "structural-connector", "disposition": "concept-only"}
        )
        errors = validate_lab.validate_project(project, self.safety)
        self.assertTrue(any("prohibited print use" in error for error in errors))

    def test_rejected_prohibited_print_is_recordable(self) -> None:
        project = fixture("examples/pilot-project.json")
        project["printIntents"].append(
            {"use": "module-clamp", "disposition": "rejected"}
        )
        errors = validate_lab.validate_project(project, self.safety)
        self.assertFalse(any("module-clamp" in error for error in errors))

    def test_concept_offer_cannot_be_sales_enabled(self) -> None:
        catalog = fixture("contracts/offer-catalog.json")
        candidate = copy.deepcopy(catalog)
        candidate["offers"][2]["salesAllowed"] = True
        errors = validate_lab.validate_offer_catalog(candidate)
        self.assertTrue(any("cannot be sales-enabled" in error for error in errors))

    def test_agent_cannot_approve_its_own_gate(self) -> None:
        workflow = fixture("contracts/agent-workflow.json")
        candidate = copy.deepcopy(workflow)
        candidate["agents"][0]["canApproveGate"] = True
        errors = validate_lab.validate_workflow(candidate)
        self.assertTrue(any("may not approve gates" in error for error in errors))

    def test_quote_ready_requires_human_gate_evidence(self) -> None:
        project = fixture("examples/pilot-project.json")
        project["state"] = "quote_ready"
        errors = validate_lab.validate_project(project, self.safety)
        self.assertTrue(any("requires accepted human status" in error for error in errors))

    def test_affiliate_agents_have_no_money_authority(self) -> None:
        policy = fixture("contracts/affiliate-policy.json")
        candidate = copy.deepcopy(policy)
        candidate["authority"]["moneyMovement"] = "autonomous"
        errors = validate_lab.validate_affiliate_policy(candidate)
        self.assertTrue(any("moneyMovement" in error for error in errors))

    def test_design_ship_requires_premium_score(self) -> None:
        evidence = fixture("design-loop-evidence.json")
        candidate = copy.deepcopy(evidence)
        candidate["score"]["total"] = 25
        errors = validate_lab.validate_design_evidence(candidate, LAB_ROOT)
        self.assertTrue(any("at least 26/30" in error for error in errors))

    def test_design_ship_requires_inspected_artifacts(self) -> None:
        evidence = fixture("design-loop-evidence.json")
        candidate = copy.deepcopy(evidence)
        candidate["artifacts"][0]["inspected"] = False
        errors = validate_lab.validate_design_evidence(candidate, LAB_ROOT)
        self.assertTrue(any("artifact must be inspected" in error for error in errors))


if __name__ == "__main__":
    unittest.main()
