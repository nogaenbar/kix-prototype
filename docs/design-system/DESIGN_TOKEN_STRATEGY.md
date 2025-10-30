# Design Token Strategy & Migration Plan

## 📋 Current Situation

### **Why We Went Inline (Temporary Fix)**

**Problem:** Tailwind's arbitrary values weren't processing correctly:
```typescript
// ❌ Not working
className="bg-[#407a3f] hover:bg-[#365528]"
```

**Quick Solution:** Inline styles with React state
```typescript
// ✅ Working but not ideal
style={{ backgroundColor: '#407a3f' }}
```

**Why It's Not Ideal:**
- ❌ Hard-coded values scattered across components
- ❌ No single source of truth
- ❌ Difficult to maintain consistency
- ❌ Can't update theme globally
- ❌ No type safety for design tokens
- ❌ Doesn't leverage existing CSS variables

---

## 🎨 What We Already Have

### **Comprehensive Design Token System** ✅

Your `globals.css` already has an excellent token system:

```css
:root {
  /* Primary Green Ramp */
  --primary-50: #ebf5e6;
  --primary-100: #ddefd6;
  --primary-200: #c9e5bd;
  --primary-300: #aed89c;
  --primary-400: #9ace83;
  --primary-500: #78be5a;
  --primary-600: #609848;
  --primary-700: #407a3f;  /* ← Our main green! */
  --primary-800: #365528;  /* ← Hover state! */
  --primary-900: #24391b;  /* ← Active state! */

  /* Semantic Tokens */
  --primary: var(--primary-700);
  --primary-foreground: #ffffff;
  --primary-hover: var(--primary-800);
  --primary-pressed: var(--primary-900);

  /* Border Radius */
  --radius-sm: 6px;
  --radius: 8px;
  --radius-md: 12px;  /* ← Our button radius! */
  
  /* Spacing */
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
}
```

**This is perfect!** We just need to use it.

---

## ✅ The Right Approach: CSS Custom Properties

### **Strategy: Use CSS Variables + Tailwind Classes**

Instead of inline styles OR arbitrary Tailwind values, use:

```typescript
// ✅ BEST: Use CSS custom properties
style={{
  backgroundColor: 'var(--primary)',
  color: 'var(--primary-foreground)',
}}

// OR even better: CSS classes
className="bg-primary text-primary-foreground hover:bg-primary-hover"
```

---

## 🚀 Migration Plan

### **Phase 1: Update Tailwind Config** (1 hour)

Extend Tailwind to recognize your CSS variables as utility classes.

**File: `tailwind.config.js`**

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Map CSS variables to Tailwind utilities
        primary: {
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
          900: 'var(--primary-900)',
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
          hover: 'var(--primary-hover)',
          pressed: 'var(--primary-pressed)',
        },
        neutral: {
          50: 'var(--neutral-50)',
          100: 'var(--neutral-100)',
          300: 'var(--neutral-300)',
          500: 'var(--neutral-500)',
          700: 'var(--neutral-700)',
          900: 'var(--neutral-900)',
        },
        // Semantic colors
        success: 'var(--success)',
        warning: 'var(--warning)',
        critical: 'var(--critical)',
        info: 'var(--info)',
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'DEFAULT': 'var(--radius)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
      },
      spacing: {
        '1': 'var(--space-1)',
        '2': 'var(--space-2)',
        '3': 'var(--space-3)',
        '4': 'var(--space-4)',
        '5': 'var(--space-5)',
        '6': 'var(--space-6)',
      },
    },
  },
};
```

**Result:** Now you can use `bg-primary`, `hover:bg-primary-hover`, `rounded-md`, etc.

---

### **Phase 2: Create Component Token System** (2 hours)

Create a TypeScript file that exports design tokens with type safety.

**File: `src/styles/tokens.ts`**

```typescript
/**
 * Design Tokens - Single Source of Truth
 * Maps to CSS variables defined in globals.css
 */

