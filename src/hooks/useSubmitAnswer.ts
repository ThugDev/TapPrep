import { useState } from 'react';
import { PostProblemAnswerResponse } from '../apis/type';
import { sumbitAnswerProps } from './type';
import { postProblemAnswer } from '../apis/problem';
import { Alert } from 'react-native';

/**
 * @function useSubmitAnswer
 * @description 문제 답안을 제출하는 훅
 *
 * @param problemId - 지출할 문제의 ID
 * @returns {Object} - 제출 응답 데이터 및 제출 함수
 * @returns {PostProblemAnswerResponse | null} responseData - 서버로부터 받은 응답 데이터
 * @returns {(props: submitAnswerProps) => Promise<PostProblemAnswerResponse | void>} submitAnswer - 답안을 제출하는 함수
 *
 * @example
 * const { responseData, submitAnswer } = useSubmitAnswer(problemId);
 *
 * const handleSubmit = async () => {
 *  await submitAnswer({ formData });
 * };
 *
 * @remarks
 * - 문제에 대한 답안을 서버로 제출하고 응답을 상태로 관리.
 * - 중복 제출 시 400 에러를 감지하여 Alert를 표시.
 */

export const useSubmitAnswer = (problemId: number) => {
    const [responseData, setResponseData] = useState<PostProblemAnswerResponse | null>(null);

    const submitAnswer = async ({ formData }: sumbitAnswerProps) => {
        try {
            const option = formData.answerText.trim()
                ? formData.answerText.toLocaleLowerCase()
                : formData.answerOX !== null
                  ? formData.answerOX
                  : Number(formData.selectedOption);

            const response = await postProblemAnswer({
                problemId,
                option,
            });
            setResponseData(response);
            console.log(response);
            return response;
        } catch (error: any) {
            if (error.response.status === 400) {
                Alert.alert('제출 오류', '이미 제출된 답안입니다.');
            } else {
                Alert.alert('오류', '답안 제출 중 오류가 발생했습니다.');
            }
        }
    };

    return { responseData, submitAnswer };
};
