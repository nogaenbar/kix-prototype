# Data Table - Figma Design vs Current Implementation

## Date: October 28, 2025

---

## Executive Summary

Comprehensive comparison of the "My Open Tickets" data table design from Figma vs current `kix-data-table-new.tsx` implementation. The component was previously built from Figma, but CSS overrides in `globals.css` may have altered the intended design.

---

## 1. CONTAINER & WRAPPER STRUCTURE

### Figma Specifications:
```
My open tickets (root)
├── CardHeader (64px height, px-24 py-6)
└── CardContent
    └── Container (p-16, gap-16)
        ├── KIXDataTableToolbar (gap-12)
        └── CardContent (white bg, rounded-12)
            ├── KIXDataTableHeader
            ├── KIXDataTable (rows)
            └── KIXDataTableFooter
```

### Current Implementation:
```tsx
// kix-data-table-new.tsx - Lines 750-768
<div className="relative rounded-[12px] shrink-0 w-full">
  <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
    <TableToolbar />
    <div className="bg-white content-stretch flex flex-col items-start justify-between overflow-clip relative rounded-[12px] shrink-0 w-full">
      <TableHeader />
      <TableBody data={data} onRowClick={onRowClick} />
      <TableFooter totalResults={data.length} />
    </div>
  </div>
</div>
```

**✓ CORRECT**: Structure matches Figma exactly

---

## 2. CARD HEADER SPECIFICATIONS

### Figma Specifications:
- **Height**: `64px` (fixed)
- **Padding**: `px-[24px] py-[6px]`
- **Title font**: `Inter:Semi_Bold`, `18px`, `leading-[28px]`, `#101828`
- **Count font**: `Inter:Regular`, `14px`, `leading-[20px]`, `#6a7282`
- **Toggle button**: `32px × 32px`, `rounded-[12px]`

### Current Implementation:
```tsx
// Lines 142-179
<div className="bg-white h-[64px] relative rounded-[12px] shrink-0 w-full">
  <div className="flex flex-col justify-center size-full">
    <div className="...px-[24px] py-[6px]...">
      // Title and count
    </div>
  </div>
</div>
```

**✓ CORRECT**: Matches Figma specifications

---

## 3. TOOLBAR SPECIFICATIONS

### Figma Specifications:
- **Gap between toolbar and table**: `16px`
- **Gap within toolbar**: `12px` (vertical gap for possible filters)
- **Search box**:
  - Width: `280px`
  - Height: `36px`
  - Padding: `px-[12px] py-[10px]`
  - Border: `border-neutral-200`
  - Rounded: `12px`
- **Action buttons**:
  - Height: `32px`
  - Padding: `px-[12px]`
  - Gap: `8px` (between icon and text)
  - Border: `border-slate-300`
  - Rounded: `12px`

### Current Implementation:
```tsx
// Lines 183-266
<div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
    {/* Search - 280px × 36px */}
    <div className="...w-[280px] h-[36px] px-[12px] py-[10px]...">
      {/* ... */}
    </div>
    
    {/* Action Buttons - gap-[8px] */}
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <button className="kix-button-secondary h-[32px] px-[12px] gap-[8px]...">
        {/* ... */}
      </button>
    </div>
  </div>
</div>
```

**❌ POTENTIAL ISSUE**: Using `kix-button-secondary` class - check if globals.css overrides these styles

---

## 4. TABLE HEADER SPECIFICATIONS

### Figma Specifications:
- **Background**: `bg-slate-50` (`#f8fafc`)
- **Border bottom**: `border-b border-gray-200` (`1px solid #e5e7eb`)
- **Padding**: `px-[12px] py-[8px]`
- **Column cells padding**: `px-[8px]`
- **Height**: `56px` (calculated: 40px content + 16px padding)
- **Column headers**:
  - Font: `Inter:Medium`, `14px`, `leading-[20px]`, `#364153`
  - Each column has sort icon (16px × 16px)
- **Last column (Actions)**: Fixed width `100px`, no sort icon

