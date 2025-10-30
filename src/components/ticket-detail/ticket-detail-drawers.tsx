/**
 * Ticket Detail Drawers Component
 * 
 * Drawer components for "View all" actions in ticket detail page.
 * Extracted from kix-ticket-detail.tsx for better code organization.
 */

import { Button } from "@/components/ui/button";
import { 
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Package, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  XCircle,
} from "lucide-react";
import { StatusBadge } from "@/components/kix-status-badge";
import { PriorityBadge } from "@/components/kix-priority-badge";
import type { Asset, LinkedTicket, KnowledgeItem, Subtask } from "@/types/ticket-detail";

interface TicketDetailDrawersProps {
  assetsDrawerOpen: boolean;
  ticketsDrawerOpen: boolean;
  knowledgeDrawerOpen: boolean;
  subtasksDrawerOpen: boolean;
  onAssetsDrawerOpenChange: (open: boolean) => void;
  onTicketsDrawerOpenChange: (open: boolean) => void;
  onKnowledgeDrawerOpenChange: (open: boolean) => void;
  onSubtasksDrawerOpenChange: (open: boolean) => void;
  linkedAssets: Asset[];
  linkedTickets: LinkedTicket[];
  suggestedKnowledge: KnowledgeItem[];
  subtasks: Subtask[];
}

export function TicketDetailDrawers({
  assetsDrawerOpen,
  ticketsDrawerOpen,
  knowledgeDrawerOpen,
  subtasksDrawerOpen,
  onAssetsDrawerOpenChange,
  onTicketsDrawerOpenChange,
  onKnowledgeDrawerOpenChange,
  onSubtasksDrawerOpenChange,
  linkedAssets,
  linkedTickets,
  suggestedKnowledge,
  subtasks,
}: TicketDetailDrawersProps) {
  return (
    <>
      {/* Assets Drawer */}
      <Drawer open={assetsDrawerOpen} onOpenChange={onAssetsDrawerOpenChange}>
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
              <Button variant="outlined">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {/* Tickets Drawer */}
      <Drawer open={ticketsDrawerOpen} onOpenChange={onTicketsDrawerOpenChange}>
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
              <Button variant="outlined">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {/* Knowledge Drawer */}
      <Drawer open={knowledgeDrawerOpen} onOpenChange={onKnowledgeDrawerOpenChange}>
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
              <Button variant="outlined">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {/* Subtasks Drawer */}
      <Drawer open={subtasksDrawerOpen} onOpenChange={onSubtasksDrawerOpenChange}>
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
              <Button variant="outlined">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

