import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, } from 'react-native';
import bgImg from './Assets/welcomeScreen.png'
import bgImg2 from './Assets/download.png'

function WelcomeScreen(props) {
    return (
        <View style={{ flex: 1, }}>
            <ImageBackground style={styles.background} source={bgImg} >
                <View style={styles.logoContainer}>

                    <Image style={styles.logo} source={bgImg2} />
                    <Text style={{ color: '#fff', marginTop: 30, fontWeight: '900' }}>Fly With Us To Shine In The Sky!</Text>

                </View>
                <View style={styles.loginButton}></View>
                <View style={styles.registerButton}></View>
            </ImageBackground>



        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#fc5c65",
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#4ecdc4",
    }
})

export default WelcomeScreen;