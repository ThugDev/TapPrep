import axiosInstance from "./axiosInstance"

export type GetProblemListProps = {
    sector: string;
    difficulty: number;
    page: number | boolean;
    limit: number;
    type: string;
}

export type GetProblemListResponse = {
    problemList: {
        problem_id: number
        title: string
    }[]
    nextPage: number | boolean
}

export const getProblemList = async ({sector, difficulty, page, limit, type}: GetProblemListProps) => {
    const response  = await axiosInstance.get<GetProblemListResponse>(`/api/problem/list?sector=${sector}&difficulty=${difficulty}&page=${page}&limit=${limit}&type=${type}`)
    return response.data
}