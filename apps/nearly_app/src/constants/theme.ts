import '@/global.css';

import { Platform } from 'react-native';

export const NivaasColors = {
  primary: '#006E2F',
  onPrimary: '#FFFFFF',
  primaryContainer: '#22C55E',
  onPrimaryContainer: '#004B1E',
  primaryFixed: '#6BFF8F',
  primaryFixedDim: '#4AE176',
  surfaceTint: '#006E2F',

  secondary: '#0058BE',
  onSecondary: '#FFFFFF',
  secondaryContainer: '#2170E4',
  onSecondaryContainer: '#FEFCFF',
  secondaryFixed: '#D8E2FF',
  secondaryFixedDim: '#ADC6FF',

  tertiary: '#855300',
  onTertiary: '#FFFFFF',
  tertiaryContainer: '#EF9900',
  onTertiaryContainer: '#5C3800',
  tertiaryFixed: '#FFDDB8',
  tertiaryFixedDim: '#FFB95F',

  background: '#F8F9FF',
  surfaceBright: '#F8F9FF',
  surfaceDim: '#CBDBF5',
  surfaceLowest: '#FFFFFF',
  surfaceLow: '#EFF4FF',
  surface: '#E5EEFF',
  surfaceHigh: '#DCE9FF',
  surfaceHighest: '#D3E4FE',
  surfaceVariant: '#D3E4FE',

  onBackground: '#0B1C30',
  onSurface: '#0B1C30',
  onSurfaceVariant: '#3D4A3D',
  inverseSurface: '#213145',
  inverseOnSurface: '#EAF1FF',

  outline: '#6D7B6C',
  outlineVariant: '#BCCBB9',

  error: '#BA1A1A',
  errorContainer: '#FFDAD6',
  onError: '#FFFFFF',
  onErrorContainer: '#93000A',

  aiPrimary: '#6D5EF8',
  aiSurface: '#F2EFFF',
  aiDark: '#4C3CCF',
} as const;

export const NivaasDarkColors = {
  ...NivaasColors,
  background: '#0B1C30',
  surfaceBright: '#213145',
  surfaceDim: '#0B1C30',
  surfaceLowest: '#10243B',
  surfaceLow: '#172A42',
  surface: '#213145',
  surfaceHigh: '#2A3B50',
  surfaceHighest: '#34475E',
  surfaceVariant: '#34475E',
  onBackground: '#EAF1FF',
  onSurface: '#EAF1FF',
  onSurfaceVariant: '#D3E4FE',
  outline: '#BCCBB9',
  outlineVariant: '#3D4A3D',
  aiSurface: '#251F58',
} as const;

export const Colors = {
  light: {
    ...NivaasColors,
    text: NivaasColors.onBackground,
    background: NivaasColors.background,
    backgroundElement: NivaasColors.surfaceLow,
    backgroundSelected: NivaasColors.surfaceHighest,
    textSecondary: NivaasColors.onSurfaceVariant,
  },
  dark: {
    ...NivaasDarkColors,
    text: NivaasDarkColors.onBackground,
    background: NivaasDarkColors.background,
    backgroundElement: NivaasDarkColors.surfaceLow,
    backgroundSelected: NivaasDarkColors.surfaceHighest,
    textSecondary: NivaasDarkColors.onSurfaceVariant,
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Typography = {
  display: { fontSize: 32, lineHeight: 40, fontWeight: '700' },
  headlineLarge: { fontSize: 24, lineHeight: 32, fontWeight: '700' },
  headlineMedium: { fontSize: 20, lineHeight: 28, fontWeight: '600' },
  bodyLarge: { fontSize: 16, lineHeight: 24, fontWeight: '400' },
  bodyMedium: { fontSize: 14, lineHeight: 20, fontWeight: '400' },
  label: { fontSize: 12, lineHeight: 16, fontWeight: '600' },
} as const;

export const Radius = {
  small: 8,
  medium: 12,
  large: 16,
  extraLarge: 24,
  pill: 999,
} as const;

export const Spacing = {
  one: 4,
  two: 8,
  three: 12,
  four: 16,
  five: 20,
  six: 24,
  seven: 32,
  eight: 40,
  nine: 48,
  ten: 64,
} as const;

export const Shadows = {
  level0: {},
  level1: Platform.select({
    web: { boxShadow: '0px 8px 24px rgba(11, 28, 48, 0.08)' },
    default: {
      shadowColor: '#0B1C30',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.08,
      shadowRadius: 16,
      elevation: 2,
    },
  }),
  level2: Platform.select({
    web: { boxShadow: '0px 16px 40px rgba(11, 28, 48, 0.12)' },
    default: {
      shadowColor: '#0B1C30',
      shadowOffset: { width: 0, height: 12 },
      shadowOpacity: 0.12,
      shadowRadius: 24,
      elevation: 4,
    },
  }),
} as const;

export const Motion = {
  fast: 150,
  normal: 250,
  slow: 350,
} as const;

export const Fonts = Platform.select({
  ios: {
    sans: 'Inter',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'Inter',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'Inter, var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const IconSize = {
  small: 16,
  medium: 20,
  large: 24,
  xlarge: 32,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 1200;
