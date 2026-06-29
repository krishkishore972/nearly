import { View } from 'react-native';

import {
  Badge,
  Button,
  Chip,
  IconButton,
  ListItem,
  NivaasCard,
  NivaasScreen,
  NivaasText,
  SearchBar,
  Section,
  StatCard,
} from '@/components/nivaas';
import { Spacing } from '@/constants/theme';

export default function HomeTab() {
  return (
    <NivaasScreen>
      <Section title="Nivaas">
        <NivaasText variant="display">Good evening, Kishore</NivaasText>
        <NivaasText color="onSurfaceVariant">
          Your AI-first neighborhood dashboard for community, services, safety and local moments.
        </NivaasText>
        <SearchBar placeholder="Search your society, shops, events" />
      </Section>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.three }}>
        <StatCard icon="users" value="248" label="Residents" />
        <StatCard icon="calendar" value="6" label="Events" />
      </View>

      <NivaasCard variant="ai">
        <Badge tone="ai">AI Summary</Badge>
        <NivaasText variant="headlineMedium">Society updates in brief</NivaasText>
        <NivaasText>
          Lift maintenance ends by 7 PM. Water tanker booking is confirmed. Two new marketplace
          listings were verified by residents.
        </NivaasText>
        <NivaasText variant="label" color="aiDark">
          Source: Society notices, vendor updates and resident posts
        </NivaasText>
      </NivaasCard>

      <Section title="Quick Actions" action="View all">
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.three }}>
          <Chip selected>Community</Chip>
          <Chip>Events</Chip>
          <Chip>Businesses</Chip>
          <Chip>Complaints</Chip>
        </View>
      </Section>

      <Section title="Neighborhood">
        <ListItem
          icon="shield"
          title="Emergency contacts refreshed"
          subtitle="Security desk and ambulance numbers are verified"
          badge={<Badge tone="emergency">Emergency</Badge>}
        />
        <ListItem
          icon="map-pin"
          title="New grocery partner"
          subtitle="Free delivery for Tower B and C this week"
          badge={<Badge tone="verified">Verified</Badge>}
        />
      </Section>

      <View style={{ alignItems: 'flex-end' }}>
        <IconButton icon="cpu" ai />
      </View>
      <Button fullWidth icon="plus-circle">
        Post an update
      </Button>
    </NivaasScreen>
  );
}
