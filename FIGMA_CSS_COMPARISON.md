# Figma Design vs Current CSS Implementation - Comparison

## Executive Summary
Analysis of Figma design (node 9:1250) reveals precise spacing and layout specifications that differ from our current implementation in several key areas.

---

## 1. APP-LEVEL SPACING & MARGINS

### Figma Specifications:
- **App Container**: `1551px × 1766px`
- **12px margin** on ALL sides (left, top, right, bottom)
- **12px gap** between major components (sidenav ↔ content, topbar ↔ content)

### Current Implementation:
```css
/* kix-app-shell */
className="w-full h-screen bg-background flex gap-3 pl-3 pt-3 pb-3 overflow-hidden kix-app-shell"
/* gap-3 = 12px ✓ CORRECT */
/* pl-3 = 12px ✓ CORRECT */
/* pt-3 = 12px ✓ CORRECT */
/* pb-3 = 12px ✓ CORRECT */
/* pr-3 = MISSING ❌ */
```

**❌ ISSUE #1: Missing 12px right padding on app shell**
- Currently: Content area has `pr-3` but not the shell itself
- Should be: `p-3` on the app shell OR ensure right edge respects 12px

---

## 2. SIDENAV SPECIFICATIONS

### Figma Specifications:
- **Position**: `x=12, y=12` (12px from left and top edges)
- **Dimensions**: `256px × 820px`
- **Gap to content**: 12px (content starts at x=280, which is 256 + 12 + 12)

### Current Implementation:
```css
/* Correct positioning via gap-3 */
```

**✓ CORRECT**: Sidenav spacing is properly implemented

---

## 3. MAIN CONTENT AREA (Container after SideNav)

### Figma Specifications:
- **Container**: `x=280, y=12, width=1259px, height=1742px`
- **TopBar**: Full width of container (1259px), height 84px
- **Gap after TopBar**: 12px
- **Content starts at**: y=96 (84px topbar + 12px gap)

### Current Implementation:
```css
/* ContentArea */
className="flex-1 h-full flex flex-col gap-3 p-0 min-w-0 pr-3 w-full"
/* gap-3 = 12px ✓ CORRECT */
```

**✓ CORRECT**: Gap between components is 12px

---

## 4. PAGE BODY PADDING & CONTENT CONTAINER

### Figma Specifications:
- **Outer Container (PageBody)**: `x=0, y=0, width=1259px` (full width of content area)
- **Inner Container (actual content)**: `x=24, y=24, width=1211px, height=1580px`
- **Padding**: **24px on all sides** of content container

### Current Implementation:
```css
/* kix-shell-pagebody inner container */
className="w-full mx-auto px-6 py-6"
/* px-6 = 24px ✓ CORRECT */
/* py-6 = 24px ✓ CORRECT */
```

**✓ CORRECT**: Page body padding is 24px

---

## 5. GRID SYSTEM & CARD SPACING

### Figma Specifications:
- **Content width**: 1211px
- **3 Cards per row**
- **Card width**: ~387.67px each
- **Gap between cards**: **24px** (horizontal)
- **Gap between rows**: **24px** (vertical)

### Current Implementation:
```css
/* Dashboard grid */
className="grid grid-cols-12 kix-dashboard-grid gap-6"
/* gap-6 = 24px ✓ CORRECT */
```

**✓ CORRECT**: Grid gaps are 24px

---

## 6. KPI CARD SPECIFICATIONS

### Figma Specifications:
- **Card dimensions**: `387.67px × 158px`
- **Card padding**: 24px
- **KPI content area**: `324.36px × 110px` (after padding)
- **Border radius**: Appears to be 12px

### Current Implementation:
```css
/* From globals.css */
--kpi-card-height: 158px; /* ✓ CORRECT */
--kpi-card-gap: 24px;     /* ✓ CORRECT */
```

**✓ CORRECT**: KPI card specifications match

---

## 7. CHART CARD SPECIFICATIONS

### Figma Specifications:
- **Card dimensions**: `387.67px × 306px`
- **Card header**: height 56px
- **Card header padding**: x=24px, y=16px
- **Card content**: height 250px
- **Content padding**: 24px horizontal
- **Border radius**: 12px

### Current Implementation:
```typescript
// kix-chart-card.tsx
className="flex flex-col justify-center items-center p-0 w-full h-[306px] bg-white rounded-[12px]"
/* h-[306px] ✓ CORRECT */
/* rounded-[12px] ✓ CORRECT */

// CardHeader
className="... px-6 py-4 ..."
/* px-6 = 24px ✓ CORRECT */
/* py-4 = 16px ✓ CORRECT */
```

**✓ CORRECT**: Chart card dimensions and padding match

---

## 8. DATA TABLE SPECIFICATIONS

### Figma Specifications:
- **Table container**: Full width (1211px)
- **Table header padding**: x=24px, y=16px
- **Table content padding**: 16px around
- **Row height**: 70px
- **Header height**: 56px

