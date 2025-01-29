import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { generateTabData } from './generateTabData';

const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const tabs = state.routes.map((route, index) =>
    generateTabData(route, index, state, descriptors, navigation),
  );

  return (
    <View className="flex-row h-16 bg-gray-100 border-t border-gray-300">
      {tabs.map(({ key, label, isFocused, onPress, accessibilityLabel }) => (
        <TouchableOpacity
          key={key}
          accessibilityRole="button"
          accessibilityState={isFocused ? { selected: true } : {}}
          accessibilityLabel={accessibilityLabel}
          onPress={onPress}
          className="flex-1 justify-center items-center"
        >
          <Text
            className={isFocused ? 'text-black font-bold' : 'text-gray-500'}
          >
            {label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CustomTabBar;
