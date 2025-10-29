import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface TicketViewItem {
  id: string;
  label: string;
  count: number;
  active: boolean;
}

interface KIXTicketViewsTabsProps {
  views?: TicketViewItem[];
  onViewClick?: (viewId: string) => void;
  onNewViewClick?: () => void;
  className?: string;
}

const defaultViews: TicketViewItem[] = [
  { id: 'all-tickets', label: 'All Tickets', count: 1287, active: true },
  { id: 'open', label: 'Open', count: 856, active: false },
  { id: 'my-tickets', label: 'My Tickets', count: 23, active: false },
  { id: 'unassigned', label: 'Unassigned', count: 42, active: false },
  { id: 'overdue', label: 'Overdue', count: 8, active: false },
  { id: 'critical', label: 'Critical', count: 5, active: false }
];

export function KIXTicketViewsTabs({ 
  views = defaultViews, 
  onViewClick, 
  onNewViewClick,
  className = "" 
}: KIXTicketViewsTabsProps) {
  const handleViewClick = (viewId: string) => {
    onViewClick?.(viewId);
  };

  const handleNewViewClick = () => {
    onNewViewClick?.();
  };

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {views.map((view) => (
        <Button
          key={view.id}
          variant={view.active ? "default" : "ghost"}
          size="sm"
          className={`h-8 px-3 ${view.active 
            ? 'bg-primary text-primary-foreground hover:bg-primary-hover' 
            : 'text-muted-foreground hover:text-foreground hover:bg-muted'
          }`}
          onClick={() => handleViewClick(view.id)}
        >
          {view.label}
          <Badge 
            variant="secondary" 
            className={`ml-2 text-xs ${view.active 
              ? 'bg-primary-foreground/20 text-primary-foreground' 
              : 'bg-muted text-muted-foreground'
            }`}
          >
            {view.count.toLocaleString()}
          </Badge>
        </Button>
      ))}
      <Button
        variant="outline"
        size="sm"
        className="h-8 px-3 ml-2 text-muted-foreground hover:text-foreground"
        onClick={handleNewViewClick}
      >
        + New View
      </Button>
    </div>
  );
}