import { Stack, useRouter, type Href } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { NivaasCard, NivaasIcon, NivaasText } from '@/components/nivaas';
import { Radius, Shadows, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

const services = [
  {
    icon: 'wind',
    title: 'Fan Repair & Installation',
    subtitle: 'Winding, cleaning, and new installs',
    price: '₹200',
  },
  {
    icon: 'toggle-left',
    title: 'Switchboard Install',
    subtitle: 'Modular or traditional board fixing',
    price: '₹150',
  },
  {
    icon: 'zap',
    title: 'Circuit Checkup',
    subtitle: 'Full house safety & voltage audit',
    price: '₹500',
  },
] as const;

const reviews = [
  {
    initials: 'RK',
    name: 'Rajesh Khanna',
    text: 'Suresh was very quick to arrive. Fixed my geyser issue in 20 minutes. Very polite and well-spoken.',
    date: '2 DAYS AGO',
  },
  {
    initials: 'AM',
    name: 'Ananya M.',
    text: 'Helped with full house wiring for our new flat. Reliable and honest with pricing of materials.',
    date: '1 WEEK AGO',
  },
];

const bookingSummaryHref = '/booking-summary' as Href;

export default function ProviderProfileScreen() {
  const router = useRouter();
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const bottomInset = Math.max(insets.bottom, Spacing.four);

  return (
    <View style={[styles.screen, { backgroundColor: theme.background }]}>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={styles.safeArea}>
        <View style={[styles.header, { backgroundColor: theme.background }, Shadows.level1]}>
          <View style={styles.headerLeft}>
            <Pressable style={styles.iconHitArea} onPress={() => router.back()}>
              <NivaasIcon name="arrow-left" color={theme.primary} size={20} />
            </Pressable>
            <NivaasText variant="headlineMedium" color="primary">
              Provider Profile
            </NivaasText>
          </View>
          <View style={styles.headerRight}>
            <NivaasIcon name="share-2" color={theme.onSurfaceVariant} size={20} />
            <NivaasIcon name="heart" color={theme.onSurfaceVariant} size={20} />
          </View>
        </View>

        <ScrollView
          contentContainerStyle={[styles.content, { paddingBottom: bottomInset + 96 }]}
          showsVerticalScrollIndicator={false}>
          <NivaasCard style={[styles.profileCard, { borderColor: theme.outlineVariant }]}>
            <View style={styles.profileTop}>
              <View>
                <View style={[styles.providerAvatar, { borderColor: theme.primaryContainer }]}>
                  <View style={[styles.avatarInner, { backgroundColor: theme.surfaceHigh }]}>
                    <NivaasText variant="headlineMedium" color="primary">
                      SK
                    </NivaasText>
                  </View>
                </View>
                <View style={[styles.verifiedPill, { backgroundColor: theme.secondaryContainer }]}>
                  <NivaasIcon name="check-circle" color={theme.onSecondaryContainer} size={10} />
                  <NivaasText variant="label" color="onSecondaryContainer" style={styles.verifiedText}>
                    VERIFIED
                  </NivaasText>
                </View>
              </View>

              <View style={styles.flex}>
                <NivaasText variant="headlineLarge">Suresh Kumar</NivaasText>
                <NivaasText color="onSurfaceVariant">Expert Electrician</NivaasText>
                <View style={styles.ratingRow}>
                  <NivaasIcon name="star" color={theme.tertiaryContainer} size={16} />
                  <NivaasText style={styles.ratingText}>4.9</NivaasText>
                  <NivaasText color="onSurfaceVariant">(120 reviews)</NivaasText>
                </View>
              </View>
            </View>

            <View style={[styles.divider, { backgroundColor: theme.outlineVariant }]} />

            <View style={styles.statsRow}>
              <ProfileStat value="450+" label="Jobs Done" />
              <View style={[styles.statMiddle, { borderColor: theme.outlineVariant }]}>
                <ProfileStat value="8" label="Years Exp." />
              </View>
              <ProfileStat value="1.2 km" label="Away" />
            </View>
          </NivaasCard>

          <SectionTitle title="About" />
          <NivaasCard style={[styles.aboutCard, { borderColor: theme.outlineVariant }]}>
            <NivaasText color="onSurfaceVariant" style={styles.aboutText}>
              Professional electrician with over 8 years of experience serving the Indiranagar
              community. Specializing in domestic wiring, smart home installations, and rapid
              repair services. I pride myself on punctuality, safety standards, and transparent
              pricing for all residents.
            </NivaasText>
            <View style={styles.areaRow}>
              {['Indiranagar', 'Domlur', 'HAL 2nd Stage'].map((area) => (
                <View key={area} style={[styles.areaChip, { backgroundColor: theme.surfaceHigh }]}>
                  <NivaasText>{area}</NivaasText>
                </View>
              ))}
            </View>
          </NivaasCard>

          <SectionHeader title="Services & Pricing" action="View All" />
          <View style={styles.listStack}>
            {services.map((service) => (
              <NivaasCard
                key={service.title}
                style={[styles.serviceItem, { borderColor: theme.outlineVariant }]}>
                <View style={[styles.serviceIcon, { backgroundColor: theme.primaryFixed }]}>
                  <NivaasIcon name={service.icon} color={theme.primary} size={20} />
                </View>
                <View style={styles.flex}>
                  <NivaasText style={styles.itemTitle}>{service.title}</NivaasText>
                  <NivaasText variant="label" color="onSurfaceVariant">
                    {service.subtitle}
                  </NivaasText>
                </View>
                <NivaasText>{service.price}</NivaasText>
              </NivaasCard>
            ))}
          </View>

          <SectionHeader title="Recent Reviews" action="See More" />
          <View style={styles.listStack}>
            {reviews.map((review, index) => (
              <NivaasCard
                key={review.name}
                style={[styles.reviewCard, { borderColor: theme.outlineVariant }]}>
                <View style={styles.reviewTop}>
                  <View style={styles.reviewAuthor}>
                    <View
                      style={[
                        styles.reviewAvatar,
                        { backgroundColor: index === 0 ? theme.secondaryFixed : theme.tertiaryFixed },
                      ]}>
                      <NivaasText
                        variant="label"
                        style={{ color: index === 0 ? theme.secondary : theme.tertiaryContainer }}>
                        {review.initials}
                      </NivaasText>
                    </View>
                    <NivaasText>{review.name}</NivaasText>
                  </View>
                  <View style={styles.stars}>
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <NivaasIcon
                        key={starIndex}
                        name="star"
                        color={theme.tertiaryContainer}
                        size={14}
                      />
                    ))}
                  </View>
                </View>
                <NivaasText color="onSurfaceVariant" style={styles.reviewText}>
                  “{review.text}”
                </NivaasText>
                <NivaasText variant="label" color="onSurfaceVariant">
                  {review.date}
                </NivaasText>
              </NivaasCard>
            ))}
          </View>
        </ScrollView>

        <View
          style={[
            styles.bottomActions,
            {
              backgroundColor: theme.surfaceLowest,
              borderTopColor: theme.outlineVariant,
              paddingBottom: bottomInset,
            },
          ]}>
          <Pressable style={[styles.messageButton, { borderColor: theme.primary }]}>
            <NivaasIcon name="message-square" color={theme.primary} size={20} />
            <NivaasText color="primary">Message</NivaasText>
          </Pressable>
          <Pressable
            style={[styles.bookButton, { backgroundColor: theme.primaryContainer }, Shadows.level2]}
            onPress={() => router.push(bookingSummaryHref)}>
            <NivaasIcon name="calendar" color={theme.onPrimaryContainer} size={20} />
            <NivaasText color="onPrimaryContainer">Book Now</NivaasText>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}

