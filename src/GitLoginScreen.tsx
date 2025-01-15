import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {RootStackPramList} from '../App';

export type GitLoginScreenProps = {
  navigation: StackNavigationProp<RootStackPramList, 'GitLoginScreen'>;
};

const GitLoginScreen = ({navigation}: GitLoginScreenProps) => {
  const handleLoginPress = () => {
    navigation.navigate('GitWebViewScreen');
  };

  return (
    <View className="flex-1 justify-center items-center ">
      <Text className="text-2xl mb-5">GITHUB LOGIN</Text>
      <TouchableOpacity
        onPress={handleLoginPress}
        className="bg-blue-500 rounded p-4 ">
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};
export default GitLoginScreen;
