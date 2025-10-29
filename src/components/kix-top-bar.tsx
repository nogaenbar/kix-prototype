import { IconButton } from "./ui/icon-button";
import { Input } from "./ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Search, ChevronDown, Plus, Settings, HelpCircle, Bell, User, MessageSquare, MoreHorizontal } from "lucide-react";
import { KIXSearchExpandable } from "./kix-search-expandable";
import svgPaths from "../imports/svg-1daqcc4qmi";

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
        <div className="bg-white h-[40px] rounded-[40px] w-[360px] relative" data-name="Container">
          <div className="absolute border border-neutral-300 border-solid inset-0 pointer-events-none rounded-[40px]" />
          <div className="bg-clip-padding border-0 border-transparent border-solid box-border flex gap-[10px] items-center px-[16px] py-[8px] relative w-[360px]">
            {/* Search Icon */}
            <div className="relative shrink-0 size-[16px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g>
                  <path d="M14.0008 13.9998L11.1074 11.1064" stroke="#525252" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p2d9d1f00} stroke="#525252" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </g>
              </svg>
            </div>
            
            {/* Search Input */}
            <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0">
              <input
                type="text"
                placeholder="Search tickets"
                className="w-full h-full bg-transparent border-0 outline-none font-normal text-[16px] text-neutral-500 placeholder:text-neutral-500"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    console.log("Search submitted:", e.currentTarget.value);
                    // TODO: Navigate to Tickets page with search query
                  }
                }}
              />
            </div>
          </div>
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