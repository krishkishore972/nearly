import Feather from '@expo/vector-icons/Feather';
import { ReactNode, useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
  type PressableProps,
  type TextInputProps,
  type TextProps,
  type ViewProps,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  BottomTabInset,
  Colors,
  Fonts,
  IconSize,
  MaxContentWidth,
  Radius,
  Shadows,
  Spacing,
  Typography,
  type ThemeColor,
} from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type IconName = keyof typeof Feather.glyphMap;

export function NivaasIcon({
  name,
  color,
  size = IconSize.large,
}: {
  name: IconName;
  color?: string;
  size?: number;
}) {
  const theme = useTheme();
  return <Feather name={name} color={color ?? theme.onSurface} size={size} />;
}

export function NivaasText({
  variant = 'bodyLarge',
  color = 'onSurface',
  style,
  ...props
}: TextProps & {
  variant?: keyof typeof Typography;
  color?: ThemeColor;
}) {
  const theme = useTheme();
  return (
    <Text
      style={[
        styles.text,
        Typography[variant],
        { color: theme[color], fontFamily: Fonts.sans },
        style,
      ]}
      {...props}
    />
  );
}

export function NivaasScreen({
  children,
  scroll = true,
}: {
  children: ReactNode;
  scroll?: boolean;
}) {
  const theme = useTheme();
  const content = <View style={styles.screenContent}>{children}</View>;

  return (
    <View style={[styles.screen, { backgroundColor: theme.background }]}>
      <SafeAreaView style={styles.safeArea}>
        {scroll ? (
          <ScrollView contentContainerStyle={styles.scrollContent}>{content}</ScrollView>
        ) : (
          content
        )}
      </SafeAreaView>
    </View>
  );
}

export function Section({
  title,
  action,
  children,
}: {
  title: string;
  action?: string;
  children: ReactNode;
}) {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <NivaasText variant="headlineMedium">{title}</NivaasText>
        {action ? (
          <NivaasText variant="label" color="primary">
            {action}
          </NivaasText>
        ) : null}
      </View>
      {children}
    </View>
  );
}

export function NivaasCard({
  variant = 'default',
  children,
  style,
  ...props
}: PressableProps & {
  variant?: 'default' | 'ai' | 'emergency' | 'success';
  children: ReactNode;
}) {
  const theme = useTheme();
  const backgroundColor =
    variant === 'ai'
      ? theme.aiSurface
      : variant === 'emergency'
        ? theme.errorContainer
        : variant === 'success'
          ? theme.primaryFixed
          : theme.surfaceLowest;

  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        Shadows.level1,
        { backgroundColor },
        pressed && styles.pressedCard,
        typeof style === 'function' ? style({ pressed, hovered: false }) : style,
      ]}
      {...props}>
      {children}
    </Pressable>
  );
}

export function Button({
  children,
  variant = 'primary',
  loading = false,
  fullWidth = false,
  icon,
  disabled,
  ...props
}: PressableProps & {
  children?: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';
  loading?: boolean;
  fullWidth?: boolean;
  icon?: IconName;
}) {
  const theme = useTheme();
  const filled = variant === 'primary' || variant === 'secondary' || variant === 'danger';
  const colorMap = {
    primary: [theme.primary, theme.onPrimary],
    secondary: [theme.secondary, theme.onSecondary],
    outline: ['transparent', theme.primary],
    ghost: ['transparent', theme.primary],
    danger: [theme.error, theme.onError],
    success: [theme.primaryContainer, theme.onPrimaryContainer],
  } as const;
  const [backgroundColor, color] = colorMap[variant];

  return (
    <Pressable
      disabled={disabled || loading}
      style={({ pressed }) => [
        styles.button,
        fullWidth && styles.fullWidth,
        { backgroundColor, borderColor: variant === 'outline' ? theme.outlineVariant : backgroundColor },
        !filled && styles.outlineButton,
        (pressed || disabled) && styles.pressedButton,
      ]}
      {...props}>
      {loading ? <ActivityIndicator color={color} /> : null}
      {icon && !loading ? <NivaasIcon name={icon} color={color} size={IconSize.medium} /> : null}
      {children ? (
        <NivaasText variant="bodyMedium" style={[styles.buttonText, { color }]}>
          {children}
        </NivaasText>
      ) : null}
    </Pressable>
  );
}

