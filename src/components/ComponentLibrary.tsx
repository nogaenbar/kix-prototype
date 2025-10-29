import { useState } from "react";
import { IconButton } from "./ui/icon-button";
import { Button } from "./ui/button";
import { 
  Plus, Download, Search, Settings, Trash2, Edit, 
  Copy, Share2, Mail, Bell, Filter, ArrowRight,
  ChevronDown, X, Check, AlertCircle, Home, Package,
  Type, MousePointer, LayoutGrid
} from "lucide-react";

/**
 * KIX Design System Library
 * 
 * A professional component showcase and documentation system
 * inspired by Storybook and Zeroheight.
 * 
 * Access at: http://localhost:3000/#/component-library
 */

// Component registry
type ComponentCategory = {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  components: ComponentItem[];
};

type ComponentItem = {
  id: string;
  name: string;
  description: string;
  status: "stable" | "beta" | "new";
  figmaUrl?: string;
};

const componentRegistry: ComponentCategory[] = [
  {
    id: "buttons",
    name: "Buttons",
    icon: MousePointer,
    components: [
      {
        id: "icon-button",
        name: "Icon Button",
        description: "Square buttons for icon-only actions",
        status: "stable",
        figmaUrl: "https://www.figma.com/design/04rBMxy8CfG5SX1pbOGL7D/Vision-UI-v1?node-id=157-4091"
      },
      {
        id: "text-button",
        name: "Text Button",
        description: "Buttons with text labels and optional icons",
        status: "stable",
        figmaUrl: "https://www.figma.com/design/04rBMxy8CfG5SX1pbOGL7D/Vision-UI-v1?node-id=105-21426"
      }
    ]
  },
  {
    id: "inputs",
    name: "Inputs",
    icon: Type,
    components: [
      {
        id: "text-input",
        name: "Text Input",
        description: "Single-line text input fields",
        status: "new"
      }
    ]
  },
  {
    id: "data-display",
    name: "Data Display",
    icon: LayoutGrid,
    components: [
      {
        id: "table",
        name: "Data Table",
        description: "Tables for displaying structured data",
        status: "beta"
      }
    ]
  }
];

