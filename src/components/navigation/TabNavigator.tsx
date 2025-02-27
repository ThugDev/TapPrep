import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import DashBoardScreen from '../../screens/DashBoardScreen';
import CustomTabBar from './CustomTabBar';
import InterviewStack from './InterviewStack';
import { RootTabParamList } from './type';
import { Image, View } from 'react-native';

const Tab = createBottomTabNavigator<RootTabParamList>();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
            tabBar={(props) => <CustomTabBar {...props} />}
        >
            <Tab.Screen
                name="Interview"
                component={InterviewStack}
                options={{
                    tabBarIcon: () => (
                        <View className="w-[30px] h-[30px] flex justify-center items-center border-[2px] border-[#E1F2FF] rounded-lg">
                            <Image source={require('../../../assets/icon/Quiz.png')} className="w-[20px] h-[20px]" />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: () => (
                        <View className="w-[30px] h-[30px] flex justify-center items-center border-[2px] border-[#E1F2FF] rounded-lg">
                            <Image
                                source={require('../../../assets/icon/Home_Page.png')}
                                className="w-[20px] h-[20px]"
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="DashBoardScreen"
                component={DashBoardScreen}
                options={{
                    tabBarIcon: () => (
                        <View className="w-[30px] h-[30px] flex justify-center items-center border-[2px] border-[#E1F2FF] rounded-lg">
                            <Image
                                source={require('../../../assets/icon/Cat_Profile.png')}
                                className="w-[20px] h-[20px]"
                            />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
export default TabNavigator;