export function IconButton({ icon, ai = false, ...props }: PressableProps & { icon: IconName; ai?: boolean }) {
  const theme = useTheme();
  return (
    <Pressable
      style={({ pressed }) => [
        styles.iconButton,
        Shadows.level2,
        { backgroundColor: ai ? theme.aiPrimary : theme.primary },
        pressed && styles.pressedButton,
      ]}
      {...props}>
      <NivaasIcon name={icon} color={theme.onPrimary} size={IconSize.large} />
    </Pressable>
  );
}

export function Badge({
  children,
  tone = 'neutral',
}: {
  children: ReactNode;
  tone?: 'neutral' | 'verified' | 'premium' | 'trending' | 'emergency' | 'new' | 'ai';
}) {
  const theme = useTheme();
  const toneStyle = {
    neutral: [theme.surfaceHigh, theme.onSurfaceVariant],
    verified: [theme.primaryFixed, theme.onPrimaryContainer],
    premium: [theme.tertiaryFixed, theme.onTertiaryContainer],
    trending: [theme.secondaryFixed, theme.secondary],
    emergency: [theme.errorContainer, theme.onErrorContainer],
    new: [theme.secondaryFixed, theme.secondary],
    ai: [theme.aiSurface, theme.aiDark],
  } as const;
  const [backgroundColor, color] = toneStyle[tone];

  return (
    <View style={[styles.badge, { backgroundColor }]}>
      <NivaasText variant="label" style={{ color }}>
        {children}
      </NivaasText>
    </View>
  );
}

export function Chip({
  children,
  selected = false,
  ai = false,
}: {
  children: ReactNode;
  selected?: boolean;
  ai?: boolean;
}) {
  const theme = useTheme();
  const backgroundColor = ai ? theme.aiSurface : selected ? theme.primaryFixed : theme.surfaceLow;
  const color = ai ? theme.aiDark : selected ? theme.onPrimaryContainer : theme.onSurfaceVariant;

  return (
    <View style={[styles.chip, { backgroundColor }]}>
      <NivaasText variant="bodyMedium" style={{ color }}>
        {children}
      </NivaasText>
    </View>
  );
}

export function Divider() {
  const theme = useTheme();
  return <View style={[styles.divider, { backgroundColor: theme.outlineVariant }]} />;
}

export function Input({
  icon,
  variant = 'standard',
  ...props
}: TextInputProps & {
  icon?: IconName;
  variant?: 'standard' | 'search' | 'password' | 'otp' | 'multiline' | 'voiceSearch' | 'aiPrompt';
}) {
  const theme = useTheme();
  const [focused, setFocused] = useState(false);
  const ai = variant === 'aiPrompt' || variant === 'voiceSearch';

  return (
    <View
      style={[
        styles.inputWrap,
        {
          backgroundColor: ai ? theme.aiSurface : theme.surfaceLowest,
          borderColor: focused ? (ai ? theme.aiPrimary : theme.primary) : theme.outlineVariant,
        },
      ]}>
      {icon ? <NivaasIcon name={icon} color={ai ? theme.aiDark : theme.onSurfaceVariant} size={20} /> : null}
      <TextInput
        placeholderTextColor={theme.onSurfaceVariant}
        style={[styles.input, { color: theme.onSurface, fontFamily: Fonts.sans }]}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        secureTextEntry={variant === 'password'}
        multiline={variant === 'multiline' || variant === 'aiPrompt'}
        {...props}
      />
    </View>
  );
}

export function SearchBar({ ai = false, placeholder }: { ai?: boolean; placeholder: string }) {
  return <Input icon={ai ? 'cpu' : 'search'} variant={ai ? 'aiPrompt' : 'search'} placeholder={placeholder} />;
}

export function ToggleRow({
  label,
  value,
  onValueChange,
}: {
  label: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
}) {
  return (
    <View style={styles.toggleRow}>
      <NivaasText>{label}</NivaasText>
      <Switch value={value} onValueChange={onValueChange} />
    </View>
  );
}

