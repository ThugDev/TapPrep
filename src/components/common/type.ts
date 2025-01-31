export type ErrorScreenProps = {
    errorMessage: string;
};

export type ProblemContentProps = {
    title?: string;
    description?: string;
};

export type HintButtonProps = {
    hint?: string;
};

export type SectorViewProps = {
    setSelectedSector: (sector: string) => void;
    handleOnPress: () => void;
};

export type ProblemItemProps = {
    problem: {
        problem_id: number;
        title: string;
    }[];
    handleEndReached: () => void;
    isFetchingNextPage: boolean;
};

export type ProblemListContentProps = {
    isLoading: boolean;
    isError: boolean;
    problems: { problem_id: number; title: string }[];
    handleEndReached: () => void;
    isFetchingNextPage: boolean;
    fetchNextPage: () => void;
    hasNextPage: boolean;
};

export type HintViewProps = {
    setClickHint: (clickHint: boolean) => void;
    hint?: string;
};
