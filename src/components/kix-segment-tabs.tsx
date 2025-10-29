import React from 'react';
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Plus, X } from "lucide-react";

// Segment item types
interface SegmentItem {
  id: string;
  label: string;
  count?: number;
  active?: boolean;
}

interface ActiveFilter {
  id: string;
  label: string;
  value: string;
}

interface KIXSegmentTabsProps {
  segments: SegmentItem[];
  activeFilters?: ActiveFilter[];
  onSegmentClick?: (segmentId: string) => void;
  onNewViewClick?: () => void;
  onFilterRemove?: (filterId: string) => void;
  className?: string;
}

export function KIXSegmentTabs({ 
  segments, 
  activeFilters = [],
  onSegmentClick, 
  onNewViewClick,
  onFilterRemove,
  className = "" 
}: KIXSegmentTabsProps) {
  const handleSegmentClick = (segmentId: string) => {
    onSegmentClick?.(segmentId);
  };

  const handleNewViewClick = () => {
    onNewViewClick?.();
  };

  const handleFilterRemove = (filterId: string) => {
    onFilterRemove?.(filterId);
  };

  return (
    <TooltipProvider>
      <div className={`bg-muted border-b border-border px-6 py-3 space-y-3 ${className}`}>
        
        {/* Segmented tabs */}
        <div className="flex items-center gap-1 p-1 bg-card rounded-lg border border-border inline-flex">
          {segments.map((segment) => (
            <button
              key={segment.id}
              onClick={() => handleSegmentClick(segment.id)}
              className={`inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-all h-8 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                segment.active
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              <span>{segment.label}</span>
              {segment.count !== undefined && (
                <Badge 
                  variant={segment.active ? "secondary" : "secondary"} 
                  className={`text-xs px-1.5 py-0.5 min-w-[20px] h-5 ${
                    segment.active 
                      ? 'bg-primary-foreground/20 text-primary-foreground' 
                      : ''
                  }`}
                >
                  {segment.count}
                </Badge>
              )}
            </button>
          ))}
          
          {/* New view button */}
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={handleNewViewClick}
                className="inline-flex items-center gap-1 px-2 py-1.5 text-sm font-medium rounded-md transition-all h-8 text-muted-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Plus size={14} />
                <span className="sr-only">New view</span>
              </button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              Create new saved view
            </TooltipContent>
          </Tooltip>
        </div>

        {/* Active filters */}
        {activeFilters.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-muted-foreground font-medium">Active filters:</span>
            {activeFilters.map((filter) => (
              <div
                key={filter.id}
                className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-card border border-border rounded-md"
              >
                <span className="font-medium text-muted-foreground">{filter.label}:</span>
                <span className="text-foreground">{filter.value}</span>
                <button
                  onClick={() => handleFilterRemove(filter.id)}
                  className="ml-1 p-0.5 hover:bg-destructive hover:text-destructive-foreground rounded transition-colors"
                >
                  <X size={10} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </TooltipProvider>
  );
}