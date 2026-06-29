import { Stack, useRouter, type Href } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { NivaasIcon, NivaasText } from '@/components/nivaas';
import { Radius, Shadows, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

const homeHref = '/(tabs)' as Href;

const trustItems = [
  { icon: 'shield', label: 'Verified neighbors' },
  { icon: 'map-pin', label: 'Hyperlocal updates' },
  { icon: 'zap', label: 'Fast home services' },
] as const;

export default function WelcomeScreen() {
  const router = useRouter();
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.screen, { backgroundColor: theme.background }]}>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={styles.safeArea}>
        <View style={[styles.content, { paddingBottom: Math.max(insets.bottom, Spacing.four) }]}>
          <View style={styles.brandRow}>
            <View style={[styles.brandMark, { backgroundColor: theme.primary }]}>
              <NivaasIcon name="home" color={theme.onPrimary} size={24} />
            </View>
            <NivaasText variant="headlineMedium" color="primary">
              Nivaas
            </NivaasText>
          </View>

          <View style={styles.hero}>
            <View style={[styles.heroPanel, { backgroundColor: theme.surfaceLow }, Shadows.level2]}>
              <View style={[styles.mapBlockLarge, { backgroundColor: theme.surfaceHigh }]}>
                <View style={[styles.mapPin, { backgroundColor: theme.primary }]}>
                  <NivaasIcon name="map-pin" color={theme.onPrimary} size={22} />
                </View>
              </View>
              <View style={[styles.serviceBubble, styles.serviceBubbleTop, { backgroundColor: theme.surfaceLowest }]}>
                <View style={[styles.serviceIcon, { backgroundColor: theme.primaryFixed }]}>
                  <NivaasIcon name="tool" color={theme.primary} size={18} />
                </View>
                <View style={styles.bubbleText}>
                  <NivaasText variant="label">Fan repair nearby</NivaasText>
                  <NivaasText variant="label" color="onSurfaceVariant">
                    12 min away
                  </NivaasText>
                </View>
              </View>
              <View style={[styles.serviceBubble, styles.serviceBubbleBottom, { backgroundColor: theme.surfaceLowest }]}>
                <View style={[styles.serviceIcon, { backgroundColor: theme.secondaryFixed }]}>
                  <NivaasIcon name="message-circle" color={theme.secondary} size={18} />
                </View>
                <View style={styles.bubbleText}>
                  <NivaasText variant="label">Society alert</NivaasText>
                  <NivaasText variant="label" color="onSurfaceVariant">
                    24 homes updated
                  </NivaasText>
                </View>
              </View>
              <View style={[styles.homeCluster, { backgroundColor: theme.primary }]}>
                <NivaasIcon name="users" color={theme.onPrimary} size={28} />
              </View>
            </View>
          </View>

          <View style={styles.copy}>
            <NivaasText variant="display" style={styles.title}>
              Welcome to your neighborhood app
            </NivaasText>
            <NivaasText color="onSurfaceVariant" style={styles.subtitle}>
              Find trusted services, community updates, local businesses, and neighbors who make
              everyday living simpler.
            </NivaasText>
          </View>

          <View style={styles.trustStack}>
            {trustItems.map((item) => (
              <View key={item.label} style={[styles.trustItem, { backgroundColor: theme.surfaceLowest }]}>
                <View style={[styles.trustIcon, { backgroundColor: theme.surfaceLow }]}>
                  <NivaasIcon name={item.icon} color={theme.primary} size={18} />
                </View>
                <NivaasText variant="bodyMedium">{item.label}</NivaasText>
              </View>
            ))}
          </View>

          <View style={styles.actions}>
            <Pressable
              style={({ pressed }) => [
                styles.primaryButton,
                { backgroundColor: theme.primary },
                Shadows.level2,
                pressed && styles.pressed,
              ]}
              onPress={() => router.replace(homeHref)}>
              <NivaasText variant="headlineMedium" color="onPrimary">
                Get Started
              </NivaasText>
              <NivaasIcon name="arrow-right" color={theme.onPrimary} size={20} />
            </Pressable>
            <Pressable style={styles.secondaryButton} onPress={() => router.replace(homeHref)}>
              <NivaasText variant="bodyMedium" color="primary">
                Continue as resident
              </NivaasText>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.four,
    gap: Spacing.six,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  brandMark: {
    width: 40,
    height: 40,
    borderRadius: Radius.medium,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hero: {
    flex: 1,
    minHeight: 260,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroPanel: {
    width: '100%',
    maxWidth: 420,
    aspectRatio: 1,
    borderRadius: Radius.extraLarge,
    padding: Spacing.five,
    overflow: 'hidden',
  },
  mapBlockLarge: {
    position: 'absolute',
    left: Spacing.five,
    right: Spacing.five,
    top: Spacing.five,
    bottom: Spacing.five,
    borderRadius: Radius.extraLarge,
    borderWidth: 1,
    borderColor: 'rgba(188, 203, 185, 0.45)',
  },
  mapPin: {
    position: 'absolute',
    left: '50%',
    top: '44%',
    width: 52,
    height: 52,
    marginLeft: -26,
    marginTop: -26,
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceBubble: {
    position: 'absolute',
    minWidth: 176,
    borderRadius: Radius.medium,
    padding: Spacing.three,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  serviceBubbleTop: {
    top: Spacing.six,
    left: Spacing.six,
  },
  serviceBubbleBottom: {
    right: Spacing.four,
    bottom: Spacing.six,
  },
  serviceIcon: {
    width: 36,
    height: 36,
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bubbleText: {
    gap: Spacing.one,
  },
  homeCluster: {
    position: 'absolute',
    left: Spacing.six,
    bottom: Spacing.seven,
    width: 68,
    height: 68,
    borderRadius: Radius.large,
    alignItems: 'center',
    justifyContent: 'center',
  },
  copy: {
    gap: Spacing.three,
  },
  title: {
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    lineHeight: 24,
  },
  trustStack: {
    gap: Spacing.two,
  },
  trustItem: {
    minHeight: 52,
    borderRadius: Radius.medium,
    paddingHorizontal: Spacing.three,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
  },
  trustIcon: {
    width: 36,
    height: 36,
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actions: {
    gap: Spacing.two,
  },
  primaryButton: {
    minHeight: 58,
    borderRadius: Radius.medium,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.two,
  },
  secondaryButton: {
    minHeight: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.86,
    transform: [{ scale: 0.99 }],
  },
});
