import {
  AntDesign,
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from '@expo/vector-icons';
import { useQuery } from '@tanstack/react-query';
import { Image } from 'expo-image';
import { useGlobalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import TricycleDetailsCard from '~/components/TricycleDetailsCard';
import { fetchTricycleDetails } from '~/services/tricycles';
import { Tricycle } from '~/types/types';

export default function InRidePage() {
  const { tricycle_id } = useGlobalSearchParams<{ tricycle_id: string }>();

  const { data: tricycle, isLoading } = useQuery<Tricycle | null>({
    queryKey: ['tricycle-details', tricycle_id],
    queryFn: async () => {
      const { data } = await fetchTricycleDetails(tricycle_id);
      return data;
    },
    retry: false,
  });

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View>
          <Text style={styles.cardHeader}>Tricycle&apos;s Information</Text>
          <Text style={{ color: '#dee2e6' }}>Ride ID: 01239123582343</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TricycleDetailsCard title="Driver" name="Walt Haughfin">
            <View style={styles.avatar}>
              <AntDesign name="user" size={24} color="black" />
            </View>
          </TricycleDetailsCard>
          <TricycleDetailsCard title="Operator" name="Bella Wright">
            <View style={styles.avatar}>
              <AntDesign name="user" size={24} color="black" />
            </View>
          </TricycleDetailsCard>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('~/assets/sample-tricycle.png')} />
          </View>
          <View style={{ flexDirection: 'column', width: '100%', gap: 10 }}>
            <TricycleDetailsCard title="Plate Number" name="Bella Wright">
              <MaterialIcons name="numbers" size={22} color="black" />
            </TricycleDetailsCard>
            <TricycleDetailsCard title="Seating Capacity" name="Bella Wright">
              <Feather name="users" size={22} color="black" />
            </TricycleDetailsCard>
            <TricycleDetailsCard title="Franchise Number" name="Bella Wright">
              <MaterialCommunityIcons name="file-document-outline" size={22} color="black" />
            </TricycleDetailsCard>
          </View>
        </View>
        <View style={styles.routeContainer}>
          <FontAwesome5 name="route" size={32} color="black" />
          <View>
            <Text style={{ color: '#868e96', fontSize: 12 }}>Routes</Text>
            <View style={styles.routeList}>
              <Text>Centro</Text>
              <Octicons name="arrow-switch" size={18} color="black" />
              <Text>Panganiban</Text>
            </View>
            <View style={styles.routeList}>
              <Text>Centro</Text>
              <Octicons name="arrow-switch" size={18} color="black" />
              <Text>Penafrancia</Text>
            </View>
            <View style={styles.routeList}>
              <Text>Centro</Text>
              <Octicons name="arrow-switch" size={18} color="black" />
              <Text>Conception Pequena</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  cardContainer: {
    width: '90%',
    height: '48%',
    backgroundColor: '#1daa88',
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },
  cardHeader: {
    fontSize: 24,
    fontWeight: 600,
    color: '#ffffff',
  },
  imageContainer: {
    width: 151,
    height: 151,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#fff',
  },
  image: {
    flex: 1,
    width: '100%',
    borderRadius: 8,
  },
  avatar: {
    height: 34,
    width: 34,
    backgroundColor: '#ced4da',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  routeContainer: {
    width: '100%',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  routeList: {
    flexDirection: 'row',
    gap: 12,
  },
});
