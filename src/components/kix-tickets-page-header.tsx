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
  activeViewId?: string;
  onViewClick?: (viewId: string) => void;
  onNewViewClick?: () => void;
  onFilterRemove?: (filterId: string) => void;
  onClearAllFilters?: () => void;
  className?: string;
}

export function KIXTicketsPageHeader({
  activeFilters = [],
  activeViewId,
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
    <div className={`w-full bg-[#f7f7f7] border-b border-slate-300 kix-shell-pageheader ${className}`}>
      <div className="p-4">
        {/* Ticket Views Tabs */}
        <KIXTicketViewsTabs 
          activeViewId={activeViewId}
          onViewClick={onViewClick}
          onNewViewClick={onNewViewClick}
        />

        {/* Active Filter Chips - Below tabs when filters are active */}
        {activeFilters.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap mt-3 pt-3 border-t border-slate-200">
            <span className="text-sm text-slate-500">Active filters:</span>
            {activeFilters.map((filter) => (
              <Badge
                key={filter.id}
                variant="outline"
                className="flex items-center gap-1 px-2 py-1 bg-white/50 border-slate-300"
              >
                <span className="text-xs text-slate-700">{filter.label}: {filter.value}</span>
                <Button
                  variant="transparent"
                  size="sm"
                  className="h-auto w-auto p-0 hover:bg-transparent ml-1"
                  onClick={() => handleFilterRemove(filter.id)}
                >
                  <X size={12} className="text-slate-500" />
                </Button>
              </Badge>
            ))}
            <Button
              variant="transparent"
              size="sm"
              className="h-6 px-2 text-xs text-slate-500 hover:text-slate-700"
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