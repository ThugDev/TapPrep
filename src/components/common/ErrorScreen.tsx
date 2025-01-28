import React from 'react';
import {Text, View} from 'react-native';

export type ErrorScreenProps = {
  errorMessage: string
}

export const ErrorScreen = ({errorMessage}: ErrorScreenProps) => {
  return (
    <View className="flex justify-center items-center">
      <Text className="text-#ff0000">
        {errorMessage}
      </Text>
    </View>
  );
};
