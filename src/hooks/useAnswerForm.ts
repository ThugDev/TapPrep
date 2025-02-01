import { useState } from 'react';

/**
 * @function useAnswerForm
 * @description 답변을 관리하는 훅
 *
 * @returns {Object} - 훅에서 반환되는 객체
 * @returns {Object} formData - 현재 입력된 답변 데이터
 * @returns {string} formData.answerText - 사용자 입력 텍스트 답변
 * @returns {boolean | null} formData.answerOX - OX 형식의 답변 (true, false, null)
 * @returns {string | null} formData.selectedOption - 선택형 답변 (옵션 키 값)
 * @returns {(key: string) => void} handleSelectedOption - 선택형 답변을 설정하는 함수
 * @returns {(text: string) => void} setAnswerText - 텍스트 답변을 설정하는 함수
 * @returns {(ox: boolean => void)} setAnswerOX - OX 답변을 설정하는 함수
 *
 * @example
 * const {formData, handleSelectedOption, setAnswerText, setAnswerOX} = useAnswerForm()
 *
 * @remarks
 * - `useState`를 사용하여 답변 데이터를 관리.
 * - 답변 유형에 따라 `answerText`, `answerOX`, `selectedOption` 중 하나를 사용.
 */

export const useAnswerForm = () => {
    const [formData, setFormData] = useState({
        answerText: '',
        answerOX: null as boolean | null,
        selectedOption: null as string | null,
    });

    const handleSelectedOpion = (key: string) => {
        setFormData((prev) => ({ ...prev, selectedOption: key }));
    };

    const setAnswerText = (text: string) => {
        setFormData((prev) => ({ ...prev, answerText: text }));
    };

    const setAnswerOX = (ox: boolean | null) => {
        setFormData((prev) => ({ ...prev, answerOX: ox }));
    };

    return { formData, handleSelectedOpion, setAnswerOX, setAnswerText };
};
