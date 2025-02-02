import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GitLoginScreen from './src/screens/GitLoginScreen';
import GitWebViewScreen from './src/screens/GitWebViewScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from './src/components/common/LoadingScreen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RootStackParamList } from './type';
import TabNavigator from './src/components/navigation/TabNavigator';
import { Linking } from './src/config/linkingConfig';

const Stack = createStackNavigator<RootStackParamList>();

const queryClient = new QueryClient();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('authToken');
      if (token) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <LoadingScreen />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer linking={Linking}>
        <Stack.Navigator
          initialRouteName={isAuthenticated ? 'Main' : 'GitLoginScreen'}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="GitLoginScreen" component={GitLoginScreen} />
          <Stack.Screen name="Main" component={TabNavigator} />
          <Stack.Screen name="GitWebViewScreen" component={GitWebViewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};
export default App;
