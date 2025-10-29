import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "./ui/breadcrumb";
import { Separator } from "./ui/separator";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { 
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "./ui/drawer";
import { ScrollArea } from "./ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "./ui/dropdown-menu";
import { 
  ArrowLeft, 
  Copy, 
  Mail, 
  MoreHorizontal, 
  Phone, 
  User, 
  Clock, 
  Link2, 
  Search, 
  Calendar,
  Paperclip,
  Send,
  ChevronDown,
  ChevronUp,
  Printer,
  Eye,
  EyeOff,
  Split,
  Monitor,
  FileText,
  CheckCircle2,
  XCircle,
  X,
  AlertCircle,
  Package
} from "lucide-react";
import { StatusBadge } from "./kix-status-badge";
import { PriorityBadge } from "./kix-priority-badge";

interface TicketDetailProps {
  ticketId: string;
  onBack?: () => void;
}

// Mock data
const ticketData = {
  id: "202590",
  subject: "Email server not responding - urgent investigation required",
  status: "Open",
  priority: "P1" as const,
  sla: "3h 22m to breach",
  organization: "Acme Corporation",
  contact: {
    name: "John Smith",
    email: "john.smith@acme.com",
    phone: "+1 555 0123",
    avatar: ""
  },
  type: "Incident",
  state: "Open",
  locked: false,
  assignee: {
    name: "Sarah Wilson",
    avatar: ""
  },
  owner: "IT Infrastructure",
  slaDue: "2025-10-14 15:30",
  accountedTime: "2h 15m"
};

const conversationData = [
  {
    id: "1",
    author: "John Smith",
    avatar: "",
    timestamp: "2025-10-14 10:15",
    type: "External" as const,
    isUnread: false,
    to: ["support@company.com"],
    cc: [],
    subject: "Email server not responding",
    body: "Our email server has been down since 9am this morning. This is affecting our entire sales team. Please help urgently.",
    attachments: ["error-log.txt", "screenshot.png"]
  },
  {
    id: "2",
    author: "Sarah Wilson",
    avatar: "",
    timestamp: "2025-10-14 10:30",
    type: "Internal" as const,
    isUnread: false,
    to: ["IT Team"],
    cc: [],
    subject: "Re: Email server not responding",
    body: "I've started investigating. Looks like the mail service stopped unexpectedly. Checking logs now.",
    attachments: []
  },
  {
    id: "3",
    author: "Mike Johnson",
    avatar: "",
    timestamp: "2025-10-14 11:45",
    type: "External" as const,
    isUnread: true,
    to: ["john.smith@acme.com"],
    cc: ["support@company.com"],
    subject: "Re: Email server not responding",
    body: "We've identified the issue - database connection pool exhausted. Working on a fix now. ETA 30 minutes.",
    attachments: []
  }
];

const linkedAssets = [
  { id: "AS-1024", name: "Mail Server - PROD-01", type: "Server", status: "Active" },
  { id: "AS-1025", name: "Exchange Database", type: "Database", status: "Active" },
  { id: "AS-1026", name: "Load Balancer - LB-02", type: "Network", status: "Active" }
];

const linkedTickets = [
  { id: "201234", subject: "Slow email delivery", priority: "P3" as const, status: "Closed" },
  { id: "201456", subject: "SMTP authentication errors", priority: "P2" as const, status: "Open" }
];

const suggestedKnowledge = [
  { id: "KB-145", title: "Exchange Server Troubleshooting Guide", type: "Guide" },
  { id: "KB-289", title: "Database Connection Pool Configuration", type: "How-to" },
  { id: "KB-334", title: "Email Service Recovery Procedures", type: "Procedure" }
];

const subtasks = [
  { id: "ST-1", title: "Check database connections", assignee: "Sarah Wilson", status: "Completed" },
  { id: "ST-2", title: "Restart mail service", assignee: "Mike Johnson", status: "In Progress" },
  { id: "ST-3", title: "Update monitoring alerts", assignee: "Unassigned", status: "Open" }
];

export function KIXTicketDetail({ ticketId, onBack }: TicketDetailProps) {
  const [selectedStatus, setSelectedStatus] = useState(ticketData.status);
  const [conversationFilter, setConversationFilter] = useState<"All" | "External" | "Internal" | "Unread">("All");
  const [composerMode, setComposerMode] = useState<"External" | "Internal">("External");
  const [isWatching, setIsWatching] = useState(false);
  
  // Drawer states
  const [assetsDrawerOpen, setAssetsDrawerOpen] = useState(false);
  const [ticketsDrawerOpen, setTicketsDrawerOpen] = useState(false);
  const [knowledgeDrawerOpen, setKnowledgeDrawerOpen] = useState(false);
  const [subtasksDrawerOpen, setSubtasksDrawerOpen] = useState(false);
  
  // Collapsible states
  const [detailsCollapsed, setDetailsCollapsed] = useState(false);
  const [conversationCollapsed, setConversationCollapsed] = useState(false);
  const [contactCollapsed, setContactCollapsed] = useState(false);
  const [assetsCollapsed, setAssetsCollapsed] = useState(false);
  const [ticketsCollapsed, setTicketsCollapsed] = useState(false);
  const [knowledgeCollapsed, setKnowledgeCollapsed] = useState(false);
  const [subtasksCollapsed, setSubtasksCollapsed] = useState(false);

  const handleCopyId = () => {
    navigator.clipboard.writeText(`#${ticketData.id}`);
  };

  const filteredConversation = conversationData.filter(msg => {
    if (conversationFilter === "All") return true;
    if (conversationFilter === "Unread") return msg.isUnread;
    return msg.type === conversationFilter;
  });

  const conversationCounts = {
    All: conversationData.length,
    External: conversationData.filter(m => m.type === "External").length,
    Internal: conversationData.filter(m => m.type === "Internal").length,
    Unread: conversationData.filter(m => m.isUnread).length
  };

  return (
    <TooltipProvider>
    <div className="flex flex-col h-full bg-[var(--surface-app)]">
      {/* Sticky Header */}
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
                <BreadcrumbPage>#{ticketData.id}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Ticket Header */}
          <div className="flex items-start justify-between gap-4">
            {/* Left: Title and Meta */}
            <div className="flex-1 min-w-0 space-y-2">
              <div className="flex items-center gap-2">
                <h1 className="text-[var(--text-display)] text-[var(--text-primary)] truncate">
                  #{ticketData.id} — {ticketData.subject}
                </h1>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-6 w-6 p-0 shrink-0"
                      onClick={handleCopyId}
                    >
                      <Copy size={14} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Copy ticket ID</TooltipContent>
                </Tooltip>
              </div>
              
              {/* Status/Priority/SLA Chips */}
              <div className="flex items-center gap-2 flex-wrap">
                <StatusBadge status={ticketData.status} />
                <PriorityBadge priority={ticketData.priority} />
                <Badge className="kix-chip bg-[var(--critical-tint)] text-[var(--critical)] border-[var(--critical)]/20 px-1.5 py-0.5 text-xs inline-flex items-center gap-1">
                  <Clock size={10} />
                  <span>{ticketData.sla}</span>
                </Badge>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 shrink-0">
              {/* Primary: Reply */}
              <Button className="kix-button-primary h-9 px-4 gap-2">
                <Mail size={16} />
                Reply
              </Button>

              {/* Status Segmented Control */}
              <div className="flex items-center gap-0.5 border border-border rounded-lg p-0.5 bg-muted/50">
                {["Open", "Pending", "Closed"].map((status) => (
                  <Button
                    key={status}
                    variant={selectedStatus === status ? "default" : "ghost"}
                    size="sm"
                    className={`h-7 px-3 text-xs ${
                      selectedStatus === status 
                        ? "bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm" 
                        : "hover:bg-muted"
                    }`}
                    onClick={() => setSelectedStatus(status)}
                  >
                    {status}
                  </Button>
                ))}
              </div>

              {/* Assignee Pill */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm" className="h-8 px-2 gap-2">
                    <Avatar className="h-5 w-5">
                      <AvatarImage src={ticketData.assignee.avatar} />
                      <AvatarFallback className="text-xs">
                        {ticketData.assignee.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs">{ticketData.assignee.name.split(' ')[0]}</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Assignee: {ticketData.assignee.name}</TooltipContent>
              </Tooltip>

              {/* Link Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-8 px-3 gap-1">
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
                      <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                        <MoreHorizontal size={16} />
                      </Button>
                    </DropdownMenuTrigger>
                  </TooltipTrigger>
                  <TooltipContent>More actions</TooltipContent>
                </Tooltip>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setIsWatching(!isWatching)}>
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

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto">
        <div className="px-6 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - 2/3 */}
            <div className="lg:col-span-2 space-y-6">
              {/* Details Card */}
              <Card className="border-0 shadow-sm">
                <CardHeader className="px-6 pt-6 pb-4 border-0">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-[var(--text-h2)] text-[var(--text-primary)]">Details</CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0"
                      onClick={() => setDetailsCollapsed(!detailsCollapsed)}
                    >
                      {detailsCollapsed ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
                    </Button>
                  </div>
                </CardHeader>
                {!detailsCollapsed && (
                  <CardContent className="px-6 pb-6 pt-0">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                      {/* Organization */}
                      <div className="space-y-1">
                        <dt className="text-xs text-[var(--text-caption)]">Organization</dt>
                        <dd className="text-sm text-[var(--text-body)]">{ticketData.organization}</dd>
                      </div>

                      {/* Contact */}
                      <div className="space-y-1">
                        <dt className="text-xs text-[var(--text-caption)]">Contact</dt>
                        <dd className="flex items-center gap-2">
                          <span className="text-sm text-[var(--text-body)]">{ticketData.contact.name}</span>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
                                <Mail size={12} />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>{ticketData.contact.email}</TooltipContent>
                          </Tooltip>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
                                <Phone size={12} />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>{ticketData.contact.phone}</TooltipContent>
                          </Tooltip>
                        </dd>
                      </div>

                      {/* Type */}
                      <div className="space-y-1">
                        <dt className="text-xs text-[var(--text-caption)]">Type</dt>
                        <dd className="text-sm text-[var(--text-body)]">{ticketData.type}</dd>
                      </div>

                      {/* State */}
                      <div className="space-y-1">
                        <dt className="text-xs text-[var(--text-caption)]">State</dt>
                        <dd className="text-sm text-[var(--text-body)]">{ticketData.state}</dd>
                      </div>

                      {/* Priority (read-only) */}
                      <div className="space-y-1">
                        <dt className="text-xs text-[var(--text-caption)]">Priority</dt>
                        <dd><PriorityBadge priority={ticketData.priority} /></dd>
                      </div>

                      {/* Lock State */}
                      <div className="space-y-1">
                        <dt className="text-xs text-[var(--text-caption)]">Lock State</dt>
                        <dd className="text-sm text-[var(--text-body)]">{ticketData.locked ? "Locked" : "Unlocked"}</dd>
                      </div>

                      {/* Assignee/Owner */}
                      <div className="space-y-1">
                        <dt className="text-xs text-[var(--text-caption)]">Assignee</dt>
                        <dd className="text-sm text-[var(--text-body)]">{ticketData.assignee.name}</dd>
                      </div>

                      <div className="space-y-1">
                        <dt className="text-xs text-[var(--text-caption)]">Owner</dt>
                        <dd className="text-sm text-[var(--text-body)]">{ticketData.owner}</dd>
                      </div>

                      {/* SLA Due */}
                      <div className="space-y-1">
                        <dt className="text-xs text-[var(--text-caption)]">SLA Due</dt>
                        <dd className="text-sm text-[var(--text-body)]">{ticketData.slaDue}</dd>
                      </div>

                      {/* Accounted Time */}
                      <div className="space-y-1">
                        <dt className="text-xs text-[var(--text-caption)]">Accounted Time</dt>
                        <dd className="text-sm text-[var(--text-body)]">{ticketData.accountedTime}</dd>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>

              {/* Conversation Card */}
              <Card className="border-0 shadow-sm">
                <CardHeader className="px-6 pt-6 pb-4 border-0">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-[var(--text-h2)] text-[var(--text-primary)]">Conversation</CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0"
                      onClick={() => setConversationCollapsed(!conversationCollapsed)}
                    >
                      {conversationCollapsed ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
                    </Button>
                  </div>
                </CardHeader>
                {!conversationCollapsed && (
                  <CardContent className="px-6 pb-6 pt-0 space-y-4">
                    {/* Filter Bar */}
                    <div className="flex items-center justify-between gap-4">
                      {/* Segmented Filter */}
                      <div className="flex items-center gap-1">
                        {(["All", "External", "Internal", "Unread"] as const).map((filter) => (
                          <Button
                            key={filter}
                            variant={conversationFilter === filter ? "default" : "ghost"}
                            size="sm"
                            className={`h-8 px-3 gap-1.5 text-xs ${
                              conversationFilter === filter 
                                ? "bg-primary text-primary-foreground hover:bg-primary-hover" 
                                : "hover:bg-muted"
                            }`}
                            onClick={() => setConversationFilter(filter)}
                          >
                            {filter}
                            <Badge 
                              variant="secondary" 
                              className={`ml-0 text-xs px-1 min-w-[18px] h-4 ${
                                conversationFilter === filter 
                                  ? "bg-primary-foreground/20 text-primary-foreground" 
                                  : "bg-muted text-muted-foreground"
                              }`}
                            >
                              {conversationCounts[filter]}
                            </Badge>
                          </Button>
                        ))}
                      </div>

                      {/* Search and Date */}
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <Search size={14} className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
                          <Input 
                            placeholder="Search..." 
                            className="h-8 w-48 pl-7 text-xs"
                          />
                        </div>
                        <Button variant="outline" size="sm" className="h-8 px-3 gap-1.5">
                          <Calendar size={14} />
                          <span className="text-xs">Date</span>
                        </Button>
                      </div>
                    </div>

                    {/* Thread List */}
                    <div className="space-y-4">
                      {filteredConversation.map((message) => (
                        <div 
                          key={message.id} 
                          className="border border-border rounded-lg p-4 space-y-3 hover:border-primary/30 transition-colors"
                        >
                          {/* Message Header */}
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={message.avatar} />
                                <AvatarFallback className="text-xs">
                                  {message.author.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="text-sm text-[var(--text-primary)]">{message.author}</span>
                                  <Badge 
                                    variant="outline" 
                                    className={`text-xs px-1.5 py-0 ${
                                      message.type === "External" 
                                        ? "bg-blue-50 text-blue-700 border-blue-200" 
                                        : "bg-amber-50 text-amber-700 border-amber-200"
                                    }`}
                                  >
                                    {message.type}
                                  </Badge>
                                  {message.isUnread && (
                                    <div className="h-2 w-2 rounded-full bg-primary" />
                                  )}
                                </div>
                                <p className="text-xs text-[var(--text-caption)]">{message.timestamp}</p>
                              </div>
                            </div>
                            
                            {/* Message Actions */}
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                                  <MoreHorizontal size={14} />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Mail size={14} className="mr-2" />
                                  Reply
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Split size={14} className="mr-2" />
                                  Split
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Printer size={14} className="mr-2" />
                                  Print
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>

                          {/* Message Meta */}
                          <div className="text-xs text-[var(--text-caption)]">
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <span className="cursor-help">
                                  To: {message.to.join(', ')}
                                  {message.cc.length > 0 && ` • Cc: ${message.cc.join(', ')}`}
                                </span>
                              </TooltipTrigger>
                              <TooltipContent>
                                <div className="space-y-1">
                                  <div>To: {message.to.join(', ')}</div>
                                  {message.cc.length > 0 && <div>Cc: {message.cc.join(', ')}</div>}
                                </div>
                              </TooltipContent>
                            </Tooltip>
                          </div>

                          {/* Message Body */}
                          <div className="text-sm text-[var(--text-body)]">
                            {message.body}
                          </div>

                          {/* Attachments */}
                          {message.attachments.length > 0 && (
                            <div className="flex items-center gap-2 flex-wrap">
                              {message.attachments.map((attachment, idx) => (
                                <Badge 
                                  key={idx} 
                                  variant="outline" 
                                  className="kix-chip bg-muted/50 text-xs px-2 py-1 gap-1 cursor-pointer hover:bg-muted"
                                >
                                  <Paperclip size={12} />
                                  {attachment}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Composer */}
                    <div className="border border-border rounded-lg p-4 space-y-3 bg-muted/30">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          {(["External", "Internal"] as const).map((mode) => (
                            <Button
                              key={mode}
                              variant={composerMode === mode ? "default" : "ghost"}
                              size="sm"
                              className={`h-7 px-3 text-xs ${
                                composerMode === mode 
                                  ? "bg-primary text-primary-foreground hover:bg-primary-hover" 
                                  : "hover:bg-muted"
                              }`}
                              onClick={() => setComposerMode(mode)}
                            >
                              {mode} {mode === "External" ? "reply" : "note"}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Input 
                          placeholder="To..." 
                          className="h-9 text-sm"
                          defaultValue={composerMode === "External" ? ticketData.contact.email : "IT Team"}
                        />
                        <Textarea 
                          placeholder="Write your message..." 
                          className="min-h-[100px] text-sm resize-y"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm" className="h-8 px-3 gap-1.5">
                            <Paperclip size={14} />
                            <span className="text-xs">Attach</span>
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 px-2 text-xs text-muted-foreground">
                            Cc/Bcc
                          </Button>
                        </div>
                        <Button className="kix-button-primary h-8 px-4 gap-2">
                          <Send size={14} />
                          <span className="text-xs">Send</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            </div>

            {/* Right Sidebar - 1/3 */}
            <div className="space-y-4">
              {/* Contact Card */}
              <Card className="border-0 shadow-sm">
                <CardHeader className="px-4 pt-4 pb-3 border-0">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm text-[var(--text-primary)]">Contact</CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0"
                      onClick={() => setContactCollapsed(!contactCollapsed)}
                    >
                      {contactCollapsed ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
                    </Button>
                  </div>
                </CardHeader>
                {!contactCollapsed && (
                  <CardContent className="px-4 pb-4 pt-0 space-y-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={ticketData.contact.avatar} />
                        <AvatarFallback>
                          {ticketData.contact.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm text-[var(--text-primary)]">{ticketData.contact.name}</p>
                        <p className="text-xs text-[var(--text-caption)]">{ticketData.organization}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 h-8 gap-1.5">
                        <Phone size={14} />
                        <span className="text-xs">Call</span>
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 h-8 gap-1.5">
                        <Mail size={14} />
                        <span className="text-xs">Email</span>
                      </Button>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                            <Copy size={14} />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Copy contact info</TooltipContent>
                      </Tooltip>
                    </div>
                  </CardContent>
                )}
              </Card>

              {/* Linked Assets */}
              <Card className="border-0 shadow-sm">
                <CardHeader className="px-4 pt-4 pb-3 border-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-sm text-[var(--text-primary)]">Linked assets</CardTitle>
                      <Badge variant="secondary" className="text-xs h-4 px-1.5">
                        {linkedAssets.length}
                      </Badge>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0"
                      onClick={() => setAssetsCollapsed(!assetsCollapsed)}
                    >
                      {assetsCollapsed ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
                    </Button>
                  </div>
                </CardHeader>
                {!assetsCollapsed && (
                  <CardContent className="px-4 pb-4 pt-0 space-y-2">
                    {linkedAssets.slice(0, 3).map((asset) => (
                      <div 
                        key={asset.id} 
                        className="flex items-start gap-2 p-2 rounded hover:bg-muted/50 cursor-pointer transition-colors"
                      >
                        <Monitor size={16} className="mt-0.5 text-muted-foreground shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-[var(--text-primary)] truncate">{asset.name}</p>
                          <p className="text-xs text-[var(--text-caption)]">{asset.type} • {asset.status}</p>
                        </div>
                      </div>
                    ))}
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full h-7 text-xs text-primary hover:text-primary"
                      onClick={() => setAssetsDrawerOpen(true)}
                    >
                      View all ({linkedAssets.length})
                    </Button>
                  </CardContent>
                )}
              </Card>

              {/* Linked Tickets */}
              <Card className="border-0 shadow-sm">
                <CardHeader className="px-4 pt-4 pb-3 border-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-sm text-[var(--text-primary)]">Linked tickets (contact)</CardTitle>
                      <Badge variant="secondary" className="text-xs h-4 px-1.5">
                        {linkedTickets.length}
                      </Badge>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0"
                      onClick={() => setTicketsCollapsed(!ticketsCollapsed)}
                    >
                      {ticketsCollapsed ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
                    </Button>
                  </div>
                </CardHeader>
                {!ticketsCollapsed && (
                  <CardContent className="px-4 pb-4 pt-0 space-y-2">
                    {linkedTickets.map((ticket) => (
                      <div 
                        key={ticket.id} 
                        className="flex items-start gap-2 p-2 rounded hover:bg-muted/50 cursor-pointer transition-colors"
                      >
                        <FileText size={16} className="mt-0.5 text-muted-foreground shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-[var(--text-primary)] truncate">#{ticket.id} {ticket.subject}</p>
                          <div className="flex items-center gap-1 mt-0.5">
                            <PriorityBadge priority={ticket.priority} />
                            <StatusBadge status={ticket.status} />
                          </div>
                        </div>
                      </div>
                    ))}
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full h-7 text-xs text-primary hover:text-primary"
                      onClick={() => setTicketsDrawerOpen(true)}
                    >
                      View all ({linkedTickets.length})
                    </Button>
                  </CardContent>
                )}
              </Card>

              {/* Suggested Knowledge */}
              <Card className="border-0 shadow-sm">
                <CardHeader className="px-4 pt-4 pb-3 border-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-sm text-[var(--text-primary)]">Suggested knowledge</CardTitle>
                      <Badge variant="secondary" className="text-xs h-4 px-1.5">
                        {suggestedKnowledge.length}
                      </Badge>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0"
                      onClick={() => setKnowledgeCollapsed(!knowledgeCollapsed)}
                    >
                      {knowledgeCollapsed ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
                    </Button>
                  </div>
                </CardHeader>
                {!knowledgeCollapsed && (
                  <CardContent className="px-4 pb-4 pt-0 space-y-2">
                    {suggestedKnowledge.map((kb) => (
                      <div 
                        key={kb.id} 
                        className="flex items-start gap-2 p-2 rounded hover:bg-muted/50 cursor-pointer transition-colors"
                      >
                        <FileText size={16} className="mt-0.5 text-muted-foreground shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-[var(--text-primary)] truncate">{kb.title}</p>
                          <p className="text-xs text-[var(--text-caption)]">{kb.type}</p>
                        </div>
                      </div>
                    ))}
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full h-7 text-xs text-primary hover:text-primary"
                      onClick={() => setKnowledgeDrawerOpen(true)}
                    >
                      View all ({suggestedKnowledge.length})
                    </Button>
                  </CardContent>
                )}
              </Card>

              {/* Subtasks */}
              <Card className="border-0 shadow-sm">
                <CardHeader className="px-4 pt-4 pb-3 border-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-sm text-[var(--text-primary)]">Subtasks</CardTitle>
                      <Badge variant="secondary" className="text-xs h-4 px-1.5">
                        {subtasks.length}
                      </Badge>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0"
                      onClick={() => setSubtasksCollapsed(!subtasksCollapsed)}
                    >
                      {subtasksCollapsed ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
                    </Button>
                  </div>
                </CardHeader>
                {!subtasksCollapsed && (
                  <CardContent className="px-4 pb-4 pt-0 space-y-2">
                    {subtasks.slice(0, 5).map((task) => (
                      <div 
                        key={task.id} 
                        className="flex items-start gap-2 p-2 rounded hover:bg-muted/50 cursor-pointer transition-colors"
                      >
                        {task.status === "Completed" ? (
                          <CheckCircle2 size={16} className="mt-0.5 text-green-600 shrink-0" />
                        ) : task.status === "In Progress" ? (
                          <AlertCircle size={16} className="mt-0.5 text-amber-600 shrink-0" />
                        ) : (
                          <XCircle size={16} className="mt-0.5 text-muted-foreground shrink-0" />
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-[var(--text-primary)] truncate">{task.title}</p>
                          <p className="text-xs text-[var(--text-caption)]">{task.assignee} • {task.status}</p>
                        </div>
                      </div>
                    ))}
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full h-7 text-xs text-primary hover:text-primary"
                      onClick={() => setSubtasksDrawerOpen(true)}
                    >
                      View all ({subtasks.length})
                    </Button>
                  </CardContent>
                )}
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Drawers for "View all" */}
      <Drawer open={assetsDrawerOpen} onOpenChange={setAssetsDrawerOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Linked Assets</DrawerTitle>
            <DrawerDescription>All assets linked to this ticket</DrawerDescription>
          </DrawerHeader>
          <ScrollArea className="h-[400px] px-4">
            <div className="space-y-2 pb-4">
              {linkedAssets.map((asset) => (
                <div key={asset.id} className="border border-border rounded-lg p-3 hover:bg-muted/50 cursor-pointer">
                  <div className="flex items-start gap-3">
                    <Package size={20} className="text-muted-foreground shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm text-[var(--text-primary)]">{asset.name}</p>
                      <p className="text-xs text-[var(--text-caption)] mt-1">
                        {asset.id} • {asset.type} • {asset.status}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Drawer open={ticketsDrawerOpen} onOpenChange={setTicketsDrawerOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Linked Tickets</DrawerTitle>
            <DrawerDescription>All tickets linked to this contact</DrawerDescription>
          </DrawerHeader>
          <ScrollArea className="h-[400px] px-4">
            <div className="space-y-2 pb-4">
              {linkedTickets.map((ticket) => (
                <div key={ticket.id} className="border border-border rounded-lg p-3 hover:bg-muted/50 cursor-pointer">
                  <p className="text-sm text-[var(--text-primary)] mb-2">#{ticket.id} {ticket.subject}</p>
                  <div className="flex items-center gap-2">
                    <PriorityBadge priority={ticket.priority} />
                    <StatusBadge status={ticket.status} />
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Drawer open={knowledgeDrawerOpen} onOpenChange={setKnowledgeDrawerOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Suggested Knowledge</DrawerTitle>
            <DrawerDescription>Knowledge base articles that might help</DrawerDescription>
          </DrawerHeader>
          <ScrollArea className="h-[400px] px-4">
            <div className="space-y-2 pb-4">
              {suggestedKnowledge.map((kb) => (
                <div key={kb.id} className="border border-border rounded-lg p-3 hover:bg-muted/50 cursor-pointer">
                  <p className="text-sm text-[var(--text-primary)] mb-1">{kb.title}</p>
                  <p className="text-xs text-[var(--text-caption)]">{kb.id} • {kb.type}</p>
                </div>
              ))}
            </div>
          </ScrollArea>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Drawer open={subtasksDrawerOpen} onOpenChange={setSubtasksDrawerOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Subtasks</DrawerTitle>
            <DrawerDescription>All subtasks for this ticket</DrawerDescription>
          </DrawerHeader>
          <ScrollArea className="h-[400px] px-4">
            <div className="space-y-2 pb-4">
              {subtasks.map((task) => (
                <div key={task.id} className="border border-border rounded-lg p-3 hover:bg-muted/50 cursor-pointer">
                  <div className="flex items-start gap-3">
                    {task.status === "Completed" ? (
                      <CheckCircle2 size={20} className="text-green-600 shrink-0 mt-0.5" />
                    ) : task.status === "In Progress" ? (
                      <AlertCircle size={20} className="text-amber-600 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle size={20} className="text-muted-foreground shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p className="text-sm text-[var(--text-primary)] mb-1">{task.title}</p>
                      <p className="text-xs text-[var(--text-caption)]">{task.id} • {task.assignee} • {task.status}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
    </TooltipProvider>
  );
}
