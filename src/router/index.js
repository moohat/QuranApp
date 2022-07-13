import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DetailAyat, ListAlquran, MainMenu, SplashScreen} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainMenu"
        component={MainMenu}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListAlquran"
        component={ListAlquran}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailAyat"
        component={DetailAyat}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
