# Text Button Component - Figma Design Audit Report

## Overview
Complete analysis of all text button variants (Filled, Outlined, Transparent) across all sizes (Large, Medium, Small) with all states (Initial, Hover, Active, Disabled).

**Figma References:**
- Large: `node-id=162-4453`
- Medium: `node-id=162-5097`
- Small: `node-id=162-5528`

---

## Size Specifications

### Large (lg)
| Property | Value |
|----------|-------|
| **Height** | `36px` |
| **Horizontal Padding** | `16px` (`px-[16px]`) |
| **Border Radius** | `12px` (`rounded-[12px]`) |
| **Font Size** | `16px` (`text-[16px]`) |
| **Icon Size** | `20x20px` (`size-[20px]`) |
| **Gap** | `4px` (`gap-[4px]`) |
| **Font Family** | `Inter:Medium` (font-medium) |
| **Line Height** | `0` (leading-none) |

### Medium (md)
| Property | Value |
|----------|-------|
| **Height** | `32px` |
| **Horizontal Padding** | `12px` (`px-[12px]`) |
| **Border Radius** | `12px` (`rounded-[12px]`) |
| **Font Size** | `14px` (`text-[14px]`) |
| **Icon Size** | `16x16px` (`size-[16px]`) |
| **Gap** | `4px` (`gap-[4px]`) |
| **Font Family** | `Inter:Medium` (font-medium) |
| **Line Height** | `0` (leading-none) |

### Small (sm)
| Property | Value |
|----------|-------|
| **Height** | `24px` |
| **Horizontal Padding** | `8px` (`px-[8px]`) |
| **Border Radius** | `8px` (`rounded-[8px]`) |
| **Font Size** | `12px` (`text-[12px]`) |
| **Icon Size** | `12x12px` (`size-[12px]` or `w-[12px] h-[12px]`) |
| **Gap** | `2px` (`gap-[2px]`) |
| **Font Family** | `Inter:Medium` (font-medium) |
| **Line Height** | `0` (leading-none) |

---

## Variant & State Specifications

### Filled Variant

#### Initial State
- **Background:** `#407a3f` (`bg-[#407a3f]`)
- **Text Color:** `#f5faf5` (`text-[#f5faf5]`)
- **Icon Color:** `#f5faf5` (light green)
- **Border:** `transparent` (`border-transparent` or `border-[rgba(27,27,27,0)]`)

#### Hover State
- **Background:** `#365528` (`bg-[#365528]`)
- **Text Color:** `#f5faf5` (`text-[#f5faf5]`)
- **Icon Color:** `#f5faf5`
- **Cursor:** `pointer` (`cursor-pointer`)
- **Border:** `transparent`

#### Active State
- **Background:** `#24391b` (`bg-[#24391b]`)
- **Text Color:** `#f5faf5` (`text-[#f5faf5]`)
- **Icon Color:** `#f5faf5`
- **Border:** `transparent`

#### Disabled State
- **Background:** `#407a3f` (same as initial)
- **Text Color:** `#f5faf5` (same as initial)
- **Icon Color:** `#f5faf5` (same as initial)
- **Overlay:** `rgba(205,205,205,0.48)` (`bg-[rgba(205,205,205,0.48)]`) covering entire button
- **Border:** `transparent`

---

### Outlined Variant

#### Initial State
- **Background:** `transparent` or `white` (`bg-white` or `bg-[rgba(27,27,27,0)]`)
- **Text Color:** `#407a3f` (`text-[#407a3f]`)
- **Icon Color:** `#407a3f` (primary green)
- **Border:** `rgba(64,122,63,0.2)` (`border-[rgba(64,122,63,0.2)]`)
- **Border Width:** `1px` (`border-solid`)

#### Hover State
- **Background:** `#deeedd` (`bg-[#deeedd]`)
- **Text Color:** `#407a3f` (`text-[#407a3f]`)
- **Icon Color:** `#407a3f`
- **Border:** `rgba(64,122,63,0.2)` (unchanged)
- **Cursor:** `pointer` (`cursor-pointer`)

