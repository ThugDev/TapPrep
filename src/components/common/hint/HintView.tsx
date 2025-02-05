import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { HintViewProps } from './type';

const HintView = ({ setClickHint, hint }: HintViewProps) => {
    return (
        <View className=" absolute w-full min-h-2 pb-5 rounded bg-gray-400 shadow-sm shadow-black">
            <View className="w-full flex justify-center items-end">
                <TouchableOpacity onPress={() => setClickHint(false)} className=" py-1 pr-2">
                    <Text>x</Text>
                </TouchableOpacity>
            </View>
            <View className="w-full px-2">
                <Text>{hint}</Text>
            </View>
        </View>
    );
};
export default HintView;
