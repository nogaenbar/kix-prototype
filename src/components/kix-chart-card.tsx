import { Card, CardContent, CardHeader } from "./ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

interface ChartCardProps {
  title: string;
  type: "bar" | "horizontal-bar" | "pie";
  data: any[];
  className?: string;
}

// KIX Chart Colors - primary green with neutral comparisons
const KIX_CHART_COLORS = [
  'var(--chart-primary)',     // Primary green for main data
  'var(--chart-secondary)',   // Neutral for comparisons  
  'var(--chart-tertiary)',    // Lighter neutral
  '#64748B',                  // Additional neutrals
  '#94A3B8'
];

export function KIXChartCard({ title, type, data, className = "" }: ChartCardProps) {
  const renderChart = () => {
    switch (type) {
      case "bar":
        return (
          <ResponsiveContainer width={298} height={200}>
            <BarChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 35 }}>
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="#CBD5E1" 
                vertical={false}
              />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12, fill: '#64748B' }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                tick={{ fontSize: 12, fill: '#64748B' }}
                tickLine={false}
                axisLine={false}
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
          <ResponsiveContainer width={298} height={200}>
            <BarChart data={data} layout="horizontal" margin={{ top: 5, right: 10, left: 50, bottom: 5 }}>
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="#CBD5E1" 
                horizontal={false}
              />
              <XAxis 
                type="number"
                tick={{ fontSize: 12, fill: '#64748B' }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                type="category"
                dataKey="name"
                tick={{ fontSize: 12, fill: '#64748B' }}
                tickLine={false}
                axisLine={false}
                width={45}
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
          <ResponsiveContainer width={298} height={200}>
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
    <div className={`flex flex-col justify-center items-center p-0 w-full h-[306px] bg-white rounded-[12px] ${className}`}>
      {/* CardHeader - Exact Figma specifications */}
      <div className="flex flex-col items-start px-6 py-4 gap-[10px] w-full h-14 bg-white rounded-[12px] flex-none order-0 self-stretch flex-grow-0">
        <div className="flex flex-row justify-center items-center p-0 gap-[10px] w-[152px] h-6 rounded-0 flex-none order-0 flex-grow-0">
          <h3 className="h-6 font-['Inter'] font-semibold text-base leading-6 text-slate-900 flex-none order-0 flex-grow-0 truncate">{title}</h3>
        </div>
      </div>
      
      {/* CardContent - Exact Figma specifications */}
      <div className="flex flex-col justify-center items-center px-4 py-0 gap-[10px] w-full h-[250px] bg-white rounded-[12px] flex-none order-1 self-stretch flex-grow">
        {/* Container - Exact Figma specifications */}
        <div className="flex flex-col items-start p-0 w-[298px] h-[200px] bg-white rounded-[12px] flex-none order-0 flex-grow-0">
          {/* Icon/Chart Container - Exact Figma specifications */}
          <div className="w-[298px] h-[200px] bg-white rounded-[12px] flex-none order-0 flex-grow-0 relative overflow-hidden flex items-center justify-center">
            {renderChart()}
          </div>
        </div>
        
        {/* Legend - Only for pie charts, positioned outside Container */}
        {type === "pie" && (
          <div className="flex flex-row items-center px-[38px] py-0 gap-4 w-full max-w-[337.91px] h-[15px] bg-white rounded-[12px] flex-none order-1 flex-grow-0">
            {data.map((entry, index) => (
              <div key={`legend-${index}`} className="flex flex-row items-center p-0 gap-1 h-[15px] rounded-0 flex-none flex-grow-0">
                {/* Icon */}
                <div className="w-[14px] h-[14px] bg-white rounded-[12px] flex-none order-0 flex-grow-0 relative">
                  <div 
                    className="absolute h-[14px] left-0 right-0 top-1/2 -translate-y-1/2 rounded-full"
                    style={{ background: KIX_CHART_COLORS[index % KIX_CHART_COLORS.length] }}
                  />
                </div>
                {/* Text */}
                <div className="flex flex-row items-center p-0 h-[15px] rounded-0 flex-none order-1 flex-grow-0">
                  <p className="font-['Inter'] font-normal text-xs leading-[18px] text-center text-slate-500 whitespace-nowrap flex-none order-0 flex-grow-0">
                    {entry.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}