#### Active State
- **Background:** `#bcdcbc` (`bg-[#bcdcbc]`)
- **Text Color:** `#407a3f` (`text-[#407a3f]`)
- **Icon Color:** `#407a3f`
- **Border:** `rgba(64,122,63,0.2)` (unchanged)

#### Disabled State
- **Background:** `transparent`
- **Text Color:** `#969696` (`text-[#969696]`)
- **Icon Color:** `#969696`
- **Border:** `#cdcdcd` (`border-[#cdcdcd]`)
- **Overlay:** `rgba(205,205,205,0.48)` covering entire button

---

### Transparent Variant

#### Initial State
- **Background:** `transparent` (`bg-[rgba(27,27,27,0)]`)
- **Text Color:** `#407a3f` (`text-[#407a3f]`)
- **Icon Color:** `#407a3f` (primary green)
- **Border:** `transparent` (`border-transparent` or `border-[rgba(27,27,27,0)]`)

#### Hover State
- **Background:** `#deeedd` (`bg-[#deeedd]`)
- **Text Color:** `#407a3f` (`text-[#407a3f]`)
- **Icon Color:** `#407a3f`
- **Border:** `transparent`
- **Cursor:** `pointer` (`cursor-pointer`)

#### Active State
- **Background:** `#bcdcbc` (`bg-[#bcdcbc]`)
- **Text Color:** `#407a3f` (`text-[#407a3f]`)
- **Icon Color:** `#407a3f`
- **Border:** `transparent`

#### Disabled State
- **Background:** `transparent`
- **Text Color:** `#969696` (`text-[#969696]`)
- **Icon Color:** `#969696`
- **Border:** `transparent`
- **No overlay** (unlike filled/outlined)

---

## Common Properties

### Layout & Structure
- **Display:** `inline-flex` (`inline-flex`)
- **Alignment:** `items-center justify-center` (centered content)
- **Flex Shrink:** `0` (`shrink-0`)
- **White Space:** `nowrap` (`whitespace-nowrap`)
- **Box Sizing:** `border-box`

### Typography
- **Font Family:** `Inter:Medium` (use `font-['Inter:Medium',sans-serif]` or `font-medium`)
- **Font Weight:** `medium` (`font-medium`)
- **Line Height:** `0` (`leading-none`) - ensures no extra vertical space
- **Text Align:** Center (via flexbox)

### Transitions
- **Duration:** `200ms` (`duration-200`)
- **Easing:** `ease-in-out` (`ease-in-out`)
- **Properties:** `colors` (`transition-colors`)

### States & Interactions
- **Focus Ring:** `ring-2 ring-ring ring-offset-2` (for accessibility)
- **Disabled:** `opacity-50 pointer-events-none` or overlay approach
- **Cursor:** `pointer` on hover/interactive states

---

## Color Palette Summary

### Primary Colors
- **Primary Green:** `#407a3f`
- **Primary Light Text:** `#f5faf5`

### Background Colors by State
| Variant | Initial | Hover | Active | Disabled Overlay |
|---------|---------|-------|--------|------------------|
| **Filled** | `#407a3f` | `#365528` | `#24391b` | `rgba(205,205,205,0.48)` |
| **Outlined** | `transparent`/`white` | `#deeedd` | `#bcdcbc` | `rgba(205,205,205,0.48)` |
| **Transparent** | `transparent` | `#deeedd` | `#bcdcbc` | None |

### Text/Icon Colors
| Variant | Normal | Disabled |
|---------|--------|----------|
| **Filled** | `#f5faf5` | `#f5faf5` (with overlay) |
| **Outlined** | `#407a3f` | `#969696` |
| **Transparent** | `#407a3f` | `#969696` |

