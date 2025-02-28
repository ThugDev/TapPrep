const icons = {
    FeedingBottle: require('../../assets/image/feeding-bottle.png'),
    Chick: require('../../assets/image/chick.png'),
    GraduationCap: require('../../assets/image/graduation-cap.png'),
    BronzeMedal: require('../../assets/image/bronze-medal.png'),
    SliverMedal: require('../../assets/image/sliver-medal.png'),
    GoldMedal: require('../../assets/image/gold-medal.png'),
};

export const LevelList = [
    {
        level: 0,
        title: '이제 막 면접 문제를 풀기 시작한 새내기',
        rank: '탭-베이비',
        image: icons.FeedingBottle,
    },
    {
        level: 1,
        title: '이제 막 면접 문제를 풀기 시작한 새내기',
        rank: '탭-생',
        image: icons.Chick,
    },
    {
        level: 2,
        title: '기본기를 갖춘 성장형 개발자',
        rank: '탭-자',
        image: icons.GraduationCap,
    },
    {
        level: 3,
        title: '심화 문제까지 거뜬한 신의 경지',
        rank: '탭-신',
        image: icons.BronzeMedal,
    },
    {
        level: 4,
        title: '마스터급 면접 문제 정복자',
        rank: '탭-스터',
        image: icons.SliverMedal,
    },
    {
        level: 5,
        title: '면접 질문의 신이자 왕, 최종 보스',
        rank: '탭-신탭-왕',
        image: icons.GoldMedal,
    },
];
