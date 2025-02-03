import React, { useEffect } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { ErrorScreen } from '../ErrorScreen';
import { InterviewAnswerProps } from '../../../screens/interview/type';
import ProblemAnswerText from '../ProblemAnswerText';
import ProblemAnswerOX from '../ProblemAnswerOX';
import OptionList from '../OptionList';
import AnswerExplanation from './AnswerExplanation';
import { useAnswerForm } from '../../../hooks/useAnswerForm';
import { useSubmitAnswer } from '../../../hooks/useSubmitAnswer';
import { useAnswerInitialization } from '../../../hooks/useAnswerinitialization';
import AnswerForm from './AnswerForm';

const Answer = ({ data }: InterviewAnswerProps) => {
    if (!data || !data.problemData) {
        return <ErrorScreen errorMessage="답안 제출란을 불러오지 못했습니다." />;
    }

    const { formData, handleSelectedOption, setAnswerText, setAnswerOX } = useAnswerForm();
    const { responseData = null, submitAnswer, isLoading } = useSubmitAnswer(data.problemData.problem_id);

    const isAnswerDisabled = data.isSolved || isLoading;

    useAnswerInitialization({ data, setAnswerText, setAnswerOX, handleSelectedOption });

    return (
        <View className="w-[80%]">
            {!data?.problemData.options ? (
                <AnswerForm
                    problemType={data.problemData.type}
                    formData={formData}
                    setAnswerText={setAnswerText}
                    setAnswerOX={setAnswerOX}
                />
            ) : (
                <OptionList
                    options={data?.problemData.options}
                    selectedOption={formData.selectedOption}
                    onSelect={handleSelectedOption}
                />
            )}
            <View className="w-full flex justify-center items-end">
                <TouchableOpacity
                    onPress={() => submitAnswer({ formData })}
                    disabled={isAnswerDisabled}
                    className="p-2 mt-4 bg-blue-400 rounded"
                >
                    {isLoading ? <ActivityIndicator color="#fff" /> : <Text>제출</Text>}
                </TouchableOpacity>
            </View>
            <AnswerExplanation
                isCorrect={responseData?.problemResult.isCorrect}
                explanation={responseData?.problemResult.explanation}
                reference={responseData?.problemResult.reference}
            />
        </View>
    );
};
export default Answer;
