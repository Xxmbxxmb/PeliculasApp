import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Movie } from '../interfaces/movieInterface';
import { Detail } from '../screens/Detail';
import { Home } from '../screens/Home';

export type RootStackParams = {
  Home: undefined;
  Detail: Movie;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};
