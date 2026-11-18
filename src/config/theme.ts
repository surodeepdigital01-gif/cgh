/**
 * CLINIC GROWTH HELPERS - 3-COLOUR DESIGN SYSTEM
 * 
 * Strict 3-Colour Palette:
 * 1. Base (dark): Deep Navy #0F2A4A
 * 2. Neutral (light): Warm Cream #F6F1E9 (pure white #FFFFFF allowed only inside cards)
 * 3. Accent: Teal #14B8A6 (darker teal #0F8F83 for high-contrast text on cream)
 */

export const THEME_COLORS = {
  // Base (dark)
  navy: '#0F2A4A',
  navyDark: '#0A1D33',
  
  // Neutral (light)
  cream: '#F6F1E9',
  white: '#FFFFFF',
  
  // Accent
  teal: '#14B8A6',
  tealDark: '#0F8F83',
} as const;

export type ThemeColors = typeof THEME_COLORS;
