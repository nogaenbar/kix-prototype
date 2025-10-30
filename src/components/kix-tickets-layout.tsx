import { useState } from "react";
import { KIXFilterTree } from "./kix-filter-tree";
import { KIXTicketsTableCard } from "./kix-tickets-table-card";
import { KIXFoldersDrawer } from "./kix-folders-drawer";

interface KIXTicketsLayoutProps {
  activeViewId?: string;
  onTicketClick?: (ticketId: string) => void;
  onFilterApply?: (filterId: string, filterData: any) => void;
  className?: string;
}

export function KIXTicketsLayout({
  activeViewId,
  onTicketClick,
  onFilterApply,
  className = ""
}: KIXTicketsLayoutProps) {
  const [isFilterRailCollapsed, setIsFilterRailCollapsed] = useState(false);
  const [isFoldersDrawerOpen, setIsFoldersDrawerOpen] = useState(false);

  const handleToggleFilterRail = () => {
    setIsFilterRailCollapsed(!isFilterRailCollapsed);
  };

  const handleFoldersClick = () => {
    setIsFoldersDrawerOpen(true);
  };

  const handleFoldersClose = () => {
    setIsFoldersDrawerOpen(false);
  };

  const handleFilterNodeSelect = (nodeId: string, node: any) => {
    console.log("Filter node selected:", nodeId, node);
    onFilterApply?.(nodeId, node);
  };

  const handleFolderSelect = (folderId: string, folder: any) => {
    console.log("Folder selected:", folderId, folder);
    // Apply folder filters to the table
    setIsFoldersDrawerOpen(false);
  };

  const handleTicketClick = (ticketId: string) => {
    onTicketClick?.(ticketId);
  };

  return (
    <div className={`flex h-full w-full ${className}`}>
      {/* Left Filter Rail */}
      <KIXFilterTree
        title="Teams"
        searchPlaceholder="Search teams..."
        onNodeSelect={handleFilterNodeSelect}
        onToggleCollapse={handleToggleFilterRail}
        isCollapsed={isFilterRailCollapsed}
      />

      {/* Main Table Area */}
      <div className="flex-1 h-full">
        <KIXTicketsTableCard
          activeViewId={activeViewId}
          onFoldersClick={handleFoldersClick}
          onTicketClick={handleTicketClick}
        />
      </div>

      {/* Right Folders Drawer */}
      <KIXFoldersDrawer
        isOpen={isFoldersDrawerOpen}
        onClose={handleFoldersClose}
        onFolderSelect={handleFolderSelect}
      />
    </div>
  );
}