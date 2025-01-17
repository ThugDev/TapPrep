import axiosInstance from './axiosInstance';

export const postGitLogin = async (code: string) => {
  try {
    const response = await axiosInstance.post('/api/git/token', {code});
    return response.data;
  } catch (error) {
    throw new Error('로그인 토큰 에러');
  }
};
