import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import Config from 'react-native-config';
import { WebView } from 'react-native-webview';
import { useGitHubRedirect } from '../hooks/useGitHubRedirect';
import { GitWebViewScreenProps } from './type';

const GitWebViewScreen = ({ navigation }: GitWebViewScreenProps) => {
    const [loading, setLoading] = useState(true);
    const gitLoginURL = `https://github.com/login/oauth/authorize?client_id=${Config.GITHUB_CLIENT_ID}&state=mobile`;
    useGitHubRedirect({ navigation });

    return (
        <View className="flex-1">
            <WebView
                source={{ uri: gitLoginURL }}
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