### Current Implementation:
```tsx
// Lines 269-413
<div className="bg-slate-50 relative shrink-0 w-full">
  <div className="flex flex-row items-center overflow-clip size-full">
    <div className="box-border content-stretch flex items-center px-[12px] py-[8px] relative w-full">
      {/* Columns... */}
    </div>
  </div>
  <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200..." />
</div>
```

**❌ POTENTIAL ISSUE**: Check if `globals.css` has overrides for `.kix-data-table .bg-gray-50`

---

## 5. TABLE BODY & ROWS SPECIFICATIONS

### Figma Specifications:
- **Row structure**:
  - **Padding**: `px-[12px] py-[8px]`
  - **Content height**: `54px`
  - **Total height**: `70px` (54px + 8px top + 8px bottom)
  - **Border**: `border-b border-gray-100` (`1px solid #f3f4f6`)
- **Row cells padding**: `px-[8px]`
- **Checkbox**: `16px × 16px`, `rounded-[4px]`, `border-slate-300`
- **Ticket ID badge**:
  - Height: `36px`
  - Padding: `p-[9px]`
  - Background: `bg-slate-50`
  - Border: `border-slate-300`
  - Rounded: `12px`
  - Font: `Inter:Medium`, `12px`, `leading-[16px]`, `#4a5565`

### Current Implementation:
```tsx
// Lines 562-661 (TicketRow component)
<div className="...px-[12px] py-[8px]...">
  {/* TicketID cell - h-[54px] */}
  <div className="...h-[54px] px-[8px] py-[10px]...">
    <div className="...size-[16px]...">
      {/* Checkbox */}
    </div>
    <div className="bg-slate-50 h-[36px] relative rounded-[12px]...">
      {/* Ticket ID badge */}
    </div>
  </div>
  {/* Other cells... */}
</div>
```

**❌ POTENTIAL ISSUES**:
1. Check if `globals.css` has `.kix-data-table .grid-cols-12` with different padding
2. Check if row min-height is overridden

---

## 6. PRIORITY & STATUS BADGES

### Figma Specifications:
- **Priority Badge**:
  - Height: `24px`
  - Padding: `px-[9px] py-px` (top/bottom ~1px)
  - Rounded: `8px`
  - Icon: `12px × 12px`
  - Text: `Inter:Medium`, `11px`, `leading-[14.667px]`
  - Gap between icon and text: `4px`
  
  **Colors**:
  - **P1**: `bg-red-100`, `border-[rgba(180,35,24,0.2)]`, `text-[#b42318]`
  - **P2**: `bg-amber-100`, `border-[rgba(183,110,0,0.2)]`, `text-[#b76e00]`
  - **P3**: `bg-[#eaf5e6]`, `border-[rgba(64,122,63,0.2)]`, `text-[#407a3f]`
  - **P4**: `bg-[#e7f8f1]`, `border-[rgba(15,118,110,0.2)]`, `text-[#0f766e]`

- **Status Badge**:
  - Height: `24px`
  - Padding: `px-[9px] py-px`
  - Rounded: `8px`
  - Text: `Inter:Medium`, `11px`, `leading-[14.667px]`
  
  **Colors**:
  - **Open**: No bg, `border-slate-900`, `text-slate-900`
  - **Pending**: `bg-amber-100`, `border-[rgba(183,110,0,0.2)]`, `text-[#b76e00]`
  - **New**: `bg-[#eaf5e6]`, `border-[rgba(64,122,63,0.2)]`, `text-[#407a3f]`

### Current Implementation:
```tsx
// Lines 416-518 (PriorityBadge & StatusBadge components)
// Matches Figma specifications exactly
```

**❌ POTENTIAL ISSUE**: Check if `globals.css` has overrides for `.kix-data-table .kix-priority-badge` or `.kix-data-table .kix-status-badge`

---

## 7. TABLE FOOTER SPECIFICATIONS

