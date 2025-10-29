# UI Components Audit - Phase 2

**Date:** 2025-10-29  
**Total UI Components:** 49 files

---

## ✅ **USED Components (16 files)**

Based on grep search of actual imports across the codebase:

| Component | Used By | Status |
|-----------|---------|--------|
| **accordion.tsx** | ❌ NOT FOUND | DELETE |
| **alert-dialog.tsx** | ❌ NOT FOUND | DELETE |
| **alert.tsx** | ❌ NOT FOUND | DELETE |
| **aspect-ratio.tsx** | ❌ NOT FOUND | DELETE |
| **avatar.tsx** | ✅ kix-data-table-new, kix-ticket-detail | KEEP |
| **badge.tsx** | ✅ Many files | KEEP |
| **breadcrumb.tsx** | ✅ kix-ticket-detail | KEEP |
| **button.tsx** | ✅ Many files | KEEP |
| **calendar.tsx** | ❌ NOT FOUND | DELETE |
| **card.tsx** | ✅ kix-chart-card, kix-ticket-detail, kix-kpi-tile | KEEP |
| **carousel.tsx** | ❌ NOT FOUND | DELETE |
| **chart.tsx** | ❌ NOT FOUND | DELETE |
| **checkbox.tsx** | ✅ kix-data-table-new | KEEP |
| **collapsible.tsx** | ✅ kix-side-nav, kix-filter-tree, kix-folders-drawer | KEEP |
| **command.tsx** | ❌ NOT FOUND | DELETE |
| **context-menu.tsx** | ❌ NOT FOUND | DELETE |
| **dialog.tsx** | ❌ NOT FOUND | DELETE |
| **drawer.tsx** | ✅ kix-ticket-detail | KEEP |
| **dropdown-menu.tsx** | ✅ Many files | KEEP |
| **form.tsx** | ❌ NOT FOUND | DELETE |
| **hover-card.tsx** | ❌ NOT FOUND | DELETE |
| **icon-button.tsx** | ✅ ComponentLibrary | KEEP |
| **input-otp.tsx** | ❌ NOT FOUND | DELETE |
| **input.tsx** | ✅ Many files | KEEP |
| **label.tsx** | ❌ NOT FOUND | DELETE |
| **menubar.tsx** | ❌ NOT FOUND | DELETE |
| **navigation-menu.tsx** | ❌ NOT FOUND | DELETE |
| **pagination.tsx** | ❌ NOT FOUND | DELETE |
| **popover.tsx** | ❌ NOT FOUND | DELETE |
| **progress.tsx** | ❌ NOT FOUND | DELETE |
| **radio-group.tsx** | ❌ NOT FOUND | DELETE |
| **resizable.tsx** | ❌ NOT FOUND | DELETE |
| **scroll-area.tsx** | ✅ kix-ticket-detail | KEEP |
| **select.tsx** | ❌ NOT FOUND | DELETE |
| **separator.tsx** | ✅ kix-ticket-detail | KEEP |
| **sheet.tsx** | ❌ NOT FOUND | DELETE |
| **sidebar.tsx** | ❌ NOT FOUND | DELETE |
| **skeleton.tsx** | ❌ NOT FOUND | DELETE |
| **slider.tsx** | ❌ NOT FOUND | DELETE |
| **sonner.tsx** | ❌ NOT FOUND | DELETE |
| **switch.tsx** | ❌ NOT FOUND | DELETE |
| **table.tsx** | ❌ NOT FOUND | DELETE |
| **tabs.tsx** | ❌ NOT FOUND | DELETE |
| **textarea.tsx** | ✅ kix-ticket-detail | KEEP |
| **toggle-group.tsx** | ❌ NOT FOUND | DELETE |
| **toggle.tsx** | ❌ NOT FOUND | DELETE |
| **tooltip.tsx** | ✅ kix-side-nav, kix-segment-tabs, kix-work-tabs, kix-ticket-detail | KEEP |
| **use-mobile.ts** | ❓ Need to check | CHECK |
| **utils.ts** | ✅ Used by all components + kix-search-expandable | KEEP |

---

## 📊 **Summary**

| Category | Count |
|----------|-------|
| **KEEP (Used)** | 16 files |
| **DELETE (Unused)** | 32 files |
| **CHECK (Uncertain)** | 1 file |

---

## 🗑️ **Components to DELETE (32 files)**

```
accordion.tsx
alert-dialog.tsx
alert.tsx
aspect-ratio.tsx
calendar.tsx
carousel.tsx
chart.tsx
command.tsx
context-menu.tsx
dialog.tsx
form.tsx
hover-card.tsx
input-otp.tsx
label.tsx
menubar.tsx
navigation-menu.tsx
pagination.tsx
popover.tsx
progress.tsx
radio-group.tsx
resizable.tsx
select.tsx
sheet.tsx
sidebar.tsx
skeleton.tsx
slider.tsx
sonner.tsx
switch.tsx
table.tsx
tabs.tsx
toggle-group.tsx
toggle.tsx
```

---

## ✅ **Components to KEEP (16 files)**

```
avatar.tsx
badge.tsx
breadcrumb.tsx
button.tsx
card.tsx
checkbox.tsx
collapsible.tsx
drawer.tsx
dropdown-menu.tsx
icon-button.tsx
input.tsx
scroll-area.tsx
separator.tsx
textarea.tsx
tooltip.tsx
utils.ts
```

---

## 📏 **Estimated Impact**

**Lines to Remove:** ~4,000-5,000 lines (estimated based on typical Shadcn/UI component sizes)

**Before:** 49 files  
**After:** 17 files (16 components + utils + use-mobile if needed)  
**Reduction:** **65% smaller**

---

## ⚠️ **Important Notes**

1. **use-mobile.ts** - Need to check if any components internally use this hook
2. **All unused** components appear to be from Shadcn/UI boilerplate
3. **Zero risk** - None of these are imported anywhere
4. **Easy to restore** - Can copy back from git history if needed later

---

## 🎯 **Next Steps**

1. ✅ Check if `use-mobile.ts` is used internally by kept components
2. ✅ Delete all 32 unused component files
3. ✅ Run build to verify
4. ✅ Commit changes

---

**Audit Complete!** Ready to proceed with deletions.

