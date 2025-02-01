import { RouteProp } from '@react-navigation/native';
import { InterviewStackParamList } from '../../components/navigation/type';
import { GetProblemDetailResponse } from '../../apis/type';

export type ProblemListScreenRouteProps = RouteProp<
    InterviewStackParamList,
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

export type ProblemDetailScreenRouteProps = RouteProp<
    InterviewStackParamList,
    'ProblemDetailScreen'
>;

export type InterviewAnswerProps = {
    data?: GetProblemDetailResponse;
};
