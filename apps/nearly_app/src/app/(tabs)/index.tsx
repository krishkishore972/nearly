import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Badge, NivaasCard, NivaasIcon, NivaasText } from '@/components/nivaas';
import { Radius, Shadows, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type QuickAction = {
  label: string;
  icon: Parameters<typeof NivaasIcon>[0]['name'];
  tone: 'primary' | 'error' | 'tertiary' | 'secondary' | 'surface';
};

const quickActions: QuickAction[] = [
  { label: 'Ask', icon: 'help-circle', tone: 'primary' },
  { label: 'Alert', icon: 'alert-triangle', tone: 'error' },
  { label: 'Poll', icon: 'bar-chart-2', tone: 'tertiary' },
  { label: 'Event', icon: 'calendar', tone: 'secondary' },
  { label: 'Sell', icon: 'shopping-bag', tone: 'surface' },
  { label: 'Favorites', icon: 'star', tone: 'primary' },
];

export default function HomeTab() {
  const theme = useTheme();

  const actionTone = {
    primary: [theme.primaryFixed, theme.primary],
    error: [theme.errorContainer, theme.error],
    tertiary: [theme.tertiaryFixed, theme.tertiary],
    secondary: [theme.secondaryFixed, theme.secondary],
    surface: [theme.surfaceHigh, theme.onSurfaceVariant],
  } as const;

  return (
    <View style={[styles.screen, { backgroundColor: theme.background }]}>
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <View style={[styles.header, { backgroundColor: theme.background }, Shadows.level1]}>
          <View style={styles.locationGroup}>
            <NivaasIcon name="map-pin" color={theme.primary} size={20} />
            <NivaasText variant="headlineMedium" color="primary" style={styles.locationText}>
              Indiranagar,{'\n'}Bengaluru
            </NivaasText>
          </View>

          <View style={styles.headerActions}>
            <NivaasIcon name="plus-circle" color={theme.primary} size={20} />
            <NivaasIcon name="search" color={theme.onSurfaceVariant} size={20} />
            <View>
              <NivaasIcon name="bell" color={theme.onSurfaceVariant} size={20} />
              <View
                style={[
                  styles.notificationDot,
                  { backgroundColor: theme.error, borderColor: theme.background },
                ]}
              />
            </View>
          </View>
        </View>

        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
          overScrollMode="never">
          <NivaasCard style={[styles.quickActionCard, { borderColor: theme.outlineVariant }]}>
            {quickActions.map((action) => {
              const [backgroundColor, color] = actionTone[action.tone];

              return (
                <View key={action.label} style={styles.quickAction}>
                  <View style={[styles.quickActionIcon, { backgroundColor }]}>
                    <NivaasIcon name={action.icon} color={color} size={20} />
                  </View>
                  <NivaasText variant="label" color="onSurfaceVariant">
                    {action.label}
                  </NivaasText>
                </View>
              );
            })}
          </NivaasCard>

          <ScrollView
            horizontal
            contentContainerStyle={styles.filterRow}
            showsHorizontalScrollIndicator={false}>
            <View style={[styles.filterChipSelected, { backgroundColor: theme.primary }]}>
              <NivaasText variant="label" color="onPrimary">
                Nearby
              </NivaasText>
            </View>
            <View style={[styles.filterChip, { borderColor: theme.outlineVariant }]}>
              <NivaasText variant="label" color="onSurfaceVariant">
                Latest
              </NivaasText>
            </View>
            <View style={[styles.filterChip, { borderColor: theme.outlineVariant }]}>
              <NivaasIcon name="check-circle" color={theme.onSurfaceVariant} size={14} />
              <NivaasText variant="label" color="onSurfaceVariant">
                Verified
              </NivaasText>
            </View>
          </ScrollView>

          <View
            style={[
              styles.favoriteBanner,
              { backgroundColor: theme.primaryFixed, borderColor: theme.primaryContainer },
            ]}>
            <View style={[styles.favoriteIcon, { backgroundColor: theme.primary }]}>
              <NivaasIcon name="thumbs-up" color={theme.onPrimary} size={20} />
            </View>
            <View style={styles.flex}>
              <NivaasText>Neighborhood Favorites</NivaasText>
              <NivaasText variant="label" color="onSurfaceVariant">
                Top-rated local spots by your neighbors
              </NivaasText>
            </View>
            <NivaasIcon name="chevron-right" color={theme.primary} size={20} />
          </View>

          <NivaasCard style={[styles.feedCard, { borderColor: theme.outlineVariant }]}>
            <View style={styles.postHeader}>
              <View style={styles.authorRow}>
                <View style={[styles.avatar, { backgroundColor: theme.surface }]}>
                  <NivaasText variant="label" color="primary">
                    RS
                  </NivaasText>
                </View>
                <View style={styles.flex}>
                  <View style={styles.nameRow}>
                    <NivaasText>Rahul S.</NivaasText>
                    <Badge tone="trending">VERIFIED</Badge>
                  </View>
                  <NivaasText variant="label" color="onSurfaceVariant">
                    12th Main • 2 hours ago
                  </NivaasText>
                </View>
              </View>
              <NivaasIcon name="more-vertical" color={theme.onSurfaceVariant} size={20} />
            </View>

            <NivaasText>
              Hey neighbors! Does anyone have a recommendation for a reliable plumber? There's a
              leak in our kitchen sink that needs urgent attention. Ideally someone who serves 12th
              Main area.
            </NivaasText>

            <View style={styles.tagRow}>
              <View style={[styles.tag, { backgroundColor: theme.surfaceLow }]}>
                <NivaasText variant="label" color="primary">
                  #Recommendations
                </NivaasText>
              </View>
              <View style={[styles.tag, { backgroundColor: theme.surfaceLow }]}>
                <NivaasText variant="label" color="primary">
                  #HomeServices
                </NivaasText>
              </View>
            </View>

            <View style={[styles.cardDivider, { backgroundColor: theme.outlineVariant }]} />
            <View style={styles.postActions}>
              <View style={styles.metaAction}>
                <NivaasIcon name="message-square" color={theme.onSurfaceVariant} size={18} />
                <NivaasText color="onSurfaceVariant">12 Comments</NivaasText>
              </View>
              <View style={styles.metaAction}>
                <NivaasIcon name="heart" color={theme.onSurfaceVariant} size={18} />
                <NivaasText color="onSurfaceVariant">4</NivaasText>
              </View>
              <View style={styles.shareAction}>
                <NivaasIcon name="share-2" color={theme.onSurfaceVariant} size={18} />
              </View>
            </View>
          </NivaasCard>

          <NivaasCard
            variant="emergency"
            style={[styles.feedCard, styles.safetyCard, { borderColor: theme.errorContainer }]}>
            <View style={styles.safetyHeader}>
              <NivaasIcon name="alert-circle" color={theme.error} size={18} />
              <NivaasText color="onSurfaceVariant">Safety Alert</NivaasText>
            </View>
            <NivaasText variant="headlineMedium">Street Lights Out on 100ft Road</NivaasText>
            <NivaasText>
              The street lights between the Metro station and Sony signal have been non-functional
              since last evening. Residents are advised to be cautious during late hours. Complaint
              registered with BESCOM: #BR77821.
            </NivaasText>
            <View style={[styles.alertImage, { backgroundColor: theme.inverseSurface }]}>
              <View style={styles.lightRow}>
                <View style={[styles.lightGlow, { backgroundColor: theme.tertiaryFixed }]} />
                <View style={[styles.lightGlow, { backgroundColor: theme.tertiaryFixedDim }]} />
                <View style={[styles.lightGlow, { backgroundColor: theme.tertiaryContainer }]} />
              </View>
              <NivaasText variant="label" color="inverseOnSurface">
                100ft Road near Sony signal
              </NivaasText>
            </View>
            <View style={styles.postActions}>
              <View style={styles.metaAction}>
                <NivaasIcon name="eye" color={theme.onSurfaceVariant} size={18} />
                <NivaasText color="onSurfaceVariant">452 viewed</NivaasText>
              </View>
              <View style={styles.metaAction}>
                <NivaasIcon name="bell" color={theme.error} size={18} />
                <NivaasText style={{ color: theme.error }}>Notify BBMP</NivaasText>
              </View>
            </View>
          </NivaasCard>

          <NivaasCard style={[styles.feedCard, { borderColor: theme.outlineVariant }]}>
            <View style={styles.authorRow}>
              <View style={[styles.avatar, { backgroundColor: theme.primary }]}>
                <NivaasIcon name="sun" color={theme.onPrimary} size={18} />
              </View>
              <View style={styles.flex}>
                <NivaasText>Green Indiranagar Club</NivaasText>
                <NivaasText variant="label" color="onSurfaceVariant">
                  Community Event • 5 hours ago
                </NivaasText>
              </View>
            </View>
            <NivaasText variant="headlineMedium">Weekend Sapling Plantation Drive</NivaasText>
            <NivaasText>
              Join us this Saturday morning for our monthly plantation drive at Defence Colony
              Park. Let's keep our neighborhood green!
            </NivaasText>
            <View style={[styles.eventBox, { backgroundColor: theme.surfaceLow }]}>
              <View style={[styles.dateBox, { borderRightColor: theme.outlineVariant }]}>
                <NivaasText variant="label" style={{ color: theme.error }}>
                  SEP
                </NivaasText>
                <NivaasText variant="headlineMedium">14</NivaasText>
              </View>
              <View style={styles.flex}>
                <NivaasText>Saturday, 07:30 AM</NivaasText>
                <NivaasText variant="label" color="onSurfaceVariant">
                  Defence Colony Park, Stage 2
                </NivaasText>
              </View>
            </View>
            <View style={[styles.interestedButton, { backgroundColor: theme.secondary }]}>
              <NivaasText color="onSecondary">Interested</NivaasText>
            </View>
          </NivaasCard>
        </ScrollView>
      </SafeAreaView>
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
    paddingVertical: Spacing.two,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  locationGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  locationText: {
    lineHeight: 24,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.four,
  },
  notificationDot: {
    position: 'absolute',
    top: -1,
    right: -1,
    width: 8,
    height: 8,
    borderRadius: Radius.pill,
    borderWidth: 2,
  },
  content: {
    gap: Spacing.four,
    padding: Spacing.four,
  },
  quickActionCard: {
    borderWidth: 1,
    borderRadius: Radius.medium,
    padding: Spacing.four,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quickAction: {
    alignItems: 'center',
    gap: Spacing.one,
  },
  quickActionIcon: {
    width: 48,
    height: 48,
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterRow: {
    gap: Spacing.two,
    paddingVertical: Spacing.two,
  },
  filterChipSelected: {
    minHeight: 36,
    paddingHorizontal: Spacing.four,
    borderRadius: Radius.pill,
    justifyContent: 'center',
  },
  filterChip: {
    minHeight: 36,
    paddingHorizontal: Spacing.four,
    borderRadius: Radius.pill,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
  },
  favoriteBanner: {
    borderWidth: 1,
    borderRadius: Radius.medium,
    padding: Spacing.four,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
  },
  favoriteIcon: {
    width: 40,
    height: 40,
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: {
    flex: 1,
  },
  feedCard: {
    borderWidth: 1,
    borderRadius: Radius.medium,
    padding: Spacing.four,
    gap: Spacing.three,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: Spacing.three,
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    flex: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
    flexWrap: 'wrap',
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  tag: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.one,
  },
  cardDivider: {
    height: 1,
  },
  postActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.four,
  },
  metaAction: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
  },
  shareAction: {
    marginLeft: 'auto',
  },
  safetyCard: {
    overflow: 'hidden',
  },
  safetyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  alertImage: {
    height: 132,
    borderRadius: Radius.small,
    padding: Spacing.three,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  lightRow: {
    flexDirection: 'row',
    gap: Spacing.six,
    paddingTop: Spacing.four,
  },
  lightGlow: {
    width: 32,
    height: 32,
    borderRadius: Radius.pill,
    opacity: 0.75,
  },
  eventBox: {
    borderRadius: Radius.small,
    padding: Spacing.three,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.four,
  },
  dateBox: {
    paddingRight: Spacing.three,
    borderRightWidth: 1,
    alignItems: 'center',
  },
  interestedButton: {
    minHeight: 44,
    borderRadius: Radius.small,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
