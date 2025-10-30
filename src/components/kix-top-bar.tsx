import { IconButton } from "./ui/icon-button";
import { Input } from "./ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Search, ChevronDown, Plus, Settings, HelpCircle, Bell, User, MessageSquare, MoreHorizontal } from "lucide-react";
import { KIXSearchExpandable } from "./kix-search-expandable";

interface KIXTopBarProps {
  title?: string;
  className?: string;
}

export function KIXTopBar({ title = "Dashboard", className = "" }: KIXTopBarProps) {
  return (
    <div className={`w-full kix-shell-topbar sticky top-0 kix-top-bar flex items-center ${className}`}>
      {/* Container5 - Full width container with search and icons */}
      <div className="w-full h-[73px] flex items-center justify-between px-6" data-name="Container">
        
        {/* Search Input Container - Left Side */}
        <div className="w-[360px]" data-name="Container">
          <Input
            size="lg"
            placeholder="Search tickets"
            leftIcon={<Search />}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                console.log("Search submitted:", (e.target as HTMLInputElement).value);
                // TODO: Navigate to Tickets page with search query
              }
            }}
          />
        </div>

        {/* Icon Buttons Container - Right Side */}
        <div className="flex gap-1 items-center" data-name="Container">
          {/* Message Square Icon */}
          <IconButton variant="outlined" size="lg" aria-label="Messages">
            <MessageSquare />
          </IconButton>

          {/* Bell Icon */}
          <IconButton variant="outlined" size="lg" aria-label="Notifications">
            <Bell />
          </IconButton>

          {/* Help Circle Icon */}
          <IconButton variant="outlined" size="lg" aria-label="Help">
            <HelpCircle />
          </IconButton>

          {/* User Icon */}
          <IconButton variant="outlined" size="lg" aria-label="User menu">
            <User />
          </IconButton>
        </div>
      </div>
    </div>
  );
}