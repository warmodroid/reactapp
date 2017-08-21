import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button
} from 'react-native';
import MainScreenNavigator from './app/config/route';

export default class ganesha extends Component {
  constructor(props){
      super(props)
  }
  render() {
    return (
            <MainScreenNavigator/>
    );
  }
}

const styles = StyleSheet.create({
  mainViewStyle: {
    //backgroundColor: 'rgb(60, 162, 156)',
    flex: 1,
    flexDirection: 'column',
    //alignItems: 'center',
    //justifyContent: 'center'
  },
});

AppRegistry.registerComponent('ganesha', () => ganesha);
