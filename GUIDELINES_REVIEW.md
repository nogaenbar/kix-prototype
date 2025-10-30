# KIX Guidelines Review & Recommendations

**Review Date:** 2025-01-XX  
**Reviewer:** AI Assistant (Cursor)  
**Purpose:** Identify conflicts between ChatGPT-written guidelines and actual codebase state

---

## ✅ **CONFIRMED ALIGNMENTS**

1. **TypeScript strict mode** ✅ - Already enabled (`tsconfig.json`: `"strict": true`)
2. **cva usage** ✅ - Already in use (`tabs.tsx`, `button.tsx` likely)
3. **Component structure** ✅ - Matches `src/components/ui/` pattern
4. **Tailwind utilities preferred** ✅ - Minimal `@apply` usage (only in base layer)
5. **Vitest + Testing Library** ✅ - Already configured

---

## ⚠️ **CONFLICTS & CLARIFICATIONS NEEDED**

### 1. **Tailwind Configuration - CRITICAL**

**Guidelines say:**
> "Only extend `tailwind.config` when a repeated value truly needs a semantic alias"

**Reality:**
- ❌ No `tailwind.config.js` exists in the project
- ✅ Project uses **Tailwind CSS v4** (CSS-based configuration)
- ✅ Configuration is via `@theme inline` in `src/styles/globals.css`

**Recommendation:**
```markdown
## 2) Tailwind usage (single vision, no tokens file)

- Prefer **utilities** over ad‑hoc inline styles.
- If a visual value repeats in ≥3 places, **extract a Tailwind plugin utility or `@apply` class** in `styles/` (but keep footprint small).
- Order classes for readability: `layout → spacing → size → typography → color → state → misc`.
- Use the **existing Tailwind theme**. The project uses Tailwind v4 with CSS-based configuration via `@theme inline` in `src/styles/globals.css`. To extend colors/spacing/radius, add them to `globals.css` under `@theme inline` rather than a separate config file.
- Do **not** add a separate token CSS layer.

**Avoid**
- Raw inline `style={{ ... }}` unless unavoidable (e.g., dynamic width animation).
- Hard‑coded hex scattered across files—prefer Tailwind theme/extended colors if repetition appears.
- Creating a `tailwind.config.js` file (this project uses Tailwind v4 CSS-based config).
```

---

### 2. **Design Tokens File - NEEDS CLARIFICATION**

**Guidelines say:**
> "Do **not** add a separate token CSS layer"

**Reality:**
- ✅ `src/styles/tokens.ts` exists (TypeScript helper, not CSS)
- ✅ Used for type-safe token access in components
- ✅ Complements `globals.css` CSS variables

**Recommendation:**
```markdown
## 2) Tailwind usage (single vision, no tokens file)

**Note on `src/styles/tokens.ts`:**
- This file is a **TypeScript helper** for type-safe token access, not a CSS layer.
- It exports CSS variable references from `globals.css`.
- It's acceptable and encouraged for type safety, but styling should still use Tailwind utilities or `@theme inline` extensions.
- Do **not** create additional CSS token layers beyond what's in `globals.css`.
```

---

### 3. **Storybook vs ComponentLibrary**

**Guidelines say:**
> "If possible, add a few Storybook stories for primitives... **only if it doesn't slow you down**."

**Reality:**
- ❌ Storybook is **not installed**
- ✅ Project has `ComponentLibrary.tsx` component (custom solution)
- ✅ This component serves the same purpose as Storybook

**Recommendation:**
```markdown
## 9) Testing & visual checks (lightweight)

- Basic route smoke tests (page mounts) are enough.
- The project uses a custom `ComponentLibrary` component (not Storybook) for component inspection and documentation.
- If needed, add components to `ComponentLibrary` for QA purposes—**only if it doesn't slow you down**.
- Manual visual check: compare to Figma at 1440px; spacing/radii/typography should match.
```

---

### 4. **Figma Links Documentation**

**Guidelines say:**
> "Keep `docs/figma-links.md` updated with the **three screen links**."

**Reality:**
- ❌ File does not exist
- ✅ Could be created or we could use existing docs structure

**Recommendation:**
```markdown
## 6) MCP + Figma usage

- Keep Figma links organized (consider creating `docs/figma-links.md` if it doesn't exist).
- When in doubt about spacing/typography, **inspect the screen frame** with MCP; copy measured values into Tailwind classes.
- Do **not** let MCP generate new structures if a `ui/` primitive or `components/` composition already exists—**map to what we have**.
```

**OR** create the file:

```markdown
# Figma Design Links

## Main Screens

### Dashboard
- Link: [TBD]

### Tickets Page
- Link: https://www.figma.com/design/04rBMxy8CfG5SX1pbOGL7D/Vision-UI-v1?node-id=16-15120

### Ticket Detail
- Link: [TBD]
```

