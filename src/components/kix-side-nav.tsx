import React, {
  useState,
  createContext,
  useContext,
  useRef,
  useEffect,
} from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import Logo from "../imports/Logo-2065-5052";
import {
  Home,
  Ticket,
  Calendar,
  Columns3,
  HardDrive,
  MapPin,
  FileText,
  Building,
  Users,
  BookOpen,
  HelpCircle,
  BarChart3,
  TrendingUp,
  Megaphone,
  Settings,
  Wrench,
  ChevronDown,
  ChevronRight,
  PanelLeftClose,
  PanelLeft,
  Star,
  Eye,
  Lock,
} from "lucide-react";

// Context for sidebar state
interface SideNavContextType {
  isExpanded: boolean;
  toggleExpanded: () => void;
  expandedSections: Set<string>;
  toggleSection: (sectionId: string) => void;
  onNavigation?: (pageId: string) => void;
  activePage: string;
}

const SideNavContext = createContext<
  SideNavContextType | undefined
>(undefined);

function useSideNav() {
  const context = useContext(SideNavContext);
  if (!context) {
    throw new Error(
      "useSideNav must be used within SideNavProvider",
    );
  }
  return context;
}

// Navigation item types
interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  badge?: number;
  active?: boolean;
  items?: NavItem[];
}

interface NavSection {
  id: string;
  title: string;
  items: NavItem[];
}

// Navigation data function - Enhanced with hierarchical structure
const getNavigationData = (
  activePage: string,
): NavSection[] => [
  {
    id: "work",
    title: "Work",
    items: [
      {
        id: "dashboard",
        label: "Dashboard",
        icon: Home,
        active: activePage === "dashboard",
      },
      {
        id: "tickets",
        label: "Tickets",
        icon: Ticket,
        badge: 856,
        active: activePage === "tickets",
        items: [
          {
            id: "my-tickets",
            label: "My Tickets",
            icon: Ticket,
            badge: 23,
            items: [
              {
                id: "watched-tickets",
                label: "Watched tickets",
                icon: Eye,
                badge: 12,
              },
              {
                id: "locked-tickets",
                label: "Locked tickets",
                icon: Lock,
                badge: 6,
              },
            ],
          },
          {
            id: "team-tickets",
            label: "Team Tickets",
            icon: Users,
            badge: 134,
          },
          {
            id: "unassigned",
            label: "Unassigned",
            icon: HelpCircle,
            badge: 42,
          },
        ],
      },
      { id: "kanban", label: "Kanban", icon: Columns3 },
      { id: "calendar", label: "Calendar", icon: Calendar },
    ],
  },
  {
    id: "records",
    title: "Records",
    items: [
      {
        id: "assets",
        label: "Assets",
        icon: HardDrive,
        badge: 1203,
        items: [
          {
            id: "computers",
            label: "Computers",
            icon: HardDrive,
            badge: 456,
          },
          {
            id: "servers",
            label: "Servers",
            icon: HardDrive,
            badge: 89,
          },
          {
            id: "network-devices",
            label: "Network Devices",
            icon: HardDrive,
            badge: 234,
          },
        ],
      },
      {
        id: "locations",
        label: "Locations",
        icon: MapPin,
        badge: 89,
      },
      {
        id: "service-contracts",
        label: "Service contracts",
        icon: FileText,
        badge: 145,
      },
      {
        id: "organizations",
        label: "Organizations",
        icon: Building,
        badge: 342,
        items: [
          {
            id: "customers",
            label: "Customers",
            icon: Building,
            badge: 234,
          },
          {
            id: "suppliers",
            label: "Suppliers",
            icon: Building,
            badge: 108,
          },
        ],
      },
      {
        id: "contacts",
        label: "Contacts",
        icon: Users,
        badge: 1847,
      },
    ],
  },
  {
    id: "knowledge",
    title: "Knowledge",
    items: [
      {
        id: "knowledge-base",
        label: "Knowledge base",
        icon: BookOpen,
        badge: 127,
        items: [
          {
            id: "articles",
            label: "Articles",
            icon: FileText,
            badge: 89,
          },
          {
            id: "faqs",
            label: "FAQs",
            icon: HelpCircle,
            badge: 38,
          },
        ],
      },
    ],
  },
  {
    id: "insights",
    title: "Insights",
    items: [
      {
        id: "reports",
        label: "Reports",
        icon: BarChart3,
        items: [
          {
            id: "sla-performance",
            label: "SLA performance",
            icon: TrendingUp,
          },
          {
            id: "ticket-trends",
            label: "Ticket trends",
            icon: BarChart3,
          },
          {
            id: "asset-reports",
            label: "Asset Reports",
            icon: HardDrive,
          },
        ],
      },
    ],
  },
  {
    id: "communication",
    title: "Communication",
    items: [
      {
        id: "announcements",
        label: "Announcements",
        icon: Megaphone,
        badge: 3,
      },
    ],
  },
  {
    id: "admin",
    title: "Admin",
    items: [
      {
        id: "administration",
        label: "Administration",
        icon: Settings,
        items: [
          {
            id: "user-management",
            label: "User Management",
            icon: Users,
          },
          {
            id: "role-management",
            label: "Role Management",
            icon: Settings,
          },
          {
            id: "system-config",
            label: "System Config",
            icon: Wrench,
          },
        ],
      },
      { id: "settings", label: "Settings", icon: Wrench },
    ],
  },
];

