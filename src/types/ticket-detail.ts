/**
 * Ticket Detail Types
 * 
 * Shared types for ticket detail components.
 * Extracted from kix-ticket-detail.tsx for better code organization.
 */

export interface TicketDetailData {
  id: string;
  subject: string;
  status: string;
  priority: string;
  sla: string;
  organization: string;
  contact: Contact;
  type: string;
  state: string;
  locked: boolean;
  assignee: Assignee;
  owner: string;
  slaDue: string;
  accountedTime: string;
}

export interface Contact {
  name: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface Assignee {
  name: string;
  avatar: string;
}

export interface ConversationMessage {
  id: string;
  author: string;
  avatar: string;
  timestamp: string;
  type: "External" | "Internal";
  isUnread: boolean;
  to: string[];
  cc: string[];
  subject: string;
  body: string;
  attachments: string[];
}

export interface Asset {
  id: string;
  name: string;
  type: string;
  status: string;
}

export interface LinkedTicket {
  id: string;
  subject: string;
  priority: string;
  status: string;
}

export interface KnowledgeItem {
  id: string;
  title: string;
  type: string;
}

export interface Subtask {
  id: string;
  title: string;
  assignee: string;
  status: string;
}

