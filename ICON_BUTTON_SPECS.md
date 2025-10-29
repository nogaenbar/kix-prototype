# Icon Button Component Specifications

## Overview
Icon buttons are square buttons designed for actions represented solely by icons. They come in three visual styles to indicate different levels of emphasis.

**Figma Reference:**
- Filled: https://www.figma.com/design/04rBMxy8CfG5SX1pbOGL7D/Vision-UI-v1?node-id=157-4091
- Outlined: https://www.figma.com/design/04rBMxy8CfG5SX1pbOGL7D/Vision-UI-v1?node-id=157-4307
- Transparent: https://www.figma.com/design/04rBMxy8CfG5SX1pbOGL7D/Vision-UI-v1?node-id=157-4380

---

## Variants

### 1. Filled (High Emphasis)
**Purpose:** Primary icon-only actions  
**Use Case:** Delete, Add, Primary actions that need high visibility

**Colors:**
- **Initial:** bg `#407a3f`, icon `#f5faf5`
- **Hover:** bg `#365528`, icon `#f5faf5`
- **Active:** bg `#24391b`, icon `#f5faf5`
- **Disabled:** bg `#407a3f` with `rgba(205,205,205,0.48)` overlay, icon `#f5faf5`

### 2. Outlined (Medium Emphasis)
**Purpose:** Secondary icon-only actions  
**Use Case:** Edit, Copy, Share - actions that support primary ones

**Colors:**
- **Initial:** bg `transparent`, border `rgba(64,122,63,0.2)`, icon `#407a3f`
- **Hover:** bg `#deeedd`, border `rgba(64,122,63,0.2)`, icon `#407a3f`
- **Active:** bg `#bcdcbc`, border `rgba(64,122,63,0.2)`, icon `#407a3f`
- **Disabled:** bg `transparent`, border `#cdcdcd`, icon `#969696`

### 3. Transparent (Low Emphasis)
**Purpose:** Tertiary icon-only actions  
**Use Case:** Close, Collapse, Less important actions

**Colors:**
- **Initial:** bg `transparent`, no border, icon `#407a3f`
- **Hover:** bg `#deeedd`, no border, icon `#407a3f`
- **Active:** bg `#bcdcbc`, no border, icon `#407a3f`
- **Disabled:** bg `transparent`, no border, icon `#969696`

---

## Sizes

### Large
- **Dimensions:** 36×36px
- **Icon Size:** 20×20px
- **Border Radius:** 12px
- **Use Case:** Primary areas, hero sections, prominent actions

### Medium (Default)
- **Dimensions:** 32×32px
- **Icon Size:** 16×16px
- **Border Radius:** 12px
- **Use Case:** Standard interface elements, toolbars

### Small
- **Dimensions:** 24×24px
- **Icon Size:** 12×12px
- **Border Radius:** 8px
- **Use Case:** Compact areas, table rows, inline actions

---

## Usage Examples

### Basic Usage
```tsx
import { IconButton } from "@/components/ui/icon-button";
import { Plus, Trash2, Edit } from "lucide-react";

// Filled (Primary action)
<IconButton variant="filled" size="lg">
  <Plus />
</IconButton>

// Outlined (Secondary action)
<IconButton variant="outlined" size="md">
  <Edit />
</IconButton>

// Transparent (Tertiary action)
<IconButton variant="transparent" size="sm">
  <Trash2 />
</IconButton>
```

### With Event Handlers
```tsx
<IconButton 
  variant="filled" 
  size="md"
  onClick={() => handleDelete()}
>
  <Trash2 />
</IconButton>
```

### Disabled State
```tsx
<IconButton 
  variant="filled" 
  size="lg"
  disabled
>
  <Plus />
</IconButton>
```

---

## States

### Default (Initial)
The button's resting state with base colors.

### Hover
Triggered when the user hovers over the button. Background typically darkens (filled) or becomes visible (outlined/transparent).

### Active (Pressed)
Triggered when the user clicks/presses the button. Background darkens further to provide tactile feedback.

### Disabled
The button cannot be interacted with. A semi-transparent overlay is applied.

---

## Icon Library