function ProfileStat({ value, label }: { value: string; label: string }) {
  return (
    <View style={styles.stat}>
      <NivaasText variant="headlineMedium" color="primary" style={styles.centerText}>
        {value}
      </NivaasText>
      <NivaasText color="onSurfaceVariant" style={styles.centerText}>
        {label}
      </NivaasText>
    </View>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <View style={styles.sectionTitle}>
      <NivaasText variant="headlineMedium">{title}</NivaasText>
    </View>
  );
}

function SectionHeader({ title, action }: { title: string; action: string }) {
  return (
    <View style={styles.sectionHeader}>
      <NivaasText variant="headlineMedium">{title}</NivaasText>
      <NivaasText color="primary">{action}</NivaasText>
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
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
  },
  iconHitArea: {
    minWidth: 48,
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -Spacing.three,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.four,
  },
  content: {
    gap: Spacing.four,
    padding: Spacing.four,
    paddingBottom: 144,
  },
  profileCard: {
    borderWidth: 1,
    borderRadius: Radius.medium,
    padding: Spacing.six,
    gap: Spacing.six,
  },
  profileTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.four,
  },
  providerAvatar: {
    width: 96,
    height: 96,
    borderRadius: Radius.pill,
    borderWidth: 2,
    padding: Spacing.one,
  },
  avatarInner: {
    flex: 1,
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifiedPill: {
    position: 'absolute',
    right: -Spacing.one,
    bottom: -Spacing.one,
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
  },
  verifiedText: {
    fontSize: 10,
    lineHeight: 14,
  },
  flex: {
    flex: 1,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
    paddingTop: Spacing.two,
  },
  ratingText: {
    fontWeight: '700',
  },
  divider: {
    height: 1,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  stat: {
    flex: 1,
    alignItems: 'center',
  },
  statMiddle: {
    flex: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  centerText: {
    textAlign: 'center',
  },
  sectionTitle: {
    paddingHorizontal: Spacing.one,
  },
  sectionHeader: {
    paddingHorizontal: Spacing.one,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  aboutCard: {
    borderWidth: 1,
    borderRadius: Radius.medium,
    padding: Spacing.four,
    gap: Spacing.four,
  },
  aboutText: {
    lineHeight: 26,
  },
  areaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  areaChip: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.one,
  },
  listStack: {
    gap: Spacing.three,
  },
  serviceItem: {
    borderWidth: 1,
    borderRadius: Radius.medium,
    padding: Spacing.four,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.four,
  },
  serviceIcon: {
    width: 40,
    height: 40,
    borderRadius: Radius.small,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTitle: {
    fontWeight: '700',
  },
  reviewCard: {
    borderWidth: 1,
    borderRadius: Radius.medium,
    padding: Spacing.four,
    gap: Spacing.two,
  },
  reviewTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.two,
  },
  reviewAuthor: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  reviewAvatar: {
    width: 32,
    height: 32,
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stars: {
    flexDirection: 'row',
  },
  reviewText: {
    fontStyle: 'italic',
  },
  bottomActions: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderTopWidth: 1,
    padding: Spacing.four,
    flexDirection: 'row',
    gap: Spacing.two,
  },
  messageButton: {
    minHeight: 56,
    flex: 1,
    borderRadius: Radius.medium,
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.two,
  },
  bookButton: {
    minHeight: 56,
    flex: 2,
    borderRadius: Radius.medium,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.two,
  },
});
