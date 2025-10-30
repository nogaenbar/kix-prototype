import { Badge } from "./ui/badge";

interface TeamChipProps {
  team: string;
  className?: string;
}

export function TeamChip({ team, className = "" }: TeamChipProps) {
  return (
    <Badge className={`inline-flex items-center gap-1 rounded text-xs font-medium whitespace-nowrap max-w-[80px] bg-muted text-muted-foreground border-border px-1.5 py-0.5 truncate ${className}`}>
      {team}
    </Badge>
  );
}