export function Progress({ value }: { value: number }) {
  const theme = useTheme();
  return (
    <View style={[styles.progressTrack, { backgroundColor: theme.surfaceHigh }]}>
      <View style={[styles.progressFill, { width: `${Math.min(value, 100)}%`, backgroundColor: theme.primary }]} />
    </View>
  );
}

export function Avatar({ initials }: { initials: string }) {
  const theme = useTheme();
  return (
    <View style={[styles.avatar, { backgroundColor: theme.primaryFixed }]}>
      <NivaasText variant="label" color="onPrimaryContainer">
        {initials}
      </NivaasText>
    </View>
  );
}

export function ListItem({
  icon,
  title,
  subtitle,
  badge,
}: {
  icon: IconName;
  title: string;
  subtitle: string;
  badge?: ReactNode;
}) {
  const theme = useTheme();
  return (
    <NivaasCard style={styles.listItem}>
      <View style={[styles.listIcon, { backgroundColor: theme.surfaceLow }]}>
        <NivaasIcon name={icon} color={theme.primary} size={IconSize.medium} />
      </View>
      <View style={styles.listText}>
        <NivaasText variant="bodyLarge">{title}</NivaasText>
        <NivaasText variant="bodyMedium" color="onSurfaceVariant">
          {subtitle}
        </NivaasText>
      </View>
      {badge}
    </NivaasCard>
  );
}

export function StatCard({ label, value, icon }: { label: string; value: string; icon: IconName }) {
  const theme = useTheme();
  return (
    <NivaasCard style={styles.statCard}>
      <NivaasIcon name={icon} color={theme.secondary} size={IconSize.medium} />
      <NivaasText variant="headlineMedium">{value}</NivaasText>
      <NivaasText variant="label" color="onSurfaceVariant">
        {label}
      </NivaasText>
    </NivaasCard>
  );
}

export function ChatBubble({ children, ai = false }: { children: ReactNode; ai?: boolean }) {
  return (
    <NivaasCard variant={ai ? 'ai' : 'default'} style={styles.chatBubble}>
      <NivaasText variant="bodyMedium">{children}</NivaasText>
    </NivaasCard>
  );
}

export const nivaasFigmaVariables = {
  colors: Colors.light,
  typography: Typography,
  spacing: Spacing,
  radius: Radius,
  iconSize: IconSize,
};

const styles = StyleSheet.create({
  text: {
    includeFontPadding: false,
  },
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  safeArea: {
    flex: 1,
    width: '100%',
    maxWidth: MaxContentWidth,
  },
  scrollContent: {
    paddingBottom: BottomTabInset + Spacing.seven,
  },
  screenContent: {
    gap: Spacing.six,
    padding: Spacing.four,
  },
  section: {
    gap: Spacing.three,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.three,
  },
  card: {
    minHeight: 48,
    borderRadius: Radius.large,
    padding: Spacing.four,
    gap: Spacing.two,
  },
  pressedCard: {
    opacity: 0.92,
    transform: [{ scale: 0.995 }],
  },
  button: {
    minHeight: 48,
    borderRadius: Radius.pill,
    borderWidth: 1,
    paddingHorizontal: Spacing.five,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: Spacing.two,
  },
  fullWidth: {
    alignSelf: 'stretch',
  },
  outlineButton: {
    borderWidth: 1,
  },
  pressedButton: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    fontWeight: '600',
  },
  iconButton: {
    width: 56,
    height: 56,
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    alignSelf: 'flex-start',
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.one,
  },
  chip: {
    alignSelf: 'flex-start',
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.two,
  },
  divider: {
    height: 1,
  },
  inputWrap: {
    minHeight: 48,
    borderRadius: Radius.large,
    borderWidth: 1,
    paddingHorizontal: Spacing.four,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  input: {
    flex: 1,
    minHeight: 48,
    fontSize: 16,
  },
  toggleRow: {
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  progressTrack: {
    height: 8,
    borderRadius: Radius.pill,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: Radius.pill,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listIcon: {
    width: 48,
    height: 48,
    borderRadius: Radius.medium,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listText: {
    flex: 1,
    gap: Spacing.one,
  },
  statCard: {
    flex: 1,
    minWidth: 144,
  },
  chatBubble: {
    maxWidth: '88%',
  },
});
