import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootTabParamList} from '../../type';
import Home from '../screens/Home';
import DashBoardScreen from '../screens/DashBoardScreen';
import CustomTabBar from './customTabBar';

const Tab = createBottomTabNavigator<RootTabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="DashBoardScreen" component={DashBoardScreen} />
    </Tab.Navigator>
  );
};
export default TabNavigator;
