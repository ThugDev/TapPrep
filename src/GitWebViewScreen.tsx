import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Linking, View} from 'react-native';
import Config from 'react-native-config';
import {WebView, WebViewNavigation} from 'react-native-webview';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackPramList} from '../App';

export type GitWebViewScreenProps = {
  navigation: StackNavigationProp<RootStackPramList, 'GitWebViewScreen'>;
};

const GitWebViewScreen = ({navigation}: GitWebViewScreenProps) => {
  const [loading, setLoading] = useState(true);

  const gitLoginURL = `https://github.com/login/oauth/authorize?client_id=${Config.GITHUB_CLIENT_ID}&state=random_string`;

  useEffect(() => {
    const handleRedirect = (event: {url: string}) => {
      const {url} = event;
      console.log('Redirect URL:', url);

      if (url.startsWith('myapp://auth/callback')) {
        const code = url.split('?code=')[1];
        if (code) {
          console.log('Authorization Code:', code);
          navigation.navigate('GitLoginScreen', {authCode: code});
        }
      }
    };

    // addListener로 이벤트 리스너 등록
    const linkingListener = Linking.addListener('url', handleRedirect);

    // 앱이 이미 열려있는 상태에서 URL을 처리할 수 있도록 초기 URL 확인
    Linking.getInitialURL().then(url => {
      if (url && url.startsWith('myapp://auth/callback')) {
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

  const handleWebViewNavigationStateChange = (event: WebViewNavigation) => {
    const {url} = event;
    console.log('WebView URL:', url);

    // 리디렉션 URL을 처리할 때 필요한 로직
    if (url.startsWith('myapp://auth/callback')) {
      const code = url.split('?code=')[1];
      if (code) {
        console.log('Authorization Code:', code);
        navigation.navigate('GitLoginScreen', {authCode: code});
      }
    }
  };

  return (
    <View className="flex-1">
      <WebView
        source={{uri: gitLoginURL}}
        onNavigationStateChange={handleWebViewNavigationStateChange}
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