export const colors = {
  // Primary Green Ramp
  primary: {
    50: 'var(--primary-50)',
    100: 'var(--primary-100)',
    200: 'var(--primary-200)',
    300: 'var(--primary-300)',
    400: 'var(--primary-400)',
    500: 'var(--primary-500)',
    600: 'var(--primary-600)',
    700: 'var(--primary-700)',
    800: 'var(--primary-800)',
    900: 'var(--primary-900)',
  },
  
  // Semantic tokens
  action: {
    primary: {
      default: 'var(--primary)',
      hover: 'var(--primary-hover)',
      pressed: 'var(--primary-pressed)',
      foreground: 'var(--primary-foreground)',
    },
    secondary: {
      default: 'var(--secondary)',
      hover: 'var(--secondary-hover)',
      foreground: 'var(--secondary-foreground)',
    },
    outline: {
      default: 'var(--outline)',
      hover: 'var(--outline-hover)',
      foreground: 'var(--outline-foreground)',
    },
  },
  
  // Light green for filled button icons (from Figma)
  icon: {
    light: '#f5faf5', // Light green for filled buttons
    primary: 'var(--primary)',
  },
} as const;

export const radius = {
  sm: 'var(--radius-sm)',
  default: 'var(--radius)',
  md: 'var(--radius-md)',
  lg: 'var(--radius-lg)',
  xl: 'var(--radius-xl)',
} as const;

export const spacing = {
  1: 'var(--space-1)',
  2: 'var(--space-2)',
  3: 'var(--space-3)',
  4: 'var(--space-4)',
  5: 'var(--space-5)',
  6: 'var(--space-6)',
} as const;

export const typography = {
  caption: 'var(--text-caption)',
  body: 'var(--text-body)',
  bodyLg: 'var(--text-body-lg)',
  h3: 'var(--text-h3)',
  h2: 'var(--text-h2)',
  display: 'var(--text-display)',
} as const;

// Component-specific tokens
export const button = {
  filled: {
    background: {
      default: 'var(--primary)',
      hover: 'var(--primary-hover)',
      pressed: 'var(--primary-pressed)',
    },
    foreground: 'var(--primary-foreground)',
    icon: colors.icon.light,
    border: 'transparent',
  },
  outlined: {
    background: {
      default: 'transparent',
      hover: 'var(--primary-50)',
      pressed: 'var(--primary-100)',
    },
    foreground: 'var(--primary)',
    icon: 'var(--primary)',
    border: 'var(--outline)',
  },
  ghost: {
    background: {
      default: 'transparent',
      hover: 'var(--primary-50)',
      pressed: 'var(--primary-100)',
    },
    foreground: 'var(--primary)',
    icon: 'var(--primary)',
    border: 'transparent',
  },
  size: {
    sm: {
      height: '24px',
      padding: '6px 12px',
      fontSize: 'var(--text-caption)',
      radius: 'var(--radius)',
      iconSize: '12px',
    },
    md: {
      height: '32px',
      padding: '8px 16px',
      fontSize: 'var(--text-body)',
      radius: 'var(--radius-md)',
      iconSize: '16px',
    },
    lg: {
      height: '36px',
      padding: '10px 20px',
      fontSize: 'var(--text-body-lg)',
      radius: 'var(--radius-md)',
      iconSize: '20px',
    },
  },
} as const;

export const iconButton = {
  filled: {
    background: {
      default: 'var(--primary)',
      hover: 'var(--primary-hover)',
      pressed: 'var(--primary-pressed)',
    },
    foreground: colors.icon.light, // #f5faf5
    border: 'transparent',
  },
  outlined: {
    background: {
      default: 'transparent',
      hover: 'var(--primary-50)',
      pressed: 'var(--primary-100)',
    },
    foreground: 'var(--primary)',
    border: 'rgba(64, 122, 63, 0.2)',
  },
  transparent: {
    background: {
      default: 'transparent',
      hover: 'var(--primary-50)',
      pressed: 'var(--primary-100)',
    },
    foreground: 'var(--primary)',
    border: 'transparent',
  },
  size: {
    sm: {
      dimension: '24px',
      iconSize: '12px',
      radius: 'var(--radius)',
    },
    md: {
      dimension: '32px',
      iconSize: '16px',
      radius: 'var(--radius-md)',
    },
    lg: {
      dimension: '36px',
      iconSize: '20px',
      radius: 'var(--radius-md)',
    },
  },
} as const;

