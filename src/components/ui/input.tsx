import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";
import { Icon } from "./icon";

/**
 * KIX Input Component - Pure Tailwind Implementation
 * 
 * SIZES:
 * - Large: 40px height, 16px text, 16px icons, 12px radius
 * - Medium: 36px height, 14px text, 16px icons, 12px radius
 * 
 * STATES:
 * - Default: White background, gray border
 * - Hover: Border color change
 * - Focus: Green border, focus ring
 * - Disabled: Gray background, reduced opacity
 * - Error: Red border, error icon
 * - Success: Green border, success icon
 */

const inputVariants = cva(
  [
    "w-full rounded-[12px] border border-solid bg-white",
    "font-['Inter',sans-serif] font-normal text-[#101828]",
    "transition-colors duration-200 ease-in-out",
    "placeholder:text-[#9AA1B1]",
    "focus:outline-none focus:ring-2 focus:ring-[#407a3f]/20 focus:border-[#407a3f]",
    "disabled:bg-[#F5F7FA] disabled:text-[#9AA1B1] disabled:cursor-not-allowed disabled:border-[#E4E7EC]",
  ].join(" "),
  {
    variants: {
      size: {
        lg: "h-[40px] py-[10px] text-[16px] leading-[20px]",
        md: "h-[36px] py-[8px] text-[14px] leading-[20px]",
      },
      variant: {
        default: "border-[#D0D5DD] hover:border-[#9AA1B1]",
        error: "border-[#F04438] focus:border-[#F04438] focus:ring-[#F04438]/20",
        success: "border-[#12B76A] focus:border-[#12B76A] focus:ring-[#12B76A]/20",
      },
      hasLeftIcon: {
        true: "",
        false: "",
      },
      hasRightIcon: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      // Base horizontal padding when no icons
      {
        size: "lg",
        hasLeftIcon: false,
        hasRightIcon: false,
        className: "pl-4 pr-4",
      },
      {
        size: "md",
        hasLeftIcon: false,
        hasRightIcon: false,
        className: "pl-3 pr-3",
      },
      // Left icon padding adjustments
      // Large: horizontal 16px + icon 16px + gap 8px = 40px total
      // Medium: horizontal 12px + icon 16px + gap 8px = 36px total
      {
        size: "lg",
        hasLeftIcon: true,
        hasRightIcon: false,
        className: "pl-10 pr-4",
      },
      {
        size: "md",
        hasLeftIcon: true,
        hasRightIcon: false,
        className: "pl-9 pr-3",
      },
      // Right icon padding adjustments
      {
        size: "lg",
        hasLeftIcon: false,
        hasRightIcon: true,
        className: "pl-4 pr-10",
      },
      {
        size: "md",
        hasLeftIcon: false,
        hasRightIcon: true,
        className: "pl-3 pr-9",
      },
      // Both icons
      {
        size: "lg",
        hasLeftIcon: true,
        hasRightIcon: true,
        className: "pl-10 pr-10",
      },
      {
        size: "md",
        hasLeftIcon: true,
        hasRightIcon: true,
        className: "pl-9 pr-9",
      },
    ],
    defaultVariants: {
      size: "md",
      variant: "default",
      hasLeftIcon: false,
      hasRightIcon: false,
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  error?: boolean;
  success?: boolean;
  helperText?: string;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      size = "md",
      variant = "default",
      leftIcon,
      rightIcon,
      error,
      success,
      helperText,
      label,
      disabled,
      ...props
    },
    ref
  ) => {
    // Determine variant based on error/success props
    const computedVariant = error ? "error" : success ? "success" : variant;
    
    // Icon color based on state
    const getIconColor = () => {
      if (disabled) return "#9AA1B1";
      if (error) return "#F04438";
      if (success) return "#12B76A";
      return "#6A7282";
    };

    const iconColor = getIconColor();

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label className="block mb-[6px] font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] text-[#344054]">
            {label}
          </label>
        )}

        {/* Input Container - Flex layout matching Figma */}
        <div className="relative w-full">
          {leftIcon || rightIcon ? (
            <div className={cn(
              "flex items-center rounded-[12px] border border-solid bg-white",
              inputVariants({
                size,
                variant: computedVariant,
                hasLeftIcon: !!leftIcon,
                hasRightIcon: !!rightIcon,
              }).split(' ').filter(cls => !cls.includes('px-') && !cls.includes('pl-') && !cls.includes('pr-') && !cls.includes('rounded')).join(' '),
              // Apply padding to container
              size === "lg" ? "px-4" : "px-3",
              // Gap between icon and text (8px = gap-2)
              "gap-2"
            )}>
              {/* Left Icon */}
              {leftIcon && (
                <div className="flex items-center justify-center flex-shrink-0 pointer-events-none">
                  <Icon size="md">
                    {React.cloneElement(leftIcon, {
                      style: { color: iconColor },
                    })}
                  </Icon>
                </div>
              )}

              {/* Input */}
              <input
                type={type}
                className={cn(
                  "w-full bg-transparent border-0 outline-none flex-1",
                  inputVariants({
                    size,
                    variant: computedVariant,
                    hasLeftIcon: !!leftIcon,
                    hasRightIcon: !!rightIcon,
                    className,
                  }).split(' ').filter(cls => 
                    !cls.includes('border') && 
                    !cls.includes('rounded') && 
                    !cls.includes('bg-white') &&
                    !cls.includes('px-') &&
                    !cls.includes('pl-') &&
                    !cls.includes('pr-')
                  ).join(' ')
                )}
                ref={ref}
                disabled={disabled}
                aria-invalid={error}
                {...props}
              />

              {/* Right Icon */}
              {rightIcon && (
                <div className="flex items-center justify-center flex-shrink-0 pointer-events-none">
                  <Icon size="md">
                    {React.cloneElement(rightIcon, {
                      style: { color: iconColor },
                    })}
                  </Icon>
                </div>
              )}
            </div>
          ) : (
            <input
              type={type}
              className={cn(
                inputVariants({
                  size,
                  variant: computedVariant,
                  hasLeftIcon: false,
                  hasRightIcon: false,
                }),
                // Explicit padding for no-icon inputs
                size === "lg" ? "px-4" : "px-3",
                className
              )}
              ref={ref}
              disabled={disabled}
              aria-invalid={error}
              {...props}
            />
          )}
        </div>

        {/* Helper Text */}
        {helperText && (
          <p
            className={cn(
              "mt-[6px] font-['Inter',sans-serif] font-normal text-[14px] leading-[20px]",
              error ? "text-[#F04438]" : success ? "text-[#12B76A]" : "text-[#6A7282]"
            )}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants };
