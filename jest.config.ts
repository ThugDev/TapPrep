import type {Config} from 'jest';

const config: Config = {
  preset: 'react-native',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // TypeScript 파일 처리
    '^.+\\.(js|jsx)$': 'babel-jest', // JS/JSX 파일 처리
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!react-native|@react-native|@react-navigation)',
  ], // React Native 관련 모듈을 변환하지 않도록 설정
};

export default config;
