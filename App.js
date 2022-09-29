import React, { Component } from 'react';
import BottomTabNavigator from './components/BottomTabNavigator';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render(){
    return(
      <BottomTabNavigator/>
    );
  }
}
