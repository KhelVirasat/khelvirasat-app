# <Game Name> — Game Spec

<!--
HOW TO USE THIS TEMPLATE
- Copy to docs/specs/<game>.md (lowercase, hyphens: chowka-bhara.md).
- Fill every section. Write "None" instead of deleting a section.
- Rules are the contract: the rules engine and the tests are written from section 5.
- Tag every rule with its source: [ORIGINAL] documented/traditional,
  [REGIONAL:<name>] a documented regional version, [DIGITAL] our app's addition.
- Never describe a [DIGITAL] rule as historical.
- If sources disagree, say so in section 10. Do not pick silently.
- Delete these comment blocks once the spec is filled.
-->

| Field | Value |
|---|---|
| Spec status | Draft / In review / Approved |
| Spec owner | |
| Last updated | YYYY-MM-DD |
| Rule set implemented | Original-based baseline: <which regional version> |
| Sources | <list with links/citations; mark reliability> |

---

## 1. Identity

- **Name (as used in the app):**
- **Regional / alternative names:** (name — region/language)
- **Region / state associated:**
- **Players:** min–max
- **Typical session length:**
- **One-line description:** (plain language, for a first-time player)

## 2. Components

### Board / playing area
<!-- Dimensions, number of cells/points, special cells (safe squares, home, etc.). Add a diagram or coordinate scheme; tests will use it. -->

### Pieces
<!-- Count per player, how they differ (if at all), how they are identified. -->

### Randomizer
<!-- Dice / cowries / sticks / none. Number of items, possible outcomes, value of each outcome, and probabilities if relevant. -->

## 3. Setup

<!-- Exact starting state. Be precise enough to write a test that asserts it. -->
- Board state at start:
- Pieces per player and their starting positions:
- Who moves first and how that is decided:
- Any starting resources/scores:

## 4. Turn flow

<!-- Numbered, in order. Each step may reference rules from section 5. -->
1.
2.
3.

## 5. Rules

<!-- One rule per line. IDs are permanent: never reuse or renumber a rule after tests exist; mark retired rules as "R7 (removed)". -->

| ID | Rule | Tag |
|---|---|---|
| R1 | | [ORIGINAL] |
| R2 | | [ORIGINAL] |
| R3 | | [REGIONAL:...] |

## 6. Edge cases

<!-- Each edge case should cite the rule(s) it clarifies, or add a new rule above. -->

| ID | Situation | Outcome | Rules |
|---|---|---|---|
| E1 | Tie | | |
| E2 | Blocked move | | |
| E3 | No legal move available | | |
| E4 | Exact roll required (overshoot) | | |
| E5 | | | |

## 7. Winning and ending conditions

- **Win:**
- **Draw / stalemate (if possible):**
- **Early end / resignation / timeout (digital only, tag [DIGITAL]):**
- **How the final score or ranking is determined:**

## 8. Variants (optional, OFF by default)

<!-- Documented regional or alternative rules. Each is a toggle; default game uses none. -->

| Variant | Region / source | What changes (rule IDs affected) | Default |
|---|---|---|---|
| | | | Off |

## 9. Digital differences

<!-- Every change from the original, each with a reason. If a change is not listed here, it must not exist in the code. -->

| ID | Original behavior | Digital behavior | Reason | Affects rules |
|---|---|---|---|---|
| D1 | | | | |

## 10. Open questions

<!-- Anything unresolved: conflicting sources, unclear rules, undecided digital choices. -->

| ID | Question | Why it matters | Owner | Due | Status |
|---|---|---|---|---|---|
| Q1 | | | | | Open |
