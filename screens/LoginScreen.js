import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class LoginScreen extends Component {

    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}>Tela de login</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItens: "center",
        backgroundColor: "orange",
    },
    text: {
        color: "white",
        fontSize: "20"
    }
})