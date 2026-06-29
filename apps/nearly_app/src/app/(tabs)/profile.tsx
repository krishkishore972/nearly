import { useState } from 'react';
import { View } from 'react-native';

import {
  Avatar,
  Badge,
  Button,
  Divider,
  ListItem,
  NivaasCard,
  NivaasScreen,
  NivaasText,
  Progress,
  Section,
  ToggleRow,
} from '@/components/nivaas';
import { Spacing } from '@/constants/theme';

export default function ProfileTab() {
  const [emergencyAlerts, setEmergencyAlerts] = useState(true);

  return (
    <NivaasScreen>
      <NivaasCard>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: Spacing.three }}>
          <Avatar initials="KR" />
          <View style={{ flex: 1 }}>
            <NivaasText variant="headlineMedium">Kishore R</NivaasText>
            <NivaasText color="onSurfaceVariant">Tower A · Flat 904</NivaasText>
          </View>
          <Badge tone="verified">Verified Resident</Badge>
        </View>
        <Divider />
        <NivaasText variant="label" color="onSurfaceVariant">
          Profile completion
        </NivaasText>
        <Progress value={78} />
      </NivaasCard>

      <Section title="Preferences">
        <NivaasCard>
          <ToggleRow
            label="Emergency alerts"
            value={emergencyAlerts}
            onValueChange={setEmergencyAlerts}
          />
        </NivaasCard>
      </Section>

      <Section title="Your Nivaas">
        <ListItem icon="bookmark" title="Saved places" subtitle="12 businesses and services" />
        <ListItem icon="star" title="Reviews" subtitle="5 helpful local reviews posted" />
        <ListItem icon="shield" title="Privacy and verification" subtitle="Manage society access" />
      </Section>

      <Button fullWidth variant="outline" icon="settings">
        Account settings
      </Button>
    </NivaasScreen>
  );
}
