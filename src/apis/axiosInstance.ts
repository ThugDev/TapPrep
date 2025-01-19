import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Config from 'react-native-config';

export const axiosInstance = axios.create({
  baseURL: `${Config.BASE_URL}`,
});

axiosInstance.interceptors.request.use(
  async config => {
    try {
      const noAuthPaths = ['api/auth/git/token'];
      if (noAuthPaths.some(path => config.url?.includes(path))) {
        return config;
      }

      const token = await AsyncStorage.getItem('authToken');

      console.log(token, 'TOKEN');

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('request interceptor 에러', error);
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error', error.response?.data || error.message);
    return Promise.reject(error);
  },
);

export default axiosInstance;
