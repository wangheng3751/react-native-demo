import React, { Component } from 'react';
import { StyleSheet, Platform, TextInput, View, Dimensions, Text,ImageBackground, Image, TouchableOpacity } from 'react-native';

export default class LoginComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (         
            <ImageBackground source={require('../../../resource/images/login-background.jpg')} resizeMode='stretch' style={[styles.stretch,styles.center]}>               
                <Image source={require('../../../resource/images/logo.png')} style={styles.logo}/>
                <TextInput placeholder='请输入您的用户名' style={styles.input}/>
                <TextInput placeholder='请输入您的密码' secureTextEntry={true} style={styles.input}/>
                <TouchableOpacity style={[styles.btn,styles.center]} onPress={this.props.onLogin}>
                    <Text style={styles.text}>登录</Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }  
}

var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    logo:{
        width:80,
        height:80,
        marginBottom:50
    },
    center:{
        alignItems: 'center',
        justifyContent:'center'
    },
    stretch: {
        height:height,
        width:width   
    },
    input:{
        height:30,
        width:width*0.6,
        padding:0,
        borderBottomWidth:1,
        borderBottomColor:"#8ecbc1",
        paddingLeft:20,
        marginBottom:10
    },
    btn:{
        width:width*0.6,
        backgroundColor:"#8ecbc1",
        height:32,
        marginTop:20
    },
    text:{
        color:"#fff",
        fontSize:16
    }
});