### Border Colors
- **Outlined Normal:** `rgba(64,122,63,0.2)`
- **Outlined Disabled:** `#cdcdcd`
- **Filled/Transparent:** `transparent`

---

## Key Differences from Current Implementation

### Current Button Component Issues:
1. ❌ Uses inline styles for dimensions instead of Tailwind classes
2. ❌ Uses `baseButtonStyle` object instead of Tailwind utilities
3. ❌ Icon sizing handled via `React.Children.map` for SVG elements only
4. ❌ Doesn't use React state for hover/active states (relies on CSS)
5. ❌ Uses CSS variables that may not match exact Figma colors

### IconButton Pattern (to replicate):
1. ✅ Uses Tailwind classes for layout/base styles
2. ✅ Uses React state (`isHovered`, `isActive`) for dynamic colors
3. ✅ Uses inline styles only for dimensions and dynamic background colors
4. ✅ Uses `React.cloneElement` to properly size Lucide icons
5. ✅ Uses direct hex color values for hover/active states

---

## Recommended Implementation Strategy

### 1. Tailwind-First Approach (Preferred)
- **Base Layout:** Use Tailwind classes for structure (`inline-flex`, `items-center`, `justify-center`)
- **Sizing:** Use Tailwind arbitrary values for dimensions (`h-[36px]`, `px-[16px]`)
- **Typography:** Use Tailwind classes (`text-[16px]`, `font-medium`, `leading-none`)
- **Borders:** Use Tailwind classes (`rounded-[12px]`, `border-[rgba(64,122,63,0.2)]`)
- **Static Colors:** Use Tailwind classes for text/icon colors

### 2. React State for Dynamic Styles
- **Hover/Active Backgrounds:** Use React state (`isHovered`, `isActive`) + inline styles
- **Color Mapping:** Similar to IconButton's `variantColorMap`
- **Icon Sizing:** Use `React.cloneElement` like IconButton

### 3. Structure
```tsx
const buttonVariants = cva(
  [
    "inline-flex items-center justify-center shrink-0",
    "transition-colors duration-200 ease-in-out",
    "cursor-pointer",
    "font-medium whitespace-nowrap leading-none",
    "disabled:pointer-events-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  ],
  {
    variants: {
      variant: {
        filled: "text-[#f5faf5] border-transparent",
        outlined: "text-[#407a3f] border-[rgba(64,122,63,0.2)] border-solid bg-white",
        transparent: "text-[#407a3f] border-transparent bg-transparent",
      },
      size: {
        lg: "h-[36px] px-[16px] gap-[4px] rounded-[12px] text-[16px]",
        md: "h-[32px] px-[12px] gap-[4px] rounded-[12px] text-[14px]",
        sm: "h-[24px] px-[8px] gap-[2px] rounded-[8px] text-[12px]",
      },
    },
  }
);

// Use React state + inline styles for hover/active backgrounds
const variantColorMap = {
  filled: { default: '#407a3f', hover: '#365528', active: '#24391b' },
  outlined: { default: 'white', hover: '#deeedd', active: '#bcdcbc' },
  transparent: { default: 'transparent', hover: '#deeedd', active: '#bcdcbc' },
};
```

---

## Implementation Checklist

- [ ] Replace inline `baseButtonStyle` object with Tailwind classes
- [ ] Implement React state for hover/active states (like IconButton)
- [ ] Use Tailwind arbitrary values for all dimensions
- [ ] Implement proper icon sizing via `React.cloneElement` for Lucide icons
- [ ] Match exact color values from Figma
- [ ] Ensure disabled state uses overlay approach (for filled/outlined)
- [ ] Update component library showcase
- [ ] Test all variants, sizes, and states
- [ ] Verify pixel-perfect match with Figma

---

**Next Steps:**
1. Review this audit report
2. Approve implementation strategy
3. Implement new Button component following IconButton pattern
4. Update component library
5. Replace existing Button usages throughout app


