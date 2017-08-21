import React, { Component } from 'react';
import { StackNavigator } from "react-navigation";
import {
      StyleSheet,
      Text,
      View
    } from 'react-native';

import MainActivity from './MainActivity';
import Splash from './Splash';


  const MainScreenNavigator = StackNavigator({
    LoginScreen: { screen: Splash },
    Dashboard: { screen: MainActivity }
    },{
      headerMode: 'none'
    }
  );

export default MainScreenNavigator;
