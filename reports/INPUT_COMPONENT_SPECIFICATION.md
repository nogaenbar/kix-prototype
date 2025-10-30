# Input Component Specification

**Date:** 2025-10-29  
**Status:** ✅ Complete - Ready for QA  
**Component Library:** `http://localhost:3000/#/component-library` (Text Input)

## Overview
Comprehensive text input component with full Tailwind implementation, multiple sizes, states, and icon support.

---

## Specifications

### Sizes

#### Large
- **Height:** 40px
- **Text Size:** 16px / 20px line-height
- **Padding:** 16px horizontal, 10px vertical
- **Icon Size:** 16×16px (md)
- **Border Radius:** 12px

#### Medium
- **Height:** 36px
- **Text Size:** 14px / 20px line-height
- **Padding:** 12px horizontal, 8px vertical
- **Icon Size:** 16×16px (md)
- **Border Radius:** 12px

### Icon Support
- **Size:** All icons use **md size (16×16px)** with 2px stroke
- **Position:** Left, right, or both
- **Padding Adjustment:**
  - Large with left icon: 44px left padding
  - Large with right icon: 44px right padding
  - Medium with left icon: 40px left padding
  - Medium with right icon: 40px right padding

---

## Colors & States

### Border Colors
| State | Color | Hex |
|-------|-------|-----|
| Default | Gray | `#D0D5DD` |
| Hover | Dark Gray | `#9AA1B1` |
| Focus | Primary Green | `#407a3f` |
| Error | Red | `#F04438` |
| Success | Green | `#12B76A` |
| Disabled | Light Gray | `#E4E7EC` |

### Text Colors
| Element | Color | Hex |
|---------|-------|-----|
| Input Text | Dark | `#101828` |
| Placeholder | Gray | `#9AA1B1` |
| Label | Dark Gray | `#344054` |
| Helper Text | Gray | `#6A7282` |
| Disabled Text | Gray | `#9AA1B1` |

### Icon Colors
| State | Color | Hex |
|-------|-------|-----|
| Default | Gray | `#6A7282` |
| Error | Red | `#F04438` |
| Success | Green | `#12B76A` |
| Disabled | Gray | `#9AA1B1` |

### Background Colors
| State | Color | Hex |
|-------|-------|-----|
| Default | White | `#FFFFFF` |
| Disabled | Light Gray | `#F5F7FA` |

---

## States

### Default
- White background
- Gray border (`#D0D5DD`)
- Gray placeholder text
- Gray icons

### Hover
- Border changes to dark gray (`#9AA1B1`)
- Smooth transition (200ms)

### Focus
- Primary green border (`#407a3f`)
- Focus ring with 20% opacity (`#407a3f` / 20%)
- 2px ring width
- No outline

### Disabled
- Light gray background (`#F5F7FA`)
- Light gray border (`#E4E7EC`)
- Gray text (`#9AA1B1`)
- Cursor not-allowed
- Reduced opacity on icons

### Error
- Red border (`#F04438`)
- Red focus ring (20% opacity)
- Red helper text
- Red icon color

### Success
- Green border (`#12B76A`)
- Green focus ring (20% opacity)
- Green helper text
- Green icon color

---

## Component API

### Props

```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Size variant
  size?: "lg" | "md";
  
  // Visual state
  variant?: "default" | "error" | "success";
  error?: boolean;  // Shorthand for variant="error"
  success?: boolean; // Shorthand for variant="success"
  
  // Icons (Lucide React components)
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  
  // Labels & helpers
  label?: string;
  helperText?: string;
  
  // Standard HTML input props
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  // ... all other input props
}
```

---

## Usage Examples

### Basic Input
```tsx
import { Input } from "@/components/ui/input";

<Input
  size="md"
  placeholder="Enter text..."
/>
```

### With Label & Helper Text
```tsx
<Input
  size="md"
  label="Email"
  placeholder="you@example.com"
  helperText="We'll never share your email"
/>
```

### With Icons
```tsx
import { Search, Filter } from "lucide-react";

// Left icon
<Input
  size="lg"
  leftIcon={<Search />}
  placeholder="Search..."
/>

// Right icon
<Input
  size="md"
  rightIcon={<Filter />}
  placeholder="Filter results"
/>

// Both icons
<Input
  size="md"
  leftIcon={<Search />}
  rightIcon={<Filter />}
  placeholder="Search and filter"
/>
```

### Error State
```tsx
<Input
  size="md"
  type="email"
  label="Email Address"
  placeholder="you@example.com"
  leftIcon={<Mail />}
  error
  helperText="Please enter a valid email address"
/>
```