// Optional favorites section
const favoritesData: NavItem[] = [
  {
    id: "fav-tickets",
    label: "My Open Tickets",
    icon: Ticket,
    badge: 23,
  },
  {
    id: "fav-reports",
    label: "Weekly Report",
    icon: BarChart3,
  },
];

// Flyout component for collapsed state
interface KIXSideNavFlyoutProps {
  item: NavItem;
  children: React.ReactNode;
}

const KIXSideNavFlyout = React.forwardRef<
  HTMLDivElement,
  KIXSideNavFlyoutProps
>(({ item, children }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  const handleFocus = () => {
    setIsOpen(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (!item.items || item.items.length === 0) {
    return <>{children}</>;
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
    >
      {children}

      {isOpen && (
        <div
          className="absolute left-full top-0 ml-2 w-64 bg-popover border border-border rounded-lg shadow-lg z-50"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="p-2 space-y-1">
            <div className="px-3 py-2 text-xs uppercase tracking-wider text-muted-foreground font-medium">
              {item.label}
            </div>
            {item.items.map((subItem) => (
              <KIXSideNavItem
                key={subItem.id}
                item={subItem}
                level={1}
                inFlyout
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

KIXSideNavFlyout.displayName = "KIXSideNavFlyout";

// Sub-components
interface KIXSideNavSectionProps {
  section: NavSection;
  className?: string;
}

export function KIXSideNavSection({
  section,
  className = "",
}: KIXSideNavSectionProps) {
  const { isExpanded, expandedSections, toggleSection } =
    useSideNav();
  const isExpanded_section = expandedSections.has(section.id);

  if (!isExpanded) {
    return (
      <div className="space-y-1">
        {section.items.map((item) => (
          <KIXSideNavItem key={item.id} item={item} />
        ))}
      </div>
    );
  }

  return (
    <div className={`space-y-1 ${className}`}>
      <button
        onClick={() => toggleSection(section.id)}
        className="w-full px-3 py-2 text-left group hover:bg-sidebar-accent/50 rounded-md transition-colors"
      >
        <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium flex items-center justify-between">
          {section.title}
          <ChevronRight
            size={12}
            className={`transform transition-transform ${isExpanded_section ? "rotate-90" : ""}`}
          />
        </p>
      </button>

      <Collapsible open={isExpanded_section}>
        <CollapsibleContent className="space-y-1">
          {section.items.map((item) => (
            <KIXSideNavItem key={item.id} item={item} />
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}

interface KIXSideNavItemProps {
  item: NavItem;
  level?: number;
  className?: string;
  inFlyout?: boolean;
}

export function KIXSideNavItem({
  item,
  level = 0,
  className = "",
  inFlyout = false,
}: KIXSideNavItemProps) {
  const { isExpanded, onNavigation, activePage } = useSideNav();
  const isActive = item.active || activePage === item.id;
  
  // Expand "My Tickets" by default when on tickets page or if it's active
  const shouldBeOpen = isActive || 
    (item.id === "my-tickets" && activePage === "tickets") ||
    (item.id === "tickets" && activePage === "tickets");
  
  const [isOpen, setIsOpen] = useState(shouldBeOpen);
  const hasSubItems = item.items && item.items.length > 0;
  const Icon = item.icon;

  // Update isOpen when activePage changes
  useEffect(() => {
    const newShouldBeOpen = isActive || 
      (item.id === "my-tickets" && activePage === "tickets") ||
      (item.id === "tickets" && activePage === "tickets");
    setIsOpen(newShouldBeOpen);
  }, [isActive, activePage, item.id]);

  const handleItemClick = () => {
    // Always navigate first
    if (onNavigation) {
      onNavigation(item.id);
    }

    // Then handle expand/collapse for items with subitems
    if (hasSubItems && (isExpanded || inFlyout)) {
      setIsOpen(!isOpen);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (hasSubItems && isExpanded) {
        setIsOpen(!isOpen);
      } else {
        // Handle navigation
      }
    } else if (
      e.key === "ArrowRight" &&
      hasSubItems &&
      isExpanded &&
      !isOpen
    ) {
      setIsOpen(true);
    } else if (
      e.key === "ArrowLeft" &&
      hasSubItems &&
      isExpanded &&
      isOpen
    ) {
      setIsOpen(false);
    }
  };

  const itemContent = (
    <div
      className={`group relative flex items-center transition-colors min-h-[44px] rounded-md overflow-hidden ${
        isActive
          ? "bg-sidebar-accent text-sidebar-accent-foreground before:absolute before:left-0 before:top-1.5 before:bottom-1.5 before:w-1 before:bg-sidebar-primary"
          : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
      } ${className}`}
    >
      {/* Tree branch indicator for child items */}
      {level > 0 && isExpanded && !inFlyout && (
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border">
          <div className="absolute top-[22px] left-0 w-4 h-px bg-border"></div>
          {isActive && (
            <div className="absolute top-[18px] left-3 w-2 h-2 bg-sidebar-primary rounded-full border-2 border-sidebar"></div>
          )}
        </div>
      )}

      {/* Main button content */}
      <div
        className={`flex items-center flex-1 gap-3 ${
          isExpanded
            ? `px-3 ${level > 0 && !inFlyout ? "ml-6" : ""}`
            : "px-3 justify-center"
        }`}
      >
        <Icon
          size={20}
          className={`flex-shrink-0 ${isActive ? "text-sidebar-primary" : ""}`}
        />

        {(isExpanded || inFlyout) && (
          <>
            <span
              className={`flex-1 truncate ${
                isActive ? "font-medium" : "font-normal"
              }`}
            >
              {item.label}
            </span>

            {item.badge && (
              <Badge
                variant="secondary"
                className="text-xs px-1.5 py-0.5 min-w-[20px] h-5 shrink-0"
              >
                {item.badge}
              </Badge>
            )}

            {hasSubItems && (
              <div className="flex-shrink-0">
                {isOpen ? (
                  <ChevronDown
                    size={16}
                    className="text-muted-foreground"
                  />
                ) : (
                  <ChevronRight
                    size={16}
                    className="text-muted-foreground"
                  />
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );

  if (!isExpanded && !inFlyout) {
    if (hasSubItems) {
      return (
        <KIXSideNavFlyout item={item}>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring focus-visible:ring-offset-2 rounded-md"
                  onClick={handleItemClick}
                  onKeyDown={handleKeyDown}
                >
                  {itemContent}
                </button>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                className="flex items-center gap-2"
              >
                <span>{item.label}</span>
                {item.badge && (
                  <Badge
                    variant="secondary"
                    className="text-xs px-1.5 py-0.5 min-w-[20px] h-5"
                  >
                    {item.badge}
                  </Badge>
                )}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </KIXSideNavFlyout>
      );
    }

    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring focus-visible:ring-offset-2 rounded-md"
              onClick={handleItemClick}
              onKeyDown={handleKeyDown}
            >
              {itemContent}
            </button>
          </TooltipTrigger>
          <TooltipContent
            side="right"
            className="flex items-center gap-2"
          >
            <span>{item.label}</span>
            {item.badge && (
              <Badge
                variant="secondary"
                className="text-xs px-1.5 py-0.5 min-w-[20px] h-5"
              >
                {item.badge}
              </Badge>
            )}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  if (hasSubItems && (isExpanded || inFlyout)) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <button
            className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring focus-visible:ring-offset-2 rounded-md"
            onClick={handleItemClick}
            onKeyDown={handleKeyDown}
          >
            {itemContent}
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-1">
          {item.items?.map((subItem) => (
            <KIXSideNavItem
              key={subItem.id}
              item={subItem}
              level={level + 1}
              inFlyout={inFlyout}
            />
          ))}
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <button
      className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring focus-visible:ring-offset-2 rounded-md"
      onClick={handleItemClick}
      onKeyDown={handleKeyDown}
    >
      {itemContent}
    </button>
  );
}

// Main component
interface KIXSideNavProps {
  onNavigation?: (pageId: string) => void;
  activePage?: string;
  className?: string;
}

export function KIXSideNav({
  onNavigation,
  activePage = "dashboard",
  className = "",
}: KIXSideNavProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [expandedSections, setExpandedSections] = useState(
    new Set(["work"]),
  ); // Only Work section expanded by default

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        // Optional: Keep only one section expanded
        // newSet.clear();
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  return (
    <SideNavContext.Provider
      value={{
        isExpanded,
        toggleExpanded,
        expandedSections,
        toggleSection,
        onNavigation,
        activePage,
      }}
    >
      <TooltipProvider>
        <div
          className={`${
            isExpanded ? "w-64" : "w-16"
          } bg-sidebar border-r border-sidebar-border h-full flex flex-col transition-all duration-200 kix-side-nav ${className}`}
          style={{ borderRadius: "12px 0 0px 0px" }}
        >
          {/* Header - Logo Container */}
          <div className="kix-logo-container bg-transparent border-none h-[84px] flex items-center">
            {isExpanded ? (
              <div className="flex items-center justify-between pl-[24px] pr-[16px] w-full">
                <div className="h-[23.742px] w-[64px]">
                  <Logo />
                </div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleExpanded}
                      className="bg-white rounded-[12px] w-[36px] h-[36px] hover:bg-white/90"
                    >
                      <PanelLeftClose size={16} className="text-slate-500" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    Collapse sidebar
                  </TooltipContent>
                </Tooltip>
              </div>
            ) : (
              <div className="w-full flex items-center justify-center">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleExpanded}
                      className="bg-white rounded-[12px] w-[36px] h-[36px] hover:bg-white/90"
                    >
                      <PanelLeft size={16} className="text-slate-500" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    Expand sidebar
                  </TooltipContent>
                </Tooltip>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto">
            <div
              className={`${isExpanded ? "p-4" : "p-2"} space-y-6`}
            >
              {/* Favorites (optional) */}
              {favoritesData.length > 0 && (
                <div className="space-y-1">
                  {isExpanded && (
                    <div className="px-3 py-2">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium flex items-center gap-2">
                        <Star size={12} />
                        Favorites
                      </p>
                    </div>
                  )}
                  {favoritesData.map((item) => (
                    <KIXSideNavItem key={item.id} item={item} />
                  ))}
                </div>
              )}

              {/* Main navigation sections */}
              {getNavigationData(activePage).map((section) => (
                <KIXSideNavSection
                  key={section.id}
                  section={section}
                />
              ))}
            </div>
          </div>

          {/* Bottom controls */}
          {isExpanded && (
            <div className="p-4 border-t border-sidebar-border">
              <div className="text-xs text-muted-foreground text-center">
                KIX v18.0.5
              </div>
            </div>
          )}
        </div>
      </TooltipProvider>
    </SideNavContext.Provider>
  );
}