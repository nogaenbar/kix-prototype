import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { 
  Search, 
  Calendar, 
  Filter, 
  Columns3, 
  Grid3x3, 
  Download, 
  FolderOpen,
  X 
} from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

interface FilterChip {
  id: string;
  label: string;
  value: string;
}

interface KIXDataTableToolbarProps {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  activeFilters?: FilterChip[];
  onFilterRemove?: (filterId: string) => void;
  onClearAllFilters?: () => void;
  onDateRangeClick?: () => void;
  onFiltersClick?: () => void;
  onColumnsClick?: () => void;
  onDensityClick?: () => void;
  onExportClick?: () => void;
  onFoldersClick?: () => void;
  className?: string;
}

export function KIXDataTableToolbar({
  searchValue = "",
  onSearchChange,
  activeFilters = [],
  onFilterRemove,
  onClearAllFilters,
  onDateRangeClick,
  onFiltersClick,
  onColumnsClick,
  onDensityClick,
  onExportClick,
  onFoldersClick,
  className = ""
}: KIXDataTableToolbarProps) {
  const handleSearchChange = (value: string) => {
    onSearchChange?.(value);
  };

  const handleFilterRemove = (filterId: string) => {
    onFilterRemove?.(filterId);
  };

  const handleClearAllFilters = () => {
    onClearAllFilters?.();
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Main toolbar */}
      <div className="flex items-center gap-3">
        {/* Search - takes remaining space */}
        <div className="flex-1 relative">
          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search tickets..."
            value={searchValue}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-9 h-9"
          />
        </div>

        {/* Right-side action buttons */}
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="sm"
            onClick={onDateRangeClick}
            className="h-9 px-3"
          >
            <Calendar size={16} className="mr-2" />
            Today
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={onFiltersClick}
            className="h-9 px-3"
          >
            <Filter size={16} className="mr-2" />
            Filters
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="h-9 px-3"
              >
                <Columns3 size={16} className="mr-2" />
                Columns
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={onColumnsClick}>
                Manage Columns
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="h-9 px-3"
              >
                <Grid3x3 size={16} className="mr-2" />
                Density
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onDensityClick?.()}>
                Comfortable
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onDensityClick?.()}>
                Compact
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="outline"
            size="sm"
            onClick={onExportClick}
            className="h-9 px-3"
          >
            <Download size={16} className="mr-2" />
            Export CSV
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={onFoldersClick}
            className="h-9 px-3"
          >
            <FolderOpen size={16} className="mr-2" />
            Folders
          </Button>
        </div>
      </div>

      {/* Active filter chips */}
      {activeFilters.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          {activeFilters.map((filter) => (
            <Badge
              key={filter.id}
              variant="outline"
              className="flex items-center gap-1 px-2 py-1 bg-primary/5 border-primary/20"
            >
              <span className="text-xs">{filter.label}: {filter.value}</span>
              <Button
                variant="ghost"
                size="sm"
                className="h-auto w-auto p-0 hover:bg-transparent"
                onClick={() => handleFilterRemove(filter.id)}
              >
                <X size={12} />
              </Button>
            </Badge>
          ))}
          <Button
            variant="ghost"
            size="sm"
            className="h-6 px-2 text-xs text-muted-foreground hover:text-foreground"
            onClick={handleClearAllFilters}
          >
            Clear all
          </Button>
        </div>
      )}
    </div>
  );
}