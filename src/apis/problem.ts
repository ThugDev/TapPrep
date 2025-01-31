import axiosInstance from './axiosInstance';
import {
    GetProblemDetail,
    GetProblemDetailResponse,
    GetProblemListProps,
    GetProblemListResponse,
    PostProblemAnswerProps,
} from './type';

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

// 문제 상세
export const getProblemDetail = async ({ problemId }: GetProblemDetail) => {
    const response = await axiosInstance.get<GetProblemDetailResponse>(
        `/api/problem/${problemId}`,
    );
    return response.data;
};

// 문제 제출
export const postProblemAnswer = async ({
    problemId,
    option,
}: PostProblemAnswerProps) => {
    const response = await axiosInstance.post('/api/problem/answer', {
        problemId,
        option,
    });
    return response.data;
};
