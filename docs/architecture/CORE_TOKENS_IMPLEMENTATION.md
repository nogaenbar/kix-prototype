# Core Design Tokens Implementation

## ✅ Phase 1 Complete: Add Core Tokens to globals.css

### **What We Added (Lines 67-82 in `globals.css`):**

```css
/* Icon Colors (Used in button components) */
--icon-light: #f5faf5; /* Light green for filled button icons */
--icon-primary: #407a3f; /* Same as primary-700, for outlined/ghost icons */
--icon-disabled: #969696; /* Gray for disabled states */

/* Border Colors (Used in button/input components) */
--border-primary-subtle: rgba(64, 122, 63, 0.2); /* 20% opacity primary for outlined buttons */
--border-disabled: #cdcdcd; /* Gray border for disabled states */

/* Background States (Used in interactive components) */
--bg-hover-subtle: #deeedd; /* Light green hover for outlined/transparent buttons */
--bg-pressed-subtle: #bcdcbc; /* Slightly darker pressed state */
--bg-disabled-overlay: rgba(205, 205, 205, 0.48); /* 48% gray overlay for disabled */
```

### **Core Tokens Already Present:**

✅ **Colors:**
- Primary green ramp: `--primary-50` through `--primary-900`
- Neutral colors: `--neutral-50` through `--neutral-900`
- Semantic colors: `--success`, `--warning`, `--critical`, `--info`

✅ **Typography:**
- `--text-caption`: 12px
- `--text-body`: 14px
- `--text-body-lg`: 16px
- `--text-h3`: 16px
- `--text-h2`: 20px
- `--text-display`: 24px

✅ **Spacing (8px grid):**
- `--space-1`: 8px
- `--space-2`: 16px
- `--space-3`: 24px
- `--space-4`: 32px
- `--space-5`: 40px
- `--space-6`: 48px

✅ **Border Radii:**
- `--radius-sm`: 6px
- `--radius`: 8px
- `--radius-md`: 12px
- `--radius-lg`: 16px
- `--radius-xl`: 20px

✅ **Shadows:**
- `--shadow-card-sm`
- `--shadow-card-md`
- `--shadow-popover`

---

## 🎯 What's Next (If Approved):

### **Phase 2: Create TypeScript Token File** (~15 min)

Create `src/styles/tokens.ts` to export core tokens with type safety:

```typescript
export const colors = {
  primary: {
    50: 'var(--primary-50)',
    // ... all values
    900: 'var(--primary-900)',
  },
  icon: {
    light: 'var(--icon-light)',
    primary: 'var(--icon-primary)',
    disabled: 'var(--icon-disabled)',
  },
} as const;

export const spacing = {
  1: 'var(--space-1)',
  // ... etc
} as const;

// Type exports
export type ColorToken = keyof typeof colors;
```

**Why:** Type-safe token access in TypeScript components

---

### **Phase 3: Update Icon Button (Proof of Concept)** (~20 min)

Replace inline styles with CSS variable references:

```typescript
// ❌ Before
const variantStyles = {
  filled: {
    initial: { backgroundColor: '#407a3f', color: '#f5faf5' }
  }
};

// ✅ After
const variantStyles = {
  filled: {
    initial: {
      backgroundColor: 'var(--primary-700)',
      color: 'var(--icon-light)'
    }
  }
};
```

**Why:** Single source of truth, easier to maintain

---

### **Phase 4: Test Icon Button** (~10 min)

1. Visit http://localhost:3000/#/component-library
2. Verify colors are correct
3. Test hover/active states
4. Ensure nothing broke

---

### **Phase 5: Update Tailwind Config** (~20 min)

Map CSS variables to Tailwind utilities:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(from var(--primary-50) r g b / <alpha-value>)',
          // ... etc
        },
      },
      spacing: {
        1: 'var(--space-1)',
        // ... etc
      },
    },
  },
};
```

**Why:** Use `bg-primary-700`, `p-3`, etc. in components

---

## 📊 Current Status

### **Git Branches:**

```
main                      ← Original working state (safe baseline)
  └─ design-tokens-migration  ← Current branch (experimentation)
```

**To switch back to original:**
```bash
git checkout main
```

**To see changes:**
```bash
git diff main design-tokens-migration
```

### **Files Modified:**
- ✅ `src/styles/globals.css` - Added 16 lines (core tokens)

### **Files to Modify Next:**
- ⏳ `src/styles/tokens.ts` (new file) - Type-safe exports
- ⏳ `src/components/ui/icon-button.tsx` - Use tokens instead of inline styles
- ⏳ `tailwind.config.js` - Map CSS vars to Tailwind

---

## 🔍 How to Test Current Changes

1. **Check globals.css:**
   ```bash
   cat src/styles/globals.css | grep -A 15 "ADDITIONAL CORE TOKENS"
   ```

2. **No visual changes yet!**  
   The app should look identical - we only added CSS variables, didn't use them yet.

3. **Next step will be visual:**  
   Phase 3 (Icon Button update) will actually use these tokens.

---

## ✅ Benefits So Far

### **What We Have Now:**
- ✅ All core design tokens defined in one place
- ✅ Easy to update globally (change `--icon-light` once, affects all buttons)
- ✅ Ready for TypeScript type safety
- ✅ Foundation for Tailwind integration
- ✅ Safe git branch to experiment on

### **What We DON'T Have Yet:**
- ❌ Components don't use these tokens yet (still inline styles)
- ❌ No TypeScript exports yet
- ❌ Tailwind doesn't know about these yet
- ❌ No visual changes in the app

---

## 🚀 Ready for Phase 2?

When you're ready, we can:

1. **✅ Continue to Phase 2** - Create `tokens.ts` file
2. **⏸️ Pause here** - Review what we've done
3. **⬅️ Revert** - Switch back to `main` branch

**Command to continue:**
```bash
# Stay on this branch and continue
git status  # Verify we're on design-tokens-migration

# Or go back to safety
git checkout main
```

---

## 📚 Documentation

**Files Created:**
- `CORE_TOKENS_IMPLEMENTATION.md` (this file)
- `DESIGN_TOKEN_STRATEGY.md` (overall strategy)

**Git Commits:**
- `baseline: Current working state before design token migration` (main branch)
- `Phase 1: Add core design tokens for components` (design-tokens-migration branch)

---

**Status: Phase 1 Complete ✅**  
**Next: Awaiting approval for Phase 2** ⏸️  
**Safety: Can revert to `main` branch anytime** 🛡️

