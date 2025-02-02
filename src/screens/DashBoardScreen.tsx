import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { View } from 'react-native';
import { UserProfileResponse } from '../apis/type';
import { getUserProfile } from '../apis/user';
import LoadingScreen from '../components/common/LoadingScreen';
import { ErrorScreen } from '../components/common/ErrorScreen';
import DashBoardUserProfile from '../components/dashboard/DashBoardUserProfile';
import DetailedStatistics from '../components/dashboard/DetailedStatistics';

const DashBoardScreen = () => {
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
    return <ErrorScreen errorMessage="유저 정보를 받아올 수 없습니다." />;
  }

  return (
    <View className="w-full h-screen py-4" collapsable={false}>
      <DashBoardUserProfile userProfileData={userProfileData?.userData} />
      <DetailedStatistics />
    </View>
  );
};
export default DashBoardScreen;
