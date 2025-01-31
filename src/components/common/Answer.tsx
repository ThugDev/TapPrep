import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ErrorScreen } from './ErrorScreen';
import { InterviewAnswerProps } from '../../screens/interview/type';
import { postProblemAnswer } from '../../apis/problem';
import ProblemAnswerText from './ProblemAnswerText';
import ProblemAnswerOX from './ProblemAnswerOX';
import OptionList from './OptionList';

const Answer = ({ data }: InterviewAnswerProps) => {
    const [answerText, setAnswerText] = useState('');
    const [answerOX, setAnswerOX] = useState<boolean | null>(null);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    if (!data) {
        return <ErrorScreen errorMessage="답안 제출란을 불러오지 못했습니다." />;
    }

    const handleSelectedOpion = (key: string) => {
        setSelectedOption(key);
    };

    const handleAnswer = async () => {
        const response = await postProblemAnswer({
            problemId: data.problemData.problem_id,
            option: answerText || answerOX || Number(selectedOption),
        });
        console.log(response);
        return response;
    };

    return (
        <View className="w-[80%]">
            {!data?.problemData.options ? (
                <View className="w-full">
                    <Text className="mb-2">답안 작성</Text>
                    {data.problemData.type === 3 ? (
                        <ProblemAnswerText answerText={answerText} setAnswerText={setAnswerText} />
                    ) : (
                        <ProblemAnswerOX answerOX={answerOX} setAnswerOX={setAnswerOX} />
                    )}
                </View>
            ) : (
                <OptionList
                    options={data?.problemData.options}
                    selectedOption={selectedOption}
                    onSelect={handleSelectedOpion}
                />
            )}
            <View className="w-full flex justify-center items-end">
                <TouchableOpacity onPress={handleAnswer} className="p-2 mt-4 bg-blue-400 rounded">
                    <Text>제출</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default Answer;
