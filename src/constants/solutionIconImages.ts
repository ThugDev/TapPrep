import { SectorDataType } from './type';

const icons = {
    HtmlIcon: require('../../assets/icon/HtmlIcon.png'),
    CssIcon: require('../../assets/icon/CssIcon.png'),
    JSIcon: require('../../assets/icon/JSIcon.png'),
    TSIcon: require('../../assets/icon/TSIcon.png'),
    ReactIcon: require('../../assets/icon/ReactIcon.png'),
    NextJSIcon: require('../../assets/icon/NextJSIcon.png'),
};

export const ProblemData: SectorDataType[] = [
    {
        name: 'HTML',
        image: icons.HtmlIcon,
    },
    {
        name: 'CSS',
        image: icons.CssIcon,
    },
    {
        name: 'JavaScript',
        image: icons.JSIcon,
    },
    {
        name: 'TypeScript',
        image: icons.TSIcon,
    },
    {
        name: 'React',
        image: icons.ReactIcon,
    },
    {
        name: 'NextJS',
        image: icons.NextJSIcon,
    },
];

export const BeProblemData: SectorDataType[] = [
    {
        name: 'NodeJS',
        image: icons.HtmlIcon,
    },
    {
        name: 'SpringBoot',
        image: icons.CssIcon,
    },
    {
        name: 'C++',
        image: icons.ReactIcon,
    },
    {
        name: 'Python',
        image: icons.NextJSIcon,
    },
];
