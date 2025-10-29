# ✅ Tailwind + Figma: Pixel-Perfect Matching Guide

**Question:** Can Tailwind reproduce exact Figma designs with KIX colors and styles?  
**Answer:** **YES! Absolutely!** 🎯

---

## 🎯 **How Tailwind Accesses Your KIX Design Tokens**

### **You Already Have It Set Up!** ✅

Your `globals.css` has `@theme inline` which maps CSS variables to Tailwind:

```css
@theme inline {
  --color-primary: var(--primary);           /* ✅ Accessible as bg-primary */
  --color-primary-700: var(--primary-700);   /* ✅ Accessible as bg-[var(--primary-700)] */
  --radius-md: var(--radius-md);             /* ✅ Accessible as rounded-md (12px) */
}
```

**This means Tailwind can use ALL your KIX tokens!** 🎉

---

## 📊 **Your KIX Tokens → Tailwind Usage**

### **Colors**

#### **Primary Green Ramp** (Fully Available)
```tsx
// Using semantic names (via @theme)
bg-primary          // → #407a3f (primary-700)
text-primary        // → #407a3f
hover:bg-primary-hover  // → #365528 (primary-800)
active:bg-primary-pressed // → #24391b (primary-900)

// Using direct CSS variables (arbitrary values)
bg-[var(--primary-50)]    // → #ebf5e6
bg-[var(--primary-100)]   // → #ddefd6
bg-[var(--primary-700)]   // → #407a3f
bg-[var(--primary-900)]   // → #24391b
```

#### **Neutrals** (Fully Available)
```tsx
bg-neutral-50      // → #f8fafc
bg-neutral-100      // → #f1f5f9
text-neutral-700   // → #334155
border-neutral-300  // → #cbd5e1
```

#### **Semantics** (Fully Available)
```tsx
bg-[var(--success)]        // → #1f7a3a
bg-[var(--warning)]        // → #b76e00
bg-[var(--critical)]       // → #b42318
bg-[var(--critical-tint)]  // → #fee2e2
```

#### **Priority Colors** (Mapped in @theme)
```tsx
bg-priority-critical      // → var(--critical)
bg-priority-critical-bg  // → var(--critical-tint)
bg-priority-normal       // → var(--primary-700)
bg-priority-low          // → var(--info)
```

#### **Status Colors** (Mapped in @theme)
```tsx
bg-status-new     // → var(--primary-700)
bg-status-open    // → var(--info)
bg-status-closed  // → var(--success)
```

---

### **Spacing** (8-Point Grid)

#### **Your Custom Spacing Variables**
```tsx
// Direct CSS variables
p-[var(--space-1)]   // → 8px
p-[var(--space-2)]   // → 16px
p-[var(--space-3)]   // → 24px
gap-[var(--space-4)] // → 32px
```

#### **Or Use Tailwind Defaults (Similar Values)**
```tsx
p-2    // → 8px (matches --space-1)
p-4    // → 16px (matches --space-2)
p-6    // → 24px (matches --space-3)
p-8    // → 32px (matches --space-4)
```

#### **Arbitrary Values for Exact Pixels**
```tsx
h-[32px]   // → Exactly 32px (any value you want!)
w-[158px]  // → Exactly 158px (KPI card height)
px-[12px]  // → Exactly 12px horizontal padding
py-[10px]  // → Exactly 10px vertical padding
gap-[4px]  // → Exactly 4px gap
```

**Pro tip:** For Figma pixel-perfect matching, use `[value]px` arbitrary values! ✅

---

### **Border Radius**

#### **Your Custom Radius Variables**
```tsx
rounded-[var(--radius-sm)]   // → 6px
rounded-[var(--radius)]      // → 8px
rounded-[var(--radius-md)]   // → 12px (most common!)
rounded-[var(--radius-lg)]   // → 16px
```

#### **Or Use Tailwind Semantic Names** (Already Mapped)
```tsx
rounded-sm   // → 6px (via --radius-sm)
rounded      // → 8px (via --radius)
rounded-md   // → 12px (via --radius-md)
rounded-lg   // → 16px (via --radius-lg)
```

#### **Arbitrary Values for Exact Radius**
```tsx
rounded-[12px]   // → Exactly 12px (most common in your designs)
rounded-[8px]    // → Exactly 8px
rounded-[24px]   // → Exactly 24px (for side nav/top bar)
```

---

### **Typography**

#### **Your Custom Text Sizes**
```tsx
text-[var(--text-caption)]   // → 12px
text-[var(--text-body)]      // → 14px
text-[var(--text-body-lg)]   // → 16px
text-[var(--text-h2)]        // → 20px
text-[var(--text-display)]   // → 24px
```

#### **Or Use Tailwind Defaults**
```tsx
text-xs   // → 12px (matches --text-caption)
text-sm   // → 14px (matches --text-body)
text-base // → 16px (matches --text-body-lg)
text-xl   // → 20px (matches --text-h2)
text-2xl  // → 24px (matches --text-display)
```

