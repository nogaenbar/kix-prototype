import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { ChevronDown, ChevronRight, ChevronLeft, Search } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

interface TreeNode {
  id: string;
  name: string;
  count: number;
  children?: TreeNode[];
  selected?: boolean;
  expanded?: boolean;
}

interface KIXFilterTreeProps {
  title?: string;
  searchPlaceholder?: string;
  data?: TreeNode[];
  onNodeSelect?: (nodeId: string, node: TreeNode) => void;
  onSearchChange?: (query: string) => void;
  onToggleCollapse?: () => void;
  isCollapsed?: boolean;
  className?: string;
}

const defaultTeamsData: TreeNode[] = [
  {
    id: "it-infra",
    name: "IT Infrastructure", 
    count: 486,
    expanded: true,
    children: [
      { id: "it-infra-servers", name: "Servers & Hardware", count: 156 },
      { id: "it-infra-network", name: "Network Operations", count: 89 },
      { id: "it-infra-security", name: "Security", count: 124 },
      { id: "it-infra-cloud", name: "Cloud Services", count: 117 }
    ]
  },
  {
    id: "service-desk",
    name: "Service Desk",
    count: 324,
    expanded: false,
    children: [
      { id: "sd-l1", name: "Level 1 Support", count: 234 },
      { id: "sd-l2", name: "Level 2 Support", count: 90 }
    ]
  },
  {
    id: "applications",
    name: "Applications",
    count: 267,
    expanded: false,
    children: [
      { id: "app-erp", name: "ERP Systems", count: 89 },
      { id: "app-crm", name: "CRM Platform", count: 67 },
      { id: "app-hr", name: "HR Systems", count: 45 },
      { id: "app-finance", name: "Finance Tools", count: 66 }
    ]
  },
  {
    id: "facilities",
    name: "Facilities",
    count: 123,
    expanded: false,
    children: [
      { id: "fac-hvac", name: "HVAC", count: 34 },
      { id: "fac-security", name: "Physical Security", count: 23 },
      { id: "fac-maintenance", name: "Maintenance", count: 66 }
    ]
  },
  {
    id: "procurement",
    name: "Procurement",
    count: 87,
    expanded: false,
    children: [
      { id: "proc-software", name: "Software Licenses", count: 45 },
      { id: "proc-hardware", name: "Hardware Purchasing", count: 42 }
    ]
  }
];

function TreeNodeComponent({ 
  node, 
  level = 0, 
  onSelect, 
  onToggleExpand 
}: {
  node: TreeNode;
  level?: number;
  onSelect?: (nodeId: string, node: TreeNode) => void;
  onToggleExpand?: (nodeId: string) => void;
}) {
  const hasChildren = node.children && node.children.length > 0;
  const paddingLeft = level * 16 + 8; // 16px per level + 8px base

  return (
    <div className="select-none">
      <div 
        className={`flex items-center gap-2 px-2 py-1.5 hover:bg-muted/50 cursor-pointer rounded-sm transition-colors ${
          node.selected ? 'bg-accent text-accent-foreground' : ''
        }`}
        style={{ paddingLeft: `${paddingLeft}px` }}
        onClick={() => onSelect?.(node.id, node)}
      >
        {/* Expand/collapse button or spacer */}
        <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
          {hasChildren ? (
            <Button
              variant="ghost"
              size="sm"
              className="w-4 h-4 p-0 hover:bg-transparent"
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                onToggleExpand?.(node.id);
              }}
            >
              {node.expanded ? (
                <ChevronDown size={12} className="text-muted-foreground" />
              ) : (
                <ChevronRight size={12} className="text-muted-foreground" />
              )}
            </Button>
          ) : (
            <div className="w-4 h-4" /> // Spacer for leaf nodes
          )}
        </div>

        {/* Tree branch lines */}
        {level > 0 && (
          <div className="absolute left-0 top-0 bottom-0 pointer-events-none">
            {/* Vertical line for parent connection */}
            <div 
              className="absolute border-l border-border"
              style={{ 
                left: `${(level - 1) * 16 + 16}px`,
                top: 0,
                bottom: 0
              }}
            />
            {/* Horizontal line to node */}
            <div 
              className="absolute border-b border-border"
              style={{ 
                left: `${(level - 1) * 16 + 16}px`,
                top: '12px',
                width: '8px'
              }}
            />
          </div>
        )}

        {/* Node content */}
        <div className="flex items-center justify-between flex-1 min-w-0">
          <span className="text-sm font-medium truncate">{node.name}</span>
          <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground flex-shrink-0">
            {node.count}
          </Badge>
        </div>
      </div>

      {/* Children */}
      {hasChildren && node.expanded && (
        <div className="relative">
          {node.children?.map((child) => (
            <TreeNodeComponent
              key={child.id}
              node={child}
              level={level + 1}
              onSelect={onSelect}
              onToggleExpand={onToggleExpand}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function KIXFilterTree({
  title = "Teams",
  searchPlaceholder = "Search teams...",
  data = defaultTeamsData,
  onNodeSelect,
  onSearchChange,
  onToggleCollapse,
  isCollapsed = false,
  className = ""
}: KIXFilterTreeProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [treeData, setTreeData] = useState(data);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    onSearchChange?.(query);
  };

  const handleNodeSelect = (nodeId: string, node: TreeNode) => {
    // Update selection state
    const updateSelection = (nodes: TreeNode[]): TreeNode[] => {
      return nodes.map(n => ({
        ...n,
        selected: n.id === nodeId,
        children: n.children ? updateSelection(n.children) : undefined
      }));
    };
    
    setTreeData(updateSelection(treeData));
    onNodeSelect?.(nodeId, node);
  };

  const handleToggleExpand = (nodeId: string) => {
    const toggleExpand = (nodes: TreeNode[]): TreeNode[] => {
      return nodes.map(n => ({
        ...n,
        expanded: n.id === nodeId ? !n.expanded : n.expanded,
        children: n.children ? toggleExpand(n.children) : undefined
      }));
    };
    
    setTreeData(toggleExpand(treeData));
  };

  if (isCollapsed) {
    return (
      <div className={`w-12 bg-card border-r border-border h-full flex flex-col ${className}`}>
        <div className="p-2 border-b border-border">
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8"
            onClick={onToggleCollapse}
          >
            <ChevronRight size={16} className="text-muted-foreground" />
          </Button>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <span className="text-xs text-muted-foreground transform -rotate-90 whitespace-nowrap">
            {title}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-80 bg-card border-r border-border h-full flex flex-col ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <h3 className="font-medium">{title}</h3>
        <Button
          variant="ghost"
          size="icon"
          className="w-6 h-6"
          onClick={onToggleCollapse}
        >
          <ChevronLeft size={14} className="text-muted-foreground" />
        </Button>
      </div>

      {/* Search */}
      <div className="px-3 py-2 border-b border-border">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-9 h-8"
          />
        </div>
      </div>

      {/* Tree */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="p-2">
          {treeData.map((node) => (
            <TreeNodeComponent
              key={node.id}
              node={node}
              onSelect={handleNodeSelect}
              onToggleExpand={handleToggleExpand}
            />
          ))}
        </div>
      </div>
    </div>
  );
}