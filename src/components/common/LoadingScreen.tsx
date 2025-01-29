import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

const LoadingScreen = () => {
  return (
    <View className="h-[250px] flex justify-center items-center">
      <ActivityIndicator size={'large'} color={'#0000ff'} />
      <Text>로딩중...</Text>
    </View>
  );
};
export default LoadingScreen;
