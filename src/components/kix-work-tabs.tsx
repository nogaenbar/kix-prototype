import React, { useState, useRef, useEffect } from 'react';
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { 
  X, 
  MoreHorizontal, 
  Ticket, 
  HardDrive, 
  BookOpen,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// Tab item types
interface WorkTabItem {
  id: string;
  type: 'ticket' | 'asset' | 'knowledge';
  title: string;
  fullTitle?: string;
  active?: boolean;
  canClose?: boolean;
}

interface KIXWorkTabsProps {
  items: WorkTabItem[];
  onTabClick?: (tabId: string) => void;
  onTabClose?: (tabId: string) => void;
  className?: string;
}

const TAB_ICONS = {
  ticket: Ticket,
  asset: HardDrive,
  knowledge: BookOpen
};

export function KIXWorkTabs({ 
  items, 
  onTabClick, 
  onTabClose, 
  className = "" 
}: KIXWorkTabsProps) {
  const [showOverflow, setShowOverflow] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Check scroll state
  const checkScrollState = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth
    );
    setShowOverflow(container.scrollWidth > container.clientWidth);
  };

  useEffect(() => {
    checkScrollState();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollState);
      const resizeObserver = new ResizeObserver(checkScrollState);
      resizeObserver.observe(container);
      
      return () => {
        container.removeEventListener('scroll', checkScrollState);
        resizeObserver.disconnect();
      };
    }
  }, [items]);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 200, behavior: 'smooth' });
  };

  const handleTabClick = (tabId: string) => {
    onTabClick?.(tabId);
  };

  const handleTabClose = (e: React.MouseEvent, tabId: string) => {
    e.stopPropagation();
    onTabClose?.(tabId);
  };

  const handleKeyDown = (e: React.KeyboardEvent, tabId: string) => {
    // Ctrl/Cmd + W to close tab
    if ((e.ctrlKey || e.metaKey) && e.key === 'w') {
      e.preventDefault();
      onTabClose?.(tabId);
    }
    // Ctrl/Cmd + 1-9 to jump to tab
    else if ((e.ctrlKey || e.metaKey) && e.key >= '1' && e.key <= '9') {
      e.preventDefault();
      const index = parseInt(e.key) - 1;
      if (items[index]) {
        onTabClick?.(items[index].id);
      }
    }
    // Arrow keys to navigate
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault();
      const currentIndex = items.findIndex(item => item.id === tabId);
      const nextIndex = e.key === 'ArrowLeft' 
        ? Math.max(0, currentIndex - 1)
        : Math.min(items.length - 1, currentIndex + 1);
      
      if (items[nextIndex]) {
        onTabClick?.(items[nextIndex].id);
        // Focus the next tab
        const nextTab = document.querySelector(`[data-tab-id="${items[nextIndex].id}"]`) as HTMLElement;
        nextTab?.focus();
      }
    }
  };

  if (items.length === 0) {
    return null;
  }

  const visibleItems = items.slice(0, showOverflow ? -2 : items.length);
  const overflowItems = showOverflow ? items.slice(-2) : [];

  return (
      <div className={`flex items-center bg-muted border-b border-border px-4 py-2 ${className}`}>
        
        {/* Left scroll button */}
        {canScrollLeft && (
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 mr-2 flex-shrink-0"
            onClick={scrollLeft}
          >
            <ChevronLeft size={16} />
          </Button>
        )}

        {/* Tab container */}
        <div 
          ref={scrollContainerRef}
          className="flex items-center gap-1 overflow-x-auto scrollbar-hide flex-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {visibleItems.map((item) => {
            const Icon = TAB_ICONS[item.type];
            return (
              <Tooltip key={item.id}>
                <TooltipTrigger asChild>
                  <button
                    data-tab-id={item.id}
                    onClick={() => handleTabClick(item.id)}
                    onKeyDown={(e) => handleKeyDown(e, item.id)}
                    className={`group inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap min-w-0 h-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                      item.active
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'bg-card text-foreground border border-border hover:bg-accent hover:text-accent-foreground'
                    }`}
                  >
                    <Icon size={14} className="flex-shrink-0" />
                    <span className="truncate max-w-[200px]">
                      {item.title}
                    </span>
                    {item.canClose !== false && (
                      <span
                        onClick={(e) => handleTabClose(e, item.id)}
                        className={`ml-1 p-0.5 rounded-full transition-colors opacity-0 group-hover:opacity-100 group-focus:opacity-100 cursor-pointer ${
                          item.active
                            ? 'hover:bg-primary-foreground/20'
                            : 'hover:bg-destructive hover:text-destructive-foreground'
                        }`}
                      >
                        <X size={12} />
                      </span>
                    )}
                  </button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <div className="max-w-[300px]">
                    <div className="font-medium">{item.fullTitle || item.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {item.type === 'ticket' && 'Support Ticket'}
                      {item.type === 'asset' && 'Asset Record'}
                      {item.type === 'knowledge' && 'Knowledge Article'}
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>

        {/* Right scroll button */}
        {canScrollRight && (
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 ml-2 flex-shrink-0"
            onClick={scrollRight}
          >
            <ChevronRight size={16} />
          </Button>
        )}

        {/* Overflow menu */}
        {overflowItems.length > 0 && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 ml-2 flex-shrink-0"
              >
                <MoreHorizontal size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[300px]">
              {overflowItems.map((item) => {
                const Icon = TAB_ICONS[item.type];
                return (
                  <DropdownMenuItem
                    key={item.id}
                    onClick={() => handleTabClick(item.id)}
                    className={`flex items-center gap-2 ${
                      item.active ? 'bg-accent' : ''
                    }`}
                  >
                    <Icon size={14} />
                    <span className="flex-1 truncate">{item.fullTitle || item.title}</span>
                    {item.canClose !== false && (
                      <span
                        onClick={(e) => handleTabClose(e, item.id)}
                        className="p-1 hover:bg-destructive hover:text-destructive-foreground rounded cursor-pointer"
                      >
                        <X size={12} />
                      </span>
                    )}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
  );
}