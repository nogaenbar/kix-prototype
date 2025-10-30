import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

interface ChartCardProps {
  title: string;
  type: "bar" | "horizontal-bar" | "pie";
  data: any[];
  className?: string;
}

// KIX Chart Colors - primary green with neutral comparisons
// Using hex values to ensure they work even if CSS variables aren't defined
const KIX_CHART_COLORS = [
  '#407A3F',  // Primary green for main data
  '#64748B',  // Neutral gray for comparisons
  '#94A3B8',  // Lighter neutral
  '#CBD5E1',  // Very light neutral
  '#E2E8F0'   // Lightest neutral
];

export function KIXChartCard({ title, type, data, className = "" }: ChartCardProps) {
  const renderChart = () => {
    switch (type) {
      case "bar":
        return (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={data} 
              margin={{ top: 5, right: 15, left: 10, bottom: 25 }}
            >
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="#CBD5E1" 
                vertical={false}
              />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12, fill: '#64748B', fontFamily: 'Inter, sans-serif' }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                tick={{ fontSize: 12, fill: '#64748B', fontFamily: 'Inter, sans-serif' }}
                tickLine={false}
                axisLine={false}
                width={30}
              />
              <Bar 
                dataKey="value" 
                fill="#407A3F" 
                radius={[4, 4, 0, 0]} 
              />
            </BarChart>
          </ResponsiveContainer>
        );
      
      case "horizontal-bar":
        return (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={data} 
              layout="horizontal" 
              margin={{ top: 5, right: 10, left: 45, bottom: 5 }}
            >
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="#CBD5E1" 
                horizontal={false}
              />
              <XAxis 
                type="number"
                tick={{ fontSize: 12, fill: '#64748B', fontFamily: 'Inter, sans-serif' }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                type="category"
                dataKey="name"
                tick={{ fontSize: 12, fill: '#64748B', fontFamily: 'Inter, sans-serif' }}
                tickLine={false}
                axisLine={false}
                width={42}
              />
              <Bar 
                dataKey="value" 
                fill="#407A3F" 
                radius={[0, 4, 4, 0]} 
              />
            </BarChart>
          </ResponsiveContainer>
        );
      
      case "pie":
        return (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={KIX_CHART_COLORS[index % KIX_CHART_COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className={`flex flex-col w-full h-[306px] bg-white rounded-[12px] ${className}`}>
      {/* CardHeader - Fixed height 56px matching Figma */}
      <div className="flex flex-col items-start px-6 py-4 w-full h-14 border-b border-neutral-200 flex-shrink-0">
        <h3 className="font-['Inter',sans-serif] font-semibold text-base leading-6 text-slate-900 truncate">{title}</h3>
      </div>
      
      {/* CardContent - Fixed height 250px matching Figma, proper centering */}
      <div className="flex flex-col items-center justify-center px-4 py-6 w-full h-[250px] flex-shrink-0">
        {/* Chart Container - Fixed height, centered */}
        <div className="w-full h-[200px] flex items-center justify-center">
          {renderChart()}
        </div>
        
        {/* Legend - Only for pie charts, positioned below chart */}
        {type === "pie" && (
          <div className="flex flex-row items-center justify-center flex-wrap gap-4 mt-1 w-full">
            {data.map((entry, index) => (
              <div key={`legend-${index}`} className="flex flex-row items-center gap-2">
                {/* Color indicator */}
                <div 
                  className="w-[14px] h-[14px] rounded-full flex-shrink-0"
                  style={{ backgroundColor: KIX_CHART_COLORS[index % KIX_CHART_COLORS.length] }}
                />
                {/* Label */}
                <p className="font-['Inter',sans-serif] font-normal text-xs leading-[18px] text-slate-500 whitespace-nowrap">
                  {entry.name}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}