// Type exports for TypeScript autocomplete
export type ButtonVariant = keyof typeof button;
export type ButtonSize = keyof typeof button.size;
export type IconButtonVariant = keyof typeof iconButton;
export type IconButtonSize = keyof typeof iconButton.size;
```

---

### **Phase 3: Update Icon Button Component** (1 hour)

Refactor icon button to use tokens instead of hard-coded values.

**File: `src/components/ui/icon-button.tsx`**

```typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot@1.1.2";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";
import { iconButton } from "@/styles/tokens";
import { cn } from "./utils";

// Use Tailwind classes that map to CSS variables
const iconButtonVariants = cva(
  [
    "inline-flex items-center justify-center shrink-0",
    "transition-all duration-200 cursor-pointer border",
    "disabled:pointer-events-none disabled:opacity-50",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary",
  ].join(" "),
  {
    variants: {
      variant: {
        // Now using Tailwind classes with CSS variables
        filled: "bg-primary text-primary-foreground border-transparent hover:bg-primary-hover active:bg-primary-pressed",
        outlined: "bg-transparent text-primary border-primary/20 hover:bg-primary-50 active:bg-primary-100",
        transparent: "bg-transparent text-primary border-transparent hover:bg-primary-50 active:bg-primary-100",
      },
      size: {
        lg: "rounded-md", // Uses --radius-md
        md: "rounded-md",
        sm: "rounded", // Uses --radius
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "md",
    },
  },
);

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant = "filled", size = "md", asChild = false, children, style, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const buttonSize = size || "md";
    const buttonVariant = variant || "filled";
    
    // Get size tokens
    const sizeTokens = iconButton.size[buttonSize];
    
    // Clone children (icon) with proper size
    const clonedChildren = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child as React.ReactElement<any>, {
          style: {
            width: sizeTokens.iconSize,
            height: sizeTokens.iconSize,
            color: 'currentColor', // Inherits from button
          },
        });
      }
      return child;
    });

    return (
      <Comp
        className={cn(iconButtonVariants({ variant: buttonVariant, size: buttonSize, className }))}
        style={{
          width: sizeTokens.dimension,
          height: sizeTokens.dimension,
          borderRadius: sizeTokens.radius,
          ...style,
        }}
        ref={ref}
        {...props}
      >
        {clonedChildren}
      </Comp>
    );
  },
);
IconButton.displayName = "IconButton";

export { IconButton, iconButtonVariants };
```

**Benefits:**
- ✅ Uses Tailwind classes (`:hover`, `:active` work automatically!)
- ✅ No React state needed for hover/active
- ✅ CSS variables for colors
- ✅ Token system for sizing
- ✅ Type-safe with TypeScript

---

### **Phase 4: Add Missing CSS Variables** (30 min)

Update `globals.css` to include light green for icons:

```css
:root {
  /* ... existing tokens ... */
  
  /* Icon colors */
  --icon-light: #f5faf5; /* Light green for filled buttons */
  --icon-primary: var(--primary);
  
  /* Component-specific tokens */
  --button-filled-icon: var(--icon-light);
  --button-outlined-icon: var(--primary);
  --button-ghost-icon: var(--primary);
}
```

---

### **Phase 5: Update Tailwind Config** (1 hour)

Ensure Tailwind recognizes CSS variables for hover/active states:

**File: `tailwind.config.js`**

```javascript
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          50: 'rgb(var(--primary-50) / <alpha-value>)',
          // ... etc
          hover: 'rgb(var(--primary-hover) / <alpha-value>)',
          pressed: 'rgb(var(--primary-pressed) / <alpha-value>)',
          foreground: 'rgb(var(--primary-foreground) / <alpha-value>)',
        },
      },
    },
  },
};
```

**Note:** For alpha transparency support, CSS variables need to be in RGB format:

```css
:root {
  --primary-700-rgb: 64, 122, 63;
  --primary: rgb(var(--primary-700-rgb));
}
```

Then Tailwind can do: `bg-primary/50` (50% opacity)

---

## 📊 Comparison: Before vs After

### **Current (Inline Styles):**

```typescript
❌ Hard-coded values
const variantStyles = {
  filled: {
    initial: {
      backgroundColor: '#407a3f',
      color: '#f5faf5',
    },
    hover: {
      backgroundColor: '#365528',
    },
  },
};

