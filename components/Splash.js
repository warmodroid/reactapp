import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainActivity from './MainActivity';

export default class Splash extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    var {navigate} = this.props.navigation;
    return (
      <TouchableOpacity onPress={() => navigate('Main')}>
        <View style={styles.mainViewStyle}>
          <View style={{backgroundColor: 'rgb(60, 162, 156)'}}></View>
          <Text style={styles.textBig}>Billi App</Text>
          <Text style={styles.textSmall}>Made by Warmodroid Developer</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const ganesha = StackNavigator({
  Home: {screen: Splash},
  Main: {screen: MainActivity},
});

const styles = StyleSheet.create({
  mainViewStyle: {
    backgroundColor: 'rgb(60, 162, 156)',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textBig: {
    fontSize: 40,
    color: 'rgb(255, 255, 255)',
    paddingBottom: 20,
    fontWeight: 'bold'
  },
  textSmall: {
    fontSize: 10,
    color: 'rgb(63, 60, 75)',
    paddingBottom: 10
  }

});

AppRegistry.registerComponent('Splash', () => ganesha);
