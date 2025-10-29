/**
 * Design Tokens - Type-Safe Core Design Tokens
 * 
 * This file provides TypeScript exports for all core design tokens
 * defined in globals.css. Use these for type-safe token access in components.
 * 
 * Usage:
 *   import { colors, spacing, radius, typography } from '@/styles/tokens';
 *   style={{ backgroundColor: colors.primary[700] }}
 */

// ============================================================================
// COLORS
// ============================================================================

export const colors = {
  /**
   * Primary Green Ramp
   * Main brand color scale from lightest to darkest
   */
  primary: {
    50: 'var(--primary-50)',   // #ebf5e6
    100: 'var(--primary-100)', // #ddefd6
    200: 'var(--primary-200)', // #c9e5bd
    300: 'var(--primary-300)', // #aed89c
    400: 'var(--primary-400)', // #9ace83
    500: 'var(--primary-500)', // #78be5a
    600: 'var(--primary-600)', // #609848
    700: 'var(--primary-700)', // #407a3f (main brand)
    800: 'var(--primary-800)', // #365528
    900: 'var(--primary-900)', // #24391b
  },

  /**
   * Neutral Gray Ramp
   * For text, borders, and backgrounds
   */
  neutral: {
    50: 'var(--neutral-50)',   // #f8fafc
    100: 'var(--neutral-100)', // #f1f5f9
    300: 'var(--neutral-300)', // #cbd5e1
    500: 'var(--neutral-500)', // #64748b
    700: 'var(--neutral-700)', // #334155
    900: 'var(--neutral-900)', // #0f172a
  },

  /**
   * Icon Colors
   * Specific colors for icon components
   */
  icon: {
    light: 'var(--icon-light)',       // #f5faf5 (light green for filled buttons)
    primary: 'var(--icon-primary)',   // #407a3f (primary green for outlined/ghost)
    disabled: 'var(--icon-disabled)', // #969696 (gray for disabled)
  },

  /**
   * Border Colors
   * For component borders
   */
  border: {
    primarySubtle: 'var(--border-primary-subtle)', // rgba(64, 122, 63, 0.2)
    disabled: 'var(--border-disabled)',             // #cdcdcd
  },

  /**
   * Background States
   * Interactive component background colors
   */
  background: {
    hoverSubtle: 'var(--bg-hover-subtle)',       // #deeedd
    pressedSubtle: 'var(--bg-pressed-subtle)',   // #bcdcbc
    disabledOverlay: 'var(--bg-disabled-overlay)', // rgba(205, 205, 205, 0.48)
  },

  /**
   * Semantic Colors
   * Status and feedback colors
   */
  semantic: {
    success: 'var(--success)',           // #1f7a3a
    warning: 'var(--warning)',           // #b76e00
    warningTint: 'var(--warning-tint)', // #fef3c7
    critical: 'var(--critical)',         // #b42318
    criticalTint: 'var(--critical-tint)', // #fee2e2
    info: 'var(--info)',                 // #475569
    infoTint: 'var(--info-tint)',       // #e2e8f0
  },
} as const;

// ============================================================================
// TYPOGRAPHY
// ============================================================================

export const typography = {
  /**
   * Font Sizes
   * Based on design system scale
   */
  size: {
    caption: 'var(--text-caption)',  // 12px
    body: 'var(--text-body)',        // 14px
    bodyLg: 'var(--text-body-lg)',   // 16px
    h3: 'var(--text-h3)',            // 16px
    h2: 'var(--text-h2)',            // 20px
    display: 'var(--text-display)',  // 24px
  },
} as const;

// ============================================================================
// SPACING
// ============================================================================

export const spacing = {
  /**
   * Spacing Scale (8px grid)
   * Use for margins, padding, gaps
   */
  1: 'var(--space-1)', // 8px
  2: 'var(--space-2)', // 16px
  3: 'var(--space-3)', // 24px
  4: 'var(--space-4)', // 32px
  5: 'var(--space-5)', // 40px
  6: 'var(--space-6)', // 48px
} as const;

// ============================================================================
// BORDER RADIUS
// ============================================================================

export const radius = {
  /**
   * Border Radius Scale
   * Use for component corners
   */
  sm: 'var(--radius-sm)',  // 6px
  default: 'var(--radius)', // 8px
  md: 'var(--radius-md)',  // 12px
  lg: 'var(--radius-lg)',  // 16px
  xl: 'var(--radius-xl)',  // 20px
} as const;

