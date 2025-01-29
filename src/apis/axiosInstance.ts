import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Config from 'react-native-config';
import { refreshTokens } from '../utils/refreshTokens';

export const axiosInstance = axios.create({
  baseURL: Config.BASE_URL,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      const noAuthPaths = ['api/auth/git/token'];
      if (noAuthPaths.some((path) => config.url?.includes(path))) {
        return config;
      }
      const token = await AsyncStorage.getItem('authToken');
      if (token) {
        config.headers.Authorization = `bearer ${token}`;
      }
    } catch (error) {
      console.error('request interceptor 에러', error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // 재시도 방지 플래그 설정
      try {
        // navigation 객체를 전달받아서 refreshTokens 함수 호출
        const navigation = originalRequest.navigation; // 요청에서 navigation 객체 추출

        await refreshTokens({ navigation }); // navigation 객체 넘겨서 refreshTokens 호출

        const newToken = await AsyncStorage.getItem('authToken');
        if (newToken) {
          originalRequest.headers.Authorization = `bearer ${newToken}`;
          return axios(originalRequest); // 재시도
        }
      } catch (refreshError) {
        console.error('토큰 갱신 실패', refreshError);
        // 토큰 갱신 실패 시 로그인 화면으로 리디렉션 처리 등
      }
    }

    console.error('API Error', error.response?.data || error.message);
    return Promise.reject(error);
  },
);

export default axiosInstance;
