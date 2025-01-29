import axiosInstance from './axiosInstance';
import { GetProblemDetail, GetProblemDetailResponse, GetProblemListProps, GetProblemListResponse } from './type';

// 문제 리스트 받아오기
export const getProblemList = async ({
  sector,
  difficulty,
  page,
  limit,
}: GetProblemListProps) => {
  const response = await axiosInstance.get<GetProblemListResponse>(
    `/api/problem/list?sector=${sector}&difficulty=${difficulty}&page=${page}&limit=${limit}`,
  );
  return response.data;
};



export const getProblemDetail = async ({problemId}: GetProblemDetail) => {
    const response = await axiosInstance.get<GetProblemDetailResponse>(`/api/problem/${problemId}`)
    return response.data
}
