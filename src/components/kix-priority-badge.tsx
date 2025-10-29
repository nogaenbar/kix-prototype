import { Badge } from "./ui/badge";
import { AlertTriangle, ArrowUp, Minus, ArrowDown } from "lucide-react";

type Priority = "P1" | "P2" | "P3" | "P4";

interface PriorityBadgeProps {
  priority: Priority;
  className?: string;
}

// KIX Priority Colors following the design system
const priorityConfig = {
  P1: {
    label: "P1 Critical",
    icon: AlertTriangle,
    className: "bg-[var(--critical-tint)] text-[var(--critical)] border-[var(--critical)]/20",
  },
  P2: {
    label: "P2 High", 
    icon: ArrowUp,
    className: "bg-[var(--warning-tint)] text-[var(--warning)] border-[var(--warning)]/20",
  },
  P3: {
    label: "P3 Normal",
    icon: Minus,
    className: "bg-[var(--primary-100)] text-[var(--primary-700)] border-[var(--primary-700)]/20",
  },
  P4: {
    label: "P4 Low",
    icon: ArrowDown,
    className: "bg-[#E7F8F1] text-[#0F766E] border-[#0F766E]/20",
  },
};

export function PriorityBadge({ priority, className = "" }: PriorityBadgeProps) {
  const config = priorityConfig[priority];
  const Icon = config.icon;

  return (
    <Badge className={`inline-flex items-center gap-1 rounded text-xs font-medium whitespace-nowrap max-w-[60px] ${config.className} px-1.5 py-0.5 ${className}`}>
      <Icon size={9} />
      <span className="truncate">{priority}</span>
    </Badge>
  );
}