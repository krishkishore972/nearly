import { Tabs } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { NivaasIcon } from '@/components/nivaas';
import { Colors, Radius, Spacing } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const colors = Colors[colorScheme === 'dark' ? 'dark' : 'light'];
  const bottomInset = Math.max(insets.bottom, Spacing.six);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.onSurfaceVariant,
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerShadowVisible: false,
        headerTintColor: colors.onSurface,
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '600',
          lineHeight: 14,
        },
        tabBarStyle: {
          height: 72 + bottomInset,
          paddingTop: Spacing.two,
          paddingBottom: bottomInset,
          backgroundColor: colors.surfaceLowest,
          borderTopColor: colors.outlineVariant,
          borderTopLeftRadius: Radius.extraLarge,
          borderTopRightRadius: Radius.extraLarge,
        },
        tabBarItemStyle: {
          height: 56,
          paddingVertical: Spacing.one,
        },
        tabBarIconStyle: {
          marginTop: Spacing.one,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <NivaasIcon name="home" color={String(color)} size={24} />,
        }}
      />
      <Tabs.Screen
        name="marketPlace"
        options={{
          title: 'Buy/Sell',
          tabBarIcon: ({ color }) => (
            <NivaasIcon name="shopping-bag" color={String(color)} size={22} />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: 'Discover',
          headerShown: false,
          tabBarIcon: ({ color }) => <NivaasIcon name="compass" color={String(color)} size={24} />,
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          title: 'Community',
          tabBarIcon: ({ color }) => (
            <NivaasIcon name="message-circle" color={String(color)} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <NivaasIcon name="user" color={String(color)} size={24} />,
        }}
      />
    </Tabs>
  );
}
