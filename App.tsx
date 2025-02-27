import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GitLoginScreen from './src/screens/GitLoginScreen';
import GitWebViewScreen from './src/screens/GitWebViewScreen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RootStackParamList } from './type';
import TabNavigator from './src/components/navigation/TabNavigator';
import { Linking } from './src/config/linkingConfig';
import IntroScreen from './src/screens/IntroScreen';

const Stack = createStackNavigator<RootStackParamList>();

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer linking={Linking}>
                <Stack.Navigator initialRouteName="IntroScreen" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="IntroScreen" component={IntroScreen} />
                    <Stack.Screen name="GitLoginScreen" component={GitLoginScreen} />
                    <Stack.Screen name="Main" component={TabNavigator} />
                    <Stack.Screen name="GitWebViewScreen" component={GitWebViewScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </QueryClientProvider>
    );
};
export default App;
