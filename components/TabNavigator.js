import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FeedScreen from "../screens/FeedScreen";
import LoginScreen from "../screens/LoginScreen";
import ProfileScreen from "../screens/ProfileScreen";
import StartScreen from "../screens/StartScreen";
import SubscribeScreen from "../screens/SubscribeScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const tab = createMaterialBottomTabNavigator();

