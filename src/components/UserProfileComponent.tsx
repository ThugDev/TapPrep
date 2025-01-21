import React from 'react';
import {Image, Text, View} from 'react-native';

export type UserProfileProps = {
  profileImage: string | undefined;
  nickName: string | undefined;
  userName: string | undefined;
};

const UserProfileComponent = ({
  profileImage,
  nickName,
  userName,
}: UserProfileProps) => {
  return (
    <View className="w-1/2 h-full flex justify-center items-center">
      <Image source={{uri: profileImage}} className="w-20 h-20 rounded-[50%]" />
      <Text className="py-2">{nickName}</Text>
      <Text>{userName}</Text>
    </View>
  );
};
export default UserProfileComponent;
