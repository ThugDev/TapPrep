import { useEffect } from 'react';
import {
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

/**
 * @function useFadeAnimated
 * @description 공유된 opacity의 값을 사용하여 페이드 효과를 제공하는 커스텀 훅.
 *
 * @param initialOpacity - 초기 opacity 값 (기본값: 1)
 * @param duration - 페이드 효과의 지속 시간 (기본값: 1000ms)
 * @returns {SharedValue<number>} 애니메이션된 opacity 값을 나타내는 공유 값/.
 *
 * @example
 * ```tsx
 * const opacity = useFadeAnimated(1,1000);
 *
 * <Animated.View style={{ opacity: opacity.value }}>
 *      <Text>텍스트</Text>
 * </Animated.View>
 * ```
 *
 * @remarks
 * - `react-native-reanimated`의 `useSharedValue`를 사용하여 opacity 상태를 관리.
 * - 애니메이션은 opacity를 0.3으로 낮춘 후, 초기 값으로 되돌리며 무한 반복됨.
 * - `withRepeat`와 `withTiming` 함수는 애니메이션을 처리하는데 사용됨.
 *
 */

export const useFadeAnimated = (
  initialOpacity: number = 1,
  duration: number = 1000,
) => {
  const opacity = useSharedValue(initialOpacity);

  useEffect(() => {
    opacity.value = withRepeat(withTiming(0.3, { duration }), -1, true);
  }, [opacity, duration]);

  return opacity;
};
