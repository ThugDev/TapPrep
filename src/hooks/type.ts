import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../type';

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
