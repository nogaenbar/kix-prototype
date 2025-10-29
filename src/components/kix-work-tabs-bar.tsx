import { KIXWorkTabs } from "./kix-work-tabs";

// Helper function to get ticket details for work tabs
const getTicketDetails = (ticketId: string) => {
  // Mock ticket database - in real app this would come from props or context
  const ticketDatabase: Record<string, { subject: string; code?: string }> = {
    "202590": { 
      subject: "Email server not responding - urgent fix needed",
      code: "TD-T-066" 
    },
    "202589": { 
      subject: "User account access request for new employee",
      code: "HR-A-024" 
    },
    "202588": { 
      subject: "VPN connection issues affecting remote workers",
      code: "NET-C-089" 
    },
    "202587": { 
      subject: "Software license renewal notification" 
    },
    "202594": { 
      subject: "Printer not working in conference room A",
      code: "FAC-P-112" 
    },
    "202593": { 
      subject: "Request for additional storage space on shared drive",
      code: "IT-S-087" 
    },
    "202592": { 
      subject: "Database performance degradation - investigation needed",
      code: "DB-P-045" 
    },
    "202591": { 
      subject: "Security audit compliance review",
      code: "SEC-A-078" 
    }
  };

  const ticket = ticketDatabase[ticketId];
  if (ticket) {
    return {
      subject: ticket.code ? `${ticket.code}` : `Ticket #${ticketId}`,
      fullSubject: ticket.subject
    };
  }
  
  return {
    subject: `Ticket #${ticketId}`,
    fullSubject: `Support ticket details for #${ticketId}`
  };
};

interface KIXWorkTabsBarProps {
  className?: string;
  workTabs?: string[];
  activeWorkTab?: string | null;
  onTabClick?: (tabId: string) => void;
  onTabClose?: (tabId: string) => void;
}

export function KIXWorkTabsBar({ 
  className = "",
  workTabs = [],
  activeWorkTab,
  onTabClick,
  onTabClose 
}: KIXWorkTabsBarProps) {
  const handleTabClick = (tabId: string) => {
    onTabClick?.(tabId);
  };

  const handleTabClose = (tabId: string) => {
    onTabClose?.(tabId);
  };

  // Convert workTabs array to work tab items
  const workTabItems = workTabs.map((ticketId) => {
    const details = getTicketDetails(ticketId);
    return {
      id: ticketId,
      type: 'ticket' as const,
      title: details.subject,
      fullTitle: details.fullSubject,
      active: activeWorkTab === ticketId,
      canClose: true
    };
  });

  // Don't render if no work tabs
  if (workTabItems.length === 0) {
    return null;
  }

  return (
    <div className={`w-full h-[48px] bg-card border-b border-border shadow-card-sm kix-shell-worktabs sticky top-[73px] ${className}`}>
      <div className="h-full overflow-x-auto scrollbar-hide">
        <KIXWorkTabs
          items={workTabItems}
          onTabClick={handleTabClick}
          onTabClose={handleTabClose}
        />
      </div>
    </div>
  );
}