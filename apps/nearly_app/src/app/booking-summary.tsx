import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { NivaasCard, NivaasIcon, NivaasText } from '@/components/nivaas';
import { Radius, Shadows, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

const dates = [
  { label: 'Tomorrow', value: 'Oct 24' },
  { label: 'Friday', value: 'Oct 25' },
] as const;

const times = ['09:00 AM', '11:30 AM', '02:00 PM'] as const;

const paymentMethods = [
  { id: 'upi', icon: 'credit-card', label: 'UPI (GPay / PhonePe)' },
  { id: 'cash', icon: 'dollar-sign', label: 'Cash after Service' },
  { id: 'card', icon: 'credit-card', label: 'Credit / Debit Card' },
] as const;

const serviceImage =
  'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=160&q=80';

export default function BookingSummaryScreen() {
  const router = useRouter();
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const bottomInset = Math.max(insets.bottom, Spacing.four);
  const [selectedDate, setSelectedDate] = useState<(typeof dates)[number]['value']>('Oct 24');
  const [selectedTime, setSelectedTime] = useState<(typeof times)[number]>('11:30 AM');
  const [selectedPayment, setSelectedPayment] = useState<(typeof paymentMethods)[number]['id']>('upi');

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
              Booking Summary
            </NivaasText>
          </View>
          <NivaasIcon name="help-circle" color={theme.onSurfaceVariant} size={20} />
        </View>

        <ScrollView
          contentContainerStyle={[styles.content, { paddingBottom: bottomInset + 104 }]}
          showsVerticalScrollIndicator={false}>
          <NivaasCard style={[styles.serviceCard, { borderColor: `${theme.outlineVariant}4D` }]}>
            <Image source={{ uri: serviceImage }} style={[styles.serviceImage, { backgroundColor: theme.surface }]} />
            <View style={styles.flex}>
              <NivaasText variant="headlineMedium">Fan Repair</NivaasText>
              <View style={styles.providerRow}>
                <NivaasIcon name="check-circle" color={theme.primary} size={13} />
                <NivaasText variant="bodyMedium" color="onSurfaceVariant">
                  By Suresh Kumar
                </NivaasText>
              </View>
            </View>
            <View style={[styles.ratingPill, { backgroundColor: theme.surfaceHigh }]}>
              <NivaasIcon name="star" color={theme.tertiaryContainer} size={13} />
              <NivaasText variant="label">4.8</NivaasText>
            </View>
          </NivaasCard>

          <View style={styles.section}>
            <SectionLabel title="Preferred Slot" />
            <View style={styles.dateRow}>
              {dates.map((date) => {
                const selected = selectedDate === date.value;
                return (
                  <Pressable
                    key={date.value}
                    style={[
                      styles.dateButton,
                      {
                        backgroundColor: selected ? theme.surfaceLow : theme.surfaceLowest,
                        borderColor: selected ? theme.primary : theme.outlineVariant,
                        borderWidth: selected ? 2 : 1,
                      },
                    ]}
                    onPress={() => setSelectedDate(date.value)}>
                    <NivaasText
                      variant="label"
                      style={[styles.centerText, { color: selected ? theme.primary : theme.onSurfaceVariant }]}>
                      {date.label}
                    </NivaasText>
                    <NivaasText
                      variant="headlineMedium"
                      style={[styles.centerText, { color: selected ? theme.primary : theme.onSurface }]}>
                      {date.value}
                    </NivaasText>
                  </Pressable>
                );
              })}
            </View>
            <View style={styles.timeRow}>
              {times.map((time) => {
                const selected = selectedTime === time;
                return (
                  <Pressable
                    key={time}
                    style={[
                      styles.timeButton,
                      {
                        backgroundColor: selected ? `${theme.primary}0D` : theme.surfaceLowest,
                        borderColor: selected ? theme.primary : theme.outlineVariant,
                        borderWidth: selected ? 2 : 1,
                      },
                    ]}
                    onPress={() => setSelectedTime(time)}>
                    <NivaasText
                      variant={selected ? 'label' : 'bodyMedium'}
                      style={{ color: selected ? theme.primary : theme.onSurface }}>
                      {time}
                    </NivaasText>
                  </Pressable>
                );
              })}
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <SectionLabel title="Service Address" />
              <Pressable>
                <NivaasText variant="label" color="primary">
                  Change
                </NivaasText>
              </Pressable>
            </View>
            <NivaasCard style={[styles.addressCard, { borderColor: `${theme.outlineVariant}4D` }]}>
              <NivaasIcon name="map-pin" color={theme.primary} size={20} />
              <View style={styles.flex}>
                <NivaasText>Home</NivaasText>
                <NivaasText variant="bodyMedium" color="onSurfaceVariant" style={styles.addressText}>
                  Flat 402, Sunshine Apts, 12th Main,{'\n'}Indiranagar, Bengaluru - 560038
                </NivaasText>
              </View>
            </NivaasCard>
          </View>

          <View style={styles.section}>
            <SectionLabel title="Payment Method" />
            <View style={styles.paymentStack}>
              {paymentMethods.map((method) => {
                const selected = selectedPayment === method.id;
                return (
                  <Pressable
                    key={method.id}
                    style={[
                      styles.paymentRow,
                      {
                        backgroundColor: selected ? `${theme.primary}0D` : theme.surfaceLowest,
                        borderColor: selected ? theme.primary : theme.outlineVariant,
                      },
                    ]}
                    onPress={() => setSelectedPayment(method.id)}>
                    <View style={styles.paymentLabel}>
                      <NivaasIcon
                        name={method.icon}
                        color={method.id === 'cash' ? theme.tertiary : method.id === 'upi' ? theme.secondary : theme.onSurfaceVariant}
                        size={20}
                      />
                      <NivaasText>{method.label}</NivaasText>
                    </View>
                    <View
                      style={[
                        styles.radioOuter,
                        {
                          borderColor: selected ? theme.primary : theme.outlineVariant,
                          backgroundColor: selected ? theme.primary : theme.surfaceLowest,
                        },
                      ]}>
                      {selected ? <View style={[styles.radioInner, { backgroundColor: theme.onPrimary }]} /> : null}
                    </View>
                  </Pressable>
                );
              })}
            </View>
          </View>

          <View style={[styles.priceCard, { backgroundColor: theme.surfaceHigh }]}>
            <PriceRow label="Service Fee" value="₹249" />
            <PriceRow label="Visiting Charges" value="₹99" />
            <View style={[styles.divider, { backgroundColor: `${theme.outlineVariant}4D` }]} />
            <View style={styles.totalRow}>
              <NivaasText variant="headlineMedium">Total Amount</NivaasText>
              <NivaasText variant="headlineLarge" color="primary">
                ₹348
              </NivaasText>
            </View>
            <View
              style={[
                styles.discountPill,
                { backgroundColor: `${theme.primaryContainer}1A`, borderColor: `${theme.primaryContainer}33` },
              ]}>
              <NivaasIcon name="feather" color={theme.primary} size={14} />
              <NivaasText variant="label" color="onPrimaryContainer" style={styles.discountText}>
                Price includes neighborhood discount
              </NivaasText>
            </View>
          </View>
        </ScrollView>

        <View
          style={[
            styles.bottomBar,
            {
              backgroundColor: theme.background,
              paddingBottom: bottomInset,
            },
            Shadows.level1,
          ]}>
          <Pressable style={[styles.confirmButton, { backgroundColor: theme.primary }, Shadows.level2]}>
            <NivaasText variant="headlineMedium" color="onPrimary">
              Confirm Booking
            </NivaasText>
            <NivaasIcon name="arrow-right" color={theme.onPrimary} size={20} />
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}

function SectionLabel({ title }: { title: string }) {
  return (
    <NivaasText variant="label" color="onSurfaceVariant" style={styles.sectionLabel}>
      {title}
    </NivaasText>
  );
}

function PriceRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.priceRow}>
      <NivaasText variant="bodyMedium" color="onSurfaceVariant">
        {label}
      </NivaasText>
      <NivaasText variant="bodyMedium" color="onSurfaceVariant">
        {value}
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
  content: {
    gap: Spacing.six,
    padding: Spacing.four,
  },
  serviceCard: {
    minHeight: 90,
    borderWidth: 1,
    borderRadius: Radius.medium,
    padding: Spacing.four,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.four,
  },
  serviceImage: {
    width: 64,
    height: 64,
    borderRadius: Radius.small,
    backgroundColor: '#E5EEFF',
  },
  flex: {
    flex: 1,
  },
  providerRow: {
    paddingTop: Spacing.one,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
  },
  ratingPill: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
  },
  section: {
    gap: Spacing.two,
  },
  sectionLabel: {
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateRow: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  dateButton: {
    flex: 1,
    minHeight: 68,
    borderRadius: Radius.medium,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.two,
  },
  centerText: {
    textAlign: 'center',
  },
  timeRow: {
    flexDirection: 'row',
    gap: Spacing.one,
  },
  timeButton: {
    flex: 1,
    minHeight: 40,
    borderRadius: Radius.small,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.two,
  },
  addressCard: {
    borderWidth: 1,
    borderRadius: Radius.medium,
    padding: Spacing.four,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.four,
  },
  addressText: {
    paddingTop: Spacing.two,
  },
  paymentStack: {
    gap: Spacing.one,
  },
  paymentRow: {
    minHeight: 56,
    borderWidth: 1,
    borderRadius: Radius.medium,
    paddingHorizontal: Spacing.four,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.three,
  },
  paymentLabel: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.four,
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInner: {
    width: 6,
    height: 6,
    borderRadius: Radius.pill,
  },
  priceCard: {
    borderRadius: Radius.medium,
    padding: Spacing.four,
    gap: Spacing.two,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  divider: {
    height: 1,
  },
  totalRow: {
    paddingTop: Spacing.one,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  discountPill: {
    minHeight: 34,
    borderRadius: Radius.small,
    borderWidth: 1,
    paddingHorizontal: Spacing.three,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  discountText: {
    flex: 1,
  },
  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderTopLeftRadius: Radius.medium,
    borderTopRightRadius: Radius.medium,
    padding: Spacing.four,
  },
  confirmButton: {
    minHeight: 56,
    borderRadius: Radius.medium,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.two,
  },
});
