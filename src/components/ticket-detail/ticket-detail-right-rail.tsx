/**
 * Ticket Detail Right Rail Component
 * 
 * Right sidebar for ticket detail page with contact, linked assets, tickets, knowledge, and subtasks.
 * Extracted from kix-ticket-detail.tsx for better code organization.
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { 
  ChevronDown, 
  ChevronUp, 
  Phone, 
  Mail, 
  Copy, 
  Monitor, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  XCircle,
} from "lucide-react";
import { StatusBadge } from "@/components/kix-status-badge";
import { PriorityBadge } from "@/components/kix-priority-badge";
import type { Asset, LinkedTicket, KnowledgeItem, Subtask, Contact } from "@/types/ticket-detail";

interface TicketDetailRightRailProps {
  contact: Contact;
  organization: string;
  linkedAssets: Asset[];
  linkedTickets: LinkedTicket[];
  suggestedKnowledge: KnowledgeItem[];
  subtasks: Subtask[];
  onAssetsDrawerOpen: () => void;
  onTicketsDrawerOpen: () => void;
  onKnowledgeDrawerOpen: () => void;
  onSubtasksDrawerOpen: () => void;
}

export function TicketDetailRightRail({
  contact,
  organization,
  linkedAssets,
  linkedTickets,
  suggestedKnowledge,
  subtasks,
  onAssetsDrawerOpen,
  onTicketsDrawerOpen,
  onKnowledgeDrawerOpen,
  onSubtasksDrawerOpen,
}: TicketDetailRightRailProps) {
  const [contactCollapsed, setContactCollapsed] = useState(false);
  const [assetsCollapsed, setAssetsCollapsed] = useState(false);
  const [ticketsCollapsed, setTicketsCollapsed] = useState(false);
  const [knowledgeCollapsed, setKnowledgeCollapsed] = useState(false);
  const [subtasksCollapsed, setSubtasksCollapsed] = useState(false);

  return (
    <div className="space-y-4">
      {/* Contact Card */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="px-4 pt-4 pb-3 border-0">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm text-[var(--text-primary)]">Contact</CardTitle>
            <Button
              variant="transparent"
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
                <AvatarImage src={contact.avatar} />
                <AvatarFallback>
                  {contact.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm text-[var(--text-primary)]">{contact.name}</p>
                <p className="text-xs text-[var(--text-caption)]">{organization}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outlined" size="sm" className="flex-1 h-8 gap-1.5">
                <Phone size={14} />
                <span className="text-xs">Call</span>
              </Button>
              <Button variant="outlined" size="sm" className="flex-1 h-8 gap-1.5">
                <Mail size={14} />
                <span className="text-xs">Email</span>
              </Button>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outlined" size="sm" className="h-8 w-8 p-0">
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
              variant="transparent"
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
              variant="transparent" 
              size="sm" 
              className="w-full h-7 text-xs text-primary hover:text-primary"
              onClick={onAssetsDrawerOpen}
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
              variant="transparent"
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
              variant="transparent" 
              size="sm" 
              className="w-full h-7 text-xs text-primary hover:text-primary"
              onClick={onTicketsDrawerOpen}
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
              variant="transparent"
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
              variant="transparent" 
              size="sm" 
              className="w-full h-7 text-xs text-primary hover:text-primary"
              onClick={onKnowledgeDrawerOpen}
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
              variant="transparent"
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
              variant="transparent" 
              size="sm" 
              className="w-full h-7 text-xs text-primary hover:text-primary"
              onClick={onSubtasksDrawerOpen}
            >
              View all ({subtasks.length})
            </Button>
          </CardContent>
        )}
      </Card>
    </div>
  );
}

