import { View } from 'react-native';

import {
  Avatar,
  Badge,
  Button,
  ListItem,
  NivaasCard,
  NivaasScreen,
  NivaasText,
  Section,
} from '@/components/nivaas';
import { Spacing } from '@/constants/theme';

export default function CommunityTab() {
  return (
    <NivaasScreen>
      <Section title="Community">
        <NivaasText variant="headlineLarge">Resident feed and groups</NivaasText>
        <NivaasText color="onSurfaceVariant">
          Announcements, complaints, reviews and neighbor conversations in one calm place.
        </NivaasText>
      </Section>

      <NivaasCard>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: Spacing.three }}>
          <Avatar initials="AM" />
          <View style={{ flex: 1 }}>
            <NivaasText variant="bodyLarge">Ananya Mehta</NivaasText>
            <NivaasText variant="bodyMedium" color="onSurfaceVariant">
              Tower C · 12 minutes ago
            </NivaasText>
          </View>
          <Badge tone="trending">Trending</Badge>
        </View>
        <NivaasText>
          Has anyone tried the new laundry pickup service? Looking for reviews before booking.
        </NivaasText>
        <Button variant="ghost" icon="message-circle">
          Comment
        </Button>
      </NivaasCard>

      <Section title="Groups">
        <ListItem
          icon="users"
          title="Tower B residents"
          subtitle="18 new messages about parking allocation"
          badge={<Badge tone="new">New</Badge>}
        />
        <ListItem
          icon="alert-triangle"
          title="Safety alerts"
          subtitle="Security team posted a gate access update"
          badge={<Badge tone="emergency">Emergency</Badge>}
        />
      </Section>
    </NivaasScreen>
  );
}