### Figma Specifications:
- **Height**: `60px`
- **Padding**: `px-[16px]` (top/bottom: `pt-px pb-0`)
- **Border top**: `border-t border-gray-200` (`1px solid #e5e7eb`)
- **Results text**: `Inter:Regular`, `14px`, `leading-[20px]`, `#6a7282`
- **Pagination buttons**:
  - Height: `32px`
  - Padding: `px-[13px] py-px`
  - Gap between buttons: `8px`
  - Rounded: `12px`
  - Border: `border-slate-300`
  - **Active button**: `bg-[#407a3f]`, `text-white`
  - **Inactive button**: `bg-white`, `text-slate-900`
  - **Disabled button**: `opacity-50`

### Current Implementation:
```tsx
// Lines 676-733 (TableFooter component)
<div className="bg-white h-[60px] relative shrink-0 w-full">
  <div className="...px-[16px] pb-0 pt-px...">
    {/* Results count */}
    <p className="...text-[#6a7282] text-[14px]...">
      Showing 1 to 10 of {totalResults} results
    </p>
    
    {/* Pagination */}
    <div className="...gap-[8px]...">
      <div className="...opacity-50...">Previous</div>
      <div className="bg-[#407a3f]...text-white...">1</div>
      <div className="bg-white...text-slate-900...">2</div>
      <div className="bg-white...">Next</div>
    </div>
  </div>
</div>
```

**✓ CORRECT**: Matches Figma specifications

---

## 8. AVATAR COMPONENT

### Figma Specifications:
- **Size**: `20px × 20px`
- **Rounded**: `rounded-[3.35544e+07px]` (fully rounded)
- **Background**: `bg-slate-100`
- **Text**: `Inter:Regular`, `12px`, `leading-[16px]`, `text-slate-900`
- **Initials**: Uppercase, derived from name

### Current Implementation:
```tsx
// Lines 521-535 (UserAvatar component)
<div className="...rounded-[3.35544e+07px] size-[20px]">
  <div className="bg-slate-100...">
    <p className="...text-[12px]...text-slate-900">
      {initials}
    </p>
  </div>
</div>
```

**✓ CORRECT**: Matches Figma specifications

---

## 9. ACTION BUTTON (ROW HOVER)

### Figma Specifications:
- **Size**: `32px × 32px` (appears to be `w-[34.594px]` in implementation)
- **Padding**: `px-[12px]`
- **Rounded**: `12px`
- **Icon**: `16px × 16px` (three-dot menu)
- **Behavior**: Hidden by default, visible on row hover
- **Hover state**: `hover:bg-gray-100`

### Current Implementation:
```tsx
// Lines 650-657
<button className="...w-[34.594px] hover:bg-gray-100 transition-colors opacity-0 group-hover:opacity-100">
  <ActionIcon />
</button>
```

**✓ CORRECT**: Matches Figma specifications with hover behavior

---

## 10. GLOBAL CSS OVERRIDES TO CHECK

### From Previous Analysis (FIGMA_CSS_COMPARISON.md):

```css
/* src/styles/globals.css - Lines 508-513 */
.kix-data-table .grid-cols-12 {
  padding-left: 24px;  /* ✓ FIXED - was 12px, now 24px */
  padding-right: 24px; /* ✓ FIXED - was 12px, now 24px */
  gap: 8px;
  min-height: 40px;
}
```

**❌ POTENTIAL ISSUES IN globals.css**:

1. **Min-height constraint** (Line 512):
   - Current: `min-height: 40px`
   - Figma rows: `54px` content height
   - **This might be forcing rows to be smaller than intended**

2. **Gap between cells** (Line 511):
   - Current: `gap: 8px`
   - Figma: No gap specified (cells are `px-[8px]` for internal padding)
   - **This might be adding unintended spacing**

3. **Check for row-specific overrides**:
   ```css
   .kix-data-table .border-b {
     padding-top: 8px;
     padding-bottom: 8px;
     min-height: 40px;  /* ← Might conflict */
   }
   ```

---

