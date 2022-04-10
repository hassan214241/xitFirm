import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Home } from "../screens/home";
import { More } from "../screens/more";
const Tab = createBottomTabNavigator();
export const HomeTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}
          options={{ headerShown: false }}
          Icon={({ color, size }) => (
            <Icon name="home" color={'black'} size={20} />
          )}

        />
        <Tab.Screen name="More" component={More} options={{ headerShown: false }}
          Icon={({ color, size }) => (
            <Icon name="menu" color={'black'} size={20} />
          )}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )

}