import { FontAwesome6 } from '@expo/vector-icons';
import { BarcodeScanningResult, CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default function QRScanner() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [scanResult, setScanResult] = useState('');

  useEffect(() => {
    requestPermission();
  }, [requestPermission]);

  if (!permission) {
    return <View />;
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={facing}
        onBarcodeScanned={(scanningResult: BarcodeScanningResult) => {
          if (!!scanningResult.data) {
            setScanResult(scanningResult.data);
          }
        }}
        barcodeScannerSettings={{
          barcodeTypes: ['qr'],
        }}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={toggleCameraFacing}>
            <FontAwesome6 name="camera-rotate" size={24} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    borderWidth: 8,
    borderColor: '#ffffff',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
