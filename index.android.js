import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  StyleSheet,
  View,
  Navigator
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Splash from './android/components/Splash';

export default class ganesha extends Component {

  render() {
    return (
      <View style={styles.mainViewStyle}>
            <Splash/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainViewStyle: {
    backgroundColor: 'rgb(60, 162, 156)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

AppRegistry.registerComponent('ganesha', () => ganesha);