#### **Arbitrary Values for Exact Sizes**
```tsx
text-[14px]  // → Exactly 14px
text-[18px]  // → Exactly 18px (data table headers)
text-[42px]  // → Exactly 42px (KPI hero values)
leading-[20px] // → Exactly 20px line height
```

---

### **Shadows** (Already Defined)

```tsx
shadow-[var(--shadow-card-sm)]  // → 0 1px 2px 0 rgb(0 0 0 / 0.05)
shadow-[var(--shadow-card-md)]  // → Multi-layer shadow
shadow-[var(--shadow-popover)]  // → Popover shadow
```

**Note:** You also have `.shadow-card-sm` utility class in globals.css! ✅

---

## 🎨 **Real-World Examples: Current vs Tailwind**

### **Example 1: Button (Figma Spec: 32px height, 12px radius, 12px padding)**

#### **Current (Inline Styles)**
```tsx
// ui/button.tsx
style={{
  height: '32px',
  borderRadius: '12px',
  padding: '0 12px',
}}
```

#### **Tailwind Equivalent (Exact Match)**
```tsx
className="h-[32px] rounded-[12px] px-[12px]"
// OR using your tokens
className="h-[32px] rounded-md px-[var(--space-3)]"
```

**Result:** ✅ **Identical!** Same pixels, cleaner code.

---

### **Example 2: Button with KIX Primary Color**

#### **Current (Inline Styles)**
```tsx
style={{
  backgroundColor: '#407a3f',  // primary-700
  color: '#ffffff',
}}
hover:style={{
  backgroundColor: '#365528',  // primary-800
}}
```

#### **Tailwind Equivalent**
```tsx
className="bg-primary text-primary-foreground hover:bg-primary-hover"
// OR direct variable
className="bg-[var(--primary-700)] text-white hover:bg-[var(--primary-800)]"
```

**Result:** ✅ **Identical!** Uses your exact KIX colors.

---

### **Example 3: Card (Figma Spec: white, 12px radius, 24px padding)**

#### **Current (kix-card class)**
```tsx
<Card className="kix-card">
```
```css
.kix-card {
  @apply bg-white rounded-xl;  /* rounded-xl = 12px */
}
```

#### **Tailwind Equivalent**
```tsx
className="bg-white rounded-[12px]"
// OR
className="bg-white rounded-md"  /* rounded-md = 12px via your tokens */
```

**Result:** ✅ **Identical!** No need for custom class.

---

### **Example 4: Data Table Button (Current Mixed Approach)**

#### **Current (Problematic!)**
```tsx
// kix-data-table-new.tsx
<button className="kix-button-secondary h-[32px] px-[12px] gap-[8px] rounded-[12px]">
```
**Problem:** `.kix-button-secondary` already has `px-4` (16px), then overrides with `px-[12px]`!

#### **Tailwind Equivalent (Clean)**
```tsx
className="bg-white text-primary border border-outline hover:bg-accent h-[32px] px-[12px] gap-[8px] rounded-[12px]"
```

**Result:** ✅ **Exact match, no conflicts!**

---

### **Example 5: KPI Tile (158px height, specific spacing)**

#### **Current**
```tsx
<Card className="kix-card kix-kpi-tile">
```
```css
.kix-kpi-tile:not(.kix-kpi-hero) {
  height: var(--kpi-card-height) !important; /* 158px */
}
```

#### **Tailwind Equivalent**
```tsx
className="bg-white rounded-[12px] h-[158px]"
// OR using your variable
className="bg-white rounded-[12px] h-[var(--kpi-card-height)]"
```

**Result:** ✅ **Identical!**

---

## 🎯 **Key Takeaways**

### **✅ What Tailwind CAN Do (Everything You Need!)**

1. **✅ Exact Pixel Values**
   ```tsx
   h-[32px] px-[12px] rounded-[12px]  // Any exact value!
   ```

2. **✅ Your KIX Colors**
   ```tsx
   bg-primary hover:bg-primary-hover  // Uses your CSS variables
   bg-[var(--primary-700)]             // Direct access
   ```

3. **✅ Your Custom Spacing**
   ```tsx
   p-[var(--space-3)] gap-[var(--space-2)]  // 8-point grid
   ```

4. **✅ Your Custom Radius**
   ```tsx
   rounded-md  // → 12px (via your --radius-md)
   rounded-[12px]  // → Exact value
   ```

5. **✅ Your Typography Scale**
   ```tsx
   text-[14px] leading-[20px]  // Exact Figma values
   ```

6. **✅ Semantic Colors**
   ```tsx
   bg-priority-critical  // → Uses your token system
   bg-status-new         // → Uses your token system
   ```

---

### **🔧 How It Works (Technical)**

#### **Tailwind v4 + CSS Variables = Perfect Match**

1. **Your CSS Variables** → Defined in `:root`
   ```css
   --primary-700: #407a3f;
   --radius-md: 12px;
   --space-3: 24px;
   ```

2. **@theme inline** → Maps to Tailwind
   ```css
   @theme inline {
     --color-primary: var(--primary);
     --radius-md: var(--radius-md);
   }
   ```

