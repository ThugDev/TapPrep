import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GitLoginScreen from './src/screens/GitLoginScreen';
import Home from './src/screens/Home';
import GitWebViewScreen from './src/screens/GitWebViewScreen';
import {RootStackPramList} from './type';

const Stack = createStackNavigator<RootStackPramList>();

const linking = {
  prefixes: ['tapprep1029://'], // 앱의 URI 스키마
  config: {
    screens: {
      GitLoginScreen: 'auth/callback', // 'tapprep1029://auth/callback'을 GitLoginScreen에 매핑
    },
  },
};

const App = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="GitLoginScreen">
        <Stack.Screen name="GitLoginScreen" component={GitLoginScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="GitWebViewScreen" component={GitWebViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
