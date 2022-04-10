import React from 'react';
import {Home} from '../screens/Home';
import {createStackNavigator} from '@react-navigation/stack';
import {Detalis} from '../screens/Detalis';
import { Profile } from '../screens';



const Stack = createStackNavigator();


export const HomeStack = () => {
  return (
   
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Profile" component={Profile}  />
        <Stack.Screen name="Detalis" component={Detalis} />
      </Stack.Navigator>
    
  );
};
