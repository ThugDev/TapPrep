import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { GitLoginScreenProps } from './type';
import { TapPerpContent } from '../constants/tapprep-content';

const GitLoginScreen = ({ navigation }: GitLoginScreenProps) => {
    const handleLoginPress = () => {
        navigation.navigate('GitWebViewScreen');
    };

    return (
        <View className="w-screen h-screen justify-center items-center ">
            <Image source={require('../../assets/image/git_img.png')} className="w-[150px] h-[150px]" />
            <View className="flex justify-center items-center my-6">
                <Text className="text-2xl font-bold">Tap and Prepare </Text>
                <Text className="text-2xl font-bold -mt-2 ">for Interview</Text>
            </View>
            <View className="flex justify-center items-center mb-8">
                <Text className="text-xs">{TapPerpContent.text1}</Text>
                <Text className="text-xs">{TapPerpContent.text2}</Text>
            </View>
            <TouchableOpacity
                onPress={handleLoginPress}
                className="w-[80%] flex justify-center items-center flex-row gap-x-2 bg-black rounded p-2"
            >
                <Image source={require('../../assets/image/white_git_logo.png')} className="w-6 h-6" />
                <Text className=" text-white">깃허브로 로그인하기</Text>
            </TouchableOpacity>
        </View>
    );
};
export default GitLoginScreen;
