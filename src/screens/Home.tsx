import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { postLogout } from '../apis/gitLogin';

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../type';
import UserDashBoard from '../components/home/UserDashboard';
import LevelView from '../components/home/LevelView';
import { useQuery } from '@tanstack/react-query';
import { UserProfileResponse } from '../apis/type';
import { getUserProfile } from '../apis/user';
import LoadingScreen from '../components/common/LoadingScreen';
import { ErrorScreen } from '../components/common/ErrorScreen';
import MySolutions from '../components/home/MySolutions';

const Home = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

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
        return <ErrorScreen errorMessage="유저 데이터를 불러오는데 실패했습니다." />;
    }

    const handleLogOut = async () => {
        const response = await postLogout();
        navigation.navigate('GitLoginScreen');
        await AsyncStorage.removeItem('authToken');
        await AsyncStorage.removeItem('refreshToken');
        await AsyncStorage.removeItem('userName');
        return response;
    };

    return (
        <ScrollView className="py-12 h-full bg-[#f6fafd]">
            <UserDashBoard userProfileData={userProfileData} />
            <MySolutions />
            <TouchableOpacity onPress={handleLogOut}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};
export default Home;