export function ComponentLibrary() {
  const [selectedComponent, setSelectedComponent] = useState<string>("icon-button");
  const [activeTab, setActiveTab] = useState<"showcase" | "props" | "code">("showcase");

  // Find selected component info
  const getSelectedComponentInfo = () => {
    for (const category of componentRegistry) {
      const component = category.components.find(c => c.id === selectedComponent);
      if (component) return { category, component };
    }
    return null;
  };

  const selectedInfo = getSelectedComponentInfo();

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col overflow-hidden">
        {/* Logo/Header */}
        <div className="px-6 py-5 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Package className="w-6 h-6 text-[#407a3f]" />
            <div>
              <h1 className="text-sm font-bold text-gray-900">KIX Design System</h1>
              <p className="text-xs text-gray-500">v1.0.0</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {/* Home */}
          <button
            onClick={() => window.location.href = "/"}
            className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg mb-4 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Back to App</span>
          </button>

          {/* Component Categories */}
          {componentRegistry.map((category) => (
            <div key={category.id} className="mb-6">
              <div className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                <category.icon className="w-3.5 h-3.5" />
                {category.name}
              </div>
              <div className="space-y-1 mt-2">
                {category.components.map((component) => (
                  <button
                    key={component.id}
                    onClick={() => setSelectedComponent(component.id)}
                    className={`
                      w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors
                      ${selectedComponent === component.id 
                        ? "bg-[#ebf5e6] text-[#407a3f] font-medium" 
                        : "text-gray-700 hover:bg-gray-50"
                      }
                    `}
                  >
                    <span>{component.name}</span>
                    {component.status === "new" && (
                      <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-blue-100 text-blue-700 rounded">
                        NEW
                      </span>
                    )}
                    {component.status === "beta" && (
                      <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-yellow-100 text-yellow-700 rounded">
                        BETA
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 text-xs text-gray-500">
          <p>Built with React + TypeScript</p>
          <p className="mt-1">Based on Figma designs</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-5">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedInfo?.component.name}
                </h2>
                {selectedInfo?.component.status === "stable" && (
                  <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded">
                    STABLE
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600 mt-1">
                {selectedInfo?.component.description}
              </p>
            </div>
            {selectedInfo?.component.figmaUrl && (
              <a
                href={selectedInfo.component.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                View in Figma →
              </a>
            )}
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mt-6 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("showcase")}
              className={`
                px-4 py-2 text-sm font-medium transition-colors relative
                ${activeTab === "showcase"
                  ? "text-[#407a3f]"
                  : "text-gray-600 hover:text-gray-900"
                }
              `}
            >
              Showcase
              {activeTab === "showcase" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#407a3f]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("props")}
              className={`
                px-4 py-2 text-sm font-medium transition-colors relative
                ${activeTab === "props"
                  ? "text-[#407a3f]"
                  : "text-gray-600 hover:text-gray-900"
                }
              `}
            >
              Props & API
              {activeTab === "props" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#407a3f]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`
                px-4 py-2 text-sm font-medium transition-colors relative
                ${activeTab === "code"
                  ? "text-[#407a3f]"
                  : "text-gray-600 hover:text-gray-900"
                }
              `}
            >
              Code Examples
              {activeTab === "code" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#407a3f]" />
              )}
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          {selectedComponent === "icon-button" && activeTab === "showcase" && (
            <IconButtonShowcase />
          )}
          {selectedComponent === "icon-button" && activeTab === "props" && (
            <IconButtonProps />
          )}
          {selectedComponent === "icon-button" && activeTab === "code" && (
            <IconButtonCode />
          )}
          {selectedComponent === "text-button" && activeTab === "showcase" && (
            <TextButtonShowcase />
          )}
          {selectedComponent === "text-button" && activeTab === "props" && (
            <TextButtonProps />
          )}
          {selectedComponent === "text-button" && activeTab === "code" && (
            <TextButtonCode />
          )}
          {!["icon-button", "text-button"].includes(selectedComponent) && (
            <ComingSoon componentName={selectedInfo?.component.name || ""} />
          )}
        </div>
      </main>
    </div>
  );
}

// Icon Button Showcase
function IconButtonShowcase() {
  return (
    <div className="p-8 space-y-8">
      {/* Interactive Demo Section */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-dashed border-blue-300">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
            <MousePointer className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">Interactive Demo</h3>
            <p className="text-sm text-gray-600">
              Hover, click, and interact with buttons to see all states in action
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Filled Interactive */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="text-sm font-semibold text-gray-700 mb-4">Filled (Primary)</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <IconButton variant="filled" size="lg" onClick={() => alert('Large filled clicked!')}>
                  <Plus />
                </IconButton>
                <span className="text-xs text-gray-500">Large</span>
              </div>
              <div className="flex items-center gap-3">
                <IconButton variant="filled" size="md" onClick={() => alert('Medium filled clicked!')}>
                  <Download />
                </IconButton>
                <span className="text-xs text-gray-500">Medium</span>
              </div>
              <div className="flex items-center gap-3">
                <IconButton variant="filled" size="sm" onClick={() => alert('Small filled clicked!')}>
                  <Search />
                </IconButton>
                <span className="text-xs text-gray-500">Small</span>
              </div>
              <div className="flex items-center gap-3">
                <IconButton variant="filled" size="md" disabled>
                  <Trash2 />
                </IconButton>
                <span className="text-xs text-gray-500">Disabled</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500">
              💡 Hover to see color change, click to test
            </div>
          </div>

          {/* Outlined Interactive */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="text-sm font-semibold text-gray-700 mb-4">Outlined (Secondary)</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <IconButton variant="outlined" size="lg" onClick={() => alert('Large outlined clicked!')}>
                  <Edit />
                </IconButton>
                <span className="text-xs text-gray-500">Large</span>
              </div>
              <div className="flex items-center gap-3">
                <IconButton variant="outlined" size="md" onClick={() => alert('Medium outlined clicked!')}>
                  <Copy />
                </IconButton>
                <span className="text-xs text-gray-500">Medium</span>
              </div>
              <div className="flex items-center gap-3">
                <IconButton variant="outlined" size="sm" onClick={() => alert('Small outlined clicked!')}>
                  <Share2 />
                </IconButton>
                <span className="text-xs text-gray-500">Small</span>
              </div>
              <div className="flex items-center gap-3">
                <IconButton variant="outlined" size="md" disabled>
                  <Mail />
                </IconButton>
                <span className="text-xs text-gray-500">Disabled</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500">
              💡 Hover to see background appear
            </div>
          </div>

          {/* Transparent Interactive */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="text-sm font-semibold text-gray-700 mb-4">Transparent (Tertiary)</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <IconButton variant="transparent" size="lg" onClick={() => alert('Large transparent clicked!')}>
                  <Settings />
                </IconButton>
                <span className="text-xs text-gray-500">Large</span>
              </div>
              <div className="flex items-center gap-3">
                <IconButton variant="transparent" size="md" onClick={() => alert('Medium transparent clicked!')}>
                  <Filter />
                </IconButton>
                <span className="text-xs text-gray-500">Medium</span>
              </div>
              <div className="flex items-center gap-3">
                <IconButton variant="transparent" size="sm" onClick={() => alert('Small transparent clicked!')}>
                  <X />
                </IconButton>
                <span className="text-xs text-gray-500">Small</span>
              </div>
              <div className="flex items-center gap-3">
                <IconButton variant="transparent" size="md" disabled>
                  <Bell />
                </IconButton>
                <span className="text-xs text-gray-500">Disabled</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500">
              💡 Hover to see subtle background
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-white rounded-lg border border-blue-200">
          <p className="text-sm text-gray-700">
            <strong className="text-blue-600">Try it:</strong> Click any button above to test interactivity. 
            Hover to see state changes. Notice how filled buttons have light green icons (#f5faf5).
          </p>
        </div>
      </div>

      {/* Filled Variant */}
      <ComponentSection
        title="Filled"
        description="High emphasis icon button for primary actions"
        colors={[
          { label: "Initial", value: "#407a3f", text: "#f5faf5" },
          { label: "Hover", value: "#365528", text: "#f5faf5" },
          { label: "Active", value: "#24391b", text: "#f5faf5" }
        ]}
      >
        <VariantGrid title="Large (36×36px, 20×20px icons)">
          <IconButton variant="filled" size="lg"><Plus /></IconButton>
          <IconButton variant="filled" size="lg"><Download /></IconButton>
          <IconButton variant="filled" size="lg"><Search /></IconButton>
          <IconButton variant="filled" size="lg"><Settings /></IconButton>
          <IconButton variant="filled" size="lg" disabled><Trash2 /></IconButton>
        </VariantGrid>

        <VariantGrid title="Medium (32×32px, 16×16px icons)">
          <IconButton variant="filled" size="md"><Edit /></IconButton>
          <IconButton variant="filled" size="md"><Copy /></IconButton>
          <IconButton variant="filled" size="md"><Share2 /></IconButton>
          <IconButton variant="filled" size="md"><Mail /></IconButton>
          <IconButton variant="filled" size="md" disabled><Bell /></IconButton>
        </VariantGrid>

        <VariantGrid title="Small (24×24px, 12×12px icons)">
          <IconButton variant="filled" size="sm"><X /></IconButton>
          <IconButton variant="filled" size="sm"><Check /></IconButton>
          <IconButton variant="filled" size="sm"><Filter /></IconButton>
          <IconButton variant="filled" size="sm"><ChevronDown /></IconButton>
          <IconButton variant="filled" size="sm" disabled><AlertCircle /></IconButton>
        </VariantGrid>
      </ComponentSection>

      {/* Outlined Variant */}
      <ComponentSection
        title="Outlined"
        description="Medium emphasis icon button for secondary actions"
        colors={[
          { label: "Initial", value: "transparent", border: "rgba(64,122,63,0.2)", text: "#407a3f" },
          { label: "Hover", value: "#deeedd", text: "#407a3f" },
          { label: "Active", value: "#bcdcbc", text: "#407a3f" }
        ]}
      >
        <VariantGrid title="Large (36×36px)">
          <IconButton variant="outlined" size="lg"><Plus /></IconButton>
          <IconButton variant="outlined" size="lg"><Download /></IconButton>
          <IconButton variant="outlined" size="lg"><Search /></IconButton>
          <IconButton variant="outlined" size="lg"><Settings /></IconButton>
          <IconButton variant="outlined" size="lg" disabled><Trash2 /></IconButton>
        </VariantGrid>

        <VariantGrid title="Medium (32×32px)">
          <IconButton variant="outlined" size="md"><Edit /></IconButton>
          <IconButton variant="outlined" size="md"><Copy /></IconButton>
          <IconButton variant="outlined" size="md"><Share2 /></IconButton>
          <IconButton variant="outlined" size="md"><Mail /></IconButton>
          <IconButton variant="outlined" size="md" disabled><Bell /></IconButton>
        </VariantGrid>

        <VariantGrid title="Small (24×24px)">
          <IconButton variant="outlined" size="sm"><X /></IconButton>
          <IconButton variant="outlined" size="sm"><Check /></IconButton>
          <IconButton variant="outlined" size="sm"><Filter /></IconButton>
          <IconButton variant="outlined" size="sm"><ChevronDown /></IconButton>
          <IconButton variant="outlined" size="sm" disabled><AlertCircle /></IconButton>
        </VariantGrid>
      </ComponentSection>

      {/* Transparent Variant */}
      <ComponentSection
        title="Transparent"
        description="Low emphasis icon button for tertiary actions"
        colors={[
          { label: "Initial", value: "transparent", text: "#407a3f" },
          { label: "Hover", value: "#deeedd", text: "#407a3f" },
          { label: "Active", value: "#bcdcbc", text: "#407a3f" }
        ]}
      >
        <VariantGrid title="Large (36×36px)">
          <IconButton variant="transparent" size="lg"><Plus /></IconButton>
          <IconButton variant="transparent" size="lg"><Download /></IconButton>
          <IconButton variant="transparent" size="lg"><Search /></IconButton>
          <IconButton variant="transparent" size="lg"><Settings /></IconButton>
          <IconButton variant="transparent" size="lg" disabled><Trash2 /></IconButton>
        </VariantGrid>

        <VariantGrid title="Medium (32×32px)">
          <IconButton variant="transparent" size="md"><Edit /></IconButton>
          <IconButton variant="transparent" size="md"><Copy /></IconButton>
          <IconButton variant="transparent" size="md"><Share2 /></IconButton>
          <IconButton variant="transparent" size="md"><Mail /></IconButton>
          <IconButton variant="transparent" size="md" disabled><Bell /></IconButton>
        </VariantGrid>

        <VariantGrid title="Small (24×24px)">
          <IconButton variant="transparent" size="sm"><X /></IconButton>
          <IconButton variant="transparent" size="sm"><Check /></IconButton>
          <IconButton variant="transparent" size="sm"><Filter /></IconButton>
          <IconButton variant="transparent" size="sm"><ChevronDown /></IconButton>
          <IconButton variant="transparent" size="sm" disabled><AlertCircle /></IconButton>
        </VariantGrid>
      </ComponentSection>
    </div>
  );
}

// Icon Button Props
function IconButtonProps() {
  return (
    <div className="p-8">
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Prop</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Default</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 text-sm font-mono text-[#407a3f]">variant</td>
              <td className="px-6 py-4 text-sm font-mono text-gray-600">"filled" | "outlined" | "transparent"</td>
              <td className="px-6 py-4 text-sm font-mono text-gray-600">"filled"</td>
              <td className="px-6 py-4 text-sm text-gray-700">Visual style variant</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm font-mono text-[#407a3f]">size</td>
              <td className="px-6 py-4 text-sm font-mono text-gray-600">"lg" | "md" | "sm"</td>
              <td className="px-6 py-4 text-sm font-mono text-gray-600">"md"</td>
              <td className="px-6 py-4 text-sm text-gray-700">Button size (36px, 32px, or 24px)</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm font-mono text-[#407a3f]">disabled</td>
              <td className="px-6 py-4 text-sm font-mono text-gray-600">boolean</td>
              <td className="px-6 py-4 text-sm font-mono text-gray-600">false</td>
              <td className="px-6 py-4 text-sm text-gray-700">Disables button interaction</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm font-mono text-[#407a3f]">onClick</td>
              <td className="px-6 py-4 text-sm font-mono text-gray-600">() =&gt; void</td>
              <td className="px-6 py-4 text-sm font-mono text-gray-600">-</td>
              <td className="px-6 py-4 text-sm text-gray-700">Click event handler</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm font-mono text-[#407a3f]">aria-label</td>
              <td className="px-6 py-4 text-sm font-mono text-gray-600">string</td>
              <td className="px-6 py-4 text-sm font-mono text-gray-600">-</td>
              <td className="px-6 py-4 text-sm text-gray-700">Accessible label for screen readers (required)</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm font-mono text-[#407a3f]">className</td>
              <td className="px-6 py-4 text-sm font-mono text-gray-600">string</td>
              <td className="px-6 py-4 text-sm font-mono text-gray-600">-</td>
              <td className="px-6 py-4 text-sm text-gray-700">Additional CSS classes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Icon Button Code
function IconButtonCode() {
  return (
    <div className="p-8 space-y-6">
      <CodeBlock
        title="Import"
        code={`import { IconButton } from "@/components/ui/icon-button";
import { Plus, Trash2, Edit } from "lucide-react";`}
      />

      <CodeBlock
        title="Basic Usage"
        code={`// Filled (Primary action)
<IconButton variant="filled" size="lg">
  <Plus />
</IconButton>

// Outlined (Secondary action)
<IconButton variant="outlined" size="md">
  <Edit />
</IconButton>

// Transparent (Tertiary action)
<IconButton variant="transparent" size="sm">
  <Trash2 />
</IconButton>`}
      />

      <CodeBlock
        title="With Event Handler"
        code={`<IconButton 
  variant="filled" 
  size="md"
  onClick={() => handleDelete()}
  aria-label="Delete item"
>
  <Trash2 />
</IconButton>`}
      />

      <CodeBlock
        title="Disabled State"
        code={`<IconButton 
  variant="filled" 
  size="lg"
  disabled
>
  <Plus />
</IconButton>`}
      />
    </div>
  );
}

// Text Button Showcase
function TextButtonShowcase() {
  return (
    <div className="p-8 space-y-8">
      <ComponentSection
        title="Filled"
        description="High emphasis button for primary actions"
        colors={[
          { label: "Initial", value: "#407a3f", text: "#f5faf5" },
          { label: "Hover", value: "#365528", text: "#f5faf5" },
          { label: "Active", value: "#24391b", text: "#f5faf5" }
        ]}
      >
        <VariantGrid title="Large (36px height)">
          <Button variant="filled" size="lg">Label Only</Button>
          <Button variant="filled" size="lg"><Plus />Leading Icon</Button>
          <Button variant="filled" size="lg">Trailing Icon<ArrowRight /></Button>
          <Button variant="filled" size="lg" disabled>Disabled</Button>
        </VariantGrid>

        <VariantGrid title="Medium (32px height)">
          <Button variant="filled" size="md">Label Only</Button>
          <Button variant="filled" size="md"><Plus />Leading Icon</Button>
          <Button variant="filled" size="md">Trailing Icon<ArrowRight /></Button>
          <Button variant="filled" size="md" disabled>Disabled</Button>
        </VariantGrid>

        <VariantGrid title="Small (24px height)">
          <Button variant="filled" size="sm">Label Only</Button>
          <Button variant="filled" size="sm"><Plus />Leading Icon</Button>
          <Button variant="filled" size="sm">Trailing Icon<ArrowRight /></Button>
          <Button variant="filled" size="sm" disabled>Disabled</Button>
        </VariantGrid>
      </ComponentSection>

      <ComponentSection
        title="Outlined"
        description="Medium emphasis button for secondary actions"
        colors={[
          { label: "Initial", value: "#ffffff", border: "rgba(64,122,63,0.2)", text: "#407a3f" },
          { label: "Hover", value: "#ebf5e6", text: "#407a3f" },
          { label: "Active", value: "#ddefd6", text: "#407a3f" }
        ]}
      >
        <VariantGrid title="All Sizes">
          <Button variant="outlined" size="lg">Large</Button>
          <Button variant="outlined" size="md"><Download />Medium</Button>
          <Button variant="outlined" size="sm">Small</Button>
        </VariantGrid>
      </ComponentSection>

      <ComponentSection
        title="Ghost"
        description="Low emphasis button for tertiary actions"
        colors={[
          { label: "Initial", value: "transparent", text: "#407a3f" },
          { label: "Hover", value: "#ebf5e6", text: "#407a3f" },
          { label: "Active", value: "#ddefd6", text: "#407a3f" }
        ]}
      >
        <VariantGrid title="All Sizes">
          <Button variant="ghost" size="lg">Large</Button>
          <Button variant="ghost" size="md"><Filter />Medium</Button>
          <Button variant="ghost" size="sm">Small</Button>
        </VariantGrid>
      </ComponentSection>
    </div>
  );
}

function TextButtonProps() {
  return (
    <div className="p-8">
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Prop</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Default</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 text-sm font-mono text-[#407a3f]">variant</td>
              <td className="px-6 py-4 text-sm font-mono text-gray-600">"filled" | "outlined" | "ghost"</td>
              <td className="px-6 py-4 text-sm font-mono text-gray-600">"filled"</td>
              <td className="px-6 py-4 text-sm text-gray-700">Visual style variant</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm font-mono text-[#407a3f]">size</td>
              <td className="px-6 py-4 text-sm font-mono text-gray-600">"lg" | "md" | "sm"</td>
              <td className="px-6 py-4 text-sm font-mono text-gray-600">"md"</td>
              <td className="px-6 py-4 text-sm text-gray-700">Button size (36px, 32px, or 24px height)</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm font-mono text-[#407a3f]">children</td>
              <td className="px-6 py-4 text-sm font-mono text-gray-600">ReactNode</td>
              <td className="px-6 py-4 text-sm font-mono text-gray-600">-</td>
              <td className="px-6 py-4 text-sm text-gray-700">Button content (text and/or icons)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TextButtonCode() {
  return (
    <div className="p-8 space-y-6">
      <CodeBlock
        title="Import"
        code={`import { Button } from "@/components/ui/button";
import { Plus, Download } from "lucide-react";`}
      />

      <CodeBlock
        title="Basic Usage"
        code={`<Button variant="filled" size="lg">
  Click Me
</Button>`}
      />

      <CodeBlock
        title="With Icons"
        code={`// Leading icon
<Button variant="filled" size="md">
  <Plus />
  New Ticket
</Button>

// Trailing icon
<Button variant="outlined" size="md">
  Export
  <Download />
</Button>`}
      />
    </div>
  );
}

// Helper Components
function ComponentSection({ 
  title, 
  description, 
  colors, 
  children 
}: { 
  title: string; 
  description: string; 
  colors: Array<{ label: string; value: string; text?: string; border?: string }>; 
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
        <div className="flex gap-3">
          {colors.map((color, index) => (
            <div key={index} className="text-center">
              <div 
                className="w-12 h-12 rounded-lg border border-gray-200 mb-2 flex items-center justify-center"
                style={{ 
                  backgroundColor: color.value === "transparent" ? "white" : color.value,
                  borderColor: color.border || "#e5e7eb"
                }}
              >
                {color.text && (
                  <div 
                    className="w-6 h-0.5 rounded"
                    style={{ backgroundColor: color.text }}
                  />
                )}
              </div>
              <p className="text-[10px] text-gray-500 font-medium">{color.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-6">
        {children}
      </div>
    </div>
  );
}

function VariantGrid({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3">{title}</h4>
      <div className="flex flex-wrap gap-4 items-center">
        {children}
      </div>
    </div>
  );
}

function CodeBlock({ title, code }: { title: string; code: string }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
        <h4 className="text-sm font-semibold text-gray-700">{title}</h4>
      </div>
      <pre className="p-4 text-sm font-mono text-gray-800 overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function ComingSoon({ componentName }: { componentName: string }) {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Package className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {componentName} - Coming Soon
        </h3>
        <p className="text-sm text-gray-600">
          This component is under development and will be available soon.
        </p>
      </div>
    </div>
  );
}
