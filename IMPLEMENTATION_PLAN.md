# KIX Guidelines Implementation Plan

**Created:** 2025-01-XX  
**Status:** Ready for Review  
**Purpose:** Align codebase with `notes.md` guidelines through systematic improvements

---

## 📊 Current State Assessment

### ✅ **Already Compliant**

- ✅ TypeScript strict mode enabled
- ✅ Tailwind utilities preferred (minimal `@apply`)
- ✅ `cva` already in use (`tabs.tsx`, `button.tsx`)
- ✅ ComponentLibrary exists (replaces Storybook)
- ✅ 39 `aria-label` instances found (good accessibility coverage)
- ✅ Path aliases configured (`@/` for `src/`)

### ⚠️ **Needs Work**

1. **Inline Styles** - 50 instances found across 24 files
2. **Scattered Hex Colors** - 10 files with hard-coded hex values
3. **Large Components** - 5 components exceed 250-line guideline
4. **Relative Imports** - 4 files use relative imports instead of `@/` aliases
5. **Missing Figma Links Doc** - `docs/figma-links.md` doesn't exist

---

## 🎯 Implementation Plan

### **Phase 1: Quick Wins (1-2 hours)**

#### 1.1 Create Figma Links Documentation
**Priority:** Low  
**Effort:** 15 minutes  
**Action:**
- Create `docs/figma-links.md` with all three screen links
- Update as we reference Figma designs

**Files:**
- `docs/figma-links.md` (new)

---

#### 1.2 Fix Relative Imports
**Priority:** Medium  
**Effort:** 30 minutes  
**Action:**
- Replace relative imports with `@/` path aliases
- Ensure consistency across codebase

**Files to Update:**
- `src/components/kix-data-table-new.tsx`
- `src/components/kix-side-nav.tsx`
- `src/tests/App.test.tsx`
- `src/tests/ErrorBoundary.test.tsx`

**Example:**
```tsx
// Before
import { Button } from "./ui/button";

// After
import { Button } from "@/components/ui/button";
```

---

### **Phase 2: Component Size Review (2-3 hours)**

#### 2.1 Audit Large Components
**Priority:** Medium  
**Effort:** 1-2 hours  
**Action:**
- Review components exceeding 250 lines
- Identify extraction opportunities
- Document exceptions

**Components to Review:**

1. **ComponentLibrary.tsx** (1468 lines)
   - ✅ **Exception:** Demo/library component - acceptable to exceed
   - **Action:** Document as exception

2. **kix-ticket-detail.tsx** (1041 lines)
   - ⚠️ **Needs Review:** Consider splitting into sub-components
   - **Potential splits:**
     - `TicketDetailHeader` (sticky header with actions)
     - `TicketDetailConversation` (conversation threads)
     - `TicketDetailRightRail` (modules on right)
   - **Action:** Plan refactor in Phase 3

3. **kix-side-nav.tsx** (845 lines)
   - ⚠️ **Needs Review:** Consider extracting nav items logic
   - **Potential splits:**
     - `SideNavItem` component
     - `SideNavSection` component
     - Navigation logic to `utils/navigation.ts`
   - **Action:** Plan refactor in Phase 3

4. **kix-data-table-new.tsx** (734 lines)
   - ✅ **Exception:** Complex table component - acceptable to exceed
   - **Action:** Document as exception

5. **ButtonDemo.tsx** (497 lines)
   - ✅ **Exception:** Demo component - acceptable to exceed
   - **Action:** Document as exception

**Deliverable:**
- List of components to refactor
- Extraction plan for each

---

### **Phase 3: Style Cleanup (3-4 hours)**

#### 3.1 Audit Inline Styles
**Priority:** High  
**Effort:** 2-3 hours  
**Action:**
- Review all 50 inline style instances
- Categorize:
  - ✅ Acceptable (dynamic calculations, complex state)
  - ⚠️ Should migrate to Tailwind utilities
  - ⚠️ Should migrate to CSS variables + Tailwind

**Files with Most Inline Styles:**
- `src/components/kix-search-expandable.tsx` (5 instances)
- `src/components/kix-data-table-new.tsx` (3 instances)
- `src/components/kix-filter-tree.tsx` (3 instances)
- `src/components/ComponentLibrary.tsx` (2 instances)

**Migration Strategy:**
1. Identify repeated patterns
2. Extract to Tailwind utilities or `@theme inline` extensions
3. Update components one by one
4. Verify visual parity

**Example Migration:**
```tsx
// Before
style={{ height: 'calc(100vh - 84px - 24px)' }}

// After (if repeated ≥3 times)
// Add to globals.css under @theme inline:
// --container-height: calc(100vh - 84px - 24px);
className="h-[calc(100vh-84px-24px)]"

// Or if truly dynamic:
style={{ height: dynamicHeight }} // ✅ Acceptable
```

---

#### 3.2 Migrate Scattered Hex Colors
**Priority:** High  
**Effort:** 1-2 hours  
**Action:**
- Find all hard-coded hex colors
- Check if they exist in `globals.css` CSS variables
- If yes: Replace with Tailwind utilities
- If no: Add to `globals.css` under `@theme inline`, then use Tailwind

