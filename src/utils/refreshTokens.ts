import AsyncStorage from '@react-native-async-storage/async-storage';
import {postRefreshToken} from '../apis/gitLogin';
import {useGitHubRedirectProps} from '../hooks/type';

/**
 * @function refreshTokens
 * @description 저장된 `refreshToken`을 사용하여 새로운 `accessToken`을 발급 받은 뒤 저장.
 *
 * @param {StackNavigationProp<RootStackPramList>} navigation
 *
 * @example
 * ```tsx
 * const App = () => {
 *  useEffect(() => {
 *      referchTokens({navigation})
 *  },[])
 * }
 * ```
 *
 * @remarks
 * - `AsyncStorage`에서 `refreshToken`과 `userName`을 가져와 갱신 요청을 보냄.
 * - `postRefreshToken` API 호출 후 새 `accessToken`을 `AsyncStorage`에 저장.
 * - `refreshToken` 또는 `userName`이 없을 경우 실패로 간주, 로그인 화면으로 이동.
 *
 * @throws {Error} - 리프레시 토큰이 없거나 API 호출 실패 시 오류 발생.
 *
 * @returns {Promise<void>} 반환값 없음
 */

export const refreshTokens = async ({navigation}: useGitHubRedirectProps) => {
  try {
    const refershToken = await AsyncStorage.getItem('refreshToken');
    const userName = await AsyncStorage.getItem('userName');
    if (userName && refershToken) {
      const response = await postRefreshToken({
        username: userName,
        refreshToken: refershToken,
      });
      await AsyncStorage.setItem('authToken', response.accessToken);
    } else {
      throw new Error('리프레시 토큰이 존재하지 않습니다.');
    }
  } catch (error) {
    console.error('토큰 갱신 실패', error);
    navigation.navigate('GitLoginScreen');
  }
};
