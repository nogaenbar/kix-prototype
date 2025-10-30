/**
 * Ticket Detail Header Component
 * 
 * Sticky header for ticket detail page with breadcrumb, title, badges, and actions.
 * Extracted from kix-ticket-detail.tsx for better code organization.
 */

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { 
  ArrowLeft, 
  Copy, 
  Mail, 
  MoreHorizontal, 
  Clock, 
  Link2, 
  ChevronDown,
  Printer,
  Eye,
  EyeOff,
  XCircle,
  FileText,
} from "lucide-react";
import { StatusBadge } from "@/components/kix-status-badge";
import { PriorityBadge } from "@/components/kix-priority-badge";
import type { Assignee } from "@/types/ticket-detail";

interface TicketDetailHeaderProps {
  ticketId: string;
  subject: string;
  status: string;
  priority: string;
  sla: string;
  assignee: Assignee;
  selectedStatus: string;
  onStatusChange: (status: string) => void;
  onCopyId: () => void;
  onReply: () => void;
  onBack?: () => void;
  isWatching: boolean;
  onWatchToggle: () => void;
}

export function TicketDetailHeader({
  ticketId,
  subject,
  status,
  priority,
  sla,
  assignee,
  selectedStatus,
  onStatusChange,
  onCopyId,
  onReply,
  onBack,
  isWatching,
  onWatchToggle,
}: TicketDetailHeaderProps) {
  return (
    <div className="sticky top-0 z-10 bg-[var(--surface-panel)] border-b border-[var(--border-light)] shadow-sm">
      <div className="px-6 py-4 space-y-3">
        {/* Breadcrumb */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink onClick={onBack} className="cursor-pointer flex items-center gap-1">
                <ArrowLeft size={14} />
                Tickets
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>#{ticketId}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Ticket Header */}
        <div className="flex items-start justify-between gap-4">
          {/* Left: Title and Meta */}
          <div className="flex-1 min-w-0 space-y-2">
            <div className="flex items-center gap-2">
              <h1 className="text-[var(--text-display)] text-[var(--text-primary)] truncate">
                #{ticketId} — {subject}
              </h1>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="transparent" 
                    size="sm" 
                    className="h-6 w-6 p-0 shrink-0"
                    aria-label="Copy ticket ID"
                    onClick={onCopyId}
                  >
                    <Copy size={14} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Copy ticket ID</TooltipContent>
              </Tooltip>
            </div>
            
            {/* Status/Priority/SLA Chips */}
            <div className="flex items-center gap-2 flex-wrap">
              <StatusBadge status={status} />
              <PriorityBadge priority={priority} />
              <Badge className="inline-flex items-center gap-1 rounded text-xs font-medium whitespace-nowrap bg-[var(--critical-tint)] text-[var(--critical)] border-[var(--critical)]/20 px-1.5 py-0.5">
                <Clock size={10} />
                <span>{sla}</span>
              </Badge>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Primary: Reply */}
            <Button className="bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-pressed border-transparent rounded-lg font-medium transition-colors focus:ring-2 focus:ring-ring focus:ring-offset-2 h-9 px-4 gap-2">
              <Mail size={16} />
              Reply
            </Button>

            {/* Status Segmented Control */}
            <div className="flex items-center gap-0.5 border border-border rounded-lg p-0.5 bg-muted/50">
              {["Open", "Pending", "Closed"].map((statusOption) => (
                <Button
                  key={statusOption}
                  variant={selectedStatus === statusOption ? "filled" : "transparent"}
                  size="sm"
                  className={`h-7 px-3 text-xs ${
                    selectedStatus === statusOption 
                      ? "bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm" 
                      : "hover:bg-muted"
                  }`}
                  onClick={() => onStatusChange(statusOption)}
                >
                  {statusOption}
                </Button>
              ))}
            </div>

            {/* Assignee Pill */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outlined" size="sm" className="h-8 px-2 gap-2">
                  <Avatar className="h-5 w-5">
                    <AvatarImage src={assignee.avatar} />
                    <AvatarFallback className="text-xs">
                      {assignee.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-xs">{assignee.name.split(' ')[0]}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Assignee: {assignee.name}</TooltipContent>
            </Tooltip>

            {/* Link Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outlined" size="sm" className="h-8 px-3 gap-1" aria-label="Open link menu">
                  <Link2 size={14} />
                  <span className="text-xs">Link</span>
                  <ChevronDown size={12} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link2 size={14} className="mr-2" />
                  Link Asset
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link2 size={14} className="mr-2" />
                  Link Ticket
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <FileText size={14} className="mr-2" />
                  Manage Links
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* More Menu */}
            <DropdownMenu>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outlined" size="sm" className="h-8 w-8 p-0" aria-label="Open more actions">
                      <MoreHorizontal size={16} />
                    </Button>
                  </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent>More actions</TooltipContent>
              </Tooltip>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={onWatchToggle}>
                  {isWatching ? <EyeOff size={14} className="mr-2" /> : <Eye size={14} className="mr-2" />}
                  {isWatching ? "Unwatch" : "Watch"}
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Printer size={14} className="mr-2" />
                  Print
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  <XCircle size={14} className="mr-2" />
                  Close Ticket
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}

