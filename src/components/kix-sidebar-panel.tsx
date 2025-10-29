import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ChevronRight, ChevronDown, StickyNote, UserX } from "lucide-react";

interface SidebarPanelProps {
  className?: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function KIXSidebarPanel({ className = "", isOpen, onToggle }: SidebarPanelProps) {
  if (!isOpen) {
    return (
      <div className={`w-12 flex-shrink-0 ${className}`}>
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="w-full h-12 border-l border-gray-200 bg-white hover:bg-gray-50"
        >
          <ChevronRight size={16} className="text-gray-500" />
        </Button>
      </div>
    );
  }

  return (
    <div className={`w-80 flex-shrink-0 ${className} border-l border-gray-200 bg-gray-50 p-4 space-y-4`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-900">Sidebar</h3>
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="h-8 w-8"
        >
          <ChevronDown size={16} className="text-gray-500" />
        </Button>
      </div>

      {/* Notes Widget */}
      <Card className="shadow-sm border-gray-200">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <StickyNote size={16} className="text-gray-500" />
            <h4 className="font-medium text-gray-900">Notes</h4>
          </div>
        </CardHeader>
        <CardContent className="pt-2">
          <div className="space-y-3">
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-gray-700 mb-2">
                Server maintenance scheduled for tonight 11 PM - 2 AM
              </p>
              <div className="text-xs text-gray-500">
                Added by John Doe • 2 hours ago
              </div>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-gray-700 mb-2">
                New SLA policies effective from Monday
              </p>
              <div className="text-xs text-gray-500">
                Added by Sarah Smith • 1 day ago
              </div>
            </div>
          </div>
          <Button variant="outline" size="sm" className="w-full mt-3">
            Add Note
          </Button>
        </CardContent>
      </Card>

      {/* Out of Office Agents */}
      <Card className="shadow-sm border-gray-200">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <UserX size={16} className="text-gray-500" />
            <h4 className="font-medium text-gray-900">Out of Office</h4>
            <Badge variant="secondary" className="text-xs px-1.5 py-0.5">
              3
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-2">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="text-xs bg-red-100 text-red-700">
                  MJ
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm text-gray-900">Mike Johnson</div>
                <div className="text-xs text-gray-500">Until Dec 15</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="text-xs bg-red-100 text-red-700">
                  LW
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm text-gray-900">Lisa Williams</div>
                <div className="text-xs text-gray-500">Until Dec 18</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="text-xs bg-red-100 text-red-700">
                  RB
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm text-gray-900">Robert Brown</div>
                <div className="text-xs text-gray-500">Until Dec 20</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}