import AsyncStorage from '@react-native-async-storage/async-storage';
import {postGitLogin} from '../apis/gitLogin';
import {NavigationFunctionProps} from './type';

export const handleGitHubRedirect = async (
  url: string,
  navigation: NavigationFunctionProps,
) => {
  if (url.startsWith('tapprep1029://auth/callback')) {
    const code = url.split('?code=')[1]?.split('&')[0]?.trim();
    if (code) {
      try {
        const responese = await postGitLogin(code);
        AsyncStorage.setItem('AuthToken', responese);
        navigation('GitLoginScreen', {authCode: code});
      } catch (error) {
        throw new Error('로그인 토큰 에러');
      }
    }
  }
};
