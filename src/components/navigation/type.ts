export type TabData = {
    key: string;
    isFocused: boolean;
    onPress: () => void;
    accessibilityLabel?: string;
    icon: () => React.ReactNode;
};

export type RootTabParamList = {
    Home: undefined;
    DashBoardScreen: undefined;
    Interview: undefined;
    InterviewScreen: undefined;
};

export type InterviewStackParamList = {
    ProblemListScreen: { selectedSector: string };
    ProblemDetailScreen: { problemId: number };
};