❌ React state for hover
const [isHovered, setIsHovered] = useState(false);

❌ Manual event handlers
onMouseEnter={() => setIsHovered(true)}
```

**Problems:**
- No single source of truth
- Can't change theme globally
- Re-renders on hover
- Hard to maintain

---

### **Proposed (Design Tokens):**

```typescript
✅ Token-based
import { iconButton } from '@/styles/tokens';

✅ Tailwind classes (CSS handles hover)
className="bg-primary hover:bg-primary-hover active:bg-primary-pressed"

✅ CSS variables for dynamic values
style={{
  width: iconButton.size.lg.dimension,
  borderRadius: iconButton.size.lg.radius,
}}
```

**Benefits:**
- Single source of truth (`globals.css` + `tokens.ts`)
- Global theme changes
- No re-renders
- Type-safe
- Easier to maintain

---

## 🎯 Rollout Strategy

### **Week 1: Foundation**
- [ ] Update `globals.css` with all component tokens
- [ ] Create `src/styles/tokens.ts` with typed exports
- [ ] Update `tailwind.config.js` to map CSS variables
- [ ] Test Tailwind classes work (`bg-primary`, `hover:bg-primary-hover`)

### **Week 2: Component Migration**
- [ ] Migrate `IconButton` to token system
- [ ] Migrate `Button` to token system
- [ ] Update component library showcases
- [ ] Test all states (hover, active, disabled)

### **Week 3: Remaining Components**
- [ ] Audit all components for hard-coded values
- [ ] Migrate data tables to tokens
- [ ] Migrate cards to tokens
- [ ] Migrate navigation to tokens

### **Week 4: Documentation & Cleanup**
- [ ] Document token system usage
- [ ] Create token visual reference
- [ ] Remove all inline style workarounds
- [ ] Update component library with token info

---

## 🛠️ Implementation Priority

### **High Priority (Do First):**
1. ✅ **Icon Button** - Most problematic, needs immediate fix
2. ✅ **Text Button** - Same issues as icon button
3. **Badge Components** - Small, easy wins
4. **Input Components** - User-facing, high visibility

### **Medium Priority:**
5. **Data Tables** - Complex but consistent
6. **Cards** - Many variants to cover
7. **Navigation** - Multiple components

### **Low Priority:**
8. **Layout Components** - Mostly working
9. **Utility Components** - Edge cases

---

## 📚 Documentation Strategy

### **1. Token Reference Sheet**

Create `src/styles/TOKEN_REFERENCE.md`:

```markdown
# Design Token Reference

## Colors

### Primary Green Ramp
- `--primary-50` → `#ebf5e6` (Lightest)
- `--primary-700` → `#407a3f` (Main brand)
- `--primary-900` → `#24391b` (Darkest)

### Semantic Tokens
- `--primary` → Main action color
- `--primary-hover` → Hover state
- `--primary-pressed` → Active/pressed state

## Usage

### In CSS:
```css
.my-button {
  background: var(--primary);
}
.my-button:hover {
  background: var(--primary-hover);
}
```

### In Tailwind:
```html
<button class="bg-primary hover:bg-primary-hover">
  Click me
</button>
```

