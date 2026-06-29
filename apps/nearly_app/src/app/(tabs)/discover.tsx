import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { NivaasCard, NivaasIcon, NivaasText } from '@/components/nivaas';
import { Radius, Shadows, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type IconName = Parameters<typeof NivaasIcon>[0]['name'];

const categories: { label: string; icon: IconName }[] = [
  { label: 'Plumber', icon: 'tool' },
  { label: 'Electrician', icon: 'zap' },
  { label: 'Cleaner', icon: 'archive' },
  { label: 'Carpenter', icon: 'scissors' },
  { label: 'Tutor', icon: 'book-open' },
  { label: 'Maid', icon: 'box' },
  { label: 'Health', icon: 'briefcase' },
  { label: 'Grocery', icon: 'shopping-bag' },
];

const trends = ['#WaterSupply', '#NewCafe', '#FleaMarket', '#SocietyMeeting', '#ParkCleaning'];

const services = [
  {
    initials: 'SR',
    name: 'Suresh Repairs',
    type: 'Electrician',
    rating: '4.8',
    jobs: '150+ Jobs done',
  },
  {
    initials: 'AS',
    name: "Anita's Shine",
    type: 'Cleaner',
    rating: '4.9',
    jobs: '85+ Jobs done',
  },
];

const businesses = [
  { name: 'Green Earth Organics', distance: '200m away', tone: 'primary' },
  { name: 'The Corner Brew', distance: '450m away', tone: 'tertiary' },
];

export default function DiscoverTab() {
  const router = useRouter();
  const theme = useTheme();

  return (
    <View style={[styles.screen, { backgroundColor: theme.background }]}>
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <View style={[styles.header, { backgroundColor: theme.background }, Shadows.level1]}>
          <View style={styles.locationRow}>
            <NivaasIcon name="map-pin" color={theme.primary} size={20} />
            <NivaasText variant="headlineMedium" color="primary">
              Indiranagar, Bengaluru
            </NivaasText>
          </View>
          <NivaasIcon name="search" color={theme.onSurfaceVariant} size={20} />
        </View>

        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={[styles.searchBox, { backgroundColor: theme.surfaceLowest }, Shadows.level1]}>
            <NivaasIcon name="search" color={theme.onSurfaceVariant} size={18} />
            <NivaasText variant="bodyMedium" color="onSurfaceVariant">
              Search services, shops, or groups
            </NivaasText>
          </View>

          <View style={styles.section}>
            <SectionHeader title="Categories" action="View All" />
            <View style={styles.categoryGrid}>
              {categories.map((category) => (
                <View key={category.label} style={styles.categoryItem}>
                  <View style={[styles.categoryIcon, { backgroundColor: theme.surfaceHighest }]}>
                    <NivaasIcon name={category.icon} color={theme.primary} size={24} />
                  </View>
                  <NivaasText variant="label" style={styles.centerText}>
                    {category.label}
                  </NivaasText>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <NivaasText variant="headlineMedium">Trending in Indiranagar</NivaasText>
            <ScrollView
              horizontal
              contentContainerStyle={styles.trendingRow}
              showsHorizontalScrollIndicator={false}>
              {trends.map((trend, index) => (
                <View
                  key={trend}
                  style={[
                    styles.trendChip,
                    {
                      backgroundColor: index === 0 ? theme.primaryFixed : theme.surfaceHighest,
                      borderColor: index === 0 ? theme.primaryContainer : theme.surfaceHighest,
                    },
                  ]}>
                  <NivaasText
                    variant="label"
                    style={{ color: index === 0 ? theme.primary : theme.onSurfaceVariant }}>
                    {trend}
                  </NivaasText>
                </View>
              ))}
            </ScrollView>
          </View>

          <View style={styles.section}>
            <SectionHeader title="Local Services" action="Nearby First" />
            <View style={styles.serviceList}>
              {services.map((service, index) => (
                <NivaasCard
                  key={service.name}
                  onPress={() => router.push('/provider-profile')}
                  style={[styles.serviceCard, { borderColor: theme.outlineVariant }]}>
                  <View style={[styles.serviceAvatarRing, { borderColor: theme.primaryFixed }]}>
                    <View
                      style={[
                        styles.serviceAvatar,
                        { backgroundColor: index === 0 ? theme.surfaceHigh : theme.primaryFixed },
                      ]}>
                      <NivaasText variant="label" color="primary">
                        {service.initials}
                      </NivaasText>
                    </View>
                  </View>
                  <View style={styles.flex}>
                    <View style={styles.serviceTopRow}>
                      <View style={styles.flex}>
                        <NivaasText variant="headlineMedium">{service.name}</NivaasText>
                        <NivaasText variant="bodyMedium" color="onSurfaceVariant">
                          {service.type}
                        </NivaasText>
                      </View>
                      <View style={[styles.ratingPill, { backgroundColor: theme.surface }]}>
                        <NivaasIcon name="star" color={theme.tertiaryContainer} size={14} />
                        <NivaasText variant="label">{service.rating}</NivaasText>
                      </View>
                    </View>
                    <View style={styles.serviceBottomRow}>
                      <NivaasText variant="label" color="primary">
                        {service.jobs}
                      </NivaasText>
                      <View style={[styles.callButton, { backgroundColor: theme.primary }]}>
                        <NivaasIcon name="phone" color={theme.onPrimary} size={14} />
                        <NivaasText variant="label" color="onPrimary">
                          Call
                        </NivaasText>
                      </View>
                    </View>
                  </View>
                </NivaasCard>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <SectionHeader title="Nearby Businesses" action="Show Map" />
            <ScrollView
              horizontal
              contentContainerStyle={styles.businessRow}
              showsHorizontalScrollIndicator={false}>
              {businesses.map((business, index) => (
                <NivaasCard
                  key={business.name}
                  style={[styles.businessCard, { borderColor: theme.outlineVariant }]}>
                  <View
                    style={[
                      styles.businessImage,
                      {
                        backgroundColor:
                          business.tone === 'primary' ? theme.primaryFixed : theme.tertiaryFixed,
                      },
                    ]}>
                    <View style={[styles.storefront, { backgroundColor: theme.surfaceLowest }]}>
                      <View
                        style={[
                          styles.awning,
                          { backgroundColor: index === 0 ? theme.primary : theme.tertiary },
                        ]}
                      />
                      <View style={styles.windowRow}>
                        <View style={[styles.windowPane, { backgroundColor: theme.surfaceHigh }]} />
                        <View style={[styles.windowPane, { backgroundColor: theme.surfaceHigh }]} />
                      </View>
                    </View>
                    <View style={[styles.verifiedBadge, { backgroundColor: theme.secondary }]}>
                      <NivaasIcon name="check-circle" color={theme.onSecondary} size={12} />
                      <NivaasText variant="label" color="onSecondary">
                        VERIFIED
                      </NivaasText>
                    </View>
                  </View>
                  <View style={styles.businessBody}>
                    <NivaasText variant="headlineMedium">{business.name}</NivaasText>
                    <View style={styles.distanceRow}>
                      <NivaasIcon name="map-pin" color={theme.onSurfaceVariant} size={14} />
                      <NivaasText variant="label" color="onSurfaceVariant">
                        {business.distance}
                      </NivaasText>
                    </View>
                  </View>
                </NivaasCard>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function SectionHeader({ title, action }: { title: string; action: string }) {
  return (
    <View style={styles.sectionHeader}>
      <NivaasText variant="headlineMedium">{title}</NivaasText>
      <NivaasText variant="label" color="primary">
        {action}
      </NivaasText>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    minHeight: 64,
    paddingHorizontal: Spacing.four,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  locationRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  content: {
    gap: Spacing.six,
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.four,
    paddingBottom: Spacing.four,
  },
  searchBox: {
    minHeight: 48,
    borderRadius: Radius.medium,
    paddingHorizontal: Spacing.four,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
  },
  section: {
    gap: Spacing.four,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: Spacing.four,
    columnGap: Spacing.three,
  },
  categoryItem: {
    width: '22.5%',
    minWidth: 72,
    alignItems: 'center',
    gap: Spacing.two,
  },
  categoryIcon: {
    width: 64,
    height: 64,
    borderRadius: Radius.large,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerText: {
    textAlign: 'center',
  },
  trendingRow: {
    gap: Spacing.two,
  },
  trendChip: {
    minHeight: 34,
    borderWidth: 1,
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.four,
    justifyContent: 'center',
  },
  serviceList: {
    gap: Spacing.four,
  },
  serviceCard: {
    borderWidth: 1,
    borderRadius: Radius.medium,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.four,
    padding: Spacing.four,
  },
  serviceAvatarRing: {
    width: 64,
    height: 64,
    borderRadius: Radius.pill,
    borderWidth: 2,
    padding: Spacing.one,
  },
  serviceAvatar: {
    flex: 1,
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: {
    flex: 1,
  },
  serviceTopRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: Spacing.two,
  },
  ratingPill: {
    borderRadius: Radius.small,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
  },
  serviceBottomRow: {
    marginTop: Spacing.two,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.two,
  },
  callButton: {
    minHeight: 28,
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.four,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
  },
  businessRow: {
    gap: Spacing.four,
    paddingRight: Spacing.four,
  },
  businessCard: {
    width: 240,
    borderWidth: 1,
    borderRadius: Radius.large,
    padding: 0,
    overflow: 'hidden',
    gap: 0,
  },
  businessImage: {
    height: 128,
    padding: Spacing.three,
    justifyContent: 'flex-end',
  },
  storefront: {
    height: 78,
    borderRadius: Radius.small,
    overflow: 'hidden',
  },
  awning: {
    height: 18,
  },
  windowRow: {
    flex: 1,
    flexDirection: 'row',
    gap: Spacing.two,
    padding: Spacing.three,
  },
  windowPane: {
    flex: 1,
    borderRadius: Radius.small,
  },
  verifiedBadge: {
    position: 'absolute',
    top: Spacing.two,
    right: Spacing.two,
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
  },
  businessBody: {
    padding: Spacing.three,
    gap: Spacing.one,
  },
  distanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
});
