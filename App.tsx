import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import GitLoginScreen from './src/screens/GitLoginScreen';
import Home from './src/screens/Home';

export type RootStackPramList = {
  Home: undefined;
  GitLoginScreen: undefined;
};

const Stack = createStackNavigator<RootStackPramList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GitLoginScreen">
        <Stack.Screen name="GitLoginScreen" component={GitLoginScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
