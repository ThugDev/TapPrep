import React from 'react';
import {Linking, Text, TouchableOpacity, View} from 'react-native';
import Config from 'react-native-config';

const GitLoginScreen = () => {
  const gitLoginURL = `https://github.com/login/oauth/authorize?client_id=${Config.GITHUB_CLIENT_ID}&state=random_string
`;

  const handleGitLogin = () => {
    Linking.openURL(gitLoginURL);
  };

  return (
    <View>
      <Text>Git Login</Text>
      <TouchableOpacity onPress={handleGitLogin}>
        <Text>Git</Text>
      </TouchableOpacity>
    </View>
  );
};
export default GitLoginScreen;
