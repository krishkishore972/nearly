import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

const places = ['Weekend makers market', 'Live music downtown', 'Open studio night'];

export default function DiscoverTab() {
  return (
    <ThemedView style={styles.screen}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content}>
          <ThemedText type="subtitle">Discover</ThemedText>
          <ThemedText themeColor="textSecondary">
            Browse sample nearby experiences and local things to try next.
          </ThemedText>

          {places.map((place) => (
            <ThemedView key={place} type="backgroundElement" style={styles.row}>
              <ThemedText type="smallBold">{place}</ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                Suggested for this week
              </ThemedText>
            </ThemedView>
          ))}
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
  row: {
    gap: Spacing.one,
    borderRadius: Spacing.three,
    padding: Spacing.three,
  },
});