---

### 5. **Data Test IDs**

**Guidelines say:**
> "Preserve data‑test hooks where present (`data-testid="..."`)."

**Reality:**
- ❌ No `data-testid` attributes found in codebase
- ✅ May not have been added yet

**Recommendation:**
```markdown
## 7) Refactor etiquette (we are cleaning without breaking)

- Make **small, reversible diffs**; one component/area at a time.
- If you extract a primitive, **replace one usage first**, verify parity, then apply elsewhere.
- Don't rename folders broadly in a single PR.
- Preserve data‑test hooks where present (`data-testid="..."`). If none exist yet, consider adding them for critical user flows during refactoring.
```

---

### 6. **Button Variant Naming**

**Guidelines mention:**
> `variant="primary|secondary|ghost"`

**Reality (from codebase):**
- ✅ Buttons use: `variant="filled|outlined|transparent"` (not `ghost`)
- ✅ IconButtons use: `variant="filled|outlined|transparent"`

**Recommendation:**
```markdown
## 4) Component guidelines (how to build reusable parts)

### Variants

- Use **simple variant props** (`variant="filled|outlined|transparent"` for buttons, `size="sm|md|lg"`, etc.).
- Keep APIs minimal and consistent across components (e.g., `Button`, `IconButton`).
- If variants explode, consider a small `cva` (class‑variance‑authority) setup—but only when needed.
```

---

### 7. **Component File Size**

**Guidelines say:**
> "Keep files small (aim ≤200–250 lines per component)."

**Reality:**
- Need to verify actual file sizes
- Some components may exceed this (e.g., `kix-data-table-new.tsx`)

**Recommendation:**
Keep as is, but add:
```markdown
- Keep files small (aim ≤200–250 lines per component).
- If a component exceeds this, consider splitting into sub-components or extracting helpers.
- **Exception:** Complex components like data tables may exceed this limit if splitting would hurt readability.
```

---

## 📝 **ADDITIONAL SUGGESTIONS**

### 8. **Add ComponentLibrary Reference**

**Add to Section 9:**

```markdown
## 9) Testing & visual checks (lightweight)

- Basic route smoke tests (page mounts) are enough.
- The project includes a custom `ComponentLibrary` component (`src/components/ComponentLibrary.tsx`) for component inspection and QA.
- When creating new `ui/` primitives, consider adding them to the ComponentLibrary for visual testing.
- Manual visual check: compare to Figma at 1440px; spacing/radii/typography should match.
```

---

### 9. **Clarify Inline Styles Exception**

**Current guidelines say:**
> "Avoid raw inline `style={{ ... }}` unless unavoidable"

**Add more specific examples:**

```markdown
**Avoid**
- Raw inline `style={{ ... }}` unless unavoidable (e.g., dynamic width animation, calculated heights like `calc(100vh - 84px)`).
- However, for React state-driven styles (e.g., hover states with complex logic), inline styles may be acceptable if Tailwind utilities become unwieldy.
```

---

### 10. **Path Aliases**

**Add note:**

```markdown
## 8) Code style & quality

- TypeScript strict mode on; prefer explicit types on component props.
- ESLint + Prettier; no `any` unless justified with a comment.
- Keep files small (aim ≤200–250 lines per component).
- Co‑locate tiny helpers (e.g., `formatDate.ts`) under `utils/`.
- Use path aliases: `@/` for `src/` (e.g., `import { Button } from '@/components/ui/button'`).
```

---

## ✅ **FINAL RECOMMENDATIONS**

### **High Priority Fixes:**

1. ✅ Clarify Tailwind v4 CSS-based config (no `tailwind.config.js`)
2. ✅ Clarify `tokens.ts` is TypeScript helper, not CSS layer
3. ✅ Update Storybook reference to ComponentLibrary
4. ✅ Fix button variant names (`filled|outlined|transparent`, not `ghost`)

### **Medium Priority:**

5. ✅ Create or clarify `docs/figma-links.md` requirement
6. ✅ Add ComponentLibrary reference to testing section
7. ✅ Clarify inline styles exceptions

### **Low Priority:**

8. ✅ Add path alias note
9. ✅ Clarify component file size exceptions

---

## 📋 **SUMMARY**

The guidelines are **90% accurate** but need these clarifications to match the actual codebase:

1. **Tailwind v4** uses CSS-based config, not JS config
2. **`tokens.ts`** is acceptable (TypeScript helper)
3. **ComponentLibrary** replaces Storybook
4. **Button variants** use `filled|outlined|transparent` (not `ghost`)

No breaking changes needed—just clarifications to prevent confusion.

