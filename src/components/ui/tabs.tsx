import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

/**
 * KIX Tabs Component - Pure Tailwind Implementation
 * Based on Figma design specifications for ticket views tabs
 * 
 * SPECIFICATIONS:
 * - Container: gap-1 (4px between tabs)
 * - Tab height: 34px total (py-6 = 24px + text 20px = calculated)
 * - Border radius: 12px (rounded-[12px])
 * - Active tab: bg-[#407a3f], text-white
 * - Inactive tab: transparent bg, text-slate-500
 * - Badge: 22px height, rounded-[12px]
 *   - Active badge: bg-[rgba(255,255,255,0.2)], text-white
 *   - Inactive badge: bg-[#eaf5e6], text-[#407a3f]
 */

const tabsContainerVariants = cva(
  "flex items-center gap-1",
  {
    variants: {},
    defaultVariants: {},
  }
);

const tabVariants = cva(
  [
    "relative rounded-[12px] shrink-0",
    "transition-colors duration-200 ease-in-out",
    "cursor-pointer",
    "flex items-center gap-2 px-3 py-[6px]",
    "font-['Inter',sans-serif] font-medium text-[14px] leading-[20px]",
  ].join(" "),
  {
    variants: {
      active: {
        true: "bg-[#407a3f] text-white",
        false: "bg-transparent text-slate-500 hover:text-slate-700",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

const tabBadgeVariants = cva(
  [
    "inline-flex items-center justify-center",
    "h-[22px] rounded-[12px] shrink-0",
    "px-[9px] py-[3px]",
    "font-['Inter',sans-serif] font-medium text-[12px] leading-[16px]",
    "whitespace-nowrap",
  ].join(" "),
  {
    variants: {
      active: {
        true: "bg-[rgba(255,255,255,0.2)] text-white",
        false: "bg-[#eaf5e6] text-[#407a3f]",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

export interface TabItem {
  id: string;
  label: string;
  count?: number;
}

export interface TabsProps extends VariantProps<typeof tabsContainerVariants> {
  items: TabItem[];
  activeTabId?: string;
  onTabClick?: (tabId: string) => void;
  className?: string;
}

export interface TabProps extends VariantProps<typeof tabVariants> {
  item: TabItem;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export interface TabBadgeProps extends VariantProps<typeof tabBadgeVariants> {
  count: number;
  active?: boolean;
  className?: string;
}

const TabBadge = React.forwardRef<HTMLDivElement, TabBadgeProps>(
  ({ count, active = false, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(tabBadgeVariants({ active }), className)}
        {...props}
      >
        {count.toLocaleString()}
      </div>
    );
  }
);
TabBadge.displayName = "TabBadge";

const Tab = React.forwardRef<HTMLButtonElement, TabProps>(
  ({ item, active = false, onClick, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        role="tab"
        aria-selected={active}
        className={cn(tabVariants({ active }), className)}
        onClick={onClick}
        {...props}
      >
        <span>{item.label}</span>
        {item.count !== undefined && (
          <TabBadge count={item.count} active={active} />
        )}
      </button>
    );
  }
);
Tab.displayName = "Tab";

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ items, activeTabId, onTabClick, className, ...props }, ref) => {
    const handleTabClick = (tabId: string) => {
      onTabClick?.(tabId);
    };

    return (
      <div
        ref={ref}
        role="tablist"
        className={cn(tabsContainerVariants(), className)}
        {...props}
      >
        {items.map((item) => (
          <Tab
            key={item.id}
            item={item}
            active={activeTabId === item.id}
            onClick={() => handleTabClick(item.id)}
          />
        ))}
      </div>
    );
  }
);
Tabs.displayName = "Tabs";

export { Tabs, Tab, TabBadge, tabsContainerVariants, tabVariants, tabBadgeVariants };

