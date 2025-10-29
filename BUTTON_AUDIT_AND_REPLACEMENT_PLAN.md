# Button Audit & Replacement Plan

## 🔍 Current State Analysis

Based on codebase scan, here's what we found:

---

## 📊 Button Usage Summary

### Current Implementation Methods:

1. **Button Component with `kix-button-*` classes** (3 files)
   - `src/App.tsx`
   - `src/components/kix-header.tsx`
   - `src/components/kix-ticket-detail.tsx`

2. **Plain `<button>` with `kix-button-*` classes** (1 file)
   - `src/components/kix-data-table-new.tsx` (5 instances)

3. **Button Component usage in other files** (32 additional files)
   - Various imports and components

---

## 🎯 Priority Files for Replacement

### **High Priority** (Currently using `kix-button-*` classes)

#### 1. `src/App.tsx`
**Current:**
```tsx
<Button className="kix-button-primary">
  <Plus size={16} className="mr-2" />
  New Ticket
  <ChevronDown size={16} className="ml-2" />
</Button>
```

**Replace With:**
```tsx
<Button variant="filled" size="md">
  <Plus />
  New Ticket
  <ChevronDown />
</Button>
```

**Impact:** Dashboard header "New Ticket" CTA
**Risk:** Low (single button, highly visible)

---

#### 2. `src/components/kix-data-table-new.tsx` (5 instances)
**Current:**
```tsx
<button className="kix-button-secondary h-[32px] px-[12px] gap-[8px] rounded-[12px] flex items-center justify-center">
  <Calendar size={16} />
  <span className="text-[14px] font-medium leading-none">Last 30 days</span>
  <ChevronDown size={16} />
</button>
```

**Replace With:**
```tsx
<Button variant="outlined" size="md">
  <Calendar />
  Last 30 days
  <ChevronDown />
</Button>
```

**Instances to replace:**
1. Line ~199: "Last 30 days" button
2. Line ~211: "Priority" button  
3. Line ~223: "Filter" button
4. Line ~235: "Sort" button
5. Line ~250: "Export CSV" button

**Impact:** Table toolbar buttons across all data tables
**Risk:** Medium (multiple tables, frequently used)

---

#### 3. `src/components/kix-header.tsx`
**Current:**
```tsx
<Button className="kix-button-primary rounded-l-md rounded-r-none">
  <Search size={16} />
</Button>
```

**Replace With:**
```tsx
<Button variant="filled" size="md" className="rounded-l-md rounded-r-none">
  <Search />
</Button>
```

**Impact:** Header search button (if used)
**Risk:** Low

---

#### 4. `src/components/kix-ticket-detail.tsx` (2 instances)
**Current:**
```tsx
// Instance 1 (line ~245)
<Button className="kix-button-primary h-9 px-4 gap-2">
  <Plus size={16} />
  Add Comment
</Button>

// Instance 2 (line ~660)
<Button className="kix-button-primary h-8 px-4 gap-2">
  <Plus size={16} />
  Add Item
</Button>
```

**Replace With:**
```tsx
// Instance 1
<Button variant="filled" size="lg">
  <Plus />
  Add Comment
</Button>

// Instance 2
<Button variant="filled" size="md">
  <Plus />
  Add Item
</Button>
```

**Impact:** Ticket detail action buttons
**Risk:** Low

---

### **Medium Priority** (Other Button Component usage)

These files use `<Button>` but may not be using `kix-button-*` classes. Review each to ensure consistency:

- `src/components/kix-work-tabs.tsx`
- `src/components/kix-tickets-page-header.tsx`
- `src/components/kix-search-expandable.tsx`
- `src/components/kix-page-header.tsx`
- `src/components/kix-data-table-toolbar.tsx`
- `src/components/kix-top-bar.tsx`
- `src/components/kix-ticket-views-tabs.tsx`
- `src/components/kix-sidebar-panel.tsx`
- `src/components/kix-side-nav.tsx`
- `src/components/kix-filter-tree.tsx`
- `src/components/kix-folders-drawer.tsx`
- `src/components/ErrorBoundary.tsx`

---

## 🔧 Replacement Strategy

### Step 1: Replace High-Priority Files (Manual)
Start with the files that explicitly use `kix-button-*` classes:

1. ✅ `src/App.tsx` - 1 button
2. ✅ `src/components/kix-data-table-new.tsx` - 5 buttons
3. ✅ `src/components/kix-header.tsx` - 1 button
4. ✅ `src/components/kix-ticket-detail.tsx` - 2 buttons

**Total:** 9 critical buttons

### Step 2: Remove Icon Size Props
The new Button component automatically sizes icons based on button size.