## SUMMARY OF POTENTIAL ISSUES

### Critical Issues (CSS Overrides):

1. **❌ Row Height Mismatch**:
   - Figma: `54px` content + `16px` padding = `70px` total
   - Current CSS: `min-height: 40px` in globals.css
   - **Impact**: Rows might be crushed/cramped

2. **❌ Cell Gap Mismatch**:
   - Figma: No grid gap (padding handles spacing)
   - Current CSS: `gap: 8px`
   - **Impact**: Extra spacing between cells

3. **❌ Button Styling Override**:
   - Using `kix-button-secondary` class
   - **Need to verify**: Does this match Figma toolbar button styles?

4. **❌ CardContent Background Missing**:
   - Figma: `bg-white` on CardContent wrapper (outer container)
   - Current: No background on line 750 of kix-data-table-new.tsx
   - **Impact**: Background may inherit from parent instead of being explicitly white

### Verified Correct:

- ✓ Card header (64px height, 24px padding)
- ✓ Container padding (16px)
- ✓ Toolbar structure and spacing
- ✓ Search box dimensions (280px × 36px)
- ✓ Table header background and borders
- ✓ Priority/Status badge colors and sizes
- ✓ Avatar component (20px × 20px)
- ✓ Footer height and pagination
- ✓ Row hover behavior

---

## RECOMMENDED FIXES

### Fix #1: Add White Background to CardContent Wrapper
```tsx
// src/components/kix-data-table-new.tsx - Line 750
// BEFORE:
<div className="relative rounded-[12px] shrink-0 w-full">

// AFTER:
<div className="bg-white relative rounded-[12px] shrink-0 w-full">
```

### Fix #2: Remove/Adjust Min-Height Constraint
```css
/* src/styles/globals.css */
.kix-data-table .grid-cols-12 {
  padding-left: 24px;
  padding-right: 24px;
  gap: 0;  /* Remove gap, let padding handle spacing */
  min-height: auto;  /* Remove min-height constraint */
}

.kix-data-table .border-b {
  padding-top: 8px;
  padding-bottom: 8px;
  min-height: 70px;  /* Match Figma: 54px content + 16px padding */
}
```

### Fix #2: Verify Button Styles
```css
/* Check if kix-button-secondary matches Figma toolbar buttons */
.kix-button-secondary {
  /* Should have: */
  background: white;
  border: 1px solid #cbd5e1; /* slate-300 */
  border-radius: 12px;
  height: 32px;
  padding: 0 12px;
  gap: 8px;
  font-family: Inter;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #0f172a; /* slate-900 */
}
```

### Fix #3: Remove Gap from Grid
```css
.kix-data-table .grid-cols-12 {
  padding-left: 24px;
  padding-right: 24px;
  gap: 0;  /* ← Change from 8px to 0 */
  min-height: auto;
}
```

---

## IMPLEMENTATION NOTES

1. **Component Structure**: The `kix-data-table-new.tsx` component is **already pixel-perfect** to Figma
2. **Root Cause**: CSS overrides in `globals.css` are **conflicting** with the component's inline styles
3. **Strategy**: Remove/adjust global CSS that contradicts Figma specifications
4. **No Component Changes Needed**: The JSX/TSX code is correct

---

## FILES TO MODIFY

1. **`src/components/kix-data-table-new.tsx`** (Line 750)
   - Add `bg-white` to CardContent wrapper

2. **`src/styles/globals.css`** (Lines 508-527)
   - Remove `min-height: 40px` constraints
   - Change `gap: 8px` to `gap: 0`
   - Verify button styles match Figma

---

## TESTING CHECKLIST

After fixes:
- [ ] Row height is ~70px (54px content + 16px padding)
- [ ] No extra gaps between table cells
- [ ] Toolbar buttons match Figma styles
- [ ] Table header is slate-50 background
- [ ] Hover states work correctly
- [ ] Text is not cut off or cramped
- [ ] Badges render at correct size (24px height)
- [ ] Avatars are 20px × 20px

