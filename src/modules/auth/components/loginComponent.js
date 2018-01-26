import React, { Component } from 'react';
import { StyleSheet, Platform, TextInput, View, Dimensions, Text, Image, TouchableOpacity } from 'react-native';

export default class LoginComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (         
            <Image source={require('../../../resource/login-background.jpg')} style={styles.stretch}>
            </Image>
        )
    }  
}

var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    stretch: {
        height:height,
        width:width,
        resizeMode:'cover'
    }
});
