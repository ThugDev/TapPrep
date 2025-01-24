export type TabData = {
  key: string;
  label: string;
  isFocused: boolean;
  onPress: () => void;
  accessibilityLabel?: string;
};
