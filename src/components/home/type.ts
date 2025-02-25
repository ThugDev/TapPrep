export type UserProfileProps = {
    profileImage: string | undefined;
    nickName: string | undefined;
    userName: string | undefined;
};

export type ToggleType = 'FE' | 'BE';

export type ToggleSwitchProps = {
    onToggle?: (type: ToggleType) => void;
};
