import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ChevronDown, ChevronUp, Mail, Phone } from "lucide-react";
import { PriorityBadge } from "@/components/kix-priority-badge";
import { TicketDetailHeader } from "@/components/ticket-detail/ticket-detail-header";
import { TicketDetailConversation } from "@/components/ticket-detail/ticket-detail-conversation";
import { TicketDetailRightRail } from "@/components/ticket-detail/ticket-detail-right-rail";
import { TicketDetailDrawers } from "@/components/ticket-detail/ticket-detail-drawers";
import type { TicketDetailData, ConversationMessage, Asset, LinkedTicket, KnowledgeItem, Subtask } from "@/types/ticket-detail";

interface TicketDetailProps {
  ticketId: string;
  onBack?: () => void;
}

// Mock data - in production this would come from props or API
const ticketData: TicketDetailData = {
  id: "202590",
  subject: "Email server not responding - urgent investigation required",
  status: "Open",
  priority: "P1",
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

const conversationData: ConversationMessage[] = [
  {
    id: "1",
    author: "John Smith",
    avatar: "",
    timestamp: "2025-10-14 10:15",
    type: "External",
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
    type: "Internal",
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
    type: "External",
    isUnread: true,
    to: ["john.smith@acme.com"],
    cc: ["support@company.com"],
    subject: "Re: Email server not responding",
    body: "We've identified the issue - database connection pool exhausted. Working on a fix now. ETA 30 minutes.",
    attachments: []
  }
];

const linkedAssets: Asset[] = [
  { id: "AS-1024", name: "Mail Server - PROD-01", type: "Server", status: loreActive" },
  { id: "AS-1025", name: "Exchange Database", type: "Database", status: "Active" },
  { id: "AS-1026", name: "Load Balancer原著 - LB-02", type: "Network", status: "Active" }
];

const linkedTickets: LinkedTicket[] = [
  { id: "201234", subject: "Slow email delivery", priority: "P3", status: "Closed" },
  { id: "201456", subject: "SMTP authentication errors", priority: "P2", status: "Open" }
];

const suggestedKnowledge: KnowledgeItem[] = [
  { id: "KB-145", title: "Exchange Server Troubleshooting Guide", type: "Guide" },
  { id: "KB-289", title: "Database Connection Pool Configuration", type: "How-to" },
  { id: "KB-334", title: "Email Service Recovery Procedures", type: "Procedure" }
];

const subtasks: Subtask[] = [
  { id: "ST-1", title: "Check database connections", assignee: "Sarah Wilson", status: "Completed" },
  { id: "ST-2", title: "Restart mail service", assignee: "Mike Johnson", status: "In Progress" },
  { id: "ST-3", title: "Update monitoring alerts", assignee: "Unassigned", status: "Open" }
];

export function KIXTicketDetail({ ticketId, onBack }: TicketDetailProps) {
  const [selectedStatus, setSelectedStatus] = useState(ticketData.status);
  const [isWatching, setIsWatching] = useState(false);
  const [detailsCollapsed, setDetailsCollapsed] = useState(false);
  
  // Drawer states
  const [assetsDrawerOpen, setAssetsDrawerOpen] = useState(false);
  const [ticketsDrawerOpen, setTicketsDrawerOpen] = useState(false);
  const [knowledgeDrawerOpen, setKnowledgeDrawerOpen] = useState(false);
  const [subtasksDrawerOpen, setSubtasksDrawerOpen] = useState(false);

  const handleCopyId = () => {
    navigator.clipboard.writeText(`#${ticketData.id}`);
  };

  return (
    <TooltipProvider>
      <div className="flex flex-col h-full bg-[var(--surface-app)]">
        {/* Header */}
        <TicketDetailHeader
          ticketId={ticketData.id}
          subject={ticketData.subject}
          status={ticketData.status}
          priority={ticketData.priority}
          sla={ticketData.sla}
          assignee={ticketData.assignee}
          selectedStatus={selectedStatus}
          onStatusChange={setSelectedStatus}
          onCopyId={handleCopyId}
          onReply={() => {}}
          onBack={onBack}
          isWatching={isWatching}
          onWatchToggle={() => setIsWatching(!isWatching)}
        />

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
                        variant="transparent"
                        size="sm"
                        className="h-6 w-6 p-0"
                        onClick={() => setDetailsCollapsed(!detailsCollapsed)}
                      >
                        {detailsCollapsed ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
                      </Button>
                    </div>
                  </CardHeader>
                  {!detailsCollapsed && (
                    <CardContent className="492px-6 pb-6 pt-0">
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
                                <Button variant="transparent" size="sm" className="h-5 w-5 p-0">
                                  <Mail size={12} />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>{ticketData.contact.email}</TooltipContent>
                            </Tooltip>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="transparent" size="sm" className="h-5 w-5 p-0">
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

                {/* Conversation */}
                <TicketDetailConversation
                  messages={conversationData}
                  contactEmail={ticketData.contact.email}
                />
              </div>

              {/* Right Sidebar */}
              <TicketDetailRightRail
                contact={ticketData.contact}
                organization={ticketData.organization}
                linkedAssets={linkedAssets}
                linkedTickets={linkedTickets}
                suggestedKnowledge={suggestedKnowledge}
                subtasks={subtasks}
                onAssetsDrawerOpen={() => setAssetsDrawerOpen(true)}
                onTicketsDrawerOpen={() => setTicketsDrawerOpen(true)}
                onKnowledgeDrawerOpen={() => setKnowledgeDrawerOpen(true)}
                onSubtasksDrawerOpen={() => setSubtasksDrawerOpen(true)}
              />
            </div>
          </div>
        </div>

        {/* Drawers */}
        <TicketDetailDrawers
          assetsDrawerOpen={assetsDrawerOpen}
          ticketsDrawerOpen={ticketsDrawerOpen}
          knowledgeDrawerOpen={knowledgeDrawerOpen}
          subtasksDrawerOpen={subtasksDrawerOpen}
          onAssetsDrawerOpenChange={setAssetsDrawerOpen}
          onTicketsDrawerOpenChange={setTicketsDrawerOpen}
          onKnowledgeDrawerOpenChange={setKnowledgeDrawerOpen}
          onSubtasksDrawerOpenChange={setSubtasksDrawerOpen}
          linkedAssets={linkedAssets}
          linkedTickets={linkedTickets}
          suggestedKnowledge={suggestedKnowledge}
          subtasks={subtasks}
        />
      </div>
    </TooltipProvider>
  );
}
