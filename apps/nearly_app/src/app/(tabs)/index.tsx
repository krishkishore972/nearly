import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

export default function HomeTab() {
  return (
    <ThemedView style={styles.screen}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content}>
          <ThemedText type="subtitle">Nearly home</ThemedText>
          <ThemedText themeColor="textSecondary">
            A quick sample dashboard for nearby moments, updates, and useful shortcuts.
          </ThemedText>

          <ThemedView type="backgroundElement" style={styles.panel}>
            <ThemedText type="smallBold">Today</ThemedText>
            <ThemedText>3 new local updates are waiting for you.</ThemedText>
          </ThemedView>

          <ThemedView type="backgroundElement" style={styles.panel}>
            <ThemedText type="smallBold">Nearby pick</ThemedText>
            <ThemedText>Fresh coffee pop-up at Market Street from 4 PM.</ThemedText>
          </ThemedView>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  safeArea: {
    flex: 1,
    width: '100%',
    maxWidth: MaxContentWidth,
  },
  content: {
    gap: Spacing.three,
    padding: Spacing.four,
    paddingBottom: BottomTabInset + Spacing.four,
  },
  panel: {
    gap: Spacing.one,
    borderRadius: Spacing.three,
    padding: Spacing.three,
  },
});
