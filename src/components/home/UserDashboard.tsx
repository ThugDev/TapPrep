import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { UserProfileResponse } from '../../apis/type';
import { getUserProfile } from '../../apis/user';
import LoadingScreen from '../common/LoadingScreen';
import { ErrorScreen } from '../common/ErrorScreen';
import UserProfileComponent from './UserProfileComponent';
import LevelView from './LevelView';
import NewsView from './NewsView';

export type UserDashBoardProps = {
    userProfileData?: UserProfileResponse;
};

const UserDashBoard = ({ userProfileData }: UserDashBoardProps) => {
    const level = {
        img: '🐥',
        title: '이제 막 면접 문제를 풀기 시작한 새내기',
        rank: '탭-생',
    };

    return (
        <View className="w-full h-[1/2] py-12 px-4 flex justify-center items-center">
            <View className="w-full justify-start pl-4">
                <Text className="text-xl font-bold">
                    👋 어서오세요, <Text className="text-[#073955]">{userProfileData?.userData.username}</Text>님!
                </Text>
            </View>
            <View className="w-full flex items-center rounded py-4">
                <UserProfileComponent
                    profileImage={userProfileData?.userData.profile_image}
                    nickName={userProfileData?.userData.nickname}
                    userName={userProfileData?.userData.username}
                />
            </View>
            <View className="w-full flex items-center">
                <LevelView level={level} nickName={userProfileData?.userData.nickname} />
            </View>
            <NewsView />
        </View>
    );
};
export default UserDashBoard;
