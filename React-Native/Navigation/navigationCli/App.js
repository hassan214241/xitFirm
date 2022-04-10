import React from "react";
import {View,Text} from "react-native";
// import { Home } from "./src/screens";
import { TabNavigation } from "./src/navigation/TabNavigation";
import { HomeStack } from "./src/navigation/HomeStack";
import 'react-native-gesture-handler';

export const App = () =>{
  return(
    <>
    {/* <HomeStack/> */}
    <TabNavigation/>
</>
  )
}

