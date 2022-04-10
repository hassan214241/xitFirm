import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import {Settings} from '../screens/Settings';
import {HomeStack} from './HomeStack';
// import {DrawerNavigation} from './DrawerNavigation';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{headerShown: false}}
        />
        {/* <Tab.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
        /> */}
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
