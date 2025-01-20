export type GitLoginResponse = {
  message: string;
  statusCode: number;
  token: LoginToken;
};

export type LoginToken = {
  accessToken: string;
  refershToken: string;
  userData: LoginUserData;
};

export type LoginUserData = {
  nickname: string;
  profile_image: string;
  username: string;
};

export type PostRefreshTokenProps = {
  username: string;
  refreshToken: string;
};
