import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { UserProfileProps } from './type';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../navigation/type';

const UserProfileComponent = ({ profileImage, nickName, userName }: UserProfileProps) => {
    const navigation = useNavigation<BottomTabNavigationProp<RootTabParamList>>();

    const handleDashBoard = () => {
        navigation.navigate('DashBoardScreen');
    };

    return (
        <TouchableOpacity className="w-1/2 h-full flex justify-center items-center" onPress={handleDashBoard}>
            <Image source={{ uri: profileImage }} className="w-20 h-20 rounded-[50%]" />
            <Text className="py-2">{nickName}</Text>
            <Text>{userName}</Text>
        </TouchableOpacity>
    );
};
export default UserProfileComponent;
