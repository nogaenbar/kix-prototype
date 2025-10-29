import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

interface KPITileProps {
  title: string;
  value: string | number;
  delta?: {
    value: number;
    isPositive: boolean;
    label: string;
  };
  variant?: 'default' | 'hero';
  className?: string;
}

export function KPITile({ title, value, delta, variant = 'default', className = "" }: KPITileProps) {
  // Hero variant gets special treatment for the first/most important KPI
  if (variant === 'hero') {
    return (
      <Card className={`kix-kpi-hero relative overflow-hidden kix-kpi-tile ${className}`}>
        <CardContent className="kix-kpi-hero box-border flex flex-col items-start p-6 gap-4">
          <div className="flex flex-col items-start gap-4 w-full">
            {/* Title */}
            <div className="flex items-center opacity-90">
              <p className="font-inter font-normal text-[14px] leading-[20px] text-white">{title}</p>
            </div>
            
            {/* Value */}
            <div className="flex items-start w-full h-[36px]">
              <p className="font-inter font-semibold text-[42px] leading-[32px] tracking-[-0.6px] text-white">{value}</p>
            </div>
            
            {/* Badge and Label */}
            {delta && (
              <div className="flex items-center gap-2 w-full h-[22px]">
                <div className="flex justify-center items-center bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.3)] rounded-[12px] h-[26px] px-3">
                  <div className="flex items-center gap-1">
                    {delta.isPositive ? (
                      <TrendingUp className="w-3 h-3 text-white" strokeWidth={1} />
                    ) : (
                      <TrendingDown className="w-3 h-3 text-white" strokeWidth={1} />
                    )}
                    <span className="font-inter font-medium text-[12px] leading-[16px] text-white">
                      {delta.value > 0 ? '+' : ''}{delta.value}%
                    </span>
                  </div>
                </div>
                <span className="font-inter font-normal text-[12px] leading-[16px] text-white opacity-75">
                  {delta.label}
                </span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }

  // Standard KPI tile
  return (
    <Card className={`bg-white rounded-xl kix-kpi-tile ${className}`}>
      <CardContent className="box-border flex flex-col items-start p-6 gap-4">
        <div className="flex flex-col items-start gap-4 w-full">
          {/* Title */}
          <div className="flex items-center opacity-90">
            <p className="font-inter font-normal text-[14px] leading-[20px] text-slate-500">{title}</p>
          </div>
          
          {/* Value */}
          <div className="flex items-start w-full h-[36px]">
            <p className="font-inter font-semibold text-[42px] leading-[32px] tracking-[-0.6px] text-slate-900">{value}</p>
          </div>
          
          {/* Badge and Label */}
          {delta && (
            <div className="flex items-center gap-2 w-full h-[22px]">
              <div className="flex justify-center items-center bg-[#E7F8F1] border border-[rgba(15,118,110,0.2)] rounded-[12px] h-[26px] px-3">
                <div className="flex items-center gap-1">
                  {delta.isPositive ? (
                    <TrendingUp className="w-3 h-3 text-teal-700" strokeWidth={1} />
                  ) : (
                    <TrendingDown className="w-3 h-3 text-teal-700" strokeWidth={1} />
                  )}
                  <span className="font-inter font-medium text-[12px] leading-[16px] text-teal-700">
                    {delta.value > 0 ? '+' : ''}{delta.value}%
                  </span>
                </div>
              </div>
              <span className="font-inter font-normal text-[12px] leading-[16px] text-slate-500 opacity-75">
                {delta.label}
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}