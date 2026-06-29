import { View } from 'react-native';

import {
  Badge,
  Button,
  Chip,
  ListItem,
  NivaasCard,
  NivaasScreen,
  NivaasText,
  SearchBar,
  Section,
} from '@/components/nivaas';
import { Spacing } from '@/constants/theme';

export default function MarketplaceTab() {
  return (
    <NivaasScreen>
      <Section title="Marketplace">
        <NivaasText variant="headlineLarge">Buy, sell and discover nearby</NivaasText>
        <SearchBar placeholder="Search furniture, tiffin, services" />
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.three }}>
          <Chip selected>All</Chip>
          <Chip>Home</Chip>
          <Chip>Food</Chip>
          <Chip>Services</Chip>
        </View>
      </Section>

      <NivaasCard>
        <Badge tone="verified">Verified Resident</Badge>
        <NivaasText variant="headlineMedium">Wooden study table</NivaasText>
        <NivaasText color="onSurfaceVariant">
          Gently used, compact desk with two drawers. Pickup from Tower A.
        </NivaasText>
        <NivaasText variant="headlineMedium">Rs. 2,800</NivaasText>
        <Button variant="secondary" icon="message-circle">
          Contact seller
        </Button>
      </NivaasCard>

      <Section title="Local businesses" action="Directory">
        <ListItem
          icon="coffee"
          title="Asha Tiffin Service"
          subtitle="4.8 rating · Homemade meals · Delivers today"
          badge={<Badge tone="premium">Premium</Badge>}
        />
        <ListItem
          icon="tool"
          title="Ramesh Repairs"
          subtitle="Electrical and plumbing support within 30 minutes"
          badge={<Badge tone="verified">Verified</Badge>}
        />
      </Section>
    </NivaasScreen>
  );
}
