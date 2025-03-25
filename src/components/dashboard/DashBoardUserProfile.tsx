import React from 'react';
import { Image, Text, View } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { DashBaordUserProfileProps } from './type';
import { ErrorScreen } from '../common/ErrorScreen';
import { useFadeAnimated } from '../../hooks/useFadeAnimated';

const DashBoardUserProfile = ({ userProfileData }: DashBaordUserProfileProps) => {
    const opacity = useFadeAnimated(1, 1000);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
    }));

    if (!userProfileData) {
        return <ErrorScreen errorMessage="유저 데이터를 불러오는데 실패했습니다." />;
    }

    return (
        <View className="w-full h-[200px] flex flex-row justify-center items-center">
            <View className="w-1/2 h-full flex justify-center items-center rounded-[50%]">
                <Image source={{ uri: userProfileData.profile_image }} className="w-32 h-32 " />
            </View>
            <View className="w-1/2 h-full flex justify-center items-start">
                <View className=" gap-4">
                    <Animated.Text className="font-bold" style={[animatedStyle]}>
                        <Text className="text-2xl">
                            <Text className="font-bold">LEVEL: </Text>
                            {userProfileData.level}
                        </Text>
                    </Animated.Text>
                    <Text className="text-xl">
                        <Text className="font-bold">이름: </Text>
                        {userProfileData.nickname}
                    </Text>
                    <Text className="text-xl">
                        <Text className="font-bold">아이디: </Text>
                        {userProfileData.username}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default DashBoardUserProfile;
