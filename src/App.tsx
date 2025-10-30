import { Routes, Route, Navigate, useNavigate, useParams, useLocation } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import { KIXAppShell } from "./components/kix-app-shell";
import { Button } from "./components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./components/ui/dropdown-menu";
import { Plus, ChevronDown } from "lucide-react";

import { LoadingSpinner } from "./components/LoadingSpinner";
import { ButtonDemo } from "./components/ButtonDemo";
import { ComponentLibrary } from "./components/ComponentLibrary";

// Lazy load heavy components
const KIXTicketsPageHeader = lazy(() => import("./components/kix-tickets-page-header").then(m => ({ default: m.KIXTicketsPageHeader })));
const KIXTicketsLayout = lazy(() => import("./components/kix-tickets-layout").then(m => ({ default: m.KIXTicketsLayout })));
const KIXTicketDetail = lazy(() => import("./components/kix-ticket-detail").then(m => ({ default: m.KIXTicketDetail })));
const KPITile = lazy(() => import("./components/kix-kpi-tile").then(m => ({ default: m.KPITile })));
const KIXChartCard = lazy(() => import("./components/kix-chart-card").then(m => ({ default: m.KIXChartCard })));
const KIXDataTableNew = lazy(() => import("./components/kix-data-table-new").then(m => ({ default: m.KIXDataTableNew })));

interface FilterChip {
  id: string;
  label: string;
  value: string;
}

// Mock data for Dashboard
const kpiData = [
  {
    title: "Open Tickets",
    value: 856,
    delta: { value: -5, isPositive: false, label: "vs last week" }
  },
  {
    title: "New (7d)",
    value: 124,
    delta: { value: 12, isPositive: true, label: "vs previous 7d" }
  },
  {
    title: "Breached SLAs",
    value: 8,
    delta: { value: -2, isPositive: true, label: "vs last week" }
  }
];

const priorityChartData = [
  { name: 'Critical', value: 25 },
  { name: 'High', value: 156 },
  { name: 'Normal', value: 512 },
  { name: 'Low', value: 163 }
];

const stateTypeChartData = [
  { name: 'New', value: 124 },
  { name: 'Open', value: 432 },
  { name: 'Pending', value: 234 },
  { name: 'Closed', value: 66 }
];

const weeklyChartData = [
  { name: 'Mon', value: 23 },
  { name: 'Tue', value: 18 },
  { name: 'Wed', value: 31 },
  { name: 'Thu', value: 25 },
  { name: 'Fri', value: 19 },
  { name: 'Sat', value: 6 },
  { name: 'Sun', value: 2 }
];

const myOpenTicketsData = [
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
  }
];

const newTicketsData = [
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
  }
];

const myTeamsData = [
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
  }
];

// Helper to map page IDs to routes
const getActivePageFromPath = (pathname: string): string => {
  if (pathname.startsWith("/tickets/")) return "ticket-detail";
  if (pathname === "/tickets") return "tickets";
  if (pathname === "/dashboard" || pathname === "/") return "dashboard";
  return "dashboard";
};

// Helper to map page IDs to routes for navigation
const navigateToPage = (navigate: ReturnType<typeof useNavigate>, pageId: string) => {
  if (pageId === "dashboard") {
    navigate("/dashboard");
  } else if (pageId === "tickets") {
    navigate("/tickets");
  } else if (pageId.startsWith("ticket-")) {
    // Handle ticket detail - would need ticket ID
    navigate("/tickets");
  }
};

