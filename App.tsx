import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GitLoginScreen from './src/GitLoginScreen';
import Home from './src/Home';
import GitWebViewScreen from './src/GitWebViewScreen';

export type RootStackPramList = {
  GitLoginScreen: {authCode: string} | undefined;
  GitWebViewScreen: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackPramList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GitLoginScreen">
        <Stack.Screen name="GitLoginScreen" component={GitLoginScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="GitWebViewScreen" component={GitWebViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
