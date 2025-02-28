import React from 'react';
import { Image, Text, View } from 'react-native';
import { UserProfileProps } from './type';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../navigation/type';
import UserNameBox from './UserNameBox';
import DashBoardButton from './DashBoardButton';

const UserProfileComponent = ({ profileImage, nickName, userName }: UserProfileProps) => {
    const navigation = useNavigation<BottomTabNavigationProp<RootTabParamList>>();

    // const handleDashBoard = () => {
    //     navigation.navigate('DashBoardScreen');
    // };

    return (
        <View className="bg-white w-full h-[180px] flex justify-center items-center shadow-lg rounded-md">
            <View className="w-full flex justify-center items-center ">
                <View className="w-full flex flex-row justify-center items-center">
                    <View className="w-1/3 flex items-center -ml-8">
                        <Image source={{ uri: profileImage }} className="w-20 h-20 rounded-[50%]" />
                    </View>
                    <View className="w-1/2 pl-4 flex justify-start">
                        {/* <Text className="text-xs font-light">Name</Text> */}
                        <Text className="text-xs font-light">NickName</Text>
                        <Text className="text-2xl font-bold">{nickName}</Text>
                        <UserNameBox userName={userName} />
                    </View>
                </View>
            </View>
            <View className="w-full flex flex-row justify-center items-center gap-x-4 h-[30px] mt-4 ml-20">
                <DashBoardButton text="Edit Profile" />
                <DashBoardButton text="Suggest Qs" />
            </View>
        </View>
    );
};
export default UserProfileComponent;
