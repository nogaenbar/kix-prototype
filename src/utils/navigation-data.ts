/**
 * Navigation Data Utility
 * 
 * Exports navigation structure and data for the KIX side navigation.
 * Extracted from kix-side-nav.tsx for better code organization.
 */

import {
  Home,
  Ticket,
  Calendar,
  Columns3,
  HardDrive,
  MapPin,
  FileText,
  Building,
  Users,
  BookOpen,
  HelpCircle,
  BarChart3,
  TrendingUp,
  Megaphone,
  Settings,
  Wrench,
  Eye,
  Lock,
} from "lucide-react";

// Navigation item types
export interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  badge?: number;
  active?: boolean;
  items?: NavItem[];
}

export interface NavSection {
  id: string;
  title: string;
  items: NavItem[];
}

// Navigation data function - Enhanced with hierarchical structure
export function getNavigationData(activePage: string): NavSection[] {
  return [
    {
      id: "work",
      title: "Work",
      items: [
        {
          id: "dashboard",
          label: "Dashboard",
          icon: Home,
          active: activePage === "dashboard",
        },
        {
          id: "tickets",
          label: "Tickets",
          icon: Ticket,
          badge: 856,
          active: activePage === "tickets",
          items: [
            {
              id: "my-tickets",
              label: "My Tickets",
              icon: Ticket,
              badge: 23,
              items: [
                {
                  id: "watched-tickets",
                  label: "Watched tickets",
                  icon: Eye,
                  badge: 12,
                },
                {
                  id: "locked-tickets",
                  label: "Locked tickets",
                  icon: Lock,
                  badge: 6,
                },
              ],
            },
            {
              id: "team-tickets",
              label: "Team Tickets",
              icon: Users,
              badge: 134,
            },
            {
              id: "unassigned",
              label: "Unassigned",
              icon: HelpCircle,
              badge: 42,
            },
          ],
        },
        { id: "kanban", label: "Kanban", icon: Columns3 },
        { id: "calendar", label: "Calendar", icon: Calendar },
      ],
    },
    {
      id: "records",
      title: "Records",
      items: [
        {
          id: "assets",
          label: "Assets",
          icon: HardDrive,
          badge: 1203,
          items: [
            {
              id: "computers",
              label: "Computers",
              icon: HardDrive,
              badge: 456,
            },
            {
              id: "servers",
              label: "Servers",
              icon: HardDrive,
              badge: 89,
            },
            {
              id: "network-devices",
              label: "Network Devices",
              icon: HardDrive,
              badge: 234,
            },
          ],
        },
        {
          id: "locations",
          label: "Locations",
          icon: MapPin,
          badge: 89,
        },
        {
          id: "service-contracts",
          label: "Service contracts",
          icon: FileText,
          badge: 145,
        },
        {
          id: "organizations",
          label: "Organizations",
          icon: Building,
          badge: 342,
          items: [
            {
              id: "customers",
              label: "Customers",
              icon: Building,
              badge: 234,
            },
            {
              id: "suppliers",
              label: "Suppliers",
              icon: Building,
              badge: 108,
            },
          ],
        },
        {
          id: "contacts",
          label: "Contacts",
          icon: Users,
          badge: 1847,
        },
      ],
    },
    {
      id: "knowledge",
      title: "Knowledge",
      items: [
        {
          id: "knowledge-base",
          label: "Knowledge base",
          icon: BookOpen,
          badge: 127,
          items: [
            {
              id: "articles",
              label: "Articles",
              icon: FileText,
              badge: 89,
            },
            {
              id: "faqs",
              label: "FAQs",
              icon: HelpCircle,
              badge: 38,
            },
          ],
        },
      ],
    },
    {
      id: "insights",
      title: "Insights",
      items: [
        {
          id: "reports",
          label: "Reports",
          icon: BarChart3,
          items: [
            {
              id: "sla-performance",
              label: "SLA performance",
              icon: TrendingUp,
            },
            {
              id: "ticket-trends",
              label: "Ticket trends",
              icon: BarChart3,
            },
            {
              id: "asset-reports",
              label: "Asset Reports",
              icon: HardDrive,
            },
          ],
        },
      ],
    },
    {
      id: "communication",
      title: "Communication",
      items: [
        {
          id: "announcements",
          label: "Announcements",
          icon: Megaphone,
          badge: 3,
        },
      ],
    },
    {
      id: "admin",
      title: "Admin",
      items: [
        {
          id: "administration",
          label: "Administration",
          icon: Settings,
          items: [
            {
              id: "user-management",
              label: "User Management",
              icon: Users,
            },
            {
              id: "role-management",
              label: "Role Management",
              icon: Settings,
            },
            {
              id: "system-config",
              label: "System Config",
              icon: Wrench,
            },
          ],
        },
        { id: "settings", label: "Settings", icon: Wrench },
      ],
    },
  ];
}

// Optional favorites section
export const favoritesData: NavItem[] = [
  {
    id: "fav-tickets",
    label: "My Open Tickets",
    icon: Ticket,
    badge: 23,
  },
  {
    id: "fav-reports",
    label: "Weekly Report",
    icon: BarChart3,
  },
];

