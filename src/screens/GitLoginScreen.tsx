import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { GitLoginScreenProps } from './type';

const GitLoginScreen = ({ navigation }: GitLoginScreenProps) => {
  const handleLoginPress = () => {
    navigation.navigate('GitWebViewScreen');
  };

  return (
    <View className="w-screen h-screen justify-center items-center ">
      <TouchableOpacity onPress={handleLoginPress} className="rounded p-2">
        <View className="flex justify-center items-center">
          <Image
            source={require('../../assets/image/github-logo.png')}
            className="w-12 h-12"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default GitLoginScreen;
