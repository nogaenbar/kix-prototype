# KIX Button Component Specifications (from Figma)

## Design Token Reference
Based on Figma frame "KIX-Button" (105:21426)

---

## Size Specifications

### Large (lg)
- **Height:** 36px
- **Border Radius:** 12px
- **Horizontal Padding:** 16px
- **Gap (between icon & text):** 4px
- **Icon Size:** 20px
- **Font Size:** 16px
- **Font Weight:** medium (500)

### Medium (md - default)
- **Height:** 32px
- **Border Radius:** 12px
- **Horizontal Padding:** 12px
- **Gap (between icon & text):** 4px
- **Icon Size:** 16px
- **Font Size:** 14px
- **Font Weight:** medium (500)

### Small (sm)
- **Height:** 24px
- **Border Radius:** 8px
- **Horizontal Padding:** 8px
- **Gap (between icon & text):** 2px
- **Icon Size:** 12px
- **Font Size:** 12px
- **Font Weight:** medium (500)

---

## Style Variants

### 1. Filled (Primary) - `variant="filled"`
Main action button, high emphasis

#### Colors:
- **Background (Initial):** `#407a3f` (Primary green)
- **Background (Hover):** `#365528` (Darker green)
- **Background (Active):** `#365528` (Same as hover)
- **Background (Disabled):** `#407a3f` with `rgba(205, 205, 205, 0.48)` overlay
- **Text Color:** `#f5faf5` (Off-white/light green)
- **Icon Color:** `#f5faf5` (Same as text)
- **Border:** `transparent`

#### States:
- **Initial:** Default state
- **Hover:** `cursor-pointer`, darker background
- **Active:** Same as hover (pressed state)
- **Disabled:** `opacity: 0.48` overlay, `pointer-events: none`

---

### 2. Outlined (Secondary) - `variant="outlined"`
Secondary action, medium emphasis

#### Colors:
- **Background (Initial):** `white`
- **Background (Hover):** (lighter green tint, to be determined)
- **Background (Active):** (to be determined)
- **Background (Disabled):** `white`
- **Text Color (Initial):** `#407a3f` (Primary green)
- **Text Color (Disabled):** (to be determined, likely lighter)
- **Icon Color:** `#407a3f` (Same as text)
- **Border (Initial):** `rgba(64, 122, 63, 0.2)` (20% opacity green)
- **Border (Disabled):** (lighter border, to be determined)

#### States:
- **Initial:** White background with subtle border
- **Hover:** Slight background color change (tint of green)
- **Active:** More pronounced background change
- **Disabled:** Reduced opacity on text and border

---

### 3. Transparent (Ghost) - `variant="ghost"`
Tertiary action, low emphasis

#### Colors:
- **Background (Initial):** `transparent`
- **Background (Hover):** (subtle green tint, to be determined)
- **Background (Active):** (to be determined)
- **Background (Disabled):** `transparent`
- **Text Color (Initial):** `#407a3f` (Primary green)
- **Text Color (Disabled):** (to be determined, likely lighter)
- **Icon Color:** `#407a3f` (Same as text)
- **Border:** `transparent`

#### States:
- **Initial:** No background or border
- **Hover:** Subtle background tint
- **Active:** More pronounced background tint
- **Disabled:** Reduced text/icon opacity

---

## Icon-Only Buttons

Same size specs as above, but:
- **Width:** Equal to height (square)
- **Padding:** Centered, no horizontal padding
- **Icon:** Centered within button

### Sizes:
- **Large:** 36px × 36px
- **Medium:** 32px × 32px
- **Small:** 24px × 24px

---

## Content Configurations

1. **Label Only:** Text button without icons
2. **Icon + Label:** Leading icon with text
3. **Label + Icon:** Text with trailing icon
4. **Icon + Label + Icon:** Text with both leading and trailing icons
5. **Icon Only:** Just icon, square button

---

## Accessibility & Interaction

- **Focus Ring:** (to be determined from design system)
- **Transition:** Smooth transitions on all state changes
- **Cursor:** `pointer` on hover, `not-allowed` when disabled
- **Line Height:** `leading-none` (0) to center text vertically
- **White Space:** `whitespace-nowrap` to prevent text wrapping

---

## Current Implementation Issues

### Problems with current `button.tsx`:
1. ❌ Uses generic Radix/Shadcn button styles, not KIX-specific
2. ❌ Sizes don't match Figma (using h-9, h-8, h-10 instead of 36px, 32px, 24px)
3. ❌ Border radius wrong (using generic `rounded-md` instead of specific 12px/8px)
4. ❌ Padding doesn't match (using `px-4 py-2` instead of specific horizontal padding)
5. ❌ Icon sizes not controlled per button size
6. ❌ Gap between icons and text not specified correctly
7. ❌ Colors use generic theme tokens, not KIX-specific colors
8. ❌ Hover states don't match Figma specs (#365528 for filled hover)
9. ❌ Disabled state uses simple opacity instead of overlay effect
10. ❌ No icon-only variant with proper square dimensions

### Current global CSS classes:
- `.kix-button-primary` - Basic implementation, needs refinement
- `.kix-button-secondary` - Basic implementation, needs refinement
- `.kix-button-ghost` - Basic implementation, needs refinement

---

## Proposed Solution

Create a new `button.tsx` component that:
1. ✅ Uses `class-variance-authority` for variant management (keep current approach)
2. ✅ Implements exact Figma specs for all sizes
3. ✅ Uses exact Figma colors (#407a3f, #365528, #f5faf5, etc.)
4. ✅ Properly sizes icons based on button size (20px/16px/12px)
5. ✅ Implements exact padding and gaps from Figma
6. ✅ Maintains current API compatibility (no breaking changes)
7. ✅ Adds icon-only variant (`size="icon-lg"`, `size="icon-md"`, `size="icon-sm"`)
8. ✅ Properly handles disabled state with overlay effect
9. ✅ Uses Lucide icons (already in project)

---

## Implementation Notes

- **Keep existing props:** `variant`, `size`, `asChild`, `className`, etc.
- **No breaking changes:** Existing button usage should continue to work
- **Only CSS changes:** No functional changes, just visual refinement
- **Best practices:** Use Tailwind utilities, maintain type safety, follow React patterns

