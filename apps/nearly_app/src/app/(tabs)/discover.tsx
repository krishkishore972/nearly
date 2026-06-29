import { View } from 'react-native';

import {
  Badge,
  Button,
  ChatBubble,
  Chip,
  NivaasCard,
  NivaasScreen,
  NivaasText,
  SearchBar,
  Section,
} from '@/components/nivaas';
import { Spacing } from '@/constants/theme';

export default function AskAiTab() {
  return (
    <NivaasScreen>
      <Section title="Ask AI">
        <NivaasText variant="headlineLarge">Calm answers for neighborhood life</NivaasText>
        <SearchBar ai placeholder="Ask about vendors, notices, events or safety" />
      </Section>

      <NivaasCard variant="ai">
        <Badge tone="ai">AI Response</Badge>
        <NivaasText variant="headlineMedium">Can I book a plumber today?</NivaasText>
        <NivaasText>
          Yes. Two verified providers are available after 5 PM. Ramesh Repairs has the fastest
          response time and accepts UPI.
        </NivaasText>
        <NivaasText variant="label" color="aiDark">
          Source: Business directory, resident reviews and availability updates
        </NivaasText>
      </NivaasCard>

      <Section title="Suggested prompts">
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.three }}>
          <Chip ai>Summarize notices</Chip>
          <Chip ai>Find emergency help</Chip>
          <Chip ai>Plan weekend events</Chip>
          <Chip ai>Compare vendors</Chip>
        </View>
      </Section>

      <Section title="Conversation">
        <ChatBubble>Which businesses are verified near Tower B?</ChatBubble>
        <ChatBubble ai>
          I found 8 verified businesses nearby, including grocery, tiffin, repair and pharmacy
          options.
        </ChatBubble>
      </Section>

      <Button fullWidth variant="secondary" icon="mic">
        Start voice search
      </Button>
    </NivaasScreen>
  );
}
