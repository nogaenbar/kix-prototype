import { useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { 
  Search, 
  Filter, 
  Calendar, 
  Columns, 
  Download, 
  MoreHorizontal, 
  Copy, 
  Star, 
  Paperclip, 
  Circle,
  ArrowUpDown,
  X,
  Eye,
  UserPlus,
  CheckCircle,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { PriorityBadge } from "./kix-priority-badge";
import { StatusBadge } from "./kix-status-badge";
import { TeamChip } from "./kix-team-chip";

interface TicketData {
  id: string;
  subject: string;
  code?: string;
  assignee?: {
    name: string;
    avatar?: string;
  };
  team: string;
  organization?: string;
  priority: "P1" | "P2" | "P3" | "P4";
  status: string;
  date: string;
  isNew?: boolean;
  hasAttachment?: boolean;
  isWatched?: boolean;
  isLocked?: boolean;
}

interface DataTableProps {
  title?: string;
  data: TicketData[];
  columns: string[];
  showBulkActions?: boolean;
  onRowClick?: (ticketId: string) => void;
  className?: string;
}

interface TableToolbarProps {
  onSearch: (query: string) => void;
  selectedCount: number;
  onBulkAction: (action: string) => void;
  showBulkActions: boolean;
}

function TableToolbar({ onSearch, selectedCount, onBulkAction, showBulkActions }: TableToolbarProps) {
  const [hasFilters, setHasFilters] = useState(false);

  if (selectedCount > 0) {
    return (
      <div className="flex items-center justify-between p-4 bg-blue-50 border-b border-blue-200">
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-blue-900">
            Selected {selectedCount} ticket{selectedCount !== 1 ? 's' : ''}
          </span>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" onClick={() => onBulkAction('assign')}>
              <UserPlus size={14} className="mr-1" />
              Assign
            </Button>
            <Button size="sm" variant="outline" onClick={() => onBulkAction('close')}>
              <CheckCircle size={14} className="mr-1" />
              Close
            </Button>
            <Button size="sm" variant="outline" onClick={() => onBulkAction('export')}>
              <Download size={14} className="mr-1" />
              Export CSV
            </Button>
          </div>
        </div>
        <Button size="sm" variant="ghost" onClick={() => onBulkAction('clear')}>
          <X size={14} />
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <Input
              placeholder="Search tickets..."
              className="pl-10 w-64 bg-gray-50 border-gray-200"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Calendar size={14} />
            Today
          </Button>
          <Button variant="outline" size="sm" className="gap-2" onClick={() => setHasFilters(!hasFilters)}>
            <Filter size={14} />
            Filters
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Columns size={14} />
            Columns
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Download size={14} />
            Export CSV
          </Button>
        </div>
      </div>

      {hasFilters && (
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1">
            <Badge variant="secondary" className="gap-1">
              Status: Open
              <button onClick={() => setHasFilters(false)}>
                <X size={12} />
              </button>
            </Badge>
            <Badge variant="secondary" className="gap-1">
              Priority: High
              <button onClick={() => setHasFilters(false)}>
                <X size={12} />
              </button>
            </Badge>
          </div>
          <Button variant="ghost" size="sm" onClick={() => setHasFilters(false)}>
            Clear filters
          </Button>
        </div>
      )}
    </div>
  );
}

function TicketRow({ ticket, isSelected, onSelect, onRowClick }: { 
  ticket: TicketData; 
  isSelected: boolean; 
  onSelect: (checked: boolean) => void;
  onRowClick?: (ticketId: string) => void; 
}) {
  const handleRowClick = (e: React.MouseEvent) => {
    // Don't trigger row click if clicking on checkbox or action buttons
    if ((e.target as HTMLElement).closest('input, button, [role="button"]')) {
      return;
    }
    onRowClick?.(ticket.id);
  };

  return (
    <div 
      className={`grid grid-cols-12 gap-2 px-3 py-2 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer group min-h-[40px] ${
        isSelected ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
      }`}
      onClick={handleRowClick}
    >
      {/* Checkbox */}
      <div className="flex items-start justify-start pt-1">
        <Checkbox checked={isSelected} onCheckedChange={onSelect} />
      </div>

      {/* Ticket ID */}
      <div className="flex items-start pt-1">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="flex items-center gap-1 group">
                <Badge variant="outline" className="text-xs px-1.5 py-0.5 bg-gray-50 text-gray-600">
                  #{ticket.id}
                </Badge>
                <Copy size={10} className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Copy ticket ID</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Subject */}
      <div className="col-span-3 flex gap-2 min-w-0 py-1">
        <div className="flex flex-col gap-1 shrink-0 pt-0.5">
          {ticket.isWatched && <Star size={10} className="text-yellow-500 fill-current" />}
          {ticket.hasAttachment && <Paperclip size={10} className="text-gray-400" />}
          {ticket.isNew && <Circle size={6} className="text-blue-500 fill-current" />}
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-medium text-sm text-gray-900 leading-tight break-words">{ticket.subject}</div>
          {ticket.code && (
            <Badge variant="secondary" className="text-xs px-1.5 py-0.5 bg-gray-100 text-gray-600 mt-1 inline-block">
              {ticket.code}
            </Badge>
          )}
        </div>
      </div>

      {/* Assignee */}
      <div className="col-span-2 flex items-start gap-2 min-w-0 pt-1">
        {ticket.assignee ? (
          <div className="flex items-center gap-2 min-w-0">
            <Avatar className="w-5 h-5 shrink-0">
              <AvatarImage src={ticket.assignee.avatar} alt={ticket.assignee.name} />
              <AvatarFallback className="text-xs">
                {ticket.assignee.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm text-gray-700 truncate">{ticket.assignee.name}</span>
          </div>
        ) : (
          <Badge variant="outline" className="text-xs px-2 py-0.5 text-gray-500">
            Unassigned
          </Badge>
        )}
      </div>

      {/* Team */}
      <div className="flex items-start pt-1">
        <TeamChip team={ticket.team} />
      </div>

      {/* Priority */}
      <div className="flex items-start pt-1">
        <PriorityBadge priority={ticket.priority} />
      </div>

      {/* Status & Date */}
      <div className="col-span-2 flex flex-col gap-1 min-w-0 py-1">
        <StatusBadge status={ticket.status} locked={ticket.isLocked} />
        <span className="text-xs text-gray-500 truncate">{ticket.date}</span>
      </div>

      {/* Actions */}
      <div className="flex items-start justify-end pt-1">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <MoreHorizontal size={12} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Eye size={14} className="mr-2" />
              Open
            </DropdownMenuItem>
            <DropdownMenuItem>
              <UserPlus size={14} className="mr-2" />
              Assign
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CheckCircle size={14} className="mr-2" />
              Close
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Star size={14} className="mr-2" />
              Watch
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Download size={14} className="mr-2" />
              Export
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export function KIXDataTable({ title, data, columns, showBulkActions = true, onRowClick, className = "" }: DataTableProps) {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const filteredData = data.filter(item =>
    item.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.id.includes(searchQuery)
  );

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedItems(new Set(filteredData.map(item => item.id)));
    } else {
      setSelectedItems(new Set());
    }
  };

  const handleSelectItem = (id: string, checked: boolean) => {
    const newSelected = new Set(selectedItems);
    if (checked) {
      newSelected.add(id);
    } else {
      newSelected.delete(id);
    }
    setSelectedItems(newSelected);
  };

  const handleBulkAction = (action: string) => {
    if (action === 'clear') {
      setSelectedItems(new Set());
    } else {
      console.log(`Bulk action: ${action}`, Array.from(selectedItems));
    }
  };

  return (
    <Card className={`kix-card kix-data-table ${className}`}>
      {title && (
        <CardHeader className="pb-0">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">{filteredData.length} tickets</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="h-8 w-8 p-0 hover:bg-gray-100"
              >
                {isCollapsed ? (
                  <ChevronDown size={16} className="text-gray-600" />
                ) : (
                  <ChevronUp size={16} className="text-gray-600" />
                )}
              </Button>
            </div>
          </div>
        </CardHeader>
      )}
      
      <CardContent className="p-0">
        {!isCollapsed && (
          <>
            <div className="p-4 border-b border-gray-200">
              <TableToolbar
                onSearch={setSearchQuery}
                selectedCount={selectedItems.size}
                onBulkAction={handleBulkAction}
                showBulkActions={showBulkActions}
              />
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-12 gap-2 px-3 py-2 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-700">
              <div className="flex items-center justify-start">
                <Checkbox
                  checked={selectedItems.size === filteredData.length && filteredData.length > 0}
                  onCheckedChange={handleSelectAll}
                />
              </div>
              <div className="flex items-center gap-1">
                ID
                <ArrowUpDown size={12} className="text-gray-400" />
              </div>
              <div className="col-span-3 flex items-center gap-1">
                Subject
                <ArrowUpDown size={12} className="text-gray-400" />
              </div>
              <div className="col-span-2 flex items-center gap-1">
                Assignee
                <ArrowUpDown size={12} className="text-gray-400" />
              </div>
              <div className="flex items-center gap-1">
                Team
                <ArrowUpDown size={12} className="text-gray-400" />
              </div>
              <div className="flex items-center gap-1">
                Priority
                <ArrowUpDown size={12} className="text-gray-400" />
              </div>
              <div className="col-span-2 flex items-center gap-1">
                Status & Date
                <ArrowUpDown size={12} className="text-gray-400" />
              </div>
              <div className="flex items-center justify-end">
                Actions
              </div>
            </div>

            {/* Table Body */}
            <div className="max-h-96 overflow-y-auto scrollbar-hide">
              <div className="min-w-full">
                {filteredData.length > 0 ? (
                  filteredData.map((ticket) => (
                    <TicketRow
                      key={ticket.id}
                      ticket={ticket}
                      isSelected={selectedItems.has(ticket.id)}
                      onSelect={(checked) => handleSelectItem(ticket.id, checked)}
                      onRowClick={onRowClick}
                    />
                  ))
                ) : (
                  <div className="p-8 text-center">
                    <p className="text-gray-500 mb-4">No tickets found</p>
                    <Button variant="outline" size="sm">
                      Clear filters
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Pagination */}
            <div className="px-4 py-3 border-t border-gray-200 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing 1 to {Math.min(10, filteredData.length)} of {filteredData.length} results
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}