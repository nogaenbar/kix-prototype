import { Button } from "./ui/button";
import { Plus, Download, ArrowRight, Search, Calendar, ChevronDown, Filter, ArrowUpDown, FileDown, X, Settings, Trash2 } from "lucide-react";

/**
 * ButtonDemo - Comprehensive showcase of all KIX Button variants
 * 
 * This component demonstrates:
 * - All variants: filled, outlined, transparent
 * - All sizes: lg, md, sm, icon-*
 * - All states: normal, hover, disabled
 * - Icon configurations: leading, trailing, both, icon-only
 * 
 * Compare with Figma: https://www.figma.com/design/04rBMxy8CfG5SX1pbOGL7D/Vision-UI-v1?node-id=105-21426
 * 
 * To return to dashboard: Change line 203 in App.tsx from "button-demo" back to "dashboard"
 */
export function ButtonDemo() {
  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Info Banner */}
        <div className="bg-[#407a3f] text-[#f5faf5] rounded-lg p-4">
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <h2 className="font-semibold mb-1">👀 Button Component Demo</h2>
              <p className="text-sm opacity-90">
                This showcase displays all button variants, sizes, and states from your Figma designs.
                Compare with Figma frame to verify pixel-perfect implementation.
              </p>
              <p className="text-sm opacity-90 mt-2">
                <strong>To return to dashboard:</strong> Change line 203 in <code className="bg-[#365528] px-1 rounded">App.tsx</code> from <code className="bg-[#365528] px-1 rounded">"button-demo"</code> back to <code className="bg-[#365528] px-1 rounded">"dashboard"</code>
              </p>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">KIX Button Component Demo</h1>
          <p className="text-lg text-muted-foreground">
            Pixel-perfect implementation of Figma designs (Frame: KIX-Button 105:21426)
          </p>
        </div>

        {/* Section 1: All Variants - Large Size */}
        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold">Large Buttons (36px height)</h2>
            <p className="text-sm text-muted-foreground">16px text, 20px icons, 12px border radius, 16px padding</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 space-y-6">
            {/* Filled Variant */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">Filled (Primary)</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="filled" size="lg">Label Only</Button>
                <Button variant="filled" size="lg">
                  <Plus />
                  Leading Icon
                </Button>
                <Button variant="filled" size="lg">
                  Trailing Icon
                  <ArrowRight />
                </Button>
                <Button variant="filled" size="lg">
                  <Plus />
                  Both Icons
                  <ChevronDown />
                </Button>
                <Button variant="filled" size="lg" disabled>
                  Disabled
                </Button>
              </div>
            </div>

            {/* Outlined Variant */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">Outlined (Secondary)</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="outlined" size="lg">Label Only</Button>
                <Button variant="outlined" size="lg">
                  <Plus />
                  Leading Icon
                </Button>
                <Button variant="outlined" size="lg">
                  Trailing Icon
                  <ArrowRight />
                </Button>
                <Button variant="outlined" size="lg">
                  <Plus />
                  Both Icons
                  <ChevronDown />
                </Button>
                <Button variant="outlined" size="lg" disabled>
                  Disabled
                </Button>
              </div>
            </div>

            {/* Transparent Variant */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">Transparent</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="transparent" size="lg">Label Only</Button>
                <Button variant="transparent" size="lg">
                  <Plus />
                  Leading Icon
                </Button>
                <Button variant="transparent" size="lg">
                  Trailing Icon
                  <ArrowRight />
                </Button>
                <Button variant="transparent" size="lg">
                  <Plus />
                  Both Icons
                  <ChevronDown />
                </Button>
                <Button variant="transparent" size="lg" disabled>
                  Disabled
                </Button>
              </div>
            </div>

            {/* Icon-Only Large */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">Icon-Only (36×36px)</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="filled" size="icon-lg">
                  <Plus />
                </Button>
                <Button variant="outlined" size="icon-lg">
                  <Search />
                </Button>
                <Button variant="ghost" size="icon-lg">
                  <Settings />
                </Button>
                <Button variant="filled" size="icon-lg" disabled>
                  <X />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Medium Size (Default) */}
        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold">Medium Buttons (32px height) - Default</h2>
            <p className="text-sm text-muted-foreground">14px text, 16px icons, 12px border radius, 12px padding</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 space-y-6">
            {/* Filled Variant */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">Filled (Primary)</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="filled" size="md">Label Only</Button>
                <Button variant="filled" size="md">
                  <Calendar />
                  Leading Icon
                </Button>
                <Button variant="filled" size="md">
                  Trailing Icon
                  <Download />
                </Button>
                <Button variant="filled" size="md">
                  <Plus />
                  Both Icons
                  <ChevronDown />
                </Button>
                <Button variant="filled" size="md" disabled>
                  Disabled
                </Button>
              </div>
            </div>

            {/* Outlined Variant */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">Outlined (Secondary)</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="outlined" size="md">Label Only</Button>
                <Button variant="outlined" size="md">
                  <Filter />
                  Leading Icon
                </Button>
                <Button variant="outlined" size="md">
                  Trailing Icon
                  <ArrowUpDown />
                </Button>
                <Button variant="outlined" size="md">
                  <Calendar />
                  Both Icons
                  <ChevronDown />
                </Button>
                <Button variant="outlined" size="md" disabled>
                  Disabled
                </Button>
              </div>
            </div>

            {/* Transparent Variant */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">Transparent</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="transparent" size="md">Label Only</Button>
                <Button variant="transparent" size="md">
                  <Download />
                  Leading Icon
                </Button>
                <Button variant="transparent" size="md">
                  Trailing Icon
                  <ArrowRight />
                </Button>
                <Button variant="transparent" size="md">
                  <Filter />
                  Both Icons
                  <ChevronDown />
                </Button>
                <Button variant="transparent" size="md" disabled>
                  Disabled
                </Button>
              </div>
            </div>

            {/* Icon-Only Medium */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">Icon-Only (32×32px)</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="filled" size="icon-md">
                  <Plus />
                </Button>
                <Button variant="outlined" size="icon-md">
                  <Filter />
                </Button>
                <Button variant="transparent" size="icon-md">
                  <Settings />
                </Button>
                <Button variant="filled" size="icon-md" disabled>
                  <X />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Small Size */}
        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold">Small Buttons (24px height)</h2>
            <p className="text-sm text-muted-foreground">12px text, 12px icons, 8px border radius, 8px padding</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 space-y-6">
            {/* Filled Variant */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">Filled (Primary)</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="filled" size="sm">Label Only</Button>
                <Button variant="filled" size="sm">
                  <Plus />
                  Leading Icon
                </Button>
                <Button variant="filled" size="sm">
                  Trailing
                  <ArrowRight />
                </Button>
                <Button variant="filled" size="sm">
                  <Plus />
                  Both
                  <ChevronDown />
                </Button>
                <Button variant="filled" size="sm" disabled>
                  Disabled
                </Button>
              </div>
            </div>

            {/* Outlined Variant */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">Outlined (Secondary)</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="outlined" size="sm">Label Only</Button>
                <Button variant="outlined" size="sm">
                  <Plus />
                  Leading Icon
                </Button>
                <Button variant="outlined" size="sm">
                  Trailing
                  <ArrowRight />
                </Button>
                <Button variant="outlined" size="sm">
                  <Plus />
                  Both
                  <ChevronDown />
                </Button>
                <Button variant="outlined" size="sm" disabled>
                  Disabled
                </Button>
              </div>
            </div>

            {/* Transparent Variant */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">Transparent</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="transparent" size="sm">Label Only</Button>
                <Button variant="transparent" size="sm">
                  <Plus />
                  Leading Icon
                </Button>
                <Button variant="transparent" size="sm">
                  Trailing
                  <ArrowRight />
                </Button>
                <Button variant="transparent" size="sm">
                  <Plus />
                  Both
                  <ChevronDown />
                </Button>
                <Button variant="transparent" size="sm" disabled>
                  Disabled
                </Button>
              </div>
            </div>

            {/* Icon-Only Small */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">Icon-Only (24×24px)</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="filled" size="icon-sm">
                  <Plus />
                </Button>
                <Button variant="outlined" size="icon-sm">
                  <Filter />
                </Button>
                <Button variant="transparent" size="icon-sm">
                  <X />
                </Button>
                <Button variant="filled" size="icon-sm" disabled>
                  <Trash2 />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Real-World Examples */}
        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold">Real-World Examples from Your App</h2>
            <p className="text-sm text-muted-foreground">How buttons will look in actual usage</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 space-y-8">
            {/* Example 1: Dashboard Header */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">Dashboard: "New Ticket" CTA</h3>
              <div className="flex items-center gap-2">
                <Button variant="filled" size="md">
                  <Plus />
                  New Ticket
                  <ChevronDown />
                </Button>
              </div>
            </div>

            {/* Example 2: Data Table Toolbar */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">Data Table: Toolbar Buttons</h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="outlined" size="md">
                  <Calendar />
                  Last 30 days
                  <ChevronDown />
                </Button>
                <Button variant="outlined" size="md">
                  <Filter />
                  Priority
                  <ChevronDown />
                </Button>
                <Button variant="outlined" size="md">
                  <Filter />
                  Filter
                </Button>
                <Button variant="outlined" size="md">
                  <ArrowUpDown />
                  Sort
                </Button>
                <Button variant="outlined" size="md">
                  <FileDown />
                  Export CSV
                </Button>
              </div>
            </div>

            {/* Example 3: Ticket Detail Actions */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">Ticket Detail: Action Buttons</h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="filled" size="lg">
                  <Plus />
                  Add Comment
                </Button>
                <Button variant="outlined" size="lg">
                  Cancel
                </Button>
                <Button variant="transparent" size="lg">
                  Delete
                  <Trash2 />
                </Button>
              </div>
            </div>

            {/* Example 4: Icon-Only Actions */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">Icon-Only: Quick Actions</h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="filled" size="icon-md">
                  <Search />
                </Button>
                <Button variant="outlined" size="icon-md">
                  <Filter />
                </Button>
                <Button variant="transparent" size="icon-md">
                  <Settings />
                </Button>
                <Button variant="transparent" size="icon-sm">
                  <X />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Color & State Reference */}
        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold">Color & State Reference</h2>
            <p className="text-sm text-muted-foreground">Figma specifications (Frame: 105:21426)</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-medium">Filled Variant</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• BG: <code className="bg-slate-100 px-1 rounded">#407a3f</code></li>
                  <li>• Hover: <code className="bg-slate-100 px-1 rounded">#365528</code></li>
                  <li>• Text: <code className="bg-slate-100 px-1 rounded">#f5faf5</code></li>
                  <li>• Disabled: 48% opacity overlay</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">Outlined Variant</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• BG: <code className="bg-slate-100 px-1 rounded">white</code></li>
                  <li>• Border: <code className="bg-slate-100 px-1 rounded">rgba(64,122,63,0.2)</code></li>
                  <li>• Text: <code className="bg-slate-100 px-1 rounded">#407a3f</code></li>
                  <li>• Hover: Light green tint</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">Ghost Variant</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• BG: <code className="bg-slate-100 px-1 rounded">transparent</code></li>
                  <li>• Text: <code className="bg-slate-100 px-1 rounded">#407a3f</code></li>
                  <li>• Hover: Subtle green tint</li>
                  <li>• Disabled: 40% text opacity</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="border-t pt-6 space-y-2">
          <p className="text-sm text-muted-foreground">
            ✅ All buttons use exact Figma specifications
          </p>
          <p className="text-sm text-muted-foreground">
            ✅ Icons auto-size based on button size (no manual sizing needed)
          </p>
          <p className="text-sm text-muted-foreground">
            ✅ Hover over any button to see state transitions
          </p>
          <p className="text-sm text-muted-foreground">
            📖 Compare with Figma: <a href="https://www.figma.com/design/04rBMxy8CfG5SX1pbOGL7D/Vision-UI-v1?node-id=105-21426" target="_blank" rel="noopener noreferrer" className="text-[#407a3f] hover:underline">Open Figma Frame</a>
          </p>
        </div>
      </div>
    </div>
  );
}

