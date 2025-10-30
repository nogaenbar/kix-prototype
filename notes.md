# KIX – Cursor Guidelines (UI Vision Prototype)

> Purpose: keep the current UI/UX **pixel-accurate** to Figma while we progressively turn the code into clean, reusable React + Tailwind components suitable for user testing, PoC, and future handoff.  

> This is not production code, but it **must** follow best practices and be easy to inspect and extend.

---

## 1) Project goals

1) **Pixel‑perfect prototype** of three screens (Dashboard → Tickets → Ticket Detail), faithful to the Figma reference.  

2) **Quality code, no spaghetti**: small, composable React components, TypeScript, Tailwind utilities; simple, predictable state.  

3) **Seed of a design system**: extract repeat UI into reusable components with variants so FE devs can inspect props/behaviors and mirror them later.

**Non‑negotiables**

- Do **not** change visuals, copy, layout, or interactions unless explicitly asked.  

- Do **not** introduce theming or new color systems.  

- Every change must preserve visual parity (±1px tolerance).

 ---

## 2) Tailwind usage (single vision, CSS-based config)

- Prefer **utilities** over ad‑hoc inline styles.  

- If a visual value repeats in ≥3 places, **extract a Tailwind plugin utility or `@apply` class** in `styles/` (but keep footprint small).  

- Order classes for readability: `layout → spacing → size → typography → color → state → misc`.  

- Use the **existing Tailwind theme**. The project uses Tailwind v4 with CSS-based configuration via `@theme inline` in `src/styles/globals.css`. To extend colors/spacing/radius, add them to `globals.css` under `@theme inline` rather than a separate config file. Do **not** create a `tailwind.config.js` file.

**Note on `src/styles/tokens.ts`:**
- This file is a **TypeScript helper** for type-safe token access, not a CSS layer.
- It exports CSS variable references from `globals.css`.
- It's acceptable and encouraged for type safety, but styling should still use Tailwind utilities or `@theme inline` extensions.
- Do **not** create additional CSS token layers beyond what's in `globals.css`.

**Avoid**

- Raw inline `style={{ ... }}` unless unavoidable (e.g., dynamic width animation, calculated heights like `calc(100vh - 84px)`).
- However, for React state-driven styles (e.g., hover states with complex logic), inline styles may be acceptable if Tailwind utilities become unwieldy.
- Hard‑coded hex scattered across files—prefer Tailwind theme/extended colors if repetition appears.

---

## 3) Component guidelines (how to build reusable parts)

### Variants

- Use **simple variant props** (`variant="filled|outlined|transparent"` for buttons, `size="sm|md|lg"`, etc.).
- Keep APIs minimal and consistent across components (e.g., `Button`, `IconButton`).
- If variants explode, consider a small `cva` (class‑variance‑authority) setup—but only when needed.

### Accessibility

- **Icon‑only** controls must have `aria-label`.  

- Provide visible **focus styles** (use Tailwind's `focus-visible:` utilities consistently).  

- Primary control targets **≥44×44px**; minor icons **≥24×24px**.  

- Use semantic roles (`menu`, `menuitem`, `tablist`, `radiogroup`) as appropriate.

### Props & Composition

- Prefer **children** + small props over deep prop trees.  

- Don't bake data fetching into UI components—pages/compositions pass data in.  

- Keep components **controlled** where appropriate (e.g., SegmentedControl value/ onChange).

---

## 4) Pages: invariants & interactions (do not change)

**Dashboard**

- Card hierarchy: KPIs → charts → 3 compact tables (My Open, New, My Teams).  

- Tables fit **inside** card width (no horizontal scroll); subject truncates with ellipsis; toolbar: Last 30 days | Priority | Filter | Sort | Export CSV.  

**Tickets**

- Tab bar with counts (All, My, Watched, Locked, Team, Unassigned) appear **only here**, not on Dashboard.  

- Left Teams rail; central table with search/sort/pagination; row click navigates to detail.

**Ticket Detail**

- **Sticky header** with: title + ID, meta chips (Status/Priority/SLA), status control **Open/Pending/Closed**, and actions (Reply, Assign, Merge, Link, Watch, More).  

- **Conversation**: single filter bar (All/External/Internal/Unread with counts), search, date sort; pinned composer (External reply / Internal note).  

- **Right rail**: compact modules (Contact, Interaction history, Contact's assets, Linked tickets, Suggested knowledge & FAQ, Subtasks) → "View all (N)" opens drawer.  

- **Status** changes update chips immediately (optimistic UI), display toast, and disable composer when Closed.

---

## 5) MCP + Figma usage

- Keep Figma links organized (consider creating `docs/figma-links.md` if it doesn't exist).
- When in doubt about spacing/typography, **inspect the screen frame** with MCP; copy measured values into Tailwind classes.  

- Do **not** let MCP generate new structures if a `ui/` primitive or `components/` composition already exists—**map to what we have**.

---

## 6) Refactor etiquette (we are cleaning without breaking)

- Make **small, reversible diffs**; one component/area at a time.  

- If you extract a primitive, **replace one usage first**, verify parity, then apply elsewhere.  

- Don't rename folders broadly in a single PR.  

- Preserve data‑test hooks where present (`data-testid="..."`). If none exist yet, consider adding them for critical user flows during refactoring.

---

## 7) Code style & quality

- TypeScript strict mode on; prefer explicit types on component props.  

- ESLint + Prettier; no `any` unless justified with a comment.  

- Keep files small (aim ≤200–250 lines per component).
- If a component exceeds this, consider splitting into sub-components or extracting helpers.
- **Exception:** Complex components like data tables may exceed this limit if splitting would hurt readability.

- Co‑locate tiny helpers (e.g., `formatDate.ts`) under `utils/`.

- Use path aliases: `@/` for `src/` (e.g., `import { Button } from '@/components/ui/button'`).

---

## 8) Testing & visual checks (lightweight)

- Basic route smoke tests (page mounts) are enough.  

- The project includes a custom `ComponentLibrary` component (`src/components/ComponentLibrary.tsx`) for component inspection and QA.
- When creating new `ui/` primitives, consider adding them to the ComponentLibrary for visual testing.

- Manual visual check: compare to Figma at 1440px; spacing/radii/typography should match.

---

## 9) Do / Don't quick checklist

**Do**

- Keep the UI pixel‑accurate to Figma.  

- Extract repeated UI into `ui/` primitives with clean props.  

- Use Tailwind utilities; extend theme sparingly for repeated values via `@theme inline` in `globals.css`.  

- Ensure a11y: focus rings, aria labels, hit sizes.  

- Keep interactions identical (tables, status control, conversation menus, right-rail behavior).

**Don't**

- Reorganize IA or change copy.  

- Introduce theming or token CSS layers beyond `globals.css`.  

- Create a `tailwind.config.js` file (project uses Tailwind v4 CSS-based config).

- Rewrite large files in one shot.  

- Remove existing classes/ids without checking all usages.

---

## 10) Acceptance (for any change)

- Visual parity holds (±1px).  

- No regressions in interactions.  

- Component uses Tailwind utilities and/or limited theme extensions via `@theme inline` (no scattered hex).  

- Accessibility maintained (focus, labels, sizes).  

- Code is smaller/clearer and more reusable than before.

