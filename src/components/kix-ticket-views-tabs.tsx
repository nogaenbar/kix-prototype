import { Tabs, TabItem } from "./ui/tabs";
import { Button } from "./ui/button";
import { useState } from "react";

interface KIXTicketViewsTabsProps {
  views?: TabItem[];
  activeViewId?: string;
  onViewClick?: (viewId: string) => void;
  onNewViewClick?: () => void;
  className?: string;
}

const defaultViews: TabItem[] = [
  { id: 'all-tickets', label: 'All Tickets', count: 856 },
  { id: 'my-tickets', label: 'My Tickets', count: 23 },
  { id: 'watched', label: 'Watched', count: 12 },
  { id: 'locked', label: 'Locked', count: 6 },
  { id: 'team', label: 'Team', count: 134 },
  { id: 'unassigned', label: 'Unassigned', count: 42 },
];

export function KIXTicketViewsTabs({ 
  views = defaultViews, 
  activeViewId,
  onViewClick, 
  onNewViewClick,
  className = "" 
}: KIXTicketViewsTabsProps) {
  // Use internal state if no activeViewId provided
  const [internalActive, setInternalActive] = useState<string>(views[0]?.id || '');
  const currentActive = activeViewId !== undefined ? activeViewId : internalActive;

  const handleTabClick = (tabId: string) => {
    if (activeViewId === undefined) {
      setInternalActive(tabId);
    }
    onViewClick?.(tabId);
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Tabs
        items={views}
        activeTabId={currentActive}
        onTabClick={handleTabClick}
      />
      {onNewViewClick && (
        <Button
          variant="outlined"
          size="md"
          className="ml-2 text-slate-500 hover:text-slate-700"
          onClick={onNewViewClick}
        >
          + New View
        </Button>
      )}
    </div>
  );
}