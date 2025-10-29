import { KIXSegmentTabs } from "./kix-segment-tabs";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { X } from "lucide-react";

// Mock data for segment tabs
const segmentItems = [
  { id: 'all-tickets', label: 'All Tickets', count: 1247, active: true },
  { id: 'open', label: 'Open', count: 856, active: false },
  { id: 'my-tickets', label: 'My Tickets', count: 23, active: false },
  { id: 'unassigned', label: 'Unassigned', count: 42, active: false },
  { id: 'overdue', label: 'Overdue', count: 8, active: false },
  { id: 'critical', label: 'Critical', count: 5, active: false }
];

// Mock active filters
const activeFilters = [
  { id: 'priority', label: 'Priority', value: 'High' },
  { id: 'team', label: 'Team', value: 'IT-INFRA' }
];

interface KIXPageHeaderProps {
  className?: string;
}

export function KIXPageHeader({ className = "" }: KIXPageHeaderProps) {
  const handleSegmentClick = (segmentId: string) => {
    console.log('Segment clicked:', segmentId);
  };

  const handleNewViewClick = () => {
    console.log('New view clicked');
  };

  const handleFilterRemove = (filterId: string) => {
    console.log('Filter removed:', filterId);
  };

  const handleClearAllFilters = () => {
    console.log('Clear all filters');
  };

  return (
    <div className={`w-full bg-card border-b border-border kix-shell-pageheader ${className}`}>
      <div className="flex flex-col gap-3 px-4 py-3">
        {/* Row 1: Segment Tabs */}
        <div className="flex items-center gap-1">
          {segmentItems.map((segment) => (
            <Button
              key={segment.id}
              variant={segment.active ? "default" : "ghost"}
              size="sm"
              className={`h-8 px-3 ${segment.active 
                ? 'bg-primary text-primary-foreground hover:bg-primary-hover' 
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
              onClick={() => handleSegmentClick(segment.id)}
            >
              {segment.label}
              <Badge variant="secondary" className="ml-2 text-xs bg-muted text-muted-foreground">
                {segment.count}
              </Badge>
            </Button>
          ))}
          <Button
            variant="outline"
            size="sm"
            className="h-8 px-3 ml-2"
            onClick={handleNewViewClick}
          >
            + New View
          </Button>
        </div>

        {/* Row 2: Active Filter Chips */}
        {activeFilters.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-muted-foreground">Filters:</span>
            {activeFilters.map((filter) => (
              <Badge
                key={filter.id}
                variant="outline"
                className="flex items-center gap-1 px-2 py-1"
              >
                <span className="text-xs">{filter.label}: {filter.value}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto w-auto p-0 hover:bg-transparent"
                  onClick={() => handleFilterRemove(filter.id)}
                >
                  <X size={12} />
                </Button>
              </Badge>
            ))}
            <Button
              variant="ghost"
              size="sm"
              className="h-6 px-2 text-xs text-muted-foreground hover:text-foreground"
              onClick={handleClearAllFilters}
            >
              Clear all
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}