import * as React from "react";
import { Slot } from "@radix-ui/react-slot@1.1.2";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";

import { cn } from "./utils";

/**
 * KIX Button Component - Pixel-perfect Figma implementation
 * Figma specs from node 143:3492
 * 
 * EXACT SIZES:
 * - Large: 36px height, 20px icons, 16px text, 12px radius, 16px padding, 4px gap
 * - Medium: 32px height, 16px icons, 14px text, 12px radius, 12px padding, 4px gap  
 * - Small: 24px height, 12px icons, 12px text, 8px radius, 8px padding, 2px gap
 */

// Base button styles using inline CSS to ensure they work
const baseButtonStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Inter, sans-serif',
  fontWeight: 500,
  whiteSpace: 'nowrap',
  lineHeight: 0,
  cursor: 'pointer',
  border: '1px solid',
  transition: 'all 0.15s ease-in-out',
  flexShrink: 0,
};

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium whitespace-nowrap leading-none cursor-pointer transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shrink-0",
  {
    variants: {
      variant: {
        filled: "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-pressed border-transparent",
        outlined: "bg-white text-primary border-outline hover:bg-accent active:bg-accent/80",
        ghost: "bg-transparent text-primary border-transparent hover:bg-accent active:bg-accent/80",
      },
      size: {
        lg: "",
        md: "",
        sm: "",
        "icon-lg": "",
        "icon-md": "",
        "icon-sm": "",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "md",
    },
  },
);

const getSizeStyles = (size?: string, isIconOnly?: boolean): React.CSSProperties => {
  if (size === "lg" || size === "icon-lg") {
    return {
      height: '36px',
      minHeight: '36px',
      borderRadius: '12px',
      padding: isIconOnly ? '0' : '0 16px',
      gap: isIconOnly ? '0' : '4px',
      fontSize: '16px',
      width: isIconOnly ? '36px' : 'auto',
      minWidth: isIconOnly ? '36px' : 'auto',
    };
  } else if (size === "sm" || size === "icon-sm") {
    return {
      height: '24px',
      minHeight: '24px',
      borderRadius: '8px',
      padding: isIconOnly ? '0' : '0 8px',
      gap: isIconOnly ? '0' : '2px',
      fontSize: '12px',
      width: isIconOnly ? '24px' : 'auto',
      minWidth: isIconOnly ? '24px' : 'auto',
    };
  }
  // Default: md
  return {
    height: '32px',
    minHeight: '32px',
    borderRadius: '12px',
    padding: isIconOnly ? '0' : '0 12px',
    gap: isIconOnly ? '0' : '4px',
    fontSize: '14px',
    width: isIconOnly ? '32px' : 'auto',
    minWidth: isIconOnly ? '32px' : 'auto',
  };
};

const getIconSize = (size?: string): React.CSSProperties => {
  if (size === "lg" || size === "icon-lg") return { width: '20px', height: '20px', flexShrink: 0 };
  if (size === "sm" || size === "icon-sm") return { width: '12px', height: '12px', flexShrink: 0 };
  return { width: '16px', height: '16px', flexShrink: 0 };
};

export interface ButtonProps
  extends Omit<React.ComponentProps<"button">, 'style'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const isIconOnly = size?.startsWith('icon-');
    
    // Apply icon sizing to all child SVG elements
    const childrenWithIconSizing = React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.type === 'svg') {
        return React.cloneElement(child as React.ReactElement<any>, {
          style: {
            ...((child as React.ReactElement<any>).props.style || {}),
            ...getIconSize(size || 'md'),
          },
        });
      }
      return child;
    });

    return (
      <Comp
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        style={{
          ...baseButtonStyle,
          ...getSizeStyles(size || 'md', isIconOnly),
        }}
        ref={ref}
        {...props}
      >
        {childrenWithIconSizing}
      </Comp>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
