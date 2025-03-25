import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../../type';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from '../components/common/LoadingScreen';
import { useUserProfile } from '../hooks/useUserProfile';
import { ErrorScreen } from '../components/common/ErrorScreen';
import { TapPerpContent } from '../constants/tapprep-content';

const IntroScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

    const { userPorileData, isLoading, isError } = useUserProfile();

    useEffect(() => {
        const checkAuth = async () => {
            const token = await AsyncStorage.getItem('authToken');
            if (token) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        };

        checkAuth();
    }, []);

    if (isAuthenticated === null) {
        return <LoadingScreen />;
    }

    const handleGoToDashBaord = () => {
        if (isAuthenticated === true) {
            navigation.navigate('Main');
        } else if (isAuthenticated === false) {
            navigation.navigate('GitLoginScreen');
        }
    };

    if (isLoading) <LoadingScreen />;
    if (isError) <ErrorScreen errorMessage="에러가 발생했습니다." />;

    return (
        <View className="relative w-full h-full">
            <View className="w-full flex justify-center items-center flex-col absolute top-1/3 z-10 ">
                <View className="">
                    <Text className="text-2xl font-bold">
                        어서오세요, {userPorileData?.userData.nickname ? userPorileData.userData.nickname : '면접자'}
                        님!
                    </Text>
                </View>
                <View className=" w-full flex justify-center items-center flex-col text-xs mt-12">
                    <Text>{TapPerpContent.text1}</Text>
                    <Text>{TapPerpContent.text2}</Text>
                </View>
                <View className="w-full py-12 flex justify-center items-center">
                    <TouchableOpacity
                        onPress={handleGoToDashBaord}
                        className="w-[80%] py-3 rounded-lg gap-x-2 flex justify-center items-center flex-row cursor-pointer  bg-[#073955]"
                    >
                        <Text className="text-xs text-white">DashBoard 보러 가기</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity
                        onPress={() => {
                            AsyncStorage.clear();
                        }}
                        className="w-[80%] py-3 rounded-lg gap-x-2 flex justify-center items-center flex-row cursor-pointer  bg-[#073955]"
                    >
                        <Text className="text-xs text-white">캐시 지우기</Text>
                    </TouchableOpacity> */}
                </View>
            </View>
            <View className="fixed bg-white">
                <Image source={require('../../assets/image/bg-image.png')} className="w-full h-full -bottom-52" />
            </View>
        </View>
    );
};

export default IntroScreen;
