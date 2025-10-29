import { Badge } from "./ui/badge";

interface TeamChipProps {
  team: string;
  className?: string;
}

export function TeamChip({ team, className = "" }: TeamChipProps) {
  return (
    <Badge className={`kix-chip kix-team-chip bg-muted text-muted-foreground border-border px-1.5 py-0.5 text-xs font-medium inline-flex items-center whitespace-nowrap max-w-full truncate ${className}`}>
      {team}
    </Badge>
  );
}