### In TypeScript:
```typescript
import { iconButton } from '@/styles/tokens';

style={{ color: iconButton.filled.foreground }}
```
```

---

### **2. Migration Guide**

Create `COMPONENT_MIGRATION_GUIDE.md`:

```markdown
# Component Migration Guide

## From Inline Styles to Tokens

### Step 1: Identify hard-coded values
```typescript
// ❌ Before
style={{ backgroundColor: '#407a3f' }}
```

### Step 2: Find corresponding token
```typescript
// ✅ After
style={{ backgroundColor: 'var(--primary)' }}
```

### Step 3: Use Tailwind if possible
```typescript
// ✅✅ Best
className="bg-primary"
```

## Common Patterns

### Button Backgrounds
- `#407a3f` → `var(--primary)` or `bg-primary`
- `#365528` → `var(--primary-hover)` or `hover:bg-primary-hover`
- `#24391b` → `var(--primary-pressed)` or `active:bg-primary-pressed`

### Icon Colors
- `#f5faf5` → `var(--icon-light)` (filled buttons)
- `#407a3f` → `var(--primary)` (outlined/ghost buttons)

### Border Radius
- `12px` → `var(--radius-md)` or `rounded-md`
- `8px` → `var(--radius)` or `rounded`
```

---

## ✅ Benefits of This Approach

### **For Developers:**
- 🎯 Type-safe token access
- 🔍 Autocomplete in IDE
- 📝 Clear documentation
- 🚀 Faster development

### **For Designers:**
- 🎨 Single source of truth
- 🔄 Global theme updates
- 📊 Token visual reference
- ✅ Figma → Code consistency

### **For the Product:**
- 🏗️ Scalable design system
- 🔧 Easy maintenance
- 🎯 Consistent UX
- 📈 Future-proof

---

## 🚨 Important Considerations

### **1. CSS Variable Browser Support**
✅ Supported in all modern browsers (95%+ coverage)
❌ IE11 not supported (but IE is EOL)

### **2. Tailwind JIT Mode**
Ensure JIT mode is enabled for dynamic class generation:

```javascript
// tailwind.config.js
module.exports = {
  mode: 'jit', // Just-in-Time mode
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
};
```

### **3. Performance**
CSS variables + Tailwind = **faster** than inline styles:
- No React re-renders
- CSS-based hover/active (GPU-accelerated)
- Smaller bundle (classes vs inline objects)

---

## 📋 Next Steps

### **Immediate Action (Today):**
1. Review this strategy
2. Approve approach
3. Decide on timeline

### **This Week:**
1. I'll update `globals.css` with missing tokens
2. Create `tokens.ts` with TypeScript exports
3. Update Tailwind config
4. Migrate Icon Button as proof-of-concept

### **Next Week:**
1. Migrate remaining button components
2. Update component library
3. Document token system

---

## 🎉 End Goal

```typescript
// ✅ Future Component Code

import { button } from '@/styles/tokens';

export function Button({ variant = 'filled', size = 'md' }) {
  return (
    <button
      className={cn(
        // Base styles
        "inline-flex items-center gap-2 transition-all",
        // Variant styles (uses CSS variables)
        variant === 'filled' && "bg-primary text-primary-foreground hover:bg-primary-hover",
        variant === 'outlined' && "bg-transparent text-primary border border-primary/20 hover:bg-primary-50",
        // Size styles (uses tokens)
        size === 'lg' && "h-9 px-5 text-base rounded-md",
        size === 'md' && "h-8 px-4 text-sm rounded-md",
      )}
    >
      {children}
    </button>
  );
}
```

**Result:**
- ✅ Clean, maintainable code
- ✅ Design tokens everywhere
- ✅ Type-safe
- ✅ CSS handles all states
- ✅ No inline styles
- ✅ Scalable design system

---

**Ready to implement? Let me know if you'd like me to:**
1. Start Phase 1 (Tailwind config update)
2. Create the tokens.ts file
3. Migrate Icon Button as proof-of-concept
4. All of the above

This is the proper foundation for a production-ready design system! 🚀

