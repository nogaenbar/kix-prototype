# Phase 2: Component Size Review - Detailed Extraction Plans

**Date:** 2025-01-XX  
**Branch:** `guidelines-implementation`  
**Purpose:** Document component size audit and create detailed extraction plans

---

## 📊 Component Size Audit Results

### ✅ **Acceptable Exceptions** (No Action Needed)

| Component | Lines | Reason |
|-----------|-------|--------|
| `ComponentLibrary.tsx` | 1468 | Demo/library component - acceptable |
| `kix-data-table-new.tsx` | 734 | Complex table component - acceptable |
| `ButtonDemo.tsx` | 497 | Demo component - acceptable |

### ⚠️ **Needs Refactoring** (Extraction Plans Below)

| Component | Lines | Target | Priority |
|-----------|-------|--------|----------|
| `kix-ticket-detail.tsx` | 1041 | < 250 | High |
| `kix-side-nav.tsx` | 845 | < 250 | Medium |

---

## 🔧 Extraction Plan: kix-ticket-detail.tsx

### **Current Structure Analysis**

**Main Sections Identified:**
1. **Sticky Header** (lines 189-342) - ~153 lines
   - Breadcrumb navigation
   - Ticket title + ID with copy button
   - Status/Priority/SLA badges
   - Action buttons (Reply, Status control, Assignee, Link, More)
   
2. **Conversation Section** (lines 449-668) - ~219 lines
   - Filter bar (All/External/Internal/Unread with counts)
   - Search and date sorting
   - Thread list with messages
   - Composer (External/Internal reply)

3. **Right Rail Modules** (lines 672-916) - ~244 lines
   - Contact card
   - Linked Assets card
   - Linked Tickets card
   - Suggested Knowledge card
   - Subtasks card

4. **Drawers** (lines 922-1037) - ~115 lines
   - Assets drawer
   - Tickets drawer
   - Knowledge drawer
   - Subtasks drawer

5. **Data + Main Component** (lines 1-148, 148-188, 917-920, 1038-1041) - ~200 lines
   - Interfaces
   - Mock data
   - State management
   - Main component orchestrator

---

### **Extraction Strategy**

#### **New File Structure:**

```
src/components/ticket-detail/
  ├── kix-ticket-detail.tsx (main orchestrator, ~150 lines)
  ├── ticket-detail-header.tsx (~150 lines)
  ├── ticket-detail-conversation.tsx (~220 lines)
  ├── ticket-detail-right-rail.tsx (~250 lines)
  └── ticket-detail-drawers.tsx (~120 lines)
```

#### **File 1: `ticket-detail-header.tsx`**

**Extract:**
- Breadcrumb navigation
- Ticket title section with copy button
- Status/Priority/SLA badges
- Action buttons (Reply, Status control, Assignee, Link, More)

**Props Interface:**
```typescript
interface TicketDetailHeaderProps {
  ticketId: string;
  subject: string;
  status: string;
  priority: string;
  sla: string;
  assignee: { name: string; avatar: string };
  selectedStatus: string;
  onStatusChange: (status: string) => void;
  onCopyId: () => void;
  onReply: () => void;
  onBack?: () => void;
  isWatching: boolean;
  onWatchToggle: () => void;
}
```

**Lines Saved:** ~150 lines

---

#### **File 2: `ticket-detail-conversation.tsx`**

**Extract:**
- Conversation filter bar
- Search and date controls
- Thread list rendering
- Message thread item component
- Composer (External/Internal reply)

**Props Interface:**
```typescript
interface TicketDetailConversationProps {
  messages: ConversationMessage[];
  filter: "All" | "External" | "Internal" | "Unread";
  onFilterChange: (filter: "All" | "External" | "Internal" | "Unread") => void;
  composerMode: "External" | "Internal";
  onComposerModeChange: (mode: "External" | "Internal") => void;
  contactEmail: string;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}
```

**Additional Component:**
- `ConversationMessageThread` (internal component for rendering single message)

**Lines Saved:** ~220 lines

---

#### **File 3: `ticket-detail-right-rail.tsx`**

**Extract:**
- Contact card
- Linked Assets card
- Linked Tickets card
- Suggested Knowledge card
- Subtasks card

**Props Interface:**
```typescript
interface TicketDetailRightRailProps {
  contact: Contact;
  linkedAssets: Asset[];
  linkedTickets: Ticket[];
  suggestedKnowledge: KnowledgeItem[];
  subtasks: Subtask[];
  onAssetDrawerOpen: () => void;
  onTicketDrawerOpen: () => void;
  onKnowledgeDrawerOpen: () => void;
  onSubtaskDrawerOpen: () => void;
}
```

