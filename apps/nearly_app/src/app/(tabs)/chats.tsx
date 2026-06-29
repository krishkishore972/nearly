import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

const conversations = ['Ava from the book club', 'Market Street vendors', 'Neighborhood run crew'];

export default function ChatsTab() {
  return (
    <ThemedView style={styles.screen}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content}>
          <ThemedText type="subtitle">Chats</ThemedText>
          <ThemedText themeColor="textSecondary">
            Sample conversations for coordinating plans and quick local questions.
          </ThemedText>

          {conversations.map((conversation) => (
            <ThemedView key={conversation} type="backgroundElement" style={styles.thread}>
              <ThemedText type="smallBold">{conversation}</ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                Last message just now
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
  thread: {
    gap: Spacing.one,
    borderRadius: Spacing.three,
    padding: Spacing.three,
  },
});
