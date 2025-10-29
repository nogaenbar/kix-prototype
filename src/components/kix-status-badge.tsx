import { Badge } from "./ui/badge";
import { Lock } from "lucide-react";

interface StatusBadgeProps {
  status: string;
  locked?: boolean;
  className?: string;
}

// KIX Status Colors following the design system
const statusConfig: Record<string, string> = {
  "New": "bg-[var(--status-new-bg)] text-[var(--status-new)] border-[var(--status-new)]/20",
  "Open": "bg-[var(--status-open-bg)] text-[var(--status-open)] border-[var(--status-open)]/20",
  "In Progress": "bg-[var(--primary-100)] text-[var(--primary-700)] border-[var(--primary-700)]/20",
  "Pending": "bg-[var(--status-pending-bg)] text-[var(--status-pending)] border-[var(--status-pending)]/20",
  "Closed": "bg-[var(--status-closed-bg)] text-[var(--status-closed)] border-[var(--status-closed)]/20",
};

export function StatusBadge({ status, locked = false, className = "" }: StatusBadgeProps) {
  const statusClass = statusConfig[status] || "bg-muted text-muted-foreground border-border";

  return (
    <Badge className={`kix-chip kix-status-badge ${statusClass} px-1.5 py-0.5 text-xs font-medium inline-flex items-center gap-0.5 whitespace-nowrap max-w-full ${className}`}>
      <span className="truncate">{status}</span>
      {locked && <Lock size={8} />}
    </Badge>
  );
}