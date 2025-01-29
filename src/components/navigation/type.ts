export type TabData = {
  key: string;
  label: string;
  isFocused: boolean;
  onPress: () => void;
  accessibilityLabel?: string;
};

export type RootTabParamList = {
  Home: undefined;
  DashBoardScreen: undefined;
  Interview: undefined;
  InterviewScreen: undefined;
};

export type InterviewStackParamList = {
  ProblemListScreen: { selectedSector: string };
  ProblemDetailScreen : {problemId: number};
}