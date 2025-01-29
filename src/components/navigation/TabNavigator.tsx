import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootTabParamList} from '../../../type';
import Home from '../../screens/Home';
import DashBoardScreen from '../../screens/DashBoardScreen';
import CustomTabBar from './CustomTabBar';
import InterviewStack from './InterviewStack';

const Tab = createBottomTabNavigator<RootTabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{tabBarLabel: '홈'}} />
      <Tab.Screen name='InterviewScreen' component={InterviewStack} options={{tabBarLabel: '면접'}} />
      <Tab.Screen
        name="DashBoardScreen"
        component={DashBoardScreen}
        options={{tabBarLabel: '대시보드'}}
      />
      
    </Tab.Navigator>
  );
};
export default TabNavigator;
