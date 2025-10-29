import * as React from "react";
import { Slot } from "@radix-ui/react-slot@1.1.2";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";

import { cn } from "./utils";

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

// Variant styles as inline styles (to ensure they're applied)
const variantStyles = {
  filled: {
    initial: {
      backgroundColor: '#407a3f',
      color: '#f5faf5',
      borderColor: 'transparent',
    },
    hover: {
      backgroundColor: '#365528',
    },
    active: {
      backgroundColor: '#24391b',
    },
  },
  outlined: {
    initial: {
      backgroundColor: 'transparent',
      color: '#407a3f',
      borderColor: 'rgba(64,122,63,0.2)',
    },
    hover: {
      backgroundColor: '#deeedd',
    },
    active: {
      backgroundColor: '#bcdcbc',
    },
  },
  transparent: {
    initial: {
      backgroundColor: 'transparent',
      color: '#407a3f',
      borderColor: 'transparent',
    },
    hover: {
      backgroundColor: '#deeedd',
    },
    active: {
      backgroundColor: '#bcdcbc',
    },
  },
} as const;

// Map sizes to dimensions
const sizeStyles = {
  lg: {
    button: { width: '36px', height: '36px' },
    icon: { width: '20px', height: '20px' },
  },
  md: {
    button: { width: '32px', height: '32px' },
    icon: { width: '16px', height: '16px' },
  },
  sm: {
    button: { width: '24px', height: '24px' },
    icon: { width: '12px', height: '12px' },
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