**Before:**
```tsx
<Plus size={16} />
<Calendar size={16} />
```

**After:**
```tsx
<Plus />
<Calendar />
```

### Step 3: Remove Custom Height/Padding
The new Button component handles these automatically.

**Remove these:**
- `h-[32px]`
- `h-8`, `h-9`, `h-10`
- `px-[12px]`, `px-4`, etc.
- `gap-[8px]`, `gap-2`, etc.

### Step 4: Update Variant Names
Map old variants to new ones:

- `className="kix-button-primary"` → `variant="filled"`
- `className="kix-button-secondary"` → `variant="outlined"`
- `className="kix-button-ghost"` → `variant="ghost"`
- (no variant specified) → Defaults to `variant="filled"`

### Step 5: Choose Correct Size
Based on context:

- `size="lg"` - Main CTAs, prominent actions (36px)
- `size="md"` - Default, most buttons (32px)
- `size="sm"` - Compact buttons, inline actions (24px)
- `size="icon-*"` - Icon-only buttons (square)

---

## 📝 Replacement Checklist

### For Each Button Replacement:

- [ ] Import `Button` component if not already imported
- [ ] Replace `className="kix-button-*"` with `variant="*"`
- [ ] Add appropriate `size` prop (lg/md/sm)
- [ ] Remove icon `size` props (let button auto-size)
- [ ] Remove custom height classes (`h-8`, `h-[32px]`, etc.)
- [ ] Remove custom padding classes (`px-4`, `px-[12px]`, etc.)
- [ ] Remove custom gap classes (`gap-2`, `gap-[8px]`, etc.)
- [ ] Keep necessary custom classes (e.g., `rounded-l-md` for button groups)
- [ ] Test hover/focus/disabled states
- [ ] Verify visual alignment with Figma

---

## 🧹 Cleanup Tasks

After replacing all buttons:

1. **Remove from `src/styles/globals.css`:**
```css
.kix-button-primary {
  /* Remove entire block */
}

.kix-button-secondary {
  /* Remove entire block */
}

.kix-button-ghost {
  /* Remove entire block */
}
```

2. **Remove from `src/index.css`:**
   - Search for `.kix-button-*` classes (lines ~3434-3510)
   - Remove all instances

3. **Verify no other references:**
```bash
grep -r "kix-button-primary" src/
grep -r "kix-button-secondary" src/
grep -r "kix-button-ghost" src/
```

---

## 🎨 Visual Testing Checklist

After each replacement, verify:

- [ ] Button renders at correct size (36px/32px/24px)
- [ ] Icons are properly sized (20px/16px/12px)
- [ ] Spacing/gap is correct (4px for lg/md, 2px for sm)
- [ ] Border radius matches (12px for lg/md, 8px for sm)
- [ ] Colors match Figma (#407a3f, #365528, #f5faf5)
- [ ] Hover state works (darker background or tint)
- [ ] Focus state shows ring
- [ ] Disabled state shows overlay (filled) or reduced opacity
- [ ] Icon-only buttons are perfectly square
- [ ] Button groups (if any) still align properly

---

## 📊 Impact Assessment

### Low Risk Changes:
- Single buttons in isolation (App.tsx, kix-header.tsx)
- Ticket detail buttons (limited scope)

### Medium Risk Changes:
- Data table toolbar buttons (used across multiple tables)
- Need to verify all table toolbars render correctly

### High Risk Changes:
- None! All changes are visual-only, no functionality changes

---

## 🔄 Rollback Plan

If issues arise:

1. **Keep old button.tsx temporarily:**
```bash
cp src/components/ui/button.tsx src/components/ui/button.tsx.backup
```

2. **Git revert if needed:**
```bash
git diff src/components/ui/button.tsx
git checkout src/components/ui/button.tsx
```

3. **Or restore classes in globals.css temporarily**

---

## ✅ Success Criteria

Button replacement is complete when:

1. ✅ All 9 high-priority buttons updated
2. ✅ All buttons match Figma specs visually
3. ✅ No `kix-button-*` classes found in component files
4. ✅ `kix-button-*` classes removed from CSS files
5. ✅ All button states work correctly (hover, focus, disabled)
6. ✅ Icons auto-size correctly
7. ✅ No visual regressions
8. ✅ No TypeScript errors
9. ✅ All existing functionality preserved

---

## 🚀 Next Steps

**Option 1: Replace All at Once (Recommended)**
- Update all 9 buttons in one batch
- Test thoroughly
- Remove CSS classes
- Quick and clean

**Option 2: Incremental Replacement**
- Replace file by file
- Test each change
- Safer but slower
- Good for catching issues early

**Your call!** Would you like me to proceed with replacing all 9 buttons now?

