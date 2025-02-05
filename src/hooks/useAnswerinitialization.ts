import { useEffect } from 'react';
import { UserAnswerInitializationProps } from './type';

/**
 * @function useAnswerInitialization
 * @description
 * 풀이한 문제의 정답을 받아와 `formData`에 초기 값을 설정하는 훅
 * 문제 유형에 따라 `setAnswerText`, `setAnswerOX`, `handleSelectedOption`을 사용하여 값을 설정
 *
 * @param {Object} params
 * @param {UserAnswerInitializationProps['data']} params.data - 문제 및 사용자의 풀이 데이터
 * @param {Function} params.setAnswerText - 텍스트 형식 정답을 설정하는 함수
 * @param {Function} params.setAnswerOX - OX 형식 정답을 설정하는 함수
 * @param {Function} params.handleSelectedOption - 선택형 정답을 설정하는 함수
 *
 * @example
 * ```tsx
 * useAnswerInitialization({
 *  data,
 *  setAnswerText,
 *  setAnswerOX,
 *  handleSelectedOption
 * })
 * ```
 *
 * @remarks
 * `data.isSolved`가 `true`일 경우에만 정답 데이터를 설정.
 */

export const useAnswerInitialization = ({
    data,
    setAnswerText,
    setAnswerOX,
    handleSelectedOption,
}: UserAnswerInitializationProps) => {
    const { type, answer } = data?.problemData ?? {};

    useEffect(() => {
        if (data?.isSolved === true) {
            if (type === 3) {
                setAnswerText(answer as string);
            } else if (type === 2) {
                setAnswerOX(answer as boolean);
            } else {
                handleSelectedOption(answer?.toString() as string);
            }
        }
    }, [data?.isSolved, JSON.stringify(data?.problemData)]);
};
