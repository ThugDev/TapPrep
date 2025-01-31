import React, { useState } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { ErrorScreen } from '../../components/common/ErrorScreen';
import { InterviewAnswerProps } from './type';

const InterviewAnswer = ({ data }: InterviewAnswerProps) => {
    const [answerText, setAnswerText] = useState('');

    if (!data) {
        return (
            <ErrorScreen errorMessage="답안 제출란을 불러오지 못했습니다." />
        );
    }

    const handleAnswer = () => {
        console.log(answerText);
    };

    return (
        <View className="w-[80%]">
            {!data?.problemData.options && (
                <View className="w-full">
                    <Text className="mb-2">답안 작성</Text>
                    <View className=" w-full h-[100px] border">
                        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                            <TextInput
                                value={answerText}
                                onChangeText={setAnswerText}
                                placeholder="답안을 입력해주세요..."
                                multiline={true}
                                textAlignVertical="top"
                                className="w-full h-full p-2"
                            />
                        </ScrollView>
                    </View>
                </View>
            )}
            <View className="w-full flex justify-center items-end">
                <TouchableOpacity
                    onPress={handleAnswer}
                    className="p-2 mt-4 bg-blue-400 rounded"
                >
                    <Text>제출</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default InterviewAnswer;
