import * as React from "react";
import { Slot } from "@radix-ui/react-slot@1.1.2";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";

import { cn } from "./utils";
import { iconButton as iconButtonTokens } from "@/styles/tokens";

const iconButtonVariants = cva(
  [
    "inline-flex items-center justify-center shrink-0 transition-all duration-200 cursor-pointer border",
    "disabled:pointer-events-none disabled:opacity-50",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary",
  ].join(" "),
  {
    variants: {
      variant: {
        filled: "",
        outlined: "",
        transparent: "",
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

// Variant styles using design tokens
const variantStyles = {
  filled: {
    initial: {
      backgroundColor: iconButtonTokens.filled.background.default,
      color: iconButtonTokens.filled.foreground,
      borderColor: iconButtonTokens.filled.border,
    },
    hover: {
      backgroundColor: iconButtonTokens.filled.background.hover,
    },
    active: {
      backgroundColor: iconButtonTokens.filled.background.pressed,
    },
  },
  outlined: {
    initial: {
      backgroundColor: iconButtonTokens.outlined.background.default,
      color: iconButtonTokens.outlined.foreground,
      borderColor: iconButtonTokens.outlined.border,
    },
    hover: {
      backgroundColor: iconButtonTokens.outlined.background.hover,
    },
    active: {
      backgroundColor: iconButtonTokens.outlined.background.pressed,
    },
  },
  transparent: {
    initial: {
      backgroundColor: iconButtonTokens.transparent.background.default,
      color: iconButtonTokens.transparent.foreground,
      borderColor: iconButtonTokens.transparent.border,
    },
    hover: {
      backgroundColor: iconButtonTokens.transparent.background.hover,
    },
    active: {
      backgroundColor: iconButtonTokens.transparent.background.pressed,
    },
  },
} as const;

// Map sizes to dimensions using design tokens
const sizeStyles = {
  lg: {
    button: { width: iconButtonTokens.size.lg.dimension, height: iconButtonTokens.size.lg.dimension },
    icon: { width: iconButtonTokens.size.lg.iconSize, height: iconButtonTokens.size.lg.iconSize },
  },
  md: {
    button: { width: iconButtonTokens.size.md.dimension, height: iconButtonTokens.size.md.dimension },
    icon: { width: iconButtonTokens.size.md.iconSize, height: iconButtonTokens.size.md.iconSize },
  },
  sm: {
    button: { width: iconButtonTokens.size.sm.dimension, height: iconButtonTokens.size.sm.dimension },
    icon: { width: iconButtonTokens.size.sm.iconSize, height: iconButtonTokens.size.sm.iconSize },
  },
} as const;

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant = "filled", size = "md", asChild = false, children, style, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const buttonSize = size || "md";
    const buttonVariant = variant || "filled";
    const sizeStyle = sizeStyles[buttonSize];
    const [isHovered, setIsHovered] = React.useState(false);
    const [isActive, setIsActive] = React.useState(false);
    
    // Get the appropriate variant styles
    const currentVariantStyles = variantStyles[buttonVariant];
    
    // Determine which styles to apply based on state
    const currentStyles = {
      ...currentVariantStyles.initial,
      ...(isActive && currentVariantStyles.active),
      ...(isHovered && !isActive && currentVariantStyles.hover),
    };
    
    // Clone children (icon) with proper size and color inheritance
    const clonedChildren = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child as React.ReactElement<any>, {
          style: {
            ...sizeStyle.icon,
            color: 'currentColor', // Inherit text color from button
          },
        });
      }
      return child;
    });

    return (
      <Comp
        className={cn(iconButtonVariants({ variant: buttonVariant, size: buttonSize, className }))}
        style={{
          ...sizeStyle.button,
          ...currentStyles,
          ...style,
        }}
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
        {clonedChildren}
      </Comp>
    );
  },
);
IconButton.displayName = "IconButton";

export { IconButton, iconButtonVariants };

