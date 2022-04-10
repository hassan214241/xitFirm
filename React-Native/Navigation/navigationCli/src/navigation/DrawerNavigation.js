import React from 'react';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { Notification } from '../screens/Notification';
import { Email } from '../screens/Email';
const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Notification" component={Notification} />
      <Drawer.Screen name="Email" component={Email} />
    </Drawer.Navigator>
  );
};
