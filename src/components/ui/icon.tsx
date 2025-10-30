import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

/**
 * KIX Icon Container Component
 * 
 * Centralized icon sizing and stroke width management
 * 
 * SIZES:
 * - Large: 20x20px, 2px stroke
 * - Medium: 16x16px, 2px stroke
 * - Small: 12x12px, 2px stroke
 */

const iconVariants = cva(
  [
    "inline-flex items-center justify-center",
    "flex-shrink-0",
  ].join(" "),
  {
    variants: {
      size: {
        lg: "w-5 h-5", // 20px
        md: "w-4 h-4", // 16px
        sm: "w-3 h-3", // 12px
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

// Stroke width mapping - Unified 2px for better accessibility
const strokeWidthMap = {
  lg: 2,
  md: 2,
  sm: 2,
} as const;

export interface IconProps extends VariantProps<typeof iconVariants> {
  children: React.ReactElement;
  className?: string;
}

/**
 * Icon component that automatically sizes and applies stroke width to Lucide icons
 * 
 * @example
 * <Icon size="lg"><Plus /></Icon>
 * <Icon size="md" className="text-green-500"><Download /></Icon>
 */
export const Icon = React.forwardRef<HTMLDivElement, IconProps>(
  ({ size = "md", className, children, ...props }, ref) => {
    const iconSize = size || "md";
    const strokeWidth = strokeWidthMap[iconSize];
    const pixelSize = iconSize === "lg" ? 20 : iconSize === "md" ? 16 : 12;
    
    // Clone the icon child and apply sizing and stroke width
    // IMPORTANT: Preserve any existing styles (like color) from parent components
    const existingStyle = React.isValidElement(children) 
      ? (children as React.ReactElement<any>).props?.style || {}
      : {};
    
    const clonedIcon = React.isValidElement(children)
      ? React.cloneElement(children as React.ReactElement<any>, {
          size: pixelSize,
          strokeWidth: strokeWidth,
          className: cn(
            "flex-shrink-0",
            (children as React.ReactElement<any>).props?.className
          ),
          style: {
            // Preserve existing styles FIRST (especially color)
            ...existingStyle,
            // Then apply sizing (these should not override color)
            width: `${pixelSize}px`,
            height: `${pixelSize}px`,
          },
        })
      : children;

    return (
      <div
        ref={ref}
        className={cn(iconVariants({ size: iconSize, className }))}
        {...props}
      >
        {clonedIcon}
      </div>
    );
  },
);

Icon.displayName = "Icon";

export { iconVariants };

