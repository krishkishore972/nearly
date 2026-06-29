import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { NivaasText, NivaasScreen } from '@/components/nivaas';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Not Found' }} />
      <NivaasScreen scroll={false}>
        <NivaasText variant="headlineLarge">This page is not available</NivaasText>
        <Link href="/" style={styles.button}>
          Go back to Home
        </Link>
      </NivaasScreen>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 16,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});
