import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { KIXWorkTabs } from "./kix-work-tabs";
import { KIXSegmentTabs } from "./kix-segment-tabs";
import { Search, ChevronDown, Plus, Settings, HelpCircle, Bell, User } from "lucide-react";

// Mock data for work tabs
const workTabItems = [
  {
    id: 'ticket-202590',
    type: 'ticket' as const,
    title: 'Ticket #202590',
    fullTitle: 'Email server not responding - urgent fix needed',
    active: true,
    canClose: true
  },
  {
    id: 'asset-1234',
    type: 'asset' as const,
    title: 'Asset #1234',
    fullTitle: 'Dell OptiPlex 7090 - Marketing Department',
    active: false,
    canClose: true
  },
  {
    id: 'kb-article-45',
    type: 'knowledge' as const,
    title: 'KB Article #45',
    fullTitle: 'How to Configure Email Client Settings',
    active: false,
    canClose: true
  }
];

// Mock data for segment tabs
const segmentItems = [
  { id: 'all-tickets', label: 'All Tickets', count: 1247, active: true },
  { id: 'open', label: 'Open', count: 856, active: false },
  { id: 'my-tickets', label: 'My Tickets', count: 23, active: false },
  { id: 'unassigned', label: 'Unassigned', count: 42, active: false },
  { id: 'overdue', label: 'Overdue', count: 8, active: false },
  { id: 'critical', label: 'Critical', count: 5, active: false }
];

// Mock active filters
const activeFilters = [
  { id: 'priority', label: 'Priority', value: 'High' },
  { id: 'team', label: 'Team', value: 'IT-INFRA' }
];

export function KIXHeader() {
  const handleTabClick = (tabId: string) => {
    console.log('Tab clicked:', tabId);
  };

  const handleTabClose = (tabId: string) => {
    console.log('Tab closed:', tabId);
  };

  const handleSegmentClick = (segmentId: string) => {
    console.log('Segment clicked:', segmentId);
  };

  const handleNewViewClick = () => {
    console.log('New view clicked');
  };

  const handleFilterRemove = (filterId: string) => {
    console.log('Filter removed:', filterId);
  };

  return (
    <div className="bg-card border-b border-border">
      {/* Main Header */}
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold text-card-foreground">Dashboard</h1>
        </div>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
            <Input
              placeholder="Search tickets, contacts..."
              className="kix-input pl-10 w-80 bg-muted"
            />
          </div>

          {/* Split Button - New Ticket */}
          <div className="flex items-center">
            <Button className="kix-button-primary rounded-l-md rounded-r-none">
              <Plus size={16} className="mr-2" />
              New Ticket
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  className="bg-primary hover:bg-primary-hover text-primary-foreground border-primary border-l-0 px-2 py-2 rounded-l-none rounded-r-md"
                >
                  <ChevronDown size={16} />
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

          {/* Action Icons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Bell size={18} />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Settings size={18} />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <HelpCircle size={18} />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <User size={18} />
            </Button>
          </div>
        </div>
      </div>

      {/* Work Item Tabs - Only shown when viewing specific work items */}
      <KIXWorkTabs
        items={workTabItems}
        onTabClick={handleTabClick}
        onTabClose={handleTabClose}
      />

      {/* Quick Filters - Only shown in Dashboard and Tickets modules */}
      <KIXSegmentTabs
        segments={segmentItems}
        activeFilters={activeFilters}
        onSegmentClick={handleSegmentClick}
        onNewViewClick={handleNewViewClick}
        onFilterRemove={handleFilterRemove}
      />
    </div>
  );
}