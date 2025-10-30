# Data Table Expand/Collapse Icon Button Implementation

## Summary
Replaced the custom expand/collapse button in the `CardHeader` of the data table component with the standardized `IconButton` component.

## Implementation Details

### Component: `KIXDataTableNew`
**Location:** `src/components/kix-data-table-new.tsx`

### Changes Made

1. **Added IconButton Import**
   - Imported `IconButton` from `./ui/icon-button`
   - Existing `ChevronDown` icon from `lucide-react` is reused

2. **Replaced Custom Button**
   - **Before:** Custom `<button>` element with inline SVG and manual styling
   - **After:** Standardized `IconButton` component with proper variant and size

3. **Button Specifications**
   - **Variant:** `transparent` (as specified in Figma design)
   - **Size:** `md` (Medium = 32x32px, 16x16px icon)
   - **Icon:** `ChevronDown` from Lucide React
   - **Animation:** Rotation transition preserved (180deg when collapsed)

### Code Changes

```tsx
// Before
<button
  onClick={onToggle}
  className="relative rounded-[12px] shrink-0 size-[32px] flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
>
  <div 
    className="relative shrink-0 size-[16px] transition-transform duration-300 ease-in-out"
    style={{ 
      transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)' 
    }}
  >
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <g>
        <path d="M12 10L8 6L4 10" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      </g>
    </svg>
  </div>
</button>

// After
<div
  className="transition-transform duration-300 ease-in-out"
  style={{
    transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)',
  }}
>
  <IconButton
    variant="transparent"
    size="md"
    onClick={onToggle}
    aria-label={isCollapsed ? "Expand table" : "Collapse table"}
  >
    <ChevronDown />
  </IconButton>
</div>
```

### Design Specifications
- **Figma Reference:** https://www.figma.com/design/04rBMxy8CfG5SX1pbOGL7D/Vision-UI-v1?node-id=9-1250
- **Variant:** Transparent icon button
- **Size:** Medium (32x32px)
- **Icon Size:** 16x16px (automatically handled by IconButton)
- **Color:** Primary green (#407a3f)

### Benefits
1. **Consistency:** Uses the same IconButton component as other parts of the UI
2. **Accessibility:** Proper `aria-label` for screen readers
3. **Design System:** Aligns with KIX design system specifications
4. **Maintainability:** Single source of truth for button styling
5. **Functionality:** Preserves all original behavior including rotation animation

### Testing Checklist
- [ ] Button displays correctly in collapsed state
- [ ] Button displays correctly in expanded state
- [ ] Rotation animation works smoothly (300ms)
- [ ] Hover state works correctly (transparent variant)
- [ ] Active/pressed state works correctly
- [ ] Click toggles table expand/collapse correctly
- [ ] Icon color matches design (#407a3f)
- [ ] Button size is 32x32px
- [ ] Icon size is 16x16px

## Related Components
- `IconButton`: `src/components/ui/icon-button.tsx`
- `KIXDataTableNew`: `src/components/kix-data-table-new.tsx`

---

**Date:** 2024
**Figma Design:** Vision UI v1 - Dashboard Table Expand/Collapse Button


