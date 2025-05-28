import { Feather, MaterialIcons } from '@expo/vector-icons';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Tabs } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const queryClient = new QueryClient();

export default function TabLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView edges={['left', 'right']} style={{ flex: 1 }}>
        <Tabs
          screenOptions={{
            headerStyle: {
              backgroundColor: '#1daa88',
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
              height: 95,
            },
            headerTitle: 'ligtascab.',
            headerTitleStyle: { color: '#ffffff', fontWeight: 700, fontSize: 24 },
            tabBarActiveTintColor: '#1daa88',
          }}>
          <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
            }}
          />
          <Tabs.Screen
            name="scan"
            options={{
              title: 'Scan',
              tabBarIcon: ({ color }) => <MaterialIcons name="qr-code" size={24} color={color} />,
            }}
          />
        </Tabs>
      </SafeAreaView>
    </QueryClientProvider>
  );
}
