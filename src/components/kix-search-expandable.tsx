import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "./ui/utils";

interface KIXSearchExpandableProps {
  /** Current state of the component */
  state?: "collapsed" | "expanded";
  /** Size variant */
  size?: "md" | "sm";
  /** Theme variant */
  theme?: "deep" | "soft";
  /** Initial search query */
  defaultValue?: string;
  /** Callback when search is submitted */
  onSearch?: (query: string) => void;
  /** Callback when state changes */
  onStateChange?: (state: "collapsed" | "expanded") => void;
  /** Additional className */
  className?: string;
  /** Direction to expand */
  expandDirection?: "left" | "right" | "center";
}

export function KIXSearchExpandable({
  state: controlledState,
  size = "md",
  theme = "deep",
  defaultValue = "",
  onSearch,
  onStateChange,
  className,
  expandDirection = "right"
}: KIXSearchExpandableProps) {
  const [internalState, setInternalState] = useState<"collapsed" | "expanded">("collapsed");
  const [query, setQuery] = useState(defaultValue);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Use controlled state if provided, otherwise use internal state
  const currentState = controlledState || internalState;
  const isExpanded = currentState === "expanded";
  
  // Size configurations
  const sizeConfig = {
    md: {
      collapsed: "h-10 w-10", // 40px
      expanded: "h-10", // 40px height
      icon: "size-4",
      padding: "pl-10 pr-10"
    },
    sm: {
      collapsed: "h-8 w-8", // 32px
      expanded: "h-8", // 32px height  
      icon: "size-3.5",
      padding: "pl-9 pr-9"
    }
  };
  
  const config = sizeConfig[size];
  
  // Handle state changes
  const setState = (newState: "collapsed" | "expanded") => {
    if (!controlledState) {
      setInternalState(newState);
    }
    onStateChange?.(newState);
  };
  
  // Expand the search
  const expand = () => {
    if (isExpanded) return;
    
    setIsAnimating(true);
    setState("expanded");
    
    // Focus input after animation starts
    setTimeout(() => {
      inputRef.current?.focus();
    }, 40);
    
    // Animation complete
    setTimeout(() => {
      setIsAnimating(false);
    }, 160);
  };
  
  // Collapse the search
  const collapse = () => {
    if (!isExpanded) return;
    
    setIsAnimating(true);
    setState("collapsed");
    
    // Animation complete
    setTimeout(() => {
      setIsAnimating(false);
    }, 160);
  };
  
  // Handle search submission
  const handleSubmit = () => {
    if (query.trim()) {
      onSearch?.(query.trim());
      collapse();
    }
  };
  
  // Handle input key events
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    } else if (e.key === "Escape") {
      e.preventDefault();
      collapse();
    }
  };
  
  // Handle global keyboard shortcuts
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K to open search
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        expand();
      }
      
      // Escape to close search
      if (e.key === "Escape" && isExpanded) {
        collapse();
      }
    };
    
    document.addEventListener("keydown", handleGlobalKeyDown);
    return () => document.removeEventListener("keydown", handleGlobalKeyDown);
  }, [isExpanded]);
  
  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isExpanded && containerRef.current && !containerRef.current.contains(e.target as Node)) {
        collapse();
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isExpanded]);
  
  // Clear search
  const clearSearch = () => {
    setQuery("");
    inputRef.current?.focus();
  };
  
  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative transition-all duration-300 ease-in-out",
        isExpanded && expandDirection === "left" && "fixed top-4 left-1/2",
        className
      )}
      style={{
        width: isExpanded ? "360px" : "40px",
        // When expanded, center the search bar in the viewport
        ...(isExpanded && expandDirection === "left" ? {
          transform: "translateX(-50%)",
          zIndex: 60
        } : {
          zIndex: isExpanded ? 50 : undefined
        })
      }}
    >
      {!isExpanded ? (
        // Collapsed state - icon button
        <Button
          variant="ghost"
          size="icon"
          onClick={expand}
          className={cn(
            config.collapsed,
            "text-muted-foreground hover:text-foreground transition-colors",
            "focus:ring-2 focus:ring-primary-600 focus:ring-offset-2",
            "group"
          )}
          aria-label="Global search"
          title="Search (⌘K)"
        >
          <Search className={config.icon} />
        </Button>
      ) : (
        // Expanded state - full input
        <div 
          className={cn(
            config.expanded,
            "relative rounded-full border border-neutral-300 bg-white",
            "focus-within:border-transparent focus-within:ring-2 focus-within:ring-primary-600",
            "transition-all duration-150",
            "flex items-center" // Ensure proper vertical centering
          )}
          style={{
            // Width animation handled by parent container
            opacity: isAnimating ? 0.8 : 1,
          }}
        >
          {/* Search icon - absolute positioned */}
          <Search 
            className={cn(
              config.icon,
              "absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-600 pointer-events-none z-10"
            )}
            style={{
              left: size === "sm" ? "10px" : "12px"
            }}
          />
          
          {/* Input field */}
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search tickets, contacts…"
            className={cn(
              "w-full bg-transparent border-0 outline-none",
              "text-foreground placeholder:text-neutral-500",
              "transition-all duration-75",
              // Center placeholder when empty, left-align when typing
              query ? "text-left" : "text-center placeholder:text-center"
            )}
            style={{
              paddingLeft: query ? (size === "sm" ? "36px" : "40px") : (size === "sm" ? "12px" : "16px"),
              paddingRight: query ? (size === "sm" ? "36px" : "40px") : (size === "sm" ? "12px" : "16px"),
              opacity: isAnimating ? 0 : 1,
              transform: isAnimating ? "translateX(4px)" : "translateX(0)",
              transitionDelay: isAnimating ? "0ms" : "40ms"
            }}
            role="searchbox"
            aria-label="Global search"
          />
          
          {/* Clear button - appears when text is present */}
          {query && (
            <Button
              variant="ghost"
              size="icon"
              onClick={clearSearch}
              className={cn(
                "absolute right-1 top-1/2 transform -translate-y-1/2",
                size === "sm" ? "h-6 w-6" : "h-8 w-8",
                "rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-neutral-700",
                "transition-all duration-75 z-10"
              )}
              style={{
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating ? "translateX(-4px) translateY(-50%)" : "translateX(0) translateY(-50%)",
                transitionDelay: isAnimating ? "0ms" : "40ms"
              }}
              aria-label="Clear search"
            >
              <X className={size === "sm" ? "size-3" : "size-3.5"} />
            </Button>
          )}
        </div>
      )}
    </div>
  );
}