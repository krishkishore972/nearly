import Feather from '@expo/vector-icons/Feather';
import { Image } from 'expo-image';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { Easing, FadeIn, FadeOut, Keyframe } from 'react-native-reanimated';

import { Fonts, NivaasColors, Radius, Spacing } from '@/constants/theme';

const DURATION = 600;
const SPLASH_VISIBLE_MS = 1500;

export function AnimatedSplashOverlay() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), SPLASH_VISIBLE_MS);
    return () => clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <Animated.View
      entering={FadeIn.duration(220)}
      exiting={FadeOut.duration(DURATION)}
      pointerEvents="none"
      style={styles.splashScreen}>
      <Animated.View entering={splashMarkKeyframe.duration(700)} style={styles.splashMark}>
        <View style={styles.splashIconSurface}>
          <Feather name="home" color={NivaasColors.primary} size={42} />
        </View>
        <View style={styles.splashPin}>
          <Feather name="map-pin" color={NivaasColors.onPrimary} size={16} />
        </View>
      </Animated.View>
      <Animated.View entering={splashTextKeyframe.duration(760)} style={styles.splashCopy}>
        <Text style={styles.splashTitle}>Nivaas</Text>
        <Text style={styles.splashSubtitle}>Your neighborhood, nearly home</Text>
      </Animated.View>
    </Animated.View>
  );
}

const keyframe = new Keyframe({
  0: {
    transform: [{ scale: 8 }],
  },
  100: {
    transform: [{ scale: 1 }],
    easing: Easing.elastic(0.7),
  },
});

const logoKeyframe = new Keyframe({
  0: {
    transform: [{ scale: 1.3 }],
    opacity: 0,
  },
  40: {
    transform: [{ scale: 1.3 }],
    opacity: 0,
    easing: Easing.elastic(0.7),
  },
  100: {
    opacity: 1,
    transform: [{ scale: 1 }],
    easing: Easing.elastic(0.7),
  },
});

const splashMarkKeyframe = new Keyframe({
  0: {
    opacity: 0,
    transform: [{ translateY: 18 }, { scale: 0.88 }],
  },
  70: {
    opacity: 1,
    transform: [{ translateY: -2 }, { scale: 1.03 }],
    easing: Easing.out(Easing.cubic),
  },
  100: {
    opacity: 1,
    transform: [{ translateY: 0 }, { scale: 1 }],
    easing: Easing.out(Easing.cubic),
  },
});

const splashTextKeyframe = new Keyframe({
  0: {
    opacity: 0,
    transform: [{ translateY: 14 }],
  },
  45: {
    opacity: 0,
    transform: [{ translateY: 14 }],
  },
  100: {
    opacity: 1,
    transform: [{ translateY: 0 }],
    easing: Easing.out(Easing.cubic),
  },
});

const glowKeyframe = new Keyframe({
  0: {
    transform: [{ rotateZ: '0deg' }],
  },
  100: {
    transform: [{ rotateZ: '7200deg' }],
  },
});

export function AnimatedIcon() {
  return (
    <View style={styles.iconContainer}>
      <Animated.View entering={glowKeyframe.duration(60 * 1000 * 4)} style={styles.glow}>
        <Image style={styles.glow} source={require('@/assets/images/logo-glow.png')} />
      </Animated.View>

      <Animated.View entering={keyframe.duration(DURATION)} style={styles.background} />
      <Animated.View style={styles.imageContainer} entering={logoKeyframe.duration(DURATION)}>
        <Image style={styles.image} source={require('@/assets/images/expo-logo.png')} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  glow: {
    width: 201,
    height: 201,
    position: 'absolute',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 128,
    height: 128,
    zIndex: 100,
  },
  image: {
    position: 'absolute',
    width: 76,
    height: 71,
  },
  background: {
    borderRadius: Radius.extraLarge,
    backgroundColor: NivaasColors.primary,
    width: 128,
    height: 128,
    position: 'absolute',
  },
  backgroundSolidColor: {
    ...StyleSheet.absoluteFill,
    backgroundColor: NivaasColors.primary,
    zIndex: 1000,
  },
  splashScreen: {
    ...StyleSheet.absoluteFill,
    zIndex: 1000,
    backgroundColor: NivaasColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.six,
  },
  splashMark: {
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashIconSurface: {
    width: 96,
    height: 96,
    borderRadius: Radius.extraLarge,
    backgroundColor: NivaasColors.onPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#004B1E',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.18,
    shadowRadius: 24,
    elevation: 8,
  },
  splashPin: {
    position: 'absolute',
    right: 14,
    bottom: 16,
    width: 34,
    height: 34,
    borderRadius: Radius.pill,
    borderWidth: 3,
    borderColor: NivaasColors.primary,
    backgroundColor: NivaasColors.primaryContainer,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashCopy: {
    marginTop: Spacing.four,
    alignItems: 'center',
    gap: Spacing.two,
  },
  splashTitle: {
    color: NivaasColors.onPrimary,
    fontFamily: Fonts.sans,
    fontSize: 36,
    lineHeight: 44,
    fontWeight: '700',
    letterSpacing: 0,
  },
  splashSubtitle: {
    color: '#DFF7E7',
    fontFamily: Fonts.sans,
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '500',
    letterSpacing: 0,
    textAlign: 'center',
  },
});