### Success State
```tsx
<Input
  size="md"
  label="Username"
  placeholder="johndoe"
  leftIcon={<User />}
  success
  helperText="Username is available"
/>
```

### Disabled State
```tsx
<Input
  size="md"
  placeholder="Disabled input"
  disabled
/>
```

### Password Input
```tsx
import { Lock, Eye, EyeOff } from "lucide-react";

const [visible, setVisible] = useState(false);

<Input
  size="md"
  type={visible ? "text" : "password"}
  label="Password"
  placeholder="Enter your password"
  leftIcon={<Lock />}
  rightIcon={visible ? <EyeOff /> : <Eye />}
  helperText="Must be at least 8 characters"
/>
```

---

## Features Implemented

### ✅ Core Features
- Two size variants (lg: 40px, md: 36px)
- 12px border radius (as specified)
- Icon support (left, right, or both)
- Automatic icon sizing (16×16px md size)
- Label and helper text
- Full TypeScript support

### ✅ States
- Default
- Hover (border color transition)
- Focus (green border + ring)
- Disabled (grayed out)
- Error (red styling)
- Success (green styling)

### ✅ Accessibility
- Proper ARIA attributes (`aria-invalid` for errors)
- Focus management
- Disabled state handling
- Label association
- Helper text for screen readers

### ✅ Tailwind Implementation
- Pure Tailwind classes (no custom CSS)
- CVA for variant management
- Compound variants for icon padding
- Responsive design ready
- Easy to customize

---

## Technical Implementation

### Component Structure
```
Input Component
├── Label (optional)
├── Container (relative positioning)
│   ├── Left Icon (optional, absolute positioned)
│   ├── Input Element (with dynamic padding)
│   └── Right Icon (optional, absolute positioned)
└── Helper Text (optional)
```

### Icon Integration
- Uses centralized `Icon` component from `ui/icon.tsx`
- Automatic 16×16px sizing (md)
- 2px stroke width
- Color inheritance based on state
- Absolute positioning within container

### State Management
- `error` and `success` props override `variant`
- Icon colors update based on state
- Helper text color updates based on state
- Border and ring colors update based on state

---

## Best Practices Implemented

### UX Best Practices
✅ Clear visual feedback for all states  
✅ Smooth transitions (200ms)  
✅ Proper focus indicators  
✅ Disabled state prevents interaction  
✅ Error and success states are visually distinct  
✅ Helper text provides context  

### Development Best Practices
✅ Type-safe props with TypeScript  
✅ Follows component library patterns  
✅ Extensible with standard HTML input props  
✅ Consistent with Button/IconButton architecture  
✅ Pure Tailwind (no inline styles except for icon color)  
✅ CVA for variant management  

### Accessibility Best Practices
✅ Semantic HTML (`<input>`, `<label>`)  
✅ ARIA attributes for errors  
✅ Focus management  
✅ Keyboard navigation support  
✅ Screen reader friendly  

---

## QA Checklist

### Visual QA
- [ ] Large size is 40px height
- [ ] Medium size is 36px height
- [ ] Border radius is 12px on all inputs
- [ ] Text size is 16px for large, 14px for medium
- [ ] Icons are 16×16px (md size)
- [ ] All colors match specification
- [ ] Hover states work correctly
- [ ] Focus states show green border and ring
- [ ] Disabled state appears grayed out
- [ ] Error state shows red styling
- [ ] Success state shows green styling

### Functional QA
- [ ] Typing works in all inputs
- [ ] Placeholder text displays correctly
- [ ] Label text displays correctly
- [ ] Helper text displays correctly
- [ ] Icons display on correct side
- [ ] Both icons can be used simultaneously
- [ ] Disabled inputs cannot be typed in
- [ ] Error/success props work correctly
- [ ] All HTML input props are passed through

### Interaction QA
- [ ] Focus ring appears on Tab navigation
- [ ] Focus ring appears on click
- [ ] Hover border color changes
- [ ] Transitions are smooth (200ms)
- [ ] Copy/paste works
- [ ] Select all (Cmd/Ctrl + A) works
- [ ] Tab navigation works correctly

---

## Next Steps

1. **QA in Component Library** ✅
   - Visit: `http://localhost:3000/#/component-library`
   - Click "Text Input" in sidebar
   - Test all variants and states

2. **After QA Approval:**
   - [ ] Replace search inputs in dashboard
   - [ ] Replace filter inputs in tables
   - [ ] Replace login/signup inputs
   - [ ] Update any other input fields

3. **Documentation:**
   - [ ] Add Props & API tab to component library
   - [ ] Add Code Examples tab to component library
   - [ ] Update main README with input examples

---

**Component Ready for QA** ✅  
Please review in component library before implementing across the application.


