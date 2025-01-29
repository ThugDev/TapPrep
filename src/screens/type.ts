import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../type';
import { RouteProp } from '@react-navigation/native';

// GitLoginScreen의 props type
export type GitLoginScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'GitLoginScreen'>;
};

// GitWebViewScreen의 props type
export type GitWebViewScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Main'>;
};

export type ProblemListScreenRouteProps = RouteProp<
  RootStackParamList,
  'ProblemListScreen'
>;

// difficulty 변경 핸들러 타입
export type handleDifficultyProps = {
  difficultyValue: number;
};

export type ProblemListScreenProps = {
  problemList: { problem_id: number; title: string }[];
  nextPage: number | boolean;
};
