import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

const listings = ['Handmade ceramic mug', 'Desk plant bundle', 'Vintage denim jacket'];

export default function MarketplaceTab() {
  return (
    <ThemedView style={styles.screen}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content}>
          <ThemedText type="subtitle">Marketplace</ThemedText>
          <ThemedText themeColor="textSecondary">
            Sample local listings from people and shops around you.
          </ThemedText>

          {listings.map((listing) => (
            <ThemedView key={listing} type="backgroundElement" style={styles.card}>
              <ThemedText type="smallBold">{listing}</ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                Available nearby
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
  card: {
    gap: Spacing.one,
    borderRadius: Spacing.three,
    padding: Spacing.three,
  },
});
