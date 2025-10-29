import React from 'react';
import { KIXSideNav } from './kix-side-nav';
import { KIXTopBar } from './kix-top-bar';
import { KIXWorkTabsBar } from './kix-work-tabs-bar';
import { KIXPageHeader } from './kix-page-header';

interface KIXAppShellProps {
  title?: string;
  showWorkTabs?: boolean;
  showPageHeader?: boolean;
  onNavigation?: (pageId: string) => void;
  activePage?: string;
  children: React.ReactNode;
  className?: string;
  workTabs?: string[];
  activeWorkTab?: string | null;
  onWorkTabClick?: (tabId: string) => void;
  onWorkTabClose?: (tabId: string) => void;
}

export function KIXAppShell({ 
  title = "Dashboard", 
  showWorkTabs = true, 
  showPageHeader = true, 
  onNavigation,
  activePage = "dashboard",
  children, 
  className = "",
  workTabs = [],
  activeWorkTab,
  onWorkTabClick,
  onWorkTabClose
}: KIXAppShellProps) {
  return (
    <div className={`w-full h-screen bg-background flex gap-3 p-3 overflow-hidden kix-app-shell ${className}`}>
      {/* SideNav - Fixed width, full height */}
      <div className="kix-shell-sidenav flex-shrink-0">
        <KIXSideNav onNavigation={onNavigation} activePage={activePage} />
      </div>
      
      {/* ContentArea - Fill remaining space */}
      <div className="flex-1 h-full flex flex-col gap-3 p-0 min-w-0 w-full">
        {/* TopBar - Sticky, full width */}
        <div className="flex-shrink-0">
          <KIXTopBar title={title} />
        </div>
        
        {/* WorkTabs - Optional, sticky */}
        {showWorkTabs && (
          <div className="flex-shrink-0">
            <KIXWorkTabsBar 
              workTabs={workTabs}
              activeWorkTab={activeWorkTab}
              onTabClick={onWorkTabClick}
              onTabClose={onWorkTabClose}
            />
          </div>
        )}
        
        {/* Scrollable content area */}
        <div className="flex-1 overflow-y-auto scrollbar-hide pt-0">
          {/* PageHeader - Optional, scrollable */}
          {showPageHeader && (
            <div className="flex-shrink-0">
              <KIXPageHeader />
            </div>
          )}
          
          {/* PageBody - Main content with proper grid */}
          <div className="kix-shell-pagebody flex-1 w-full">
            <div className="w-full mx-auto px-6 py-6">
              <div className="grid grid-cols-12 kix-dashboard-grid gap-6">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}