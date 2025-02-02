import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Text, View } from 'react-native';

import { UserProfileResponse } from '../../apis/type';
import { getUserProfile } from '../../apis/user';
import LoadingScreen from '../common/LoadingScreen';
import { ErrorScreen } from '../common/ErrorScreen';
import UserProfileComponent from './UserProfileComponent';

const UserDashBoard = () => {
  const {
    data: userProfileData,
    isError,
    isLoading,
  } = useQuery<UserProfileResponse>({
    queryKey: ['userProfile'],
    queryFn: getUserProfile,
  });

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return (
      <ErrorScreen errorMessage="유저 데이터를 불러오는데 실패했습니다." />
    );
  }

  return (
    <View className="w-full p-4">
      <View className="flex justify-between flex-row items-center rounded p-4">
        <UserProfileComponent
          profileImage={userProfileData?.userData.profile_image}
          nickName={userProfileData?.userData.nickname}
          userName={userProfileData?.userData.username}
        />
        <View className=" w-1/2 h-full flex justify-start items-center pt-8">
          <Text>통계란</Text>
        </View>
      </View>
    </View>
  );
};
export default UserDashBoard;
