import React, { useRef } from 'react';
import { View, Pressable, Animated } from 'react-native';
import { ToggleSwitchProps, ToggleType } from './type';

const ToggleSwitch = ({ onToggle }: ToggleSwitchProps) => {
    const translateX = useRef(new Animated.Value(0)).current;
    const feOpacity = useRef(new Animated.Value(1)).current;
    const beOpacity = useRef(new Animated.Value(0)).current;

    const handlePress = (type: ToggleType) => {
        onToggle?.(type);

        Animated.parallel([
            Animated.timing(translateX, {
                toValue: type === 'FE' ? 0 : 50,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(feOpacity, {
                toValue: type === 'FE' ? 1 : 0,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(beOpacity, {
                toValue: type === 'BE' ? 1 : 0,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start();
    };

    return (
        <View className="w-[104px] h-8 rounded-[20px] p-2 flex-row items-center bg-[#E6F1F9]">
            <Animated.View
                className="absolute w-[50px] h-7 bg-white rounded-[18px] top-[2px] left-[2px]"
                style={{ transform: [{ translateX }] }}
            />
            <Pressable
                onPress={() => handlePress('FE')}
                className=" absolute flex-1 top-2 left-[18px] items-center justify-center"
            >
                <Animated.Text style={{ opacity: feOpacity }} className="font-semibold text-[#0F99E4]">
                    FE
                </Animated.Text>
            </Pressable>
            <Pressable
                onPress={() => handlePress('BE')}
                className=" absolute flex-1 top-2 right-4 items-center justify-center"
            >
                <Animated.Text style={{ opacity: beOpacity }} className="font-semibold text-[#0F99E4]">
                    BE
                </Animated.Text>
            </Pressable>
        </View>
    );
};

export default ToggleSwitch;
