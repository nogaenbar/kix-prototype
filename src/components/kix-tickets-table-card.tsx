import { KIXDataTableNew } from "./kix-data-table-new";

interface KIXTicketsTableCardProps {
  activeViewId?: string;
  onFoldersClick?: () => void;
  onTicketClick?: (ticketId: string) => void;
  className?: string;
}

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

// Extended mock data - full dataset
const allTicketsData: TicketData[] = [
  {
    id: "202590",
    subject: "Email server not responding - urgent fix needed",
    code: "TD-T-066",
    assignee: { name: "John Doe", avatar: "" },
    team: "IT-INFRA",
    priority: "P1" as const,
    status: "Open",
    date: "12/12/2024, 14:30",
    isNew: false,
    hasAttachment: true,
    isWatched: true,
    isLocked: false
  },
  {
    id: "202589",
    subject: "User account access request for new employee",
    code: "HR-A-024",
    assignee: { name: "Jane Smith", avatar: "" },
    team: "HR-SUPPORT",
    priority: "P3" as const,
    status: "Pending",
    date: "12/12/2024, 13:15",
    isNew: false,
    hasAttachment: false,
    isWatched: false,
    isLocked: false
  },
  {
    id: "202588",
    subject: "VPN connection issues affecting remote workers",
    code: "NET-C-089",
    assignee: { name: "Mike Johnson", avatar: "" },
    team: "NETWORK",
    priority: "P2" as const,
    status: "In Progress",
    date: "12/12/2024, 11:45",
    isNew: false,
    hasAttachment: true,
    isWatched: false,
    isLocked: true
  },
  {
    id: "202587",
    subject: "Software license renewal notification",
    assignee: { name: "Sarah Wilson", avatar: "" },
    team: "PROCUREMENT",
    priority: "P4" as const,
    status: "Open",
    date: "12/12/2024, 10:20",
    isNew: false,
    hasAttachment: false,
    isWatched: false,
    isLocked: false
  },
  {
    id: "202594",
    subject: "Printer not working in conference room A",
    code: "FAC-P-112",
    team: "FACILITIES",
    organization: "Acme Corp",
    priority: "P3" as const,
    status: "New",
    date: "12/12/2024, 16:45",
    isNew: true,
    hasAttachment: false,
    isWatched: false,
    isLocked: false
  },
  {
    id: "202593",
    subject: "Request for additional storage space on shared drive",
    code: "IT-S-087",
    team: "IT-INFRA",
    organization: "Tech Solutions Ltd",
    priority: "P4" as const,
    status: "New",
    date: "12/12/2024, 16:20",
    isNew: true,
    hasAttachment: false,
    isWatched: false,
    isLocked: false
  },
  {
    id: "202592",
    subject: "Database performance degradation - investigation needed",
    code: "DB-P-045",
    team: "DATABASE",
    organization: "DataCorp Inc",
    priority: "P2" as const,
    status: "New",
    date: "12/12/2024, 15:55",
    isNew: true,
    hasAttachment: true,
    isWatched: false,
    isLocked: false
  },
  {
    id: "202591",
    subject: "Security audit compliance review",
    code: "SEC-A-078",
    assignee: { name: "Alex Chen", avatar: "" },
    team: "SECURITY",
    priority: "P2" as const,
    status: "Open",
    date: "12/12/2024, 14:00",
    isNew: false,
    hasAttachment: true,
    isWatched: true,
    isLocked: false
  },
  {
    id: "202595",
    subject: "Wi-Fi connectivity issues in building B",
    code: "NET-W-123",
    assignee: { name: "Tom Brown", avatar: "" },
    team: "NETWORK",
    priority: "P3" as const,
    status: "Open",
    date: "12/12/2024, 09:30",
    isNew: false,
    hasAttachment: false,
    isWatched: false,
    isLocked: false
  },
  {
    id: "202596",
    subject: "Monthly backup verification failed",
    code: "BK-V-089",
    assignee: { name: "Lisa Davis", avatar: "" },
    team: "IT-INFRA",
    priority: "P1" as const,
    status: "Critical",
    date: "12/12/2024, 08:15",
    isNew: false,
    hasAttachment: true,
    isWatched: true,
    isLocked: false
  }
];

export function KIXTicketsTableCard({
  activeViewId = "all-tickets",
  onFoldersClick,
  onTicketClick,
  className = ""
}: KIXTicketsTableCardProps) {
  const handleTicketClick = (ticketId: string) => {
    onTicketClick?.(ticketId);
  };

  // Filter data based on active view
  const getFilteredData = (): TicketData[] => {
    switch (activeViewId) {
      case "all-tickets":
        return allTicketsData;
      case "my-tickets":
        // My tickets: assigned to current user (mock - all tickets with assignee)
        return allTicketsData.filter(ticket => ticket.assignee);
      case "watched":
        // Watched tickets: tickets with isWatched = true
        return allTicketsData.filter(ticket => ticket.isWatched);
      case "locked":
        // Locked tickets: tickets with isLocked = true
        return allTicketsData.filter(ticket => ticket.isLocked);
      case "team":
        // Team tickets: all tickets (same as all-tickets for now)
        return allTicketsData;
      case "unassigned":
        // Unassigned tickets: tickets without assignee
        return allTicketsData.filter(ticket => !ticket.assignee);
      default:
        return allTicketsData;
    }
  };

  // Get title based on active view
  const getTitle = (): string => {
    switch (activeViewId) {
      case "all-tickets":
        return "All Tickets";
      case "my-tickets":
        return "My Tickets";
      case "watched":
        return "Watched Tickets";
      case "locked":
        return "Locked Tickets";
      case "team":
        return "Team Tickets";
      case "unassigned":
        return "Unassigned Tickets";
      default:
        return "All Tickets";
    }
  };

  const filteredData = getFilteredData();
  const title = getTitle();

  return (
    <div className={`flex-1 h-full flex flex-col min-h-0 ${className}`}>
      {/* Use same table component as dashboard, but disable collapse and filter data by view */}
      <KIXDataTableNew
        title={title}
        data={filteredData}
        columns={["id", "subject", "assignee", "team", "priority", "status", "date", "actions"]}
        onRowClick={handleTicketClick}
        allowCollapse={false}
        className="h-full flex flex-col min-h-0"
        isTicketsPage={true}
      />
    </div>
  );
}