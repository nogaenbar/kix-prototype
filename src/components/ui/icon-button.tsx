import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";
import { Icon } from "./icon";

/**
 * KIX IconButton Component - Pure Tailwind Implementation
 * Migrated from inline styles to pure Tailwind classes
 * 
 * SIZES:
 * - Large: 36x36px, 20x20px icons, 12px radius
 * - Medium: 32x32px, 16x16px icons, 12px radius
 * - Small: 24x24px, 12x12px icons, 8px radius
 * 
 * VARIANTS:
 * - Filled: Primary background with light text
 * - Outlined: Transparent with border and primary text
 * - Transparent: Transparent with primary text (no border)
 */

const iconButtonVariants = cva(
  [
    "inline-flex items-center justify-center shrink-0",
    "transition-colors duration-200 ease-in-out",
    "cursor-pointer border border-solid",
    "disabled:pointer-events-none disabled:opacity-50",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring",
  ].join(" "),
  {
    variants: {
      variant: {
        filled: "text-[#f5faf5] border-transparent",
        outlined: "text-[#407a3f] border-[rgba(64,122,63,0.2)]",
        transparent: "text-[#407a3f] border-transparent",
      },
      size: {
        lg: "rounded-[12px]",
        md: "rounded-[12px]",
        sm: "rounded-[8px]",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "md",
    },
  },
);

// Size mapping for button dimensions
const buttonSizeMap = {
  lg: { width: '36px', height: '36px', minWidth: '36px', minHeight: '36px', borderRadius: '12px' },
  md: { width: '32px', height: '32px', minWidth: '32px', minHeight: '32px', borderRadius: '12px' },
  sm: { width: '24px', height: '24px', minWidth: '24px', minHeight: '24px', borderRadius: '8px' },
} as const;

// Variant color mapping for hover/active states
const variantColorMap = {
  filled: {
    default: '#407a3f',
    hover: '#365528',
    active: '#24391b',
  },
  outlined: {
    default: 'transparent',
    hover: '#deeedd',
    active: '#bcdcbc',
  },
  transparent: {
    default: 'transparent',
    hover: '#deeedd',
    active: '#bcdcbc',
  },
} as const;

// No longer needed - Icon component handles sizing

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant = "filled", size = "md", asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const buttonSize = size || "md";
    const buttonVariant = variant || "filled";
    const [isHovered, setIsHovered] = React.useState(false);
    const [isActive, setIsActive] = React.useState(false);
    
    // Get colors for current state
    const colors = variantColorMap[buttonVariant];
    const currentBgColor = isActive ? colors.active : (isHovered ? colors.hover : colors.default);
    
    // Get icon color based on variant
    const iconColor = buttonVariant === "filled" ? "#f5faf5" : "#407a3f";
    
    // Wrap icon in Icon component for proper sizing and stroke width
    const iconChildren = React.Children.map(children, (child) => {
      // IconButton should only contain icons, but handle all cases
      if (React.isValidElement(child)) {
        const childType = child.type;
        
        // Detect Lucide icons (forwardRef components), function components, or SVG elements
        // Lucide icons are React.forwardRef, so typeof is "object" with $$typeof property
        const isIcon = 
          typeof childType === 'function' || 
          childType === 'svg' ||
          (typeof childType === 'object' && childType !== null && '$$typeof' in childType);
        
        if (isIcon) {
          return (
            <Icon 
              key={child.key || undefined}
              size={buttonSize}
            >
              {React.cloneElement(child as React.ReactElement<any>, {
                style: { color: iconColor },
              })}
            </Icon>
          );
        }
      }
      
      return child;
    });

    // Combined inline styles for dimensions and dynamic colors
    const inlineStyles: React.CSSProperties = {
      ...buttonSizeMap[buttonSize],
      backgroundColor: currentBgColor,
    };

    return (
      <Comp
        className={cn(iconButtonVariants({ variant: buttonVariant, size: buttonSize, className }))}
        style={inlineStyles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsActive(false);
        }}
        onMouseDown={() => setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
        ref={ref}
        {...props}
      >
        {iconChildren}
      </Comp>
    );
  },
);

IconButton.displayName = "IconButton";

export { IconButton, iconButtonVariants };

