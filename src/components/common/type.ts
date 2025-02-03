import { PostProblemAnswerResponse } from '../../apis/type';

export type ErrorScreenProps = {
    errorMessage: string;
};

export type ProblemContentProps = {
    title?: string;
    description?: string;
};

export type SectorViewProps = {
    setSelectedSector: (sector: string) => void;
    handleOnPress: () => void;
};

export type ProblemItemProps = {
    problem: {
        problem_id: number;
        title: string;
        isSolved: boolean;
    }[];
    handleEndReached: () => void;
    isFetchingNextPage: boolean;
};

export type ProblemListContentProps = {
    isLoading: boolean;
    isError: boolean;
    problems: { problem_id: number; title: string; isSolved: boolean }[];
    handleEndReached: () => void;
    isFetchingNextPage: boolean;
    fetchNextPage: () => void;
    hasNextPage: boolean;
};

// problem answer text
export type ProblemAnswerTextProps = {
    answerText: string;
    setAnswerText: (answerText: string) => void;
};

// Option List type
export type OptionListProps = {
    options?: { [key: string]: string }[];
    selectedOption: string | null;
    onSelect: (key: string) => void;
};

// Problem OX type
export type ProblemAnswerOXProps = {
    answerOX: boolean | null;
    setAnswerOX: (answerOX: boolean) => void;
};
