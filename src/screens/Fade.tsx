import React from 'react';
import { View, Button, Animated } from 'react-native';
import { useFade } from '../hooks/useFade';

export const Fade = () => {
  const { opacity, fadeIn, fadeOut } = useFade();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Animated.View
        style={{
          backgroundColor: '#084F6A',
          width: 150,
          height: 150,
          borderColor: 'white',
          borderWidth: 10,
          marginBottom: 10,
          opacity: opacity,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 150,
        }}>
        <Button title="FadeIn" onPress={fadeIn} />
        <Button title="FadeOut" onPress={fadeOut} />
      </View>
    </View>
  );
};
