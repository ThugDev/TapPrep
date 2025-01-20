import {useEffect} from 'react';
import {postGitLogin} from '../apis/gitLogin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Linking} from 'react-native';
import {useGitHubRedirectProps} from './type';
import {checkInitialURL} from '../utils/checkInitialURL';

/**
 * @function useGitHubRedirect
 * @description GitHub OAuth 인증을 담당하는 훅입니다. 딥 링크 이벤트를 감지하여 GitHub 로그인을 진행
 *
 * @param {StackNavigationProp<RootStackPramList>} props.navigation - React Navigation의 `navigation` 객체로, 화면 전환을 처리
 *
 * @example
 * ```tsx
 *  type Props = {
 *   navigation: StackNavigationProp<RootStackPramList, 'GitLoginScreen'>;
 * };
 *
 * const GitHubLoginScreen: React.FC<Props> = ({navigation}) => {
 *   useGitHubRedirect({navigation});
 * }
 * ```
 *
 * @returns 반환값 없음
 *
 * @remarks
 * - 앱이 실행 중일 때 `Linking.addListener`를 통해 딥 링크 이벤트를 감지하고, 인증 URL을 처리.
 * - 앱이 처음 열릴 때 `Linking.getInitialURL`을 사용하여 인증 URL을 확인.
 * - GitHub에서 반환된 인증 코드는 `postGitLogin` API를 호출하여 서버에 전달되고, 반환된 토큰은 `AsyncStorage`에 저장.
 * - 인증이 완료되면 `navigation.navigate`를 사용해 다음 화면으로 이동.
 *
 * @throws {Error} 로그인 토큰을 처리하는 중 오류가 발생할 경우 예외를 발생시킴
 */

export const useGitHubRedirect = ({navigation}: useGitHubRedirectProps) => {
  useEffect(() => {
    const handleRedirect = async (event: {url: string}) => {
      const {url} = event;
      // 앱이 포그라운드에 있을 때 딥 링크 처리
      if (url.startsWith('tapprep1029://auth/callback')) {
        const code = url.split('?code=')[1].split('&')[0].trim();
        if (code) {
          try {
            const response = await postGitLogin(code);
            AsyncStorage.setItem('authToken', response.token.accessToken);
            AsyncStorage.setItem('refreshToken', response.token.refershToken);
            AsyncStorage.setItem('userName', response.token.userData.username);
            navigation.navigate('Home');
          } catch {
            navigation.navigate('GitLoginScreen');
            throw new Error('로그인 토큰 에러');
          }
        }
      }
    };

    // 이벤트 리스너 등록
    const linkingListener = Linking.addListener('url', handleRedirect);

    // 앱 실행 시 초기 URL 확인
    checkInitialURL({navigation});

    return () => {
      linkingListener.remove();
    };
  }, [navigation]);
};