// Dashboard Component
function DashboardPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (pageId: string) => {
    navigateToPage(navigate, pageId);
  };

  const handleDashboardTicketClick = (ticketId: string) => {
    navigate(`/tickets/${ticketId}`);
  };

  return (
    <KIXAppShell 
      title="Dashboard"
      showWorkTabs={false}
      showPageHeader={false}
      onNavigation={handleNavigation}
      activePage={getActivePageFromPath(location.pathname)}
      workTabs={[]}
      onWorkTabClick={undefined}
      onWorkTabClose={undefined}
    >
      {/* Dashboard Header */}
      <div className="col-span-12 mb-8">
        <div className="flex items-center justify-between h-10">
          <h1 className="text-[40px] font-medium leading-none text-foreground">Dashboard</h1>
          {/* New Ticket CTA */}
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="filled" size="lg">
                  <Plus />
                  New Ticket
                  <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Create Asset</DropdownMenuItem>
                <DropdownMenuItem>Create Organization</DropdownMenuItem>
                <DropdownMenuItem>Create Contact</DropdownMenuItem>
                <DropdownMenuItem>Create FAQ</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* KPI Row */}
      <Suspense fallback={<div className="col-span-4"><LoadingSpinner /></div>}>
        <div className="col-span-4 kix-hero-override">
          <KPITile
            title={kpiData[0].title}
            value={kpiData[0].value}
            delta={kpiData[0].delta}
            variant="hero"
          />
        </div>
      </Suspense>
      <Suspense fallback={<div className="col-span-4"><LoadingSpinner /></div>}>
        <div className="col-span-4">
          <KPITile
            title={kpiData[1].title}
            value={kpiData[1].value}
            delta={kpiData[1].delta}
            variant="default"
          />
        </div>
      </Suspense>
      <Suspense fallback={<div className="col-span-4"><LoadingSpinner /></div>}>
        <div className="col-span-4">
          <KPITile
            title={kpiData[2].title}
            value={kpiData[2].value}
            delta={kpiData[2].delta}
            variant="default"
          />
        </div>
      </Suspense>

      {/* Charts Row - 3 equal columns */}
      <Suspense fallback={<div className="col-span-4"><LoadingSpinner /></div>}>
        <div className="col-span-4">
          <KIXChartCard
            title="Open by Priority"
            type="horizontal-bar"
            data={priorityChartData}
          />
        </div>
      </Suspense>
      <Suspense fallback={<div className="col-span-4"><LoadingSpinner /></div>}>
        <div className="col-span-4">
          <KIXChartCard
            title="Open by State Type"
            type="pie"
            data={stateTypeChartData}
          />
        </div>
      </Suspense>
      <Suspense fallback={<div className="col-span-4"><LoadingSpinner /></div>}>
        <div className="col-span-4">
          <KIXChartCard
            title="Created Last 7 Days"
            type="bar"
            data={weeklyChartData}
          />
        </div>
      </Suspense>

      {/* Tables - Each table in its own row */}
      <Suspense fallback={<div className="col-span-12"><LoadingSpinner /></div>}>
        <div className="col-span-12">
          <KIXDataTableNew
            title="My Open Tickets"
            data={myOpenTicketsData}
            columns={["id", "subject", "assignee", "team", "priority", "status", "date", "actions"]}
            onRowClick={handleDashboardTicketClick}
          />
        </div>
      </Suspense>
      
      <Suspense fallback={<div className="col-span-12"><LoadingSpinner /></div>}>
        <div className="col-span-12">
          <KIXDataTableNew
            title="New Tickets"
            data={newTicketsData}
            columns={["id", "subject", "team", "organization", "priority", "status", "date", "actions"]}
            onRowClick={handleDashboardTicketClick}
          />
        </div>
      </Suspense>
      
      <Suspense fallback={<div className="col-span-12"><LoadingSpinner /></div>}>
        <div className="col-span-12">
          <KIXDataTableNew
            title="My Teams"
            data={myTeamsData}
            columns={["id", "subject", "assignee", "team", "priority", "status", "date", "actions"]}
            onRowClick={handleDashboardTicketClick}
          />
        </div>
      </Suspense>
    </KIXAppShell>
  );
}

