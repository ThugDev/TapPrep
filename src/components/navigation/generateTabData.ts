import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {TabData} from './type';

/**
 * @function generateTabData
 * @description BottomTabBar애 사용될 각 탭의 데이터를 생성하는 함수.
 *
 * @param route - 현재 탭을 나타내는 라우트 객체
 * @param index - 현재 탭의 인덱스
 * @param state - BottomTabBar의 상태 객체
 * @param descriptors - 각 라우트에 대한 탭 바 옵션들
 * @param navigation -  탭 내비게이션 객체
 *
 * @returns {TabData} 생성된 탭 데이터 객체
 *
 * @example
 * ```tsx
 * const tabDatas = generateTabData(route, index, state, descriptors, navigation);
 * ```
 *
 * @remarks
 * - `options.tabBarLabel`이 함수인 경우, 해당 함수의 반환값을 탭 라벨로 사용.
 * - `onPress`는 탭이 눌렸을 때 호출, 해당 탭으로 화면을 전환.
 * - 탭이 포커스된 상태인지 여부는 `state.index`로 비교하여 설정
 */

export const generateTabData = (
  route: (typeof state.routes)[number],
  index: number,
  state: BottomTabBarProps['state'],
  descriptors: BottomTabBarProps['descriptors'],
  navigation: BottomTabBarProps['navigation'],
): TabData => {
  const {options} = descriptors[route.key];
  const isFocused = state.index === index;

  const label =
    typeof options.tabBarLabel === 'function'
      ? String(
          options.tabBarLabel({
            focused: isFocused,
            color: isFocused ? 'black' : 'gray',
            position: 'below-icon',
            children: route.name,
          }),
        )
      : (options.tabBarLabel as string) ?? options.title ?? route.name;

  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  return {
    key: route.key,
    label,
    isFocused,
    onPress,
    accessibilityLabel: options.tabBarAccessibilityLabel,
  };
};
