import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";
import { Icon } from "./icon";

/**
 * KIX Button Component - Pure Tailwind Implementation
 * Migrated from inline styles to pure Tailwind classes + React state
 * 
 * SIZES:
 * - Large: 36px height, 20x20px icons, 16px text, 12px radius, 16px padding, 4px gap
 * - Medium: 32px height, 16x16px icons, 14px text, 12px radius, 12px padding, 4px gap
 * - Small: 24px height, 12x12px icons, 12px text, 8px radius, 8px padding, 2px gap
 * 
 * VARIANTS:
 * - Filled: Primary background with light text
 * - Outlined: Transparent with border and primary text
 * - Transparent: Transparent with primary text (no border)
 */

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center shrink-0",
    "transition-colors duration-200 ease-in-out",
    "cursor-pointer border border-solid",
    "font-medium whitespace-nowrap leading-none",
    "disabled:pointer-events-none disabled:opacity-50",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring",
  ].join(" "),
  {
    variants: {
      variant: {
        filled: "border-transparent",
        outlined: "border-[rgba(64,122,63,0.2)] bg-white",
        transparent: "border-transparent bg-transparent",
      },
      size: {
        lg: "h-[36px] px-[16px] gap-[4px] rounded-[12px] text-[16px]",
        md: "h-[32px] px-[12px] gap-[4px] rounded-[12px] text-[14px]",
        sm: "h-[24px] px-[8px] gap-[2px] rounded-[8px] text-[12px]",
        "icon-lg": "h-[36px] w-[36px] min-w-[36px] p-0 gap-0 rounded-[12px]",
        "icon-md": "h-[32px] w-[32px] min-w-[32px] p-0 gap-0 rounded-[12px]",
        "icon-sm": "h-[24px] w-[24px] min-w-[24px] p-0 gap-0 rounded-[8px]",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "md",
    },
  },
);

// Variant color mapping for hover/active states
const variantColorMap = {
  filled: {
    default: '#407a3f',
    hover: '#365528',
    active: '#24391b',
  },
  outlined: {
    default: 'white',
    hover: '#deeedd',
    active: '#bcdcbc',
  },
  transparent: {
    default: 'transparent',
    hover: '#deeedd',
    active: '#bcdcbc',
  },
} as const;

// Text color mapping
const textColorMap = {
  filled: '#f5faf5',
  outlined: '#407a3f',
  transparent: '#407a3f',
} as const;

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "filled", size = "md", asChild = false, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const buttonSize = size || "md";
    // Ensure variant is one of the valid values
    const buttonVariant = (variant === "filled" || variant === "outlined" || variant === "transparent") 
      ? variant 
      : "filled";
    const [isHovered, setIsHovered] = React.useState(false);
    const [isActive, setIsActive] = React.useState(false);
    
    // Get colors for current state with fallback
    const colors = variantColorMap[buttonVariant] || variantColorMap.filled;
    const currentBgColor = disabled 
      ? colors.default 
      : (isActive ? colors.active : (isHovered ? colors.hover : colors.default));
    
    // Get text/icon color with fallback
    const textColor = disabled 
      ? (buttonVariant === "filled" ? "#f5faf5" : "#969696")
      : (textColorMap[buttonVariant] || textColorMap.filled);
    
    // Process children: wrap icons with Icon component, preserve text
    const processedChildren = React.Children.map(children, (child) => {
      // Handle React elements (components)
      if (React.isValidElement(child)) {
        const childType = child.type;
        
        // Detect Lucide icons (forwardRef components), function components, or SVG elements
        // Lucide icons are React.forwardRef, so typeof is "object" with $$typeof property
        const isIcon = 
          typeof childType === 'function' || 
          childType === 'svg' ||
          (typeof childType === 'object' && childType !== null && '$$typeof' in childType);
        
        if (isIcon) {
          // Wrap icon in Icon component for proper sizing and stroke width
          return (
            <Icon 
              key={child.key || undefined}
              size={buttonSize === "lg" ? "lg" : buttonSize === "sm" ? "sm" : "md"}
            >
              {React.cloneElement(child as React.ReactElement<any>, {
                style: { color: textColor },
              })}
            </Icon>
          );
        }
      }
      
      // Return text nodes and other non-icon children as-is
      return child;
    });

    // Combined inline styles for dimensions and dynamic colors
    const inlineStyles: React.CSSProperties = {
      backgroundColor: currentBgColor,
    };

    // Handle disabled overlay for filled and outlined variants
    const hasDisabledOverlay = disabled && (buttonVariant === "filled" || buttonVariant === "outlined");

    return (
      <Comp
        className={cn(buttonVariants({ variant: buttonVariant, size: buttonSize, className }), "relative")}
        style={{
          ...inlineStyles,
          color: textColor, // Explicit text color for non-icon children
        }}
        onMouseEnter={() => !disabled && setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsActive(false);
        }}
        onMouseDown={() => !disabled && setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {processedChildren}
        {hasDisabledOverlay && (
          <div 
            className="absolute inset-0 bg-[rgba(205,205,205,0.48)] pointer-events-none"
            style={{ borderRadius: buttonSize === "sm" ? "8px" : "12px" }}
          />
        )}
      </Comp>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
