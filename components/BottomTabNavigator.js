import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import FeedScreen from "../screens/FeedScreen";
import LoginScreen from "../screens/LoginScreen";
import ProfileScreen from "../screens/ProfileScreen";
import StartScreen from "../screens/StartScreen";
import SubscribeScreen from "../screens/SubscribeScreen";

const Tab = createBottomTabNavigator();
export default class BottomTabNavigator extends Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Tela de feed" component={FeedScreen}/>
                    <Tab.Screen name="Tela de login" component={LoginScreen}/>
                    <Tab.Screen name="Tela do perfil" component={ProfileScreen}/>
                    <Tab.Screen name="Tela de início" component={StartScreen}/>
                    <Tab.Screen name="Tela de cadastrar-se" component={SubscribeScreen}/>
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}