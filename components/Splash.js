import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Splash extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    var {navigate} = this.props.navigation;
    return (

        <View style={styles.mainViewStyle}>
            <Text style={styles.textBig}></Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Dashboard')}>
              <Text style={styles.textBig}>Billi App</Text>
            </TouchableOpacity>
            <Text style = {styles.textSmall}>Made by Warmodroid Developer</Text>
        </View>
    );
  }
}

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

//AppRegistry.registerComponent('Splash', () => Splash);
