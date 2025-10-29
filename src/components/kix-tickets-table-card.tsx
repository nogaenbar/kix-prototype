import { useState } from "react";
import { KIXDataTableNew } from "./kix-data-table-new";

interface FilterChip {
  id: string;
  label: string;
  value: string;
}

interface KIXTicketsTableCardProps {
  onFoldersClick?: () => void;
  onTicketClick?: (ticketId: string) => void;
  className?: string;
}

// Extended mock data for all tickets view
const allTicketsData = [
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
  onFoldersClick,
  onTicketClick,
  className = ""
}: KIXTicketsTableCardProps) {
  const [searchValue, setSearchValue] = useState("");
  const [activeFilters, setActiveFilters] = useState<FilterChip[]>([
    { id: "team", label: "Team", value: "IT-INFRA" },
    { id: "priority", label: "Priority", value: "High" }
  ]);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleFilterRemove = (filterId: string) => {
    setActiveFilters(prev => prev.filter(f => f.id !== filterId));
  };

  const handleClearAllFilters = () => {
    setActiveFilters([]);
  };

  const handleTicketClick = (ticketId: string) => {
    onTicketClick?.(ticketId);
  };

  const handleDateRangeClick = () => {
    console.log("Date range clicked");
  };

  const handleFiltersClick = () => {
    console.log("Filters clicked");
  };

  const handleColumnsClick = () => {
    console.log("Columns clicked");
  };

  const handleDensityClick = () => {
    console.log("Density clicked");
  };

  const handleExportClick = () => {
    console.log("Export clicked");
  };

  return (
    <div className={`flex-1 bg-card shadow-sm ${className}`}>
      <div className="p-4 space-y-4 [&>*]:!rounded-none [&>*]:!border-none [&_*]:!rounded-none [&_*]:!border-none">
        {/* Use new KIXDataTableNew component */}
        <KIXDataTableNew
          title="My Open Tickets"
          data={allTicketsData}
          columns={["id", "subject", "assignee", "team", "priority", "status", "date", "actions"]}
          showBulkActions={true}
          onRowClick={handleTicketClick}
        />
      </div>
    </div>
  );
}