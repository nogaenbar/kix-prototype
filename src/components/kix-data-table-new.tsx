import { useState } from "react";
import { Button } from "./ui/button";
import { IconButton } from "./ui/icon-button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { 
  Search, 
  Filter, 
  Calendar, 
  Columns, 
  Download, 
  MoreHorizontal,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Minus,
  ArrowUp,
  ArrowUpDown
} from "lucide-react";
import svgPaths from "../imports/svg-b99b8ujj5u";

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
  allowCollapse?: boolean;
  isTicketsPage?: boolean;
}

// Search Icon Component (exact from Figma)
function SearchIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <path d="M14 14L11.1067 11.1067" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

// Sort Icon Component (exact from Figma)
function SortIcon() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <path d={svgPaths.p193c4180} stroke="var(--stroke-0, #407A3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

// Priority Icon Components (exact from Figma)
function PriorityIcon({ priority }: { priority: "P1" | "P2" | "P3" | "P4" }) {
  if (priority === "P1") {
    return (
      <div className="relative shrink-0 size-[12px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g>
            <path d={svgPaths.pda4c00} stroke="var(--stroke-0, #B42318)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 4.5V6.5" stroke="var(--stroke-0, #B42318)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 8.5H6.005" stroke="var(--stroke-0, #B42318)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    );
  }

  if (priority === "P2") {
    return (
      <div className="relative shrink-0 size-[12px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g>
            <path d="M2.5 6L6 2.5L9.5 6" stroke="var(--stroke-0, #B76E00)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 9.5V2.5" stroke="var(--stroke-0, #B76E00)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    );
  }

  return (
    <div className="relative shrink-0 size-[12px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g>
          <path d="M2.5 6H9.5" stroke="var(--stroke-0, #0F766E)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

// Action Icon Component (exact from Figma)
function ActionIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <path d={svgPaths.p36e45a00} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p1a14b300} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p2295f880} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

// Card Header Component (exact from Figma)
function CardHeader({ title, ticketCount, isCollapsed, onToggle, allowCollapse = true, isTicketsPage = false }: {
  title: string;
  ticketCount: number;
  isCollapsed: boolean;
  onToggle: () => void;
  allowCollapse?: boolean;
  isTicketsPage?: boolean;
}) {
  return (
    <div 
      className={`${isTicketsPage ? '' : 'bg-white'} relative shrink-0 w-full`}
      style={{
        padding: '24px',
        borderRadius: isCollapsed ? '12px' : '12px 12px 0 0',
      }}
    >
      <div className="flex items-center justify-between w-full">
        {/* Title */}
        <h3 className="font-['Inter',sans-serif] font-semibold text-[18px] leading-[28px] text-[#101828]">
          {title}
        </h3>

        {/* Count and Toggle */}
        <div className="flex items-center gap-[12px]">
          <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] text-[#6a7282] whitespace-nowrap">
            {ticketCount} tickets{isCollapsed ? ' • Collapsed' : ''}
          </p>
          {allowCollapse && (
            <div
              className="transition-transform duration-300 ease-in-out"
              style={{
                transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            >
              <IconButton
                variant="transparent"
                size="md"
                onClick={onToggle}
                aria-label={isCollapsed ? "Expand table" : "Collapse table"}
              >
                <ChevronDown />
              </IconButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Table Toolbar Component (using new Input component)
function TableToolbar() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      {/* Search */}
      <div className="w-[280px]">
        <Input
          size="md"
          placeholder="Search tickets..."
          leftIcon={<Search />}
        />
      </div>

      {/* Action Buttons - Right aligned */}
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
          {/* Last 30 days */}
          <Button variant="outlined" size="md">
            Last 30 days
            <ChevronDown />
          </Button>

          {/* Priority */}
          <Button variant="outlined" size="md">
            Priority
            <ChevronDown />
          </Button>

          {/* Filter */}
          <Button variant="outlined" size="md">
            <Filter />
            Filter
          </Button>

          {/* Sort */}
          <Button variant="outlined" size="md">
            <ArrowUpDown />
            Sort
          </Button>

          {/* Export CSV */}
          <Button variant="outlined" size="md">
            <Download />
            Export CSV
          </Button>
      </div>
    </div>
  );
}

// Table Header Component (exact from Figma)
function TableHeader() {
  return (
    <div className="bg-slate-50 border-b border-gray-200 relative shrink-0 w-full">
      <div className="box-border content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          {/* TicketID */}
          <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[40px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[40px] items-center px-[8px] py-0 relative w-full">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[92px]">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                    <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">TicketID</p>
                  </div>
                  <div className="bg-[rgba(27,27,27,0)] content-stretch flex items-center justify-center relative rounded-[1000px] shrink-0 size-[28px]">
                    <div aria-hidden="true" className="absolute border border-[rgba(27,27,27,0)] border-solid inset-0 pointer-events-none rounded-[1000px]" />
                    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 size-[16px]">
                      <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center justify-center min-h-px min-w-px relative shrink-0">
                        <SortIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Subject */}
          <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[40px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[40px] items-center px-[8px] py-0 relative w-full">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[92px]">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                    <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Subject</p>
                  </div>
                  <div className="bg-[rgba(27,27,27,0)] content-stretch flex items-center justify-center relative rounded-[1000px] shrink-0 size-[28px]">
                    <div aria-hidden="true" className="absolute border border-[rgba(27,27,27,0)] border-solid inset-0 pointer-events-none rounded-[1000px]" />
                    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 size-[16px]">
                      <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center justify-center min-h-px min-w-px relative shrink-0">
                        <SortIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Priority */}
          <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[40px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[40px] items-center px-[8px] py-0 relative w-full">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[92px]">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                    <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Priority</p>
                  </div>
                  <div className="bg-[rgba(27,27,27,0)] content-stretch flex items-center justify-center relative rounded-[1000px] shrink-0 size-[28px]">
                    <div aria-hidden="true" className="absolute border border-[rgba(27,27,27,0)] border-solid inset-0 pointer-events-none rounded-[1000px]" />
                    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 size-[16px]">
                      <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center justify-center min-h-px min-w-px relative shrink-0">
                        <SortIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Assignee */}
          <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[40px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[40px] items-center px-[8px] py-0 relative w-full">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[92px]">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                    <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Assignee</p>
                  </div>
                  <div className="bg-[rgba(27,27,27,0)] content-stretch flex items-center justify-center relative rounded-[1000px] shrink-0 size-[28px]">
                    <div aria-hidden="true" className="absolute border border-[rgba(27,27,27,0)] border-solid inset-0 pointer-events-none rounded-[1000px]" />
                    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 size-[16px]">
                      <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center justify-center min-h-px min-w-px relative shrink-0">
                        <SortIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[40px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[40px] items-center px-[8px] py-0 relative w-full">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[92px]">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                    <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Status</p>
                  </div>
                  <div className="bg-[rgba(27,27,27,0)] content-stretch flex items-center justify-center relative rounded-[1000px] shrink-0 size-[28px]">
                    <div aria-hidden="true" className="absolute border border-[rgba(27,27,27,0)] border-solid inset-0 pointer-events-none rounded-[1000px]" />
                    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 size-[16px]">
                      <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center justify-center min-h-px min-w-px relative shrink-0">
                        <SortIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Date created */}
          <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[40px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[40px] items-center px-[8px] py-0 relative w-full">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                    <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Date created</p>
                  </div>
                  <div className="bg-[rgba(27,27,27,0)] content-stretch flex items-center justify-center relative rounded-[1000px] shrink-0 size-[28px]">
                    <div aria-hidden="true" className="absolute border border-[rgba(27,27,27,0)] border-solid inset-0 pointer-events-none rounded-[1000px]" />
                    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 size-[16px]">
                      <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center justify-center min-h-px min-w-px relative shrink-0">
                        <SortIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="bg-[rgba(27,27,27,0)] box-border content-stretch flex gap-[10px] h-[40px] items-center px-[8px] py-0 relative shrink-0 w-[100px]">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Actions</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

// Priority Badge Component (exact from Figma)
function PriorityBadge({ priority }: { priority: "P1" | "P2" | "P3" | "P4" }) {
  const getPriorityStyles = (priority: string) => {
    switch (priority) {
      case "P1":
        return {
          bg: "bg-red-100",
          border: "border-[rgba(180,35,24,0.2)]",
          text: "text-[#b42318]"
        };
      case "P2":
        return {
          bg: "bg-amber-100",
          border: "border-[rgba(183,110,0,0.2)]",
          text: "text-[#b76e00]"
        };
      case "P3":
        return {
          bg: "bg-[#eaf5e6]",
          border: "border-[rgba(64,122,63,0.2)]",
          text: "text-[#407a3f]"
        };
      case "P4":
        return {
          bg: "bg-[#e7f8f1]",
          border: "border-[rgba(15,118,110,0.2)]",
          text: "text-[#0f766e]"
        };
      default:
        return {
          bg: "bg-[#e7f8f1]",
          border: "border-[rgba(15,118,110,0.2)]",
          text: "text-[#0f766e]"
        };
    }
  };

  const styles = getPriorityStyles(priority);

  return (
    <div className={`${styles.bg} h-[24px] relative rounded-[8px] shrink-0`}>
      <div className="box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center overflow-clip px-[9px] py-px relative">
        <PriorityIcon priority={priority} />
        <div className="h-[14.656px] relative shrink-0">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14.656px] items-start overflow-clip relative">
            <p className={`font-['Inter:Medium',_sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[11px] text-nowrap whitespace-pre ${styles.text}`}>
              {priority}
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className={`absolute border ${styles.border} border-solid inset-0 pointer-events-none rounded-[8px]`} />
    </div>
  );
}

// Status Badge Component (exact from Figma)
function StatusBadge({ status }: { status: string }) {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Open":
        return {
          bg: "",
          border: "border-slate-900",
          text: "text-slate-900"
        };
      case "Pending":
        return {
          bg: "bg-amber-100",
          border: "border-[rgba(183,110,0,0.2)]",
          text: "text-[#b76e00]"
        };
      case "New":
        return {
          bg: "bg-[#eaf5e6]",
          border: "border-[rgba(64,122,63,0.2)]",
          text: "text-[#407a3f]"
        };
      default:
        return {
          bg: "",
          border: "border-slate-900",
          text: "text-slate-900"
        };
    }
  };

  const styles = getStatusStyles(status);

  return (
    <div className={`${styles.bg} h-[24px] relative rounded-[8px] shrink-0`}>
      <div className="box-border content-stretch flex h-[24px] items-center justify-center overflow-clip px-[9px] py-px relative">
        <div className="h-[15px] relative shrink-0">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15px] items-start overflow-clip relative">
            <p className={`font-['Inter:Medium',_sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[11px] text-nowrap whitespace-pre ${styles.text}`}>
              {status}
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className={`absolute border ${styles.border} border-solid inset-0 pointer-events-none rounded-[8px]`} />
    </div>
  );
}

// Avatar Component (exact from Figma)
function UserAvatar({ name }: { name: string }) {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[3.35544e+07px] shrink-0 size-[20px]">
      <div className="basis-0 bg-slate-100 grow h-[20px] min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-center justify-center relative w-full">
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">
            {initials}
          </p>
        </div>
      </div>
    </div>
  );
}

// Ticket Row Component (exact from Figma)
function TicketRow({ ticket, onRowClick }: { 
  ticket: TicketData; 
  onRowClick?: (ticketId: string) => void; 
}) {
  const handleRowClick = (e: React.MouseEvent) => {
    // Don't trigger row click if clicking on buttons or interactive elements
    if ((e.target as HTMLElement).closest('button, [role="button"]')) {
      return;
    }
    onRowClick?.(ticket.id);
  };

  const handleActionClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent row click when clicking action button
    onRowClick?.(ticket.id);
  };

  const formatDate = (date: string) => {
    if (date === "Today") return "Today";
    // Convert format like "12/12/2024, 14:30" to "14 Sep 2025"
    return date;
  };

  return (
    <div className="relative shrink-0 w-full hover:bg-slate-50 transition-colors cursor-pointer group" onClick={handleRowClick}>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          {/* TicketID */}
          <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex gap-[8px] h-[54px] items-center px-[8px] py-[10px] relative w-full">
                <div className="bg-[rgba(255,255,255,0)] relative rounded-[4px] shrink-0 size-[16px]">
                  <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
                </div>
                <div className="bg-slate-50 h-[36px] relative rounded-[12px] shrink-0">
                  <div className="box-border content-stretch flex gap-[4px] h-[36px] items-center justify-center overflow-clip p-[9px] relative">
                    <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">
                      #{ticket.id}
                    </p>
                  </div>
                  <div aria-hidden="true" className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-[12px]" />
                </div>
              </div>
            </div>
          </div>

          {/* Subject */}
          <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col justify-center size-full">
              <div className="box-border content-stretch flex flex-col h-[54px] items-start justify-center px-[8px] py-0 relative w-full">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                  <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#101828] text-[14px]">
                    <p className="leading-[17.5px]">{ticket.subject}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Priority */}
          <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex h-[54px] items-center px-[8px] py-[10px] relative w-full">
                <PriorityBadge priority={ticket.priority} />
              </div>
            </div>
          </div>

          {/* Assignee */}
          <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex gap-[8px] h-[54px] items-center px-[8px] py-[10px] relative w-full">
                {ticket.assignee ? (
                  <>
                    <UserAvatar name={ticket.assignee.name} />
                    <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">
                      {ticket.assignee.name}
                    </p>
                  </>
                ) : (
                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">
                    Unassigned
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex h-[54px] items-center px-[8px] py-[10px] relative w-full">
                <StatusBadge status={ticket.status} />
              </div>
            </div>
          </div>

          {/* Date created */}
          <div className="basis-0 bg-[rgba(27,27,27,0)] grow h-[54px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col justify-center size-full">
              <div className="box-border content-stretch flex flex-col h-[54px] items-start justify-center px-[8px] py-0 relative w-full">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                  <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">
                    <p className="leading-[17.5px] whitespace-pre">{formatDate(ticket.date)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="bg-[rgba(27,27,27,0)] box-border content-stretch flex h-[54px] items-center justify-center px-[8px] py-[10px] relative shrink-0 w-[100px]">
            <button 
              onClick={handleActionClick}
              className="box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 w-[34.594px] hover:bg-gray-100 transition-colors opacity-0 group-hover:opacity-100"
            >
              <ActionIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Table Body Component (exact from Figma)
function TableBody({ data, onRowClick, isTicketsPage = false }: { data: TicketData[]; onRowClick?: (ticketId: string) => void; isTicketsPage?: boolean }) {
  return (
    <div className="content-stretch flex flex-col flex-1 min-h-0 overflow-y-auto items-start relative w-full bg-white">
      {data.map((ticket) => (
        <TicketRow key={ticket.id} ticket={ticket} onRowClick={onRowClick} />
      ))}
    </div>
  );
}

// Table Footer Component (exact from Figma)
function TableFooter({ totalResults }: { totalResults: number }) {
  return (
    <div className="bg-white border-t border-gray-200 h-[60px] relative shrink-0 w-full">
      <div className="box-border content-stretch flex h-[60px] items-center justify-between pb-0 pt-px px-[16px] relative w-full">
        {/* Results count - Left */}
        <div className="relative shrink-0">
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px] whitespace-pre-wrap">
            Showing 1 to 10 of {totalResults} results
          </p>
        </div>

        {/* Pagination - Right */}
        <div className="h-[32px] relative shrink-0 flex gap-[8px] items-center">
          {/* Previous */}
          <Button variant="outlined" size="md" disabled className="opacity-50">
            Previous
          </Button>

          {/* Page 1 (active) */}
          <Button variant="filled" size="md" className="min-w-[32px] px-[13px]">
            1
          </Button>

          {/* Page 2 */}
          <Button variant="outlined" size="md" className="min-w-[32px] px-[13px]">
            2
          </Button>

          {/* Next */}
          <Button variant="outlined" size="md">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

// Main Table Component (exact from Figma)
export function KIXDataTableNew({ title = "My Open Tickets", data, onRowClick, allowCollapse = true, className, isTicketsPage = false }: DataTableProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] h-full ${className || ''}`}>
      {/* Card Header */}
      <CardHeader 
        title={title}
        ticketCount={data.length}
        isCollapsed={isCollapsed}
        onToggle={() => setIsCollapsed(!isCollapsed)}
        allowCollapse={allowCollapse}
        isTicketsPage={isTicketsPage}
      />

      <div 
        className={`${isTicketsPage ? '' : 'bg-white'} relative flex-1 flex flex-col min-h-0 w-full overflow-hidden transition-all duration-300 ease-in-out`}
        style={{
          maxHeight: allowCollapse && isCollapsed ? '0px' : undefined,
          opacity: allowCollapse && isCollapsed ? 0 : 1,
          marginTop: allowCollapse && isCollapsed ? '0px' : '0px',
          borderRadius: '0 0 12px 12px',
        }}
      >
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full flex-1 min-h-0">
          {/* Toolbar */}
          <div className="flex-shrink-0 w-full">
            <TableToolbar />
          </div>

          {/* Card Content - Flex column with fixed header/footer, scrollable body */}
          <div 
            className="bg-white content-stretch flex flex-col items-start relative flex-1 min-h-0 w-full rounded-[12px]"
            style={isTicketsPage ? { maxHeight: '640px', overflow: 'hidden' } : {}}
          >
            {/* Table Header - Fixed */}
            <div className="flex-shrink-0 w-full">
              <TableHeader />
            </div>

            {/* Table Body - Scrollable */}
            <div className="flex-1 min-h-0 overflow-y-auto w-full">
              <TableBody data={data} onRowClick={onRowClick} isTicketsPage={isTicketsPage} />
            </div>

            {/* Table Footer - Fixed */}
            <div className="flex-shrink-0 w-full">
              <TableFooter totalResults={data.length} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}