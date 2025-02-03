import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../type';
import { InterviewAnswerProps } from '../screens/interview/type';

export type UseGitHubRedirectProps = {
    navigation: StackNavigationProp<RootStackParamList>;
};

export type UseProblemListProps = {
    selectedSector: string;
    selectedDifficulty: number;
};

export type sumbitAnswerProps = {
    formData: {
        answerText: string;
        answerOX: boolean | null;
        selectedOption: string | null;
    };
};

export type UserAnswerInitializationProps = {
    data: InterviewAnswerProps['data'];
    setAnswerText: (text: string) => void;
    setAnswerOX: (ox: boolean) => void;
    handleSelectedOption: (option: string) => void;
};