**Files with Hex Colors:**
- `src/components/kix-data-table-new.tsx`
- `src/styles/tokens.ts` (acceptable - defines tokens)
- `src/styles/globals.css` (acceptable - defines tokens)
- `src/components/ui/tabs.tsx`
- `src/components/ui/input.tsx`
- `src/components/ui/icon-button.tsx`
- `src/components/ui/button.tsx`
- `src/components/kix-tickets-page-header.tsx`
- `src/components/kix-priority-badge.tsx`
- `src/components/kix-kpi-tile.tsx`

**Migration Strategy:**
1. Create a checklist of all hex values found
2. Match to existing CSS variables
3. Replace with Tailwind utilities
4. For unmatched colors, evaluate if they should be added to theme

**Example:**
```tsx
// Before
className="bg-[#407a3f]"

// After
className="bg-primary" // or bg-[var(--primary-700)]
```

---

### **Phase 4: Accessibility Improvements (1-2 hours)**

#### 4.1 Audit Missing aria-labels
**Priority:** Medium  
**Effort:** 1 hour  
**Action:**
- Find all icon-only buttons
- Verify they have `aria-label`
- Add missing labels

**Files to Check:**
- All icon button usages
- Navigation items
- Action buttons

---

#### 4.2 Focus Styles Audit
**Priority:** Medium  
**Effort:** 30 minutes  
**Action:**
- Verify all interactive elements have focus styles
- Ensure consistency using Tailwind `focus-visible:` utilities

---

### **Phase 5: Component Refactoring (4-6 hours)**

#### 5.1 Split kix-ticket-detail.tsx
**Priority:** Medium  
**Effort:** 3-4 hours  
**Action:**
- Extract `TicketDetailHeader` component
- Extract `TicketDetailConversation` component
- Extract `TicketDetailRightRail` component
- Keep main component as orchestrator

**Deliverable:**
- 3-4 new component files
- Main component < 250 lines

---

#### 5.2 Split kix-side-nav.tsx
**Priority:** Medium  
**Effort:** 2-3 hours  
**Action:**
- Extract `SideNavItem` component
- Extract `SideNavSection` component
- Move navigation logic to `utils/navigation.ts`
- Keep main component as orchestrator

**Deliverable:**
- 2-3 new component files
- 1 utility file
- Main component < 250 lines

---

## 📋 Implementation Checklist

### **Phase 1: Quick Wins**
- [ ] Create `docs/figma-links.md`
- [ ] Fix relative imports in 4 files
- [ ] Verify path aliases work correctly

### **Phase 2: Component Size Review**
- [ ] Document exceptions (ComponentLibrary, ButtonDemo, kix-data-table-new)
- [ ] Create refactor plan for kix-ticket-detail.tsx
- [ ] Create refactor plan for kix-side-nav.tsx

### **Phase 3: Style Cleanup**
- [ ] Audit all 50 inline styles
- [ ] Categorize (acceptable vs migrate)
- [ ] Migrate acceptable cases to Tailwind
- [ ] Audit all hex colors
- [ ] Replace with Tailwind utilities
- [ ] Add missing colors to `@theme inline` if needed

### **Phase 4: Accessibility**
- [ ] Audit icon-only buttons for aria-labels
- [ ] Add missing labels
- [ ] Verify focus styles on all interactive elements

### **Phase 5: Component Refactoring**
- [ ] Split kix-ticket-detail.tsx into sub-components
- [ ] Split kix-side-nav.tsx into sub-components
- [ ] Verify all components < 250 lines (except exceptions)

---

## 🎯 Success Criteria

After implementation, the codebase should:

1. ✅ **Compliance:**
   - No inline styles unless justified (dynamic/state-driven)
   - No scattered hex colors (use Tailwind utilities)
   - Components < 250 lines (except documented exceptions)
   - All imports use `@/` path aliases
   - Figma links documented

2. ✅ **Quality:**
   - Visual parity maintained (±1px)
   - No regressions in interactions
   - Accessibility maintained/improved
   - Code is cleaner and more reusable

3. ✅ **Documentation:**
   - Exceptions documented
   - Refactor plans documented
   - Figma links maintained

---

## 🚀 Getting Started

**Recommended Order:**
1. Start with Phase 1 (quick wins) - builds momentum
2. Move to Phase 3 (style cleanup) - high impact, visible improvements
3. Then Phase 4 (accessibility) - important but lower priority
4. Finally Phase 5 (refactoring) - requires more careful planning

**For Each Phase:**
- Create a branch: `guidelines/phase-1-quick-wins`
- Make small, focused commits
- Test visually after each change
- Verify no regressions

---

## 📝 Notes

- **Exceptions are OK:** Some components (demos, complex tables) legitimately exceed 250 lines
- **Visual parity is critical:** Every change must preserve Figma accuracy
- **Small steps:** Make incremental improvements, don't rewrite everything at once
- **Document as you go:** Update this plan with actual findings and decisions

