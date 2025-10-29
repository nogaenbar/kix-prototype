# Lucide Icons Guide

## 📦 What are Lucide Icons?

**Lucide** is a beautiful, consistent icon library with over 3000+ icons. In your project, you're using **`lucide-react`** v0.487.0.

**Official Website:** [https://lucide.dev/icons/](https://lucide.dev/icons/)

---

## 🔧 How Lucide Works in This Project

### **Installation**
Lucide icons are **installed locally** via npm (not fetched from an API):

```json
// package.json
"lucide-react": "^0.487.0"
```

### **Architecture**
- ✅ **React Components** - Each icon is a React component
- ✅ **Tree-shakeable** - Only imported icons are bundled
- ✅ **SVG-based** - Renders as inline SVG elements
- ✅ **Highly optimized** - Minimal overhead (~1-2KB per icon)

### **How It Works**
```tsx
import { Plus, Trash2, Search } from "lucide-react";

// Renders an SVG icon
<Plus />

// You can pass props
<Plus size={24} color="red" strokeWidth={2} />
```

Each icon component renders an `<svg>` element with properly optimized paths.

---

## 💻 Usage in KIX Components

### **Icon Button Component**
```tsx
import { IconButton } from "@/components/ui/icon-button";
import { Plus, Trash2, Edit } from "lucide-react";

// The IconButton automatically sizes the icon based on button size
<IconButton variant="filled" size="lg">
  <Plus />  {/* Automatically sized to 20×20px */}
</IconButton>

<IconButton variant="outlined" size="md">
  <Edit />  {/* Automatically sized to 16×16px */}
</IconButton>

<IconButton variant="transparent" size="sm">
  <Trash2 />  {/* Automatically sized to 12×12px */}
</IconButton>
```

### **Text Button Component**
```tsx
import { Button } from "@/components/ui/button";
import { Plus, Download, ChevronDown } from "lucide-react";

// Icons are automatically sized based on button size
<Button variant="filled" size="lg">
  <Plus />
  New Ticket
</Button>

<Button variant="outlined" size="md">
  Export
  <Download />
</Button>

<Button variant="ghost" size="sm">
  <ChevronDown />
  More
</Button>
```

---

## 📐 Automatic Icon Sizing

### **Icon Button Sizes**
The `IconButton` component **automatically sizes** icons:

| Button Size | Button Dimensions | Icon Size |
|-------------|-------------------|-----------|
| `lg`        | 36×36px          | 20×20px   |
| `md`        | 32×32px          | 16×16px   |
| `sm`        | 24×24px          | 12×12px   |

**Implementation:**
```tsx
// src/components/ui/icon-button.tsx
const sizeStyles = {
  lg: {
    button: { width: '36px', height: '36px' },
    icon: { width: '20px', height: '20px' },
  },
  md: {
    button: { width: '32px', height: '32px' },
    icon: { width: '16px', height: '16px' },
  },
  sm: {
    button: { width: '24px', height: '24px' },
    icon: { width: '12px', height: '12px' },
  },
};

// Icons are cloned with proper sizing
const clonedChildren = React.Children.map(children, (child) => {
  if (React.isValidElement(child)) {
    return React.cloneElement(child, {
      style: sizeStyle.icon,
    });
  }
  return child;
});
```

### **Text Button Sizes**
The `Button` component also automatically sizes icons:

| Button Size | Button Height | Icon Size |
|-------------|---------------|-----------|
| `lg`        | 36px         | 20×20px   |
| `md`        | 32px         | 16×16px   |
| `sm`        | 24px         | 12×12px   |

---

## 🎨 Available Icons

### **Common Icons Used in KIX**
```tsx
import {
  // Actions
  Plus, Edit, Trash2, Copy, Share2, Download, Upload,
  
  // Navigation
  ChevronDown, ChevronUp, ChevronLeft, ChevronRight, ArrowRight,
  
  // UI Elements
  Search, Filter, Settings, X, Check, AlertCircle,
  
  // Communication
  Mail, Bell, MessageSquare,
  
  // Files
  FileDown, File, Folder,
  
  // And 3000+ more...
} from "lucide-react";
```

**Browse all icons:** [https://lucide.dev/icons/](https://lucide.dev/icons/)

---

## 🔍 Finding Icons

### **1. Visit Lucide Website**
Go to [https://lucide.dev/icons/](https://lucide.dev/icons/)

### **2. Search for Icon**
Use the search bar or browse by category:
- Accessibility (30)
- Accounts & access (133)
- Animals (23)
- Arrows (206)
- Brands (21)
- Buildings (25)
- Charts (31)
- Communication (54)
- Connectivity (90)
- ...and many more

### **3. Copy Icon Name**
Click on an icon to see its name and usage:
```tsx
import { IconName } from "lucide-react";

<IconName />
```

### **4. Use in Your Component**
```tsx
import { IconName } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";

<IconButton variant="filled" size="md">
  <IconName />
</IconButton>
```

---

## 🎯 Best Practices

### **1. Import Only What You Need**
```tsx
// ✅ Good - Tree-shakeable
import { Plus, Trash2 } from "lucide-react";

// ❌ Bad - Imports everything
import * as Icons from "lucide-react";
```

### **2. Let Components Handle Sizing**
```tsx
// ✅ Good - Let IconButton handle sizing
<IconButton variant="filled" size="lg">
  <Plus />
</IconButton>

// ❌ Avoid - Manual sizing conflicts with auto-sizing
<IconButton variant="filled" size="lg">
  <Plus size={30} />  // Will be overridden
</IconButton>
```

### **3. Use Semantic Icon Names**
```tsx
// ✅ Good - Clear intent
<IconButton aria-label="Delete item">
  <Trash2 />
</IconButton>

// ✅ Good - Descriptive
<IconButton aria-label="Add new ticket">
  <Plus />
</IconButton>
```

### **4. Always Include aria-label**
```tsx
// ✅ Good - Accessible
<IconButton aria-label="Close dialog">
  <X />
</IconButton>

// ❌ Bad - Not accessible
<IconButton>
  <X />
</IconButton>
```

---

## 📦 Bundle Impact

### **Size Optimization**
Lucide icons are highly optimized:

| Metric | Value |
|--------|-------|
| **Single Icon** | ~1-2KB gzipped |
| **10 Icons** | ~10-15KB gzipped |
| **Tree-shaking** | ✅ Enabled |
| **Format** | Optimized SVG |

### **Example Bundle Analysis**
```
Icon Button Component: ~2KB
10 Lucide Icons: ~12KB
Total: ~14KB gzipped
```

**No API calls** - Icons are bundled at build time.

---

## 🔧 Advanced Usage

### **Custom Styling**
While components handle sizing automatically, you can still customize:

```tsx
// Color (inherited from text color)
<IconButton variant="filled" size="lg">
  <Plus className="text-white" />
</IconButton>

// Stroke width (rarely needed)
<IconButton variant="outlined" size="md">
  <Edit strokeWidth={2.5} />
</IconButton>

// Custom class (use sparingly)
<IconButton variant="transparent" size="sm">
  <Search className="opacity-70" />
</IconButton>
```

### **Animations**
```tsx
// Rotate animation
<IconButton variant="filled" size="md">
  <Settings className="animate-spin" />
</IconButton>

// Bounce animation
<IconButton variant="outlined" size="lg">
  <Bell className="animate-bounce" />
</IconButton>
```

### **Conditional Icons**
```tsx
const [isOpen, setIsOpen] = useState(false);

<IconButton onClick={() => setIsOpen(!isOpen)}>
  {isOpen ? <ChevronUp /> : <ChevronDown />}
</IconButton>
```

---

## 🐛 Troubleshooting

### **Issue: Icons Not Showing**
**Problem:** Icon doesn't render  
**Solution:** Check import and component usage
```tsx
// ✅ Correct
import { Plus } from "lucide-react";
<IconButton><Plus /></IconButton>

// ❌ Wrong - Missing from
import Plus from "lucide-react";
```

### **Issue: Wrong Icon Size**
**Problem:** Icon size doesn't match button  
**Solution:** Let the component handle sizing
```tsx
// ✅ Correct - Auto-sized
<IconButton size="lg"><Plus /></IconButton>

// ❌ Wrong - Manual override
<IconButton size="lg"><Plus size={16} /></IconButton>
```

### **Issue: Icon Not Clickable**
**Problem:** Click doesn't work  
**Solution:** Ensure button is not disabled and icon is inside button
```tsx
// ✅ Correct
<IconButton onClick={handleClick}>
  <Plus />
</IconButton>

// ❌ Wrong - Icon outside button
<div>
  <Plus />
  <IconButton onClick={handleClick} />
</div>
```

---

## 📚 Resources

### **Official Documentation**
- **Website:** [https://lucide.dev/](https://lucide.dev/)
- **Icons Browser:** [https://lucide.dev/icons/](https://lucide.dev/icons/)
- **GitHub:** [https://github.com/lucide-icons/lucide](https://github.com/lucide-icons/lucide)

### **React Docs**
- **NPM Package:** [lucide-react](https://www.npmjs.com/package/lucide-react)
- **Props:** size, color, strokeWidth, absoluteStrokeWidth
- **Accessibility:** ARIA attributes supported

### **KIX Component Docs**
- **Icon Button:** `ICON_BUTTON_SPECS.md`
- **Text Button:** `BUTTON_FIGMA_SPECS.md`
- **Component Library:** `DESIGN_SYSTEM_LIBRARY.md`

---

## ✨ Summary

### **Key Points:**
✅ Lucide icons are **installed locally** (not API-based)  
✅ Each icon is a **React component**  
✅ Icons are **tree-shakeable** (only imported icons in bundle)  
✅ **Auto-sizing** in IconButton and Button components  
✅ **3000+ icons** available  
✅ **Highly optimized** (~1-2KB per icon)  
✅ **Zero runtime overhead**  

### **Quick Usage:**
```tsx
import { Plus } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";

<IconButton variant="filled" size="md" aria-label="Add item">
  <Plus />
</IconButton>
```

---

**Version:** lucide-react ^0.487.0  
**Icons Available:** 3000+  
**Bundle Impact:** Minimal (~1-2KB per icon)  
**Tree-shaking:** ✅ Enabled  

