import React from 'react';
import { ScrollView, TextInput, View } from 'react-native';
import { ProblemAnswerTextProps } from './type';

const ProblemAnswerText = ({
    answerText,
    setAnswerText,
}: ProblemAnswerTextProps) => {
    return (
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
    );
};
export default ProblemAnswerText;
