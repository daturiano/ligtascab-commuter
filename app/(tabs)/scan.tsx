import { AntDesign } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import QRScanner from '~/components/QRScanner';

export default function Scan() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.cardIconContainer}>
            <AntDesign name="qrcode" size={42} color="#1daa88" />
          </View>
        </View>
        <Text style={styles.cardTitle}>Scan the QR Code</Text>
        <QRScanner />
        <Text style={styles.cardDescription}>
          Scan the QR to get your tricycle&apos;s details and to start and confirm your ride.
        </Text>
        <Pressable style={styles.cardButton}>
          <Text style={styles.buttonText}>Start Ride</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  card: {
    position: 'relative',
    height: '90%',
    width: '100%',
    backgroundColor: '#1daa88',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 36,
    gap: 16,
  },
  cardHeader: {
    position: 'absolute',
    top: -36,
    height: 72,
    width: 72,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: '50%',
  },
  cardIconContainer: {
    height: 62,
    width: 62,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    borderColor: '#1daa88',
    borderWidth: 4,
  },
  cardTitle: {
    fontSize: 28,
    fontWeight: 700,
    color: '#ffffff',
  },
  cardDescription: {
    textAlign: 'center',
    fontSize: 16,
    color: '#ffffff',
  },
  cardButton: {
    width: '100%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 700,
    color: '#1daa88',
  },
});
