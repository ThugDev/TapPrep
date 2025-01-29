import axiosInstance from './axiosInstance';
import { GetProblemListProps, GetProblemListResponse } from './type';

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
