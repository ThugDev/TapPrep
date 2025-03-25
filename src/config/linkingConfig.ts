export const Linking = {
    prefixes: ['tapprep1029://'], // 앱의 URI 스키마
    config: {
        screens: {
            IntroScreen: 'auth/callback', // 'tapprep1029://auth/callback'을 GitLoginScreen에 매핑
        },
    },
};
