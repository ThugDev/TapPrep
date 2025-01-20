import axiosInstance from './axiosInstance';
import {GitLoginResponse, PostRefreshTokenProps} from './type';

export const postGitLogin = async (code: string) => {
  try {
    const response = await axiosInstance.post<GitLoginResponse>(
      '/api/auth/git/token',
      {code},
    );
    return response.data;
  } catch {
    throw new Error('로그인 토큰 에러');
  }
};

export const postRefreshToken = async ({
  username,
  refreshToken,
}: PostRefreshTokenProps) => {
  try {
    const response = await axiosInstance.post('/api/auth/token/refresh', {
      username,
      refreshToken,
    });
    return response;
  } catch {
    throw new Error('refresh 토큰 에러');
  }
};
