import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../type';

// GitLoginScreen의 props type
export type GitLoginScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'GitLoginScreen'>;
};

// GitWebViewScreen의 props type
export type GitWebViewScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Main'>;
};

