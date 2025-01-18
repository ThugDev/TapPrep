import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackPramList} from '../../type';

// GitLoginScreen의 props type
export type GitLoginScreenProps = {
  navigation: StackNavigationProp<RootStackPramList, 'GitLoginScreen'>;
};

// GitWebViewScreen의 props type
export type GitWebViewScreenProps = {
  navigation: StackNavigationProp<RootStackPramList, 'Home'>;
};
