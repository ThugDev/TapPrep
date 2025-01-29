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
  }[];
  nextPage: number | boolean;
};
