import { Animated } from 'react-native';
import { useRef } from 'react';

export const useFade = () => {
  const opacity = useRef(new Animated.Value(0)).current;

  const fadeIn = (callback?: Function) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start(() => (callback ? callback() : null));
  };

  const fadeOut = (duration: number = 300) => {
    Animated.timing(opacity, {
      toValue: 0,
      duration,
      useNativeDriver: true,
    }).start();
  };

  return {
    fadeOut,
    fadeIn,
    opacity,
  };
};
