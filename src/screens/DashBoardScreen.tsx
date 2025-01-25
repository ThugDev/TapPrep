import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {UserProfileResponse} from '../apis/type';
import {getUserProfile} from '../apis/user';
import LoadingScreen from '../components/common/LoadingScreen';
import {ErrorScreen} from '../components/common/ErrorScreen';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';
import {useFadeAnimated} from '../hooks/useFadeAnimated';

const DashBoardScreen = () => {
  const {
    data: userProfileData,
    isError,
    isLoading,
  } = useQuery<UserProfileResponse>({
    queryKey: ['userProfile'],
    queryFn: getUserProfile,
  });

  const opacity = useFadeAnimated(1, 1000);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  return (
    <View className="w-full h-screen py-4">
      <View className="w-full h-[200px] flex flex-row justify-center items-center">
        <View className="w-1/2 h-full flex justify-center items-center">
          <Image
            source={{uri: userProfileData?.userData.profile_image}}
            className="w-32 h-32 rounded-[50%] border-2"
          />
        </View>
        <View className="w-1/2 h-full flex justify-center items-start">
          <View className=" gap-4">
            <Animated.Text
              style={[animatedStyle, {fontWeight: 'bold', color: 'black'}]}>
              <Text className="text-2xl">
                <Text className="font-bold">LEVEL: </Text>
                {userProfileData?.userData.level}
              </Text>
            </Animated.Text>
            <Text className="text-xl">
              <Text className="font-bold">이름: </Text>
              {userProfileData?.userData.nickname}
            </Text>
            <Text className="text-xl">
              <Text className="font-bold">아이디: </Text>
              {userProfileData?.userData.username}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default DashBoardScreen;
