/**
 * Ticket Detail Conversation Component
 * 
 * Conversation thread and message composer for ticket detail page.
 * Extracted from kix-ticket-detail.tsx for better code organization.
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Calendar,
  Paperclip,
  Send,
  MoreHorizontal,
  Mail,
  Split,
  Printer,
} from "lucide-react";
import type { ConversationMessage } from "@/types/ticket-detail";

interface TicketDetailConversationProps {
  messages: ConversationMessage[];
  contactEmail: string;
}

type ConversationFilter = "All" | "External" | "Internal" | "Unread";
type ComposerMode = "External" | "Internal";

export function TicketDetailConversation({
  messages,
  contactEmail,
}: TicketDetailConversationProps) {
  const [conversationCollapsed, setConversationCollapsed] = useState(false);
  const [conversationFilter, setConversationFilter] = useState<ConversationFilter>("All");
  const [composerMode, setComposerMode] = useState<ComposerMode>("External");

  // Calculate conversation counts
  const conversationCounts = {
    All: messages.length,
    External: messages.filter(m => m.type === "External").length,
    Internal: messages.filter(m => m.type === "Internal").length,
    Unread: messages.filter(m => m.isUnread).length,
  };

  // Filter messages based on selected filter
  const filteredConversation = conversationFilter === "All"
    ? messages
    : conversationFilter === "Unread"
    ? messages.filter(m => m.isUnread)
    : messages.filter(m => m.type === conversationFilter);

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="px-6 pt-6 pb-4 border-0">
        <div className="flex items-center justify-between">
          <CardTitle className="text-[var(--text-h2)] text-[var(--text-primary)]">Conversation</CardTitle>
          <Button
            variant="transparent"
            size="sm"
            className="h-6 w-6 p-0"
            aria-label="Toggle conversation section"
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
                  variant={conversationFilter === filter ? "filled" : "transparent"}
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
              <Button variant="outlined" size="sm" className="h-8 px-3 gap-1.5">
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
                      <Button variant="transparent" size="sm" className="h-6 w-6 p-0" aria-label="Message actions">
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
                        className="inline-flex items-center gap-1 rounded text-xs font-medium whitespace-nowrap bg-muted/50 px-2 py-1 cursor-pointer hover:bg-muted"
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
                    variant={composerMode === mode ? "filled" : "transparent"}
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
                defaultValue={composerMode === "External" ? contactEmail : "IT Team"}
              />
              <Textarea 
                placeholder="Write your message..." 
                className="min-h-[100px] text-sm resize-y"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="outlined" size="sm" className="h-8 px-3 gap-1.5">
                  <Paperclip size={14} />
                  <span className="text-xs">Attach</span>
                </Button>
                <Button variant="transparent" size="sm" className="h-8 px-2 text-xs text-muted-foreground">
                  Cc/Bcc
                </Button>
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-pressed border-transparent rounded-lg font-medium transition-colors focus:ring-2 focus:ring-ring focus:ring-offset-2 h-8 px-4 gap-2">
                <Send size={14} />
                <span className="text-xs">Send</span>
              </Button>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
}

