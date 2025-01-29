import { getProblemList } from '../apis/problem';
import { useInfiniteQuery } from '@tanstack/react-query';
import { UseProblemListProps } from './type';
import { GetProblemListResponse } from '../apis/type';

/**
 * @function useProblemList
 * @description 선택된 섹터와 난이도에 맞는 문제 목록을 불러오는 훅.
 *
 * @param {UseProblemListProps} props - 선택된 섹터와 난이도 값을 포함한 객체
 * @param {string} props.selectedSector - 선택된 섹터
 * @param {string} props.selectedDifficulty - 선택된 난이도
 *
 * @returns {Object} - 훅에서 반환하는 값들
 * @returns {object | undefined} data - 페이지네이션된 문제 목록 데이터
 * @returns {function} fetchNextPage - 다음 페이지 데이터를 불러오는 함수
 * @returns {boolean} hasNextpage - 다음 페이지가 있는지 여부
 * @returns {boolean} isFetchingNextpage - 다음 페이지를 불러오는 중인지 여부
 * @returns {boolean} isLoading - 데이터 로딩 중인지 여부
 * @returns {boolean} isError - 에러가 발생했는지 여부
 *
 * @example
 * ```tsx
 * const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError } = useProblemList({ selectedSector: selectedSector, selectedDifficulty: selectedDifficulty });
 * ```
 *
 * @remarks
 * - `useInfiniteQuery`를 사용하여 무한 스크롤 방식으로 데이터를 불러옴.
 * - `getNextPageParam`에서 `nextPage`가 없으면 더 이상 데이터를 불러오지 않음.
 * - 페이지네이션된 데이터는 `data.pages`에서 확인할 수 있음.
 * - `isLoading`이 `true`일 때는 데이터가 로딩 중이고 `isError`가 `true`일 때는 데이터 요청 실패.
 */

export const useProblemList = ({
  selectedSector,
  selectedDifficulty,
}: UseProblemListProps) => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery<GetProblemListResponse>({
    queryKey: ['problemData', selectedSector, selectedDifficulty],
    queryFn: async ({ pageParam }) => {
      const page = typeof pageParam === 'number' ? pageParam : 1;
      return getProblemList({
        sector: selectedSector,
        difficulty: selectedDifficulty,
        page,
        limit: 10,
      });
    },
    getNextPageParam: (lastPage) => {
      return lastPage.nextPage ? lastPage.nextPage : undefined;
    },
    initialPageParam: 1,
  });

  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  };
};
