import { PostProblemAnswerResponse } from '../apis/type';
import { sumbitAnswerProps } from './type';
import { postProblemAnswer } from '../apis/problem';
import { Alert } from 'react-native';
import { useMutation, useQueryClient } from '@tanstack/react-query';

/**
 * @function useSubmitAnswer
 * @description 문제 답안을 제출하는 훅
 *
 * @param problemId - 지출할 문제의 ID
 * @returns {Object} - 제출 응답 데이터 및 제출 함수
 * @returns {boolean} isLoading - 답안 제출 중 여부
 * @returns {boolean} isError - 답안 제출 오류 여부
 * @returns {PostProblemAnswerResponse | null} responseData - 서버로부터 받은 응답 데이터
 * @returns {(props: submitAnswerProps) => void} submitAnswer - 답안을 제출하는 함수
 *
 * @example
 * const { responseData, submitAnswer, isLoading } = useSubmitAnswer(problemId);
 *
 * const handleSubmit = async () => {
 *  await submitAnswer({ formData });
 * };
 *
 * @remarks
 * - 문제에 대한 답안을 서버로 제출하고 응답을 상태로 관리.
 * - 제출 성공 시 문제 리스트를 갱신하여 UI 업데이트.
 * - 중복 제출 시 400 에러를 감지하여 Alert를 표시.
 * - 기타 오류 발생 시 Alert를 통해 사용자에게 알림.
 */

export const useSubmitAnswer = (problemId: number) => {
    const queryClient = useQueryClient();

    const mutation = useMutation<PostProblemAnswerResponse, any, sumbitAnswerProps>({
        mutationFn: async ({ formData }) => {
            const option = formData.answerText.trim()
                ? formData.answerText.toLocaleLowerCase()
                : formData.answerOX !== null
                  ? formData.answerOX
                  : Number(formData.selectedOption);
            return postProblemAnswer({
                problemId,
                option,
            });
        },
        onSuccess: () => {
            // 문제 리스트를 갱신하여 UI 업데이트
            queryClient.invalidateQueries({ queryKey: ['problemData'] });
            Alert.alert('제출 완료', '답안이 정상적으로 제출되었습니다.');
        },
        onError: (error: any) => {
            if (error.response?.status === 400) {
                Alert.alert('제출 오류', '이미 제출된 답안입니다.');
            } else {
                Alert.alert('오류', '답안 제출 중 오류가 발생했습니다.');
            }
        },
    });

    return {
        submitAnswer: mutation.mutate,
        isLoading: mutation.isPending,
        isError: mutation.isError,
        responseData: mutation.data,
    };
};