All icons come from **Lucide React** (https://lucide.dev/icons/)

Common icons used:
- `Plus` - Add/Create
- `Trash2` - Delete
- `Edit` - Edit/Modify
- `Copy` - Duplicate
- `Share2` - Share
- `Download` - Download/Export
- `Search` - Search
- `Filter` - Filter
- `Settings` - Settings/Config
- `X` - Close/Cancel
- `Check` - Confirm/Success
- `ChevronDown` - Expand/Collapse

---

## Accessibility

### Focus State
A 3px ring appears around the button when focused via keyboard navigation:
- Ring color: `var(--ring)` (typically blue)
- Ring offset: 0px

### ARIA Attributes
Always include an `aria-label` when using icon-only buttons:
```tsx
<IconButton 
  variant="filled" 
  size="md"
  aria-label="Delete item"
>
  <Trash2 />
</IconButton>
```

### Keyboard Navigation
- **Tab:** Navigate between buttons
- **Space/Enter:** Activate button
- **Focus visible:** Ring appears for keyboard users

---

## Component API

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"filled"` \| `"outlined"` \| `"transparent"` | `"filled"` | Visual style variant |
| `size` | `"lg"` \| `"md"` \| `"sm"` | `"md"` | Button size |
| `disabled` | `boolean` | `false` | Disables button interaction |
| `onClick` | `() => void` | - | Click handler |
| `aria-label` | `string` | - | Accessible label for screen readers |
| `className` | `string` | - | Additional CSS classes |
| `asChild` | `boolean` | `false` | Render as child element (Radix Slot) |

### Extends
All standard `<button>` HTML attributes are supported.

---

## Design Tokens

### Colors (CSS Variables)
```css
--primary: #407a3f;
--primary-hover: #365528;
--primary-pressed: #24391b;
--primary-foreground: #f5faf5;
--primary-50: #ebf5e6;
--primary-100: #ddefd6;
```

### Border Radius
```css
--radius-lg: 12px;
--radius-sm: 8px;
```

---

## Related Components
- **Button** (`button.tsx`) - Text buttons with optional icons
- **IconButton** (`icon-button.tsx`) - Icon-only buttons (this component)

---

## View Component Library

To see all icon button variants in action, visit:
**http://localhost:3000/#/component-library**

---

## Implementation Status
- ✅ Component created
- ✅ All variants implemented (filled, outlined, transparent)
- ✅ All sizes implemented (lg, md, sm)
- ✅ All states implemented (initial, hover, active, disabled)
- ✅ Pixel-perfect Figma specs
- ✅ Accessibility features (focus states, keyboard nav)
- ✅ Component library showcase page
- ✅ **Automatic icon sizing** - Icons are automatically sized based on button size
- ✅ **Lucide integration** - Full support for Lucide React icons
- ✅ **Interactive and clickable** - Fixed sizing issues for proper interaction

---

## Technical Implementation

### **Automatic Icon Sizing**
The component uses React's `cloneElement` to automatically size icons:

```tsx
// Icon sizes are applied via inline styles
const sizeStyles = {
  lg: { button: { width: '36px', height: '36px' }, icon: { width: '20px', height: '20px' } },
  md: { button: { width: '32px', height: '32px' }, icon: { width: '16px', height: '16px' } },
  sm: { button: { width: '24px', height: '24px' }, icon: { width: '12px', height: '12px' } },
};

// Icons are cloned with proper sizing
const clonedChildren = React.Children.map(children, (child) => {
  if (React.isValidElement(child)) {
    return React.cloneElement(child, { style: sizeStyle.icon });
  }
  return child;
});
```

**Why inline styles?**
- ✅ More reliable than Tailwind arbitrary values
- ✅ Guarantees exact pixel dimensions
- ✅ Works with all icon libraries
- ✅ No CSS specificity issues

---

## Lucide Icons

All icons in the KIX design system come from **Lucide React** (v0.487.0).

- **Installed locally** via npm (not fetched from API)
- **3000+ icons** available at [https://lucide.dev/icons/](https://lucide.dev/icons/)
- **Tree-shakeable** - Only imported icons are bundled
- **Auto-sized** - IconButton handles sizing automatically

**See:** `LUCIDE_ICONS_GUIDE.md` for complete documentation

---

## Next Steps
- [ ] Replace existing icon buttons throughout the app
- [ ] Add to button audit document
- [ ] Update design system documentation
- [x] Document Lucide icons integration
- [x] Fix icon sizing and interactivity issues

