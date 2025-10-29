import { KIXAppShell } from './kix-app-shell';

interface KIXShellPlaygroundProps {
  title?: string;
  showWorkTabs?: boolean;
  showPageHeader?: boolean;
}

export function KIXShellPlayground({ 
  title = "Page Title",
  showWorkTabs = false,
  showPageHeader = false 
}: KIXShellPlaygroundProps) {
  return (
    <KIXAppShell 
      title={title}
      showWorkTabs={showWorkTabs}
      showPageHeader={showPageHeader}
    >
      {/* Empty state for shell demonstration */}
      <div className="flex items-center justify-center h-96 bg-muted/30 rounded-lg border-2 border-dashed border-border">
        <div className="text-center space-y-2">
          <h3 className="font-semibold text-muted-foreground">App Shell Playground</h3>
          <p className="text-sm text-muted-foreground">
            This demonstrates the KIX App Shell structure:<br />
            SideNav + TopBar + {showWorkTabs ? 'WorkTabs + ' : ''}{showPageHeader ? 'PageHeader + ' : ''}PageBody
          </p>
          <div className="text-xs text-muted-foreground mt-4">
            <div>• SideNav: Full height, collapsible (256px ↔ 64px)</div>
            <div>• TopBar: Sticky at top with search and actions</div>
            {showWorkTabs && <div>• WorkTabs: Sticky below TopBar</div>}
            {showPageHeader && <div>• PageHeader: Contains filters and segment tabs</div>}
            <div>• PageBody: Scrollable content area (max-width: 1280px)</div>
          </div>
        </div>
      </div>
    </KIXAppShell>
  );
}