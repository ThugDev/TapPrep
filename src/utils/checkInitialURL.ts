import { Linking } from 'react-native';
import { useGitHubRedirectProps } from '../hooks/type';

/**
 * @function checkInitialURL
 * @description React Native 앱이 처음 실행될 때 딥 링크 URL을 확인 해, GitHub OAuth 인증 콜백 처리.
 *
 * @param {StackNavigationProp<RootStackPramList>} navigation
 *
 * @example
 * ```tsx
 * const App = () => {
 *  userEffect(() => {
 *      checkInitialURL(navigation);
 *  },[])
 * }
 * ```
 *
 * @remarks
 * - `Linking.getInitialURL`을 사용하여 앱이 처음 실행될 때 전달된 URL을 확인.
 * - URL이 `tapprep1029://auth/callback` 형식으로 시작하면 인증 코드를 추출.
 * - 인증 코드가 유효하면 `navigation.navigate('Home')`을 호출 -> 홈 화면으로 이동.
 *
 * @throws {Error} URL 형식이 올바르지 않거나 인증 코드가 없을 경우 오류 발생.
 *
 * @returns {Promise<void>} 반환값 없음
 */

export const checkInitialURL = async ({
  navigation,
}: useGitHubRedirectProps) => {
  const url = await Linking.getInitialURL();
  if (url && url.startsWith('tapprep1029://auth/callback')) {
    const code = url.split('?code=')[1];
    if (code) {
      navigation.navigate('Home');
    }
  }
};
