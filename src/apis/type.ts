export type GitLoginResponse = {
  message: string;
  statusCode: number;
  token: LoginToken;
  userData: LoginUserData;
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

export type RefreshTokenResponse = {
  statusCode: number;
  message: string;
  accessToken: string;
};

export type UserProfileResponse = {
  statusCode: number;
  message: string;
  userData: userData;
};

export type userData = {
  username: string;
  nickname: string;
  profile_image: string;
  level: string;
};