### Current Implementation:
```css
/* From globals.css */
.kix-data-table .grid-cols-12 {
  gap: 8px;
  min-height: 40px;
  padding-left: 12px;
  padding-right: 12px;
}
```

**❌ ISSUE #2: Table padding mismatch**
- Figma: 24px horizontal padding
- Current: 12px horizontal padding
- Row height: Should be 70px, currently using 40px minimum

---

## 9. SPACING BETWEEN SECTIONS

### Figma Specifications:
- **Header to KPI cards**: 72px
  - Header height: 40px
  - Container starts at y=72, cards at y=0 within container
- **KPI cards to Chart cards**: 24px
  - KPI cards end at y=158
  - Chart cards start at y=182 (gap = 24px)
- **Chart cards to Tables**: 24px
  - Chart cards end at y=488 (182 + 306)
  - Table starts at y=512 (gap = 24px)

### Current Implementation:
```css
/* Dashboard Header */
className="col-span-12 mb-6"
/* mb-6 = 24px ❌ SHOULD BE 32px for total 72px spacing */
```

**❌ ISSUE #3: Header spacing mismatch**
- Header itself is 40px tall
- mb-6 = 24px margin
- Total = 64px (should be 72px)
- **Gap should be 32px (mb-8)**

---

## 10. BORDER RADIUS CONSISTENCY

### Figma Specifications:
- **App-level components** (SideNav, TopBar, PageBody): **24px** border-radius
- **Cards** (KPI, Charts, Tables): **12px** border-radius

### Current Implementation:
```css
/* From globals.css */
.kix-side-nav { border-radius: 24px !important; } /* ✓ CORRECT */
.kix-top-bar { border-radius: 24px !important; }  /* ✓ CORRECT */
.kix-shell-pagebody { border-radius: 24px !important; } /* ✓ CORRECT */
.kix-card { border-radius: 12px !important; } /* ✓ CORRECT */
```

**✓ CORRECT**: Border radius values match

---

## 11. MAX-WIDTH CONSTRAINTS

### Figma Specifications:
- **Content max-width**: 1211px (after 24px padding on 1259px container)
- **No hard max-width on outer container** - should be flexible

### Current Implementation:
```tsx
// kix-app-shell.tsx - REMOVED max-width constraints ✓
className="w-full mx-auto px-6 py-6"
```

**✓ CORRECT**: No unwanted max-width constraints

---

## SUMMARY OF ISSUES TO FIX

### Critical Issues:
1. **❌ Missing 12px right padding** on app shell
2. **❌ Table padding mismatch** (12px → should be 24px horizontal)
3. **❌ Header spacing** (mb-6 → should be mb-8 for 32px gap)

### Verified Correct:
- ✓ App-level 12px margins (left, top, bottom)
- ✓ 12px gaps between major components
- ✓ 24px padding on page body
- ✓ 24px grid gaps
- ✓ KPI card dimensions (158px height)
- ✓ Chart card dimensions (306px height)
- ✓ Border radius (24px for shell, 12px for cards)
- ✓ Card spacing (24px between rows and columns)

---

## RECOMMENDED FIXES

### Fix #1: App Shell Right Padding
```tsx
// src/components/kix-app-shell.tsx
- className={`w-full h-screen bg-background flex gap-3 pl-3 pt-3 pb-3 overflow-hidden kix-app-shell ${className}`}
+ className={`w-full h-screen bg-background flex gap-3 p-3 overflow-hidden kix-app-shell ${className}`}

// And remove pr-3 from content area:
- className="flex-1 h-full flex flex-col gap-3 p-0 min-w-0 pr-3 w-full"
+ className="flex-1 h-full flex flex-col gap-3 p-0 min-w-0 w-full"
```

### Fix #2: Dashboard Header Spacing
```tsx
// src/App.tsx
- <div className="col-span-12 mb-6">
+ <div className="col-span-12 mb-8">
```

### Fix #3: Data Table Padding (Optional - verify with design first)
```css
/* src/styles/globals.css */
.kix-data-table .grid-cols-12 {
- padding-left: 12px;
- padding-right: 12px;
+ padding-left: 24px;
+ padding-right: 24px;
}
```

---

## AUTOLAYOUT & PIXEL-PERFECT CONSIDERATIONS

### Figma Autolayout Features Used:
1. **Fixed widths** with flexible containers
2. **12px system** for app-level spacing
3. **24px system** for content-level spacing
4. **Consistent gap values** (12px or 24px)
5. **Precise card dimensions** (158px, 306px heights)

### Implementation Strategy:
- Use Tailwind's spacing scale consistently (gap-3 = 12px, gap-6 = 24px)
- Maintain fixed heights for cards (158px, 306px)
- Let grid handle card widths (col-span-4 for 3-column layout)
- Use flexbox with `flex-1` for responsive main content area

