import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ErrorScreen } from './ErrorScreen';
import { InterviewAnswerProps } from '../../screens/interview/type';
import { postProblemAnswer } from '../../apis/problem';
import ProblemAnswerText from './ProblemAnswerText';
import ProblemAnswerOX from './ProblemAnswerOX';
import OptionList from './OptionList';
import { PostProblemAnswerResponse } from '../../apis/type';
import AnswerExplanation from './AnswerExplanation';

const Answer = ({ data }: InterviewAnswerProps) => {
    const [formData, setFormData] = useState({
        answerText: '',
        answerOX: null as boolean | null,
        selectedOption: null as string | null,
    });
    const [responseData, setResponseData] = useState<PostProblemAnswerResponse | null>(null);

    if (!data) {
        return <ErrorScreen errorMessage="답안 제출란을 불러오지 못했습니다." />;
    }

    const handleSelectedOpion = (key: string) => {
        setFormData((prev) => ({ ...prev, selectedOption: key }));
    };

    const handleAnswer = async () => {
        const response = await postProblemAnswer({
            problemId: data.problemData.problem_id,
            option: formData.answerText.toLocaleLowerCase() || formData.answerOX || Number(formData.selectedOption),
        });
        setResponseData(response);
        return response;
    };

    return (
        <View className="w-[80%]">
            {!data?.problemData.options ? (
                <View className="w-full">
                    <Text className="mb-2">답안 작성</Text>
                    {data.problemData.type === 3 ? (
                        <ProblemAnswerText
                            answerText={formData.answerText}
                            setAnswerText={(text) => setFormData((prev) => ({ ...prev, answerText: text }))}
                        />
                    ) : (
                        <ProblemAnswerOX
                            answerOX={formData.answerOX}
                            setAnswerOX={(ox) => setFormData((prev) => ({ ...prev, answerOX: ox }))}
                        />
                    )}
                </View>
            ) : (
                <OptionList
                    options={data?.problemData.options}
                    selectedOption={formData.selectedOption}
                    onSelect={handleSelectedOpion}
                />
            )}
            <View className="w-full flex justify-center items-end">
                <TouchableOpacity onPress={handleAnswer} className="p-2 mt-4 bg-blue-400 rounded">
                    <Text>제출</Text>
                </TouchableOpacity>
            </View>
            <AnswerExplanation responseData={responseData} />
        </View>
    );
};
export default Answer;
