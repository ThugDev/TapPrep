// gitLogin.ts 의 타입
export type GitLoginResponse = {
    message: string;
    statusCode: number;
    token: LoginToken;
    userData: LoginUserData;
};

export type RefreshTokenResponse = {
    statusCode: number;
    message: string;
    accessToken: string;
};

export type LoginToken = {
    accessToken: string;
    refreshToken: string;
};

export type LoginUserData = {
    nickname: string;
    profile_image: string;
    username?: string;
};

export type PostRefreshTokenProps = {
    username: string;
    refreshToken: string;
};

// user.ts 의 타입
export type UserProfileResponse = {
    statusCode: number;
    message: string;
    userData: {
        username: string;
        nickname: string;
        profile_image: string;
        level: string;
    };
};

// problem.ts 의 타입
export type GetProblemListProps = {
    sector: string;
    difficulty: number;
    page: number | boolean;
    limit: number;
};

export type GetProblemListResponse = {
    problemList: {
        problem_id: number;
        title: string;
        type: string;
        isSolved: boolean;
    }[];
    nextPage: number | boolean;
};

export type GetProblemDetail = {
    problemId: number;
};

export type GetProblemDetailResponse = {
    statusCode: number;
    message: string;
    isSolved: boolean;
    problemData: {
        problem_id: number;
        title: string;
        description: string;
        hint: string;
        options?: ProblemOption[];
        type: number;
        explanation?: string;
        reference?: string;
        answer?: boolean | string;
        isCorrect?: boolean;
    };
};

export type ProblemOption = {
    [key: string]: string;
};

export type PostProblemAnswerProps = {
    problemId?: number;
    option: number | string | boolean | null;
};

export type PostProblemAnswerResponse = {
    message: string;
    problemResult: {
        answer: string;
        explanation: string;
        isCorrect: boolean;
        problem_id: number;
        reference: string;
        title: string;
    };
    statusCode: number;
};
