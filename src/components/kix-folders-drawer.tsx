import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { 
  X, 
  Search, 
  Folder, 
  FolderPlus, 
  Share, 
  Lock, 
  MoreHorizontal,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

interface FolderNode {
  id: string;
  name: string;
  count: number;
  icon?: "folder" | "shared" | "locked";
  children?: FolderNode[];
  expanded?: boolean;
  selected?: boolean;
}

interface FolderSection {
  id: string;
  title: string;
  folders: FolderNode[];
  expanded: boolean;
}

interface KIXFoldersDrawerProps {
  isOpen?: boolean;
  onClose?: () => void;
  onFolderSelect?: (folderId: string, folder: FolderNode) => void;
  className?: string;
}

const defaultFoldersData: FolderSection[] = [
  {
    id: "my-folders",
    title: "My Folders",
    expanded: true,
    folders: [
      { 
        id: "my-urgent", 
        name: "Urgent Tickets", 
        count: 12, 
        icon: "folder",
        selected: false
      },
      { 
        id: "my-follow-up", 
        name: "Follow-up Required", 
        count: 8, 
        icon: "folder",
        selected: false
      },
      { 
        id: "my-projects", 
        name: "Project Tickets", 
        count: 24, 
        icon: "folder",
        expanded: true,
        children: [
          { id: "proj-migration", name: "Server Migration", count: 15, icon: "folder" },
          { id: "proj-upgrade", name: "Software Upgrade", count: 9, icon: "folder" }
        ]
      }
    ]
  },
  {
    id: "shared-folders",
    title: "Shared with me",
    expanded: true,
    folders: [
      { 
        id: "shared-escalated", 
        name: "Escalated Issues", 
        count: 6, 
        icon: "shared",
        selected: false
      },
      { 
        id: "shared-review", 
        name: "Pending Review", 
        count: 18, 
        icon: "shared",
        selected: false
      }
    ]
  },
  {
    id: "team-folders",
    title: "Team Folders",
    expanded: false,
    folders: [
      { 
        id: "team-critical", 
        name: "Critical Infrastructure", 
        count: 23, 
        icon: "locked",
        selected: false
      },
      { 
        id: "team-maintenance", 
        name: "Scheduled Maintenance", 
        count: 14, 
        icon: "folder",
        selected: false
      }
    ]
  }
];

function FolderNodeComponent({ 
  folder, 
  level = 0, 
  onSelect, 
  onToggleExpand 
}: {
  folder: FolderNode;
  level?: number;
  onSelect?: (folderId: string, folder: FolderNode) => void;
  onToggleExpand?: (folderId: string) => void;
}) {
  const hasChildren = folder.children && folder.children.length > 0;
  const paddingLeft = level * 16 + 8;

  const getIcon = () => {
    switch (folder.icon) {
      case "shared":
        return <Share size={14} className="text-blue-600" />;
      case "locked":
        return <Lock size={14} className="text-amber-600" />;
      default:
        return <Folder size={14} className="text-muted-foreground" />;
    }
  };

  return (
    <div>
      <div 
        className={`flex items-center gap-2 px-2 py-1.5 hover:bg-muted/50 cursor-pointer rounded-sm transition-colors group ${
          folder.selected ? 'bg-accent text-accent-foreground' : ''
        }`}
        style={{ paddingLeft: `${paddingLeft}px` }}
        onClick={() => onSelect?.(folder.id, folder)}
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
                onToggleExpand?.(folder.id);
              }}
            >
              {folder.expanded ? (
                <ChevronDown size={12} className="text-muted-foreground" />
              ) : (
                <ChevronRight size={12} className="text-muted-foreground" />
              )}
            </Button>
          ) : (
            <div className="w-4 h-4" />
          )}
        </div>

        {/* Folder icon */}
        <div className="flex-shrink-0">
          {getIcon()}
        </div>

        {/* Folder content */}
        <div className="flex items-center justify-between flex-1 min-w-0">
          <span className="text-sm font-medium truncate">{folder.name}</span>
          <div className="flex items-center gap-1">
            <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">
              {folder.count}
            </Badge>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-6 h-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e: React.MouseEvent) => e.stopPropagation()}
                >
                  <MoreHorizontal size={12} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Rename</DropdownMenuItem>
                <DropdownMenuItem>Move</DropdownMenuItem>
                <DropdownMenuItem>Share</DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Children */}
      {hasChildren && folder.expanded && (
        <div>
          {folder.children?.map((child) => (
            <FolderNodeComponent
              key={child.id}
              folder={child}
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

export function KIXFoldersDrawer({
  isOpen = false,
  onClose,
  onFolderSelect,
  className = ""
}: KIXFoldersDrawerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [foldersData, setFoldersData] = useState(defaultFoldersData);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleFolderSelect = (folderId: string, folder: FolderNode) => {
    // Update selection state
    const updateSelection = (sections: FolderSection[]): FolderSection[] => {
      return sections.map(section => ({
        ...section,
        folders: updateFolderSelection(section.folders, folderId)
      }));
    };

    const updateFolderSelection = (folders: FolderNode[], selectedId: string): FolderNode[] => {
      return folders.map(f => ({
        ...f,
        selected: f.id === selectedId,
        children: f.children ? updateFolderSelection(f.children, selectedId) : undefined
      }));
    };
    
    setFoldersData(updateSelection(foldersData));
    onFolderSelect?.(folderId, folder);
  };

  const handleToggleExpand = (folderId: string) => {
    const updateExpansion = (sections: FolderSection[]): FolderSection[] => {
      return sections.map(section => ({
        ...section,
        folders: toggleFolderExpansion(section.folders, folderId)
      }));
    };

    const toggleFolderExpansion = (folders: FolderNode[], targetId: string): FolderNode[] => {
      return folders.map(f => ({
        ...f,
        expanded: f.id === targetId ? !f.expanded : f.expanded,
        children: f.children ? toggleFolderExpansion(f.children, targetId) : undefined
      }));
    };
    
    setFoldersData(updateExpansion(foldersData));
  };

  const handleSectionToggle = (sectionId: string) => {
    setFoldersData(prev => prev.map(section => ({
      ...section,
      expanded: section.id === sectionId ? !section.expanded : section.expanded
    })));
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`fixed right-0 top-0 h-full w-96 bg-card border-l border-border shadow-popover z-50 flex flex-col ${className}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <h3 className="font-medium">Folders</h3>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="w-8 h-8">
              <FolderPlus size={16} />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <MoreHorizontal size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>New Folder</DropdownMenuItem>
                <DropdownMenuItem>Import Folders</DropdownMenuItem>
                <DropdownMenuItem>Export Folders</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button 
              variant="ghost" 
              size="icon" 
              className="w-8 h-8"
              onClick={onClose}
            >
              <X size={16} />
            </Button>
          </div>
        </div>

        {/* Search */}
        <div className="px-4 py-3 border-b border-border">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search folders..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-9 h-8"
            />
          </div>
        </div>

        {/* Folders content */}
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="p-2">
            {foldersData.map((section) => (
              <div key={section.id} className="mb-4">
                <Collapsible 
                  open={section.expanded}
                  onOpenChange={() => handleSectionToggle(section.id)}
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-start p-2 h-auto font-medium text-muted-foreground hover:text-foreground"
                    >
                      {section.expanded ? (
                        <ChevronDown size={14} className="mr-2" />
                      ) : (
                        <ChevronRight size={14} className="mr-2" />
                      )}
                      {section.title}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-1">
                    {section.folders.map((folder) => (
                      <FolderNodeComponent
                        key={folder.id}
                        folder={folder}
                        onSelect={handleFolderSelect}
                        onToggleExpand={handleToggleExpand}
                      />
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}