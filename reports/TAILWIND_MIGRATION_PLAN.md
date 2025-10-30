# 🚀 Tailwind Migration Plan - Phase 3

**Status:** In Progress  
**Date:** October 29, 2025  
**Goal:** Remove all `.kix-*` custom classes using `@apply`, replace with Tailwind utilities

---

## 📊 **Audit Results**

### **Classes to Migrate**

| Class | Usage Count | Files | Priority |
|-------|-------------|-------|----------|
| `.kix-button-primary` | 3 | App.tsx (1x), kix-ticket-detail.tsx (2x) | High |
| `.kix-button-secondary` | 5 | kix-data-table-new.tsx (5x) | High |
| `.kix-button-ghost` | 0 | None found | Low |
| `.kix-card` | 1 | kix-kpi-tile.tsx (1x) | Medium |
| `.kix-chip` | 4+ | status-badge, priority-badge, team-chip, ticket-detail | Medium |
| `.kix-team-chip` | 1 | team-chip.tsx | Low |
| `.kix-priority-badge` | 1 | priority-badge.tsx | Low |
| `.kix-status-badge` | 1 | status-badge.tsx | Low |
| `.kix-input` | 0 | None | ✅ Already unused |
| `.kix-shell-sidebar-panel` | 0 | None | ✅ Already unused |

---

## 🔄 **Migration Steps**

### **Phase 1: Remove Unused Classes** ✅
- Delete `.kix-input` (0 usages)
- Delete `.kix-shell-sidebar-panel` (0 usages)  
- Delete `.kix-button-ghost` (0 usages)

### **Phase 2: Migrate Button Classes** 
**Target:** `.kix-button-primary`, `.kix-button-secondary`

**Current:**
```tsx
// .kix-button-primary
className="kix-button-primary"
// CSS: bg-primary text-primary-foreground hover:bg-primary-hover ...

// .kix-button-secondary  
className="kix-button-secondary h-[32px] px-[12px] ..."
// CSS: bg-secondary text-secondary-foreground hover:bg-secondary-hover border border-outline ...
```

**Migrate to:**
```tsx
// Primary button
className="bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-pressed border-transparent rounded-lg px-4 py-2 font-medium transition-colors focus:ring-2 focus:ring-ring focus:ring-offset-2"

// Secondary button (outlined style)
className="bg-white text-primary border border-outline hover:bg-accent active:bg-accent/80 rounded-[12px] px-[12px] font-medium transition-colors focus:ring-2 focus:ring-ring focus:ring-offset-2"
```

### **Phase 3: Migrate Card Classes**
**Target:** `.kix-card`

**Current:**
```tsx
className="kix-card kix-kpi-tile"
// CSS: bg-white rounded-xl
```

**Migrate to:**
```tsx
className="bg-white rounded-xl" // or rounded-[12px] if needed
```

### **Phase 4: Migrate Chip/Badge Classes**
**Target:** `.kix-chip`, `.kix-team-chip`, `.kix-priority-badge`, `.kix-status-badge`

**Current:**
```tsx
className="kix-chip kix-status-badge"
// CSS: inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium whitespace-nowrap
```

**Migrate to:**
```tsx
className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium whitespace-nowrap"
```

### **Phase 5: Clean Up globals.css**
- Remove all `@apply` utility classes
- Keep CSS variables (design tokens)
- Keep `@theme inline` mappings
- Keep base styles and typography

---

## 📝 **Migration Mappings**

### **Button Mappings**

#### `.kix-button-primary` →
```tsx
bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-pressed border-transparent rounded-lg px-4 py-2 font-medium transition-colors focus:ring-2 focus:ring-ring focus:ring-offset-2
```

#### `.kix-button-secondary` →
```tsx
bg-white text-primary border border-outline hover:bg-accent active:bg-accent/80 rounded-lg px-4 py-2 font-medium transition-colors focus:ring-2 focus:ring-ring focus:ring-offset-2
```

#### `.kix-button-ghost` →
```tsx
bg-transparent text-primary border-transparent hover:bg-accent active:bg-accent/80 rounded-lg px-4 py-2 font-medium transition-colors focus:ring-2 focus:ring-ring focus:ring-offset-2
```

### **Card Mappings**

#### `.kix-card` →
```tsx
bg-white rounded-xl
```

#### `.kix-card-header` →
```tsx
px-6 py-4 border-b border-border-muted
```

#### `.kix-card-content` →
```tsx
p-6
```

### **Chip/Badge Mappings**

#### `.kix-chip` →
```tsx
inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium whitespace-nowrap
```

#### `.kix-team-chip` →
```tsx
px-2 py-0.5 max-w-[80px]
```

#### `.kix-priority-badge` →
```tsx
px-2 py-0.5 gap-1 max-w-[60px]
```

#### `.kix-status-badge` →
```tsx
px-2 py-0.5 gap-1 max-w-[100px]
```

---

## ✅ **Verification Checklist**

- [ ] Remove unused classes from globals.css
- [ ] Update all button usages
- [ ] Update all card usages
- [ ] Update all chip/badge usages
- [ ] Test build (`npm run build`)
- [ ] Visual regression check
- [ ] Remove `@apply` classes from globals.css
- [ ] Final commit

---

**Ready to execute!** 🚀

