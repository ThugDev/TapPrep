import { useState } from 'react';

/**
 * @function useDifficulty
 * @description 난이도 상태를 관리하는 훅. 선택한 난이도를 추적하고 변경하는 기능 제공.
 *
 * @returns {Object} - 훅에서 반환된 값.
 * @returns {number} selectedDifficulty - 현재 선택된 난이도 값
 * @returns {function} changeDifficulty - 난이도를 변경하는 함수
 *
 * @example
 * ```tsx
 * const { selectedDifficulty, setSelectedDifficulty } = useDifficulty();
 * ```
 *
 * @remarks
 * - `selectedDifficulty`는 기본값으로 `1`로 설정.
 * - `changeDifficulty` 함수는 사용자가 선택한 난이도 값을 `selectedDifficulty`에 설정하는 역할.
 * - 난이도 값은 number로 설정, `changeDifficulty` 함수 호출 시 새로운 난이도 값으로 변경
 */

export const useDifficulty = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<number>(1);

  const changeDifficulty = (difficulty: number) => {
    setSelectedDifficulty(difficulty);
  };

  return { selectedDifficulty, changeDifficulty };
};
