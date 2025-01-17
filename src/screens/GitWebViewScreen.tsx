import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Linking, View} from 'react-native';
import Config from 'react-native-config';
import {WebView} from 'react-native-webview';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackPramList} from '../../App';
import {postGitLogin} from '../apis/gitLogin';

export type GitWebViewScreenProps = {
  navigation: StackNavigationProp<RootStackPramList, 'GitWebViewScreen'>;
};

const GitWebViewScreen = ({navigation}: GitWebViewScreenProps) => {
  const [loading, setLoading] = useState(true);

  const gitLoginURL = `https://github.com/login/oauth/authorize?client_id=${Config.GITHUB_CLIENT_ID}&state=random_string`;

  useEffect(() => {
    const handleRedirect = async (event: {url: string}) => {
      const {url} = event;
      // 앱이 포그라운드에 있을 때 딥 링크 처리
      if (url.startsWith('tapprep1029://auth/callback')) {
        const code = url.split('?code=')[1].split('&')[0].trim();
        if (code) {
          try {
            const response = await postGitLogin(code);
            console.log(response.data);
            return response.data;
          } catch {
            throw new Error('로그인 토큰 에러');
          }
        }
        navigation.navigate('GitLoginScreen', {authCode: code});
      }
    };

    // 이벤트 리스너 등록
    const linkingListener = Linking.addListener('url', handleRedirect);

    // 앱이 처음 열릴 때 URL 확인
    Linking.getInitialURL().then(url => {
      if (url && url.startsWith('tapprep1029://auth/callback')) {
        const code = url.split('?code=')[1];
        if (code) {
          navigation.navigate('GitLoginScreen', {authCode: code});
        }
      }
    });

    return () => {
      linkingListener.remove();
    };
  }, [navigation]);

  return (
    <View className="flex-1">
      <WebView
        source={{uri: gitLoginURL}}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
      {loading && (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          className="absolute top-1/2 left-1/2 -translate-[25px]"
        />
      )}
    </View>
  );
};

export default GitWebViewScreen;
