import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ErrorScreen } from '../ErrorScreen';
import { InterviewAnswerProps } from '../../../screens/interview/type';
import ProblemAnswerText from '../ProblemAnswerText';
import ProblemAnswerOX from '../ProblemAnswerOX';
import OptionList from '../OptionList';
import AnswerExplanation from './AnswerExplanation';
import { useAnswerForm } from '../../../hooks/useAnswerForm';
import { useSubmitAnswer } from '../../../hooks/useSubmitAnswer';

const Answer = ({ data }: InterviewAnswerProps) => {
    if (!data) {
        return <ErrorScreen errorMessage="답안 제출란을 불러오지 못했습니다." />;
    }

    const { formData, handleSelectedOpion, setAnswerText, setAnswerOX } = useAnswerForm();
    const { responseData, submitAnswer } = useSubmitAnswer(data.problemData.problem_id);

    console.log(data);

    return (
        <View className="w-[80%]">
            {!data?.problemData.options ? (
                <View className="w-full">
                    <Text className="mb-2">답안 작성</Text>
                    {data.problemData.type === 3 ? (
                        <ProblemAnswerText answerText={formData.answerText} setAnswerText={setAnswerText} />
                    ) : (
                        <ProblemAnswerOX answerOX={formData.answerOX} setAnswerOX={setAnswerOX} />
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
                <TouchableOpacity onPress={() => submitAnswer({ formData })} className="p-2 mt-4 bg-blue-400 rounded">
                    <Text>제출</Text>
                </TouchableOpacity>
            </View>
            <AnswerExplanation responseData={responseData} />
            {/* {data.isSolved === true && <AnswerExplanation responseData={responseData} isSolved={data.isSolved} />} */}
        </View>
    );
};
export default Answer;
