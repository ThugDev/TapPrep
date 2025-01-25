import {useEffect} from 'react';
import {useSharedValue, withRepeat, withTiming} from 'react-native-reanimated';

export const useFadeAnimated = (
  initialOpacity: number = 1,
  duration: number = 1000,
) => {
  const opacity = useSharedValue(initialOpacity);

  useEffect(() => {
    opacity.value = withRepeat(withTiming(0.3, {duration}), -1, true);
  }, [opacity, duration]);

  return opacity;
};
