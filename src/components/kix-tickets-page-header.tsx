import { KIXTicketViewsTabs } from "./kix-ticket-views-tabs";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { X } from "lucide-react";

interface FilterChip {
  id: string;
  label: string;
  value: string;
}

interface KIXTicketsPageHeaderProps {
  activeFilters?: FilterChip[];
  onViewClick?: (viewId: string) => void;
  onNewViewClick?: () => void;
  onFilterRemove?: (filterId: string) => void;
  onClearAllFilters?: () => void;
  className?: string;
}

export function KIXTicketsPageHeader({
  activeFilters = [],
  onViewClick,
  onNewViewClick,
  onFilterRemove,
  onClearAllFilters,
  className = ""
}: KIXTicketsPageHeaderProps) {
  const handleFilterRemove = (filterId: string) => {
    onFilterRemove?.(filterId);
  };

  const handleClearAllFilters = () => {
    onClearAllFilters?.();
  };

  return (
    <div className={`w-full bg-card border-b border-border kix-shell-pageheader ${className}`}>
      <div className="flex flex-col gap-3 px-4 py-3">
        {/* Row 1: Ticket Views Tabs */}
        <KIXTicketViewsTabs 
          onViewClick={onViewClick}
          onNewViewClick={onNewViewClick}
        />

        {/* Row 2: Active Filter Chips */}
        {activeFilters.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-muted-foreground">Active filters:</span>
            {activeFilters.map((filter) => (
              <Badge
                key={filter.id}
                variant="outline"
                className="flex items-center gap-1 px-2 py-1 bg-primary/5 border-primary/20"
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