// Tickets Page Component
function TicketsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeFilters, setActiveFilters] = useState<FilterChip[]>([]);
  const [openWorkTabs, setOpenWorkTabs] = useState<string[]>([]);
  const [activeWorkTab, setActiveWorkTab] = useState<string | null>(null);
  const [activeTicketView, setActiveTicketView] = useState<string>("all-tickets");

  const handleNavigation = (pageId: string) => {
    navigateToPage(navigate, pageId);
  };

  const handleViewClick = (viewId: string) => {
    console.log("View clicked:", viewId);
    setActiveTicketView(viewId);
  };

  const handleNewViewClick = () => {
    console.log("New view clicked");
  };

  const handleFilterRemove = (filterId: string) => {
    setActiveFilters(prev => prev.filter(f => f.id !== filterId));
  };

  const handleClearAllFilters = () => {
    setActiveFilters([]);
  };

  const handleFilterApply = (filterId: string, filterData: any) => {
    const newFilter: FilterChip = {
      id: filterId,
      label: "Team",
      value: filterData.name
    };
    
    setActiveFilters(prev => {
      const filtered = prev.filter(f => f.id !== filterId);
      return [...filtered, newFilter];
    });
  };

  const handleTicketClick = (ticketId: string) => {
    navigate(`/tickets/${ticketId}`);
    // Add to work tabs
    setOpenWorkTabs(prev => {
      if (!prev.includes(ticketId)) {
        return [...prev, ticketId];
      }
      return prev;
    });
    setActiveWorkTab(ticketId);
    console.log("Ticket clicked:", ticketId);
  };

  const handleWorkTabClose = (tabId: string) => {
    setOpenWorkTabs(prev => prev.filter(id => id !== tabId));
    
    if (activeWorkTab === tabId) {
      const remainingTabs = openWorkTabs.filter(id => id !== tabId);
      if (remainingTabs.length > 0) {
        setActiveWorkTab(remainingTabs[remainingTabs.length - 1]);
        navigate(`/tickets/${remainingTabs[remainingTabs.length - 1]}`);
      } else {
        setActiveWorkTab(null);
        navigate("/tickets");
      }
    }
    
    console.log("Work tab closed:", tabId);
  };

  return (
    <KIXAppShell 
      title="Tickets"
      showWorkTabs={openWorkTabs.length > 0}
      showPageHeader={false}
      onNavigation={handleNavigation}
      activePage={getActivePageFromPath(location.pathname)}
      workTabs={openWorkTabs}
      activeWorkTab={activeWorkTab}
      onWorkTabClick={handleTicketClick}
      onWorkTabClose={handleWorkTabClose}
    >
      {/* Custom layout for tickets - fills viewport height, aligns with side nav bottom (12px padding) */}
      <div 
        className="col-span-12 -mx-6 -my-6 flex flex-col overflow-hidden" 
        style={{ height: openWorkTabs.length > 0 ? 'calc(100vh - 84px - 48px - 24px)' : 'calc(100vh - 84px - 24px)' }}
      >
        <Suspense fallback={<LoadingSpinner />}>
          <div className="h-full flex flex-col min-h-0">
            {/* PageHeader with Ticket Views - Fixed */}
            <div className="flex-shrink-0">
              <KIXTicketsPageHeader
                activeFilters={activeFilters}
                activeViewId={activeTicketView}
                onViewClick={handleViewClick}
                onNewViewClick={handleNewViewClick}
                onFilterRemove={handleFilterRemove}
                onClearAllFilters={handleClearAllFilters}
              />
            </div>
            
            {/* PageBody with Tickets Layout - Fills remaining height, no overflow */}
            <div className="flex-1 min-h-0 overflow-hidden">
              <KIXTicketsLayout
                activeViewId={activeTicketView}
                onTicketClick={handleTicketClick}
                onFilterApply={handleFilterApply}
              />
            </div>
          </div>
        </Suspense>
      </div>
    </KIXAppShell>
  );
}

// Ticket Detail Page Component
function TicketDetailPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams<{ id: string }>();

  const handleNavigation = (pageId: string) => {
    navigateToPage(navigate, pageId);
  };

  const handleBack = () => {
    navigate("/tickets");
  };

  return (
    <KIXAppShell 
      title={`Ticket #${id}`}
      showWorkTabs={false}
      showPageHeader={false}
      onNavigation={handleNavigation}
      activePage={getActivePageFromPath(location.pathname)}
      workTabs={[]}
      onWorkTabClick={undefined}
      onWorkTabClose={undefined}
    >
      <div className="col-span-12 h-full -mx-6 -my-6">
        <Suspense fallback={<LoadingSpinner />}>
          <KIXTicketDetail 
            ticketId={id || "202590"} 
            onBack={handleBack}
          />
        </Suspense>
      </div>
    </KIXAppShell>
  );
}

// Component Library Page
function ComponentLibraryPage() {
  return <ComponentLibrary />;
}

// Main App Component with Routing
export default function App() {
  return (
    <Routes>
      {/* Root redirects to dashboard */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      
      {/* Dashboard */}
      <Route path="/dashboard" element={<DashboardPage />} />
      
      {/* Tickets Page */}
      <Route path="/tickets" element={<TicketsPage />} />
      
      {/* Ticket Detail */}
      <Route path="/tickets/:id" element={<TicketDetailPage />} />
      
      {/* Component Library */}
      <Route path="/component-library" element={<ComponentLibraryPage />} />
      
      {/* Fallback - redirect to dashboard */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
