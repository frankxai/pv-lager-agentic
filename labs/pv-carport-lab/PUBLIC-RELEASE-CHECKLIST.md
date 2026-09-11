# Public Release Checklist — PV Carport Lab

**Status:** `HOLD_PUBLIC_RELEASE` until a named human product owner records each required approval.
**Scope:** `labs/pv-carport-lab/**` only. This checklist is a release-control artifact, not publication authorization.

## Scope and exclusions

- The checked Lab is a pre-pilot educational/prototype surface. It has no authority to sell, publish an offer, decide permits, approve structures, commission electrical work, sign contracts, or move money.
- `docs/rial-energy-joint-venture-growth-system-2026.md` is **`HOLD_PRIVATE`**. It was not opened, altered, or used for this audit; it must remain outside any public release decision.
- Do not add customer data, credentials, secret values, supplier terms, live inventory, exact pricing, signed compensation, real margins, contracts, or private operating evidence to this public repository.

## Deterministic privacy review

| Check | Result | Disposition |
|---|---|---|
| Internal absolute paths | Found in design evidence and implementation receipt | Sanitized to public-safe references; no workstation path retained in those artifacts |
| Internal machine / peer identifiers | Found in implementation receipt | Replaced with role-level descriptions |
| Inactive price hypotheses | Found in offer catalog, public prototype, and GTM outline | Removed; all offers remain `salesAllowed: false` and pre-pilot |
| Inactive affiliate percentages | Found in affiliate policy and GTM outline | Removed; policy remains inactive and human-only |
| Private partner / family-business strategy | Found in the Lab GTM outline | Replaced with public-safe roles and human-owned release gates |
| Credentials and secret-like material | No secret value identified in the scoped Lab audit | No secret value is recorded by this checklist |
| Customer data | Synthetic pilot example only | Keep synthetic; no customer record may be added |

## Required human gates before any public release

- [ ] Product owner confirms the exact revision and scope.
- [ ] Legal/product-compliance reviewer approves customer-facing claims, terms, and disclosures.
- [ ] Privacy reviewer confirms no customer, supplier, employee, credential, or internal-operational data is present.
- [ ] Technical owner confirms product, stock, price, compatibility, and warranty data if any are later introduced.
- [ ] Structural, electrical, planning, and grid responsibilities remain represented only as qualified-human gates.
- [ ] Accessibility, mobile, browser-console, overflow, contract, schema, and link checks pass on the release revision.
- [ ] Publication, commerce, checkout, customer messaging, and money authority are explicitly approved outside this Lab.

## Public-safe artifact rules

- Keep evidence paths repository-relative or use a non-sensitive public URL; never include a local user, profile, machine, or private repository path.
- Keep proposed prices, margins, compensation rates, supplier terms, live inventory, and private strategy out of public artifacts until a named human authorizes a separately reviewed disclosure.
- Keep product concepts labeled pre-pilot/inactive until their release gates and accountable owners have real evidence.
- Preserve the safety boundary: MBO is model guidance; Land and local rules control; process-free is not requirement-free; structural/foundation and electrical/grid/MaStR decisions require qualified humans.

## Recheck trigger

Re-run this checklist whenever a customer-facing claim, commercial field, person/partner reference, evidence file, prototype copy, contract, source path, or publication surface changes.
