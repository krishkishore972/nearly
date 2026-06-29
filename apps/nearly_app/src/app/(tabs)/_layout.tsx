import { Tabs } from 'expo-router';

import { NivaasIcon } from '@/components/nivaas';
import { Colors, Radius, Spacing } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme === 'dark' ? 'dark' : 'light'];

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
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarStyle: {
          minHeight: 72,
          paddingTop: Spacing.two,
          paddingBottom: Spacing.three,
          backgroundColor: colors.surfaceLowest,
          borderTopColor: colors.outlineVariant,
          borderTopLeftRadius: Radius.extraLarge,
          borderTopRightRadius: Radius.extraLarge,
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
          title: 'Marketplace',
          tabBarIcon: ({ color }) => (
            <NivaasIcon name="shopping-bag" color={String(color)} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: 'Ask AI',
          tabBarActiveTintColor: colors.aiPrimary,
          tabBarIcon: ({ color }) => <NivaasIcon name="cpu" color={String(color)} size={24} />,
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
