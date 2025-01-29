import axiosMockAdapter from 'axios-mock-adapter';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from '../src/apis/axiosInstance';
import { refreshTokens } from '../src/utils/refreshTokens';

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));

jest.mock('../src/utils/refreshTokens', () => ({
  refreshTokens: jest.fn(),
}));

describe('Axios instance', () => {
  let mock: axiosMockAdapter;

  beforeEach(() => {
    mock = new axiosMockAdapter(axiosInstance);
  });

  afterEach(() => {
    mock.reset();
  });

  it('should retry request after 401 error and refresh token', async () => {
    // Mock AsyncStorage
    (AsyncStorage.getItem as jest.Mock)
      .mockResolvedValueOnce('expired_token') // 기존 만료된 토큰
      .mockResolvedValueOnce('new_token'); // 새로운 토큰

    // Mock refreshTokens 함수
    (refreshTokens as jest.Mock).mockResolvedValueOnce({
      accessToken: 'new_token',
    }); // refreshTokens가 새로운 토큰을 반환한다고 가정

    // Mock API endpoint and 401 response
    mock.onGet('/protected-endpoint').replyOnce(401); // 첫 번째 요청에 401 응답

    // Mock new token request (재시도 요청)
    mock.onGet('/protected-endpoint').replyOnce(200, { data: 'success' }); // 두 번째 요청에 성공 응답

    // Test the request
    const response = await axiosInstance.get('/protected-endpoint');

    expect(response.data).toEqual('success');
    expect(AsyncStorage.setItem).toHaveBeenCalledWith('authToken', 'new_token'); // 새 토큰이 저장된 것 확인
    expect(refreshTokens).toHaveBeenCalledTimes(1); // refreshTokens가 한 번 호출된 것 확인
  });

  it('should not retry request if refreshTokens fails', async () => {
    // Mock AsyncStorage
    (AsyncStorage.getItem as jest.Mock)
      .mockResolvedValueOnce('expired_token') // 만료된 토큰
      .mockResolvedValueOnce('new_token'); // 새로운 토큰

    // Mock refreshTokens 함수 실패
    (refreshTokens as jest.Mock).mockRejectedValueOnce(
      new Error('refresh token failed'),
    );

    // Mock API endpoint and 401 response
    mock.onGet('/protected-endpoint').replyOnce(401); // 첫 번째 요청에 401 응답

    // Test the request
    try {
      await axiosInstance.get('/protected-endpoint');
    } catch (error) {
      expect(error).toBeTruthy();
      expect(refreshTokens).toHaveBeenCalledTimes(1); // refreshTokens가 한 번 호출된 것 확인
      expect(AsyncStorage.setItem).not.toHaveBeenCalled(); // 토큰 갱신이 실패했으므로 새로운 토큰이 저장되지 않음
    }
  });
});