**Lines Saved:** ~244 lines

---

#### **File 4: `ticket-detail-drawers.tsx`**

**Extract:**
- All four drawer components (Assets, Tickets, Knowledge, Subtasks)

**Props Interface:**
```typescript
interface TicketDetailDrawersProps {
  assetsDrawerOpen: boolean;
  ticketsDrawerOpen: boolean;
  knowledgeDrawerOpen: boolean;
  subtasksDrawerOpen: boolean;
  onAssetsDrawerChange: (open: boolean) => void;
  onTicketsDrawerChange: (不允许: boolean) => void;
  onKnowledgeDrawerChange: (open: boolean) => void;
  onSubtasksDrawerChange: (open: boolean) => void;
  linkedAssets: Asset[];
  linkedTickets: Ticket[];
  suggestedKnowledge: KnowledgeItem[];
  subtasks: Subtask[];
}
```

**Lines Saved:** ~115 lines

---

#### **File 5: `kix-ticket-detail.tsx` (main orchestrator)**

**Keep:**
- Main component function
- community management (status, filters, drawers, collapsible states)
- Mock data definitions
- Layout orchestration
- Component composition

**Estimated Lines:** ~150 lines

**Structure:**
```tsx
export function KIXTicketDetail({ ticketId, onBack }: TicketDetailProps) {
  // State declarations
  // Handler functions
  // Data definitions
  
  return (
    <div>
      <TicketDetailHeader {...headerProps} />
      <div className="flex-1 overflow-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <DetailsCard />
            <TicketDetailConversation {...conversationProps} />
          </div>
          <div>
            <TicketDetailRightRail {...railProps} />
          </div>
        </div>
      </div>
      <TicketDetailDrawers {...drawerProps} />
    </div>
  );
}
```

---

## 🔧 Extraction Plan: kix-side-nav.tsx

### **Current Structure Analysis**

**Already Extracted:**
- ✅ `KIXSideNavSection` component (lines 412-459)
- ✅ `KIXSideNavItem` component (lines 461-705)
- ✅ Context (`SideNavContext`)

**Remaining in Main Component:**
- Navigation data function (`getNavigationData`) - ~220 lines
- Main component orchestrator - ~140 lines
- Favorites logic - ~15 lines

**Total:** ~375 lines in main component + extracted components

---

### **Extraction Strategy**

#### **Action: Extract Navigation Data**

**New File:** `src/utils/navigation-data.ts`

**Extract:**
- `getNavigationData()` function
- Navigation type definitions (`NavItem`, `NavSection`)
- All navigation structure

**Lines Saved:** ~220 lines

**Result:**
- `kix-side-nav.tsx`: ~625 lines (still too large, but better)
- `navigation-data.ts`: ~220 lines (utility file)
- **Note:** `KIXSideNavItem` is 244 lines, which is at the limit but acceptable for a complex nested navigation component.

---

## 📋 Implementation Checklist

### **kix-ticket-detail.tsx Refactor**

- [ ] Create `src/components/ticket-detail/` directory
- [ ] Extract `ticket-detail-header.tsx`
- [ ] Extract `ticket-detail-conversation.tsx`
- [ ] Extract `ticket-detail-right-rail.tsx`
- [ ] Extract `ticket-detail-drawers.tsx`
- [ ] Create `src/types/ticket-detail.ts` for shared types
- [ ] Update `kix-ticket-detail.tsx` to use extracted components
- [ ] Verify visual parity
- [ ] Test all interactions (status change, filters, drawers)
- [ ] Update imports in files that use `KIXTicketDetail`

**Estimated Time:** 3-4 hours

---

### **kix-side-nav.tsx Refactor**

- [ ] Create `src/utils/navigation-data.ts`
- [ ] Move `getNavigationData()` function
- [ ] Move navigation type definitions
- [ ] Update `kix-side-nav.tsx` to import from utils
- [ ] Verify visual parity
- [ ] Test navigation interactions
- [ ] Verify all nav items render correctly

**Estimated Time:** 1-2 hours

---

## 🎯 Success Criteria

After refactoring:

1. ✅ `kix-ticket-detail.tsx` < 250 lines
2. ✅ `kix-side-nav.tsx` < 250 lines (or justifiable if `KIXSideNavItem` is complex)
3. ✅ All extracted components < 250 lines
4. ✅ Visual parity maintained (±1px tolerance)
5. ✅ All interactions work identically
6. ✅ No regressions in functionality
7. ✅ Code is more maintainable and testable

