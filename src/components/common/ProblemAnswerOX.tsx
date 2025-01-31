import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export type ProblemAnswerOX = {
    answerOX: boolean | null;
    setAnswerOX: (answerOX: boolean) => void;
};

const ProblemAnswerOX = ({ answerOX, setAnswerOX }: ProblemAnswerOX) => {
    return (
        <View className="flex-row gap-4 justify-center items-center">
            <TouchableOpacity
                onPress={() => setAnswerOX(true)}
                className={`px-6 py-3 rounded-lg ${answerOX ? 'bg-green-500' : 'bg-gray-300'}`}
            >
                <Text className="text-white text-lg font-bold">O</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setAnswerOX(false)}
                className={`px-6 py-3 rounded-lg ${!answerOX ? 'bg-green-500' : 'bg-gray-300'}`}
            >
                <Text className="text-white text-lg font-bold">X</Text>
            </TouchableOpacity>
        </View>
    );
};
export default ProblemAnswerOX;