// ============================================================================
// SHADOWS
// ============================================================================

export const shadows = {
  /**
   * Shadow Scale
   * Use for elevation and depth
   */
  cardSm: 'var(--shadow-card-sm)',
  cardMd: 'var(--shadow-card-md)',
  popover: 'var(--shadow-popover)',
} as const;

// ============================================================================
// COMPONENT-SPECIFIC TOKENS
// ============================================================================

/**
 * Icon Button Tokens
 * Pre-configured token sets for icon button variants
 */
export const iconButton = {
  filled: {
    background: {
      default: colors.primary[700],
      hover: colors.primary[800],
      pressed: colors.primary[900],
    },
    foreground: colors.icon.light,
    border: 'transparent',
  },
  outlined: {
    background: {
      default: 'transparent',
      hover: colors.background.hoverSubtle,
      pressed: colors.background.pressedSubtle,
    },
    foreground: colors.icon.primary,
    border: colors.border.primarySubtle,
  },
  transparent: {
    background: {
      default: 'transparent',
      hover: colors.background.hoverSubtle,
      pressed: colors.background.pressedSubtle,
    },
    foreground: colors.icon.primary,
    border: 'transparent',
  },
  size: {
    sm: {
      dimension: '24px',
      iconSize: '12px',
      radius: radius.default,
    },
    md: {
      dimension: '32px',
      iconSize: '16px',
      radius: radius.md,
    },
    lg: {
      dimension: '36px',
      iconSize: '20px',
      radius: radius.md,
    },
  },
} as const;

/**
 * Text Button Tokens
 * Pre-configured token sets for text button variants
 */
export const button = {
  filled: {
    background: {
      default: colors.primary[700],
      hover: colors.primary[800],
      pressed: colors.primary[900],
    },
    foreground: colors.icon.light,
    icon: colors.icon.light,
    border: 'transparent',
  },
  outlined: {
    background: {
      default: 'transparent',
      hover: colors.primary[50],
      pressed: colors.primary[100],
    },
    foreground: colors.primary[700],
    icon: colors.primary[700],
    border: colors.border.primarySubtle,
  },
  ghost: {
    background: {
      default: 'transparent',
      hover: colors.primary[50],
      pressed: colors.primary[100],
    },
    foreground: colors.primary[700],
    icon: colors.primary[700],
    border: 'transparent',
  },
  size: {
    sm: {
      height: '24px',
      padding: '6px 12px',
      gap: '6px',
      fontSize: typography.size.caption,
      radius: radius.default,
      iconSize: '12px',
    },
    md: {
      height: '32px',
      padding: '8px 16px',
      gap: '8px',
      fontSize: typography.size.body,
      radius: radius.md,
      iconSize: '16px',
    },
    lg: {
      height: '36px',
      padding: '10px 20px',
      gap: '10px',
      fontSize: typography.size.bodyLg,
      radius: radius.md,
      iconSize: '20px',
    },
  },
} as const;

// ============================================================================
// TYPE EXPORTS
// ============================================================================

/**
 * TypeScript types for autocomplete and type safety
 */
export type PrimaryColorToken = keyof typeof colors.primary;
export type NeutralColorToken = keyof typeof colors.neutral;
export type IconColorToken = keyof typeof colors.icon;
export type SpacingToken = keyof typeof spacing;
export type RadiusToken = keyof typeof radius;
export type TypographyToken = keyof typeof typography.size;
export type ShadowToken = keyof typeof shadows;

export type IconButtonVariant = keyof typeof iconButton;
export type IconButtonSize = keyof typeof iconButton.size;
export type ButtonVariant = keyof typeof button;
export type ButtonSize = keyof typeof button.size;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get a color token value
 * @example getColor('primary', 700) // 'var(--primary-700)'
 */
export function getColor(scale: 'primary' | 'neutral', shade: number): string {
  const colorScale = scale === 'primary' ? colors.primary : colors.neutral;
  return colorScale[shade as keyof typeof colorScale] || colorScale[700];
}

/**
 * Get a spacing token value
 * @example getSpacing(3) // 'var(--space-3)'
 */
export function getSpacing(step: SpacingToken): string {
  return spacing[step];
}

/**
 * Get a radius token value
 * @example getRadius('md') // 'var(--radius-md)'
 */
export function getRadius(size: RadiusToken): string {
  return radius[size];
}

