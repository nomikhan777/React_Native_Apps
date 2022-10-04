import { Image, StyleSheet, Text, View, } from 'react-native'
import React from 'react'

function WelcomeScreen() {
    return (
        <View style={styles.viewConatiner}>

            <Image style={styles.Img} source={require('./assets/goal.png')} />
        </View>

    )
}

const styles = StyleSheet.create({
    viewConatiner: {
        flex: 1,
        backgroundColor: '#311b6b',
        justifyContent: "center",
        alignItems: "center",

    },
    Img: {

        width: 100,
        height: 100,
        margin: 20,

        justifyContent: 'center',
        alignItems: 'center'


    }
});
export default WelcomeScreen;