3. **Tailwind Classes** → Access via semantic names
   ```tsx
   bg-primary rounded-md  // → Uses your variables!
   ```

4. **Arbitrary Values** → Direct variable access
   ```tsx
   bg-[var(--primary-700)] rounded-[12px]  // Direct access
   ```

---

## 📊 **Comparison: Current vs Tailwind Approach**

### **Current Approach (3 Systems)**

| Pattern | Example | Problem |
|---------|---------|---------|
| Custom class | `kix-button-primary` | Needs @apply, conflicts possible |
| Inline styles | `style={{ height: '32px' }}` | Not reusable, verbose |
| Tailwind direct | `h-[32px] bg-white` | Mixed with other patterns |

**Result:** Confusion, conflicts, maintenance burden 😫

---

### **Tailwind-Only Approach (1 System)**

| Pattern | Example | Benefit |
|---------|---------|---------|
| Tailwind + tokens | `bg-primary h-[32px] rounded-md` | ✅ Single system, clean, reusable |
| Tailwind + arbitrary | `bg-[var(--primary-700)] px-[12px]` | ✅ Exact pixels, direct variable access |

**Result:** Clean, consistent, pixel-perfect! 🎉

---

## 🚀 **Migration Example: Button**

### **BEFORE (Current Mixed Approach)**

```tsx
// Option A: Custom class
<button className="kix-button-primary">

// Option B: Mixed (conflicting!)
<button className="kix-button-secondary h-[32px] px-[12px]">

// Option C: Inline styles
<Button style={{ height: '32px', backgroundColor: '#407a3f' }}>
```

### **AFTER (Tailwind Only)**

```tsx
// Clean, consistent, pixel-perfect
<button className="bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-pressed h-[32px] px-[12px] rounded-[12px] font-medium transition-colors">

// OR using new Button component (which already uses inline styles - that's fine!)
<Button variant="filled" size="md">
```

**Best of both worlds:** Use Button component when available, Tailwind utilities elsewhere! ✅

---

## ✅ **Your Concerns Addressed**

### **Q: Can Tailwind match exact Figma pixels?**
**A:** ✅ YES! Use arbitrary values: `h-[32px] px-[12px] rounded-[12px]`

### **Q: Can Tailwind use my KIX colors?**
**A:** ✅ YES! Via `@theme inline`: `bg-primary`, `text-primary-foreground`, etc.

### **Q: Can Tailwind use my custom spacing (8-point grid)?**
**A:** ✅ YES! Via CSS variables: `p-[var(--space-3)]` or Tailwind defaults: `p-6` (24px)

### **Q: Can Tailwind use my custom radius?**
**A:** ✅ YES! Via `@theme inline`: `rounded-md` (12px) or arbitrary: `rounded-[12px]`

### **Q: Will I lose pixel-perfect control?**
**A:** ❌ NO! Arbitrary values give you exact control: `h-[32px]` = exactly 32px

---

## 🎯 **Recommendation**

### **Option A: Full Tailwind Migration** ✅

**Use:**
1. ✅ Tailwind utilities for layout/spacing (flex, gap, padding)
2. ✅ Your CSS variables via Tailwind (`bg-primary`, `rounded-md`)
3. ✅ Arbitrary values for exact pixels (`h-[32px]`, `px-[12px]`)
4. ✅ Button/IconButton components for complex interactions

**Remove:**
- ❌ Custom `.kix-*` classes that use `@apply`
- ❌ Mixed approaches (custom class + Tailwind overrides)

**Keep:**
- ✅ CSS variables (design tokens) - single source of truth
- ✅ @theme inline mappings - enables Tailwind access
- ✅ Button/IconButton components - already pixel-perfect

---

## 📝 **Example: Complete Button Migration**

### **Current (Using kix-button-secondary)**

```tsx
// kix-data-table-new.tsx
<button className="kix-button-secondary h-[32px] px-[12px] gap-[8px] rounded-[12px] flex items-center justify-center">
```

### **After (Pure Tailwind)**

```tsx
// Clean, no conflicts, pixel-perfect
<button className="bg-white text-primary border border-outline hover:bg-accent active:bg-accent/80 h-[32px] px-[12px] gap-[8px] rounded-[12px] flex items-center justify-center font-medium transition-colors">
```

**Benefits:**
- ✅ No CSS class dependency
- ✅ No override conflicts
- ✅ Uses your exact KIX colors
- ✅ Pixel-perfect matching
- ✅ Self-documenting (see all styles in one place)

---

## 🎉 **Conclusion**

**YES, Tailwind can absolutely reproduce your Figma designs pixel-perfectly!**

**You have:**
- ✅ All KIX colors as CSS variables
- ✅ `@theme inline` mapping for Tailwind access
- ✅ Arbitrary value support for exact pixels
- ✅ Custom spacing/radius already defined

**The migration will:**
- ✅ Simplify your codebase (1 system instead of 3)
- ✅ Maintain pixel-perfect matching
- ✅ Keep your design tokens intact
- ✅ Reduce conflicts and maintenance burden

**Ready to proceed with Option A?** 🚀

