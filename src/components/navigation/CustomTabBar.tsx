import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { generateTabData } from './generateTabData';

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
    const tabs = state.routes.map((route, index) => generateTabData(route, index, state, descriptors, navigation));

    return (
        <View className="flex-row h-16 bg-white border-t border-[#E1F2FF]">
            {tabs.map(({ key, isFocused, onPress, accessibilityLabel, icon }) => (
                <TouchableOpacity
                    key={key}
                    accessibilityRole="button"
                    accessibilityState={isFocused ? { selected: true } : {}}
                    accessibilityLabel={accessibilityLabel}
                    onPress={onPress}
                    className="flex-1 justify-center items-center"
                >
                    {icon && icon()}
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default CustomTabBar;
