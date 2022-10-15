import React from 'react'
import { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TouchableHighlight, Button } from 'react-native'
import colors from '../../assets/colors'

const PrimaryButton = () => {

    const [active, setactive] = useState(false);

    function handlePress() {
        setactive(!active)
        console.log("active")
    }

    return (
        <TouchableHighlight onPress={handlePress} style={active ? styles.activeContainer : styles.container}>
            <Text style={active ? styles.activeText : styles.text}>GET STARTED</Text>
        </TouchableHighlight>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.Primary,
        width: 200,
        paddingHorizontal: 30,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 5,

    },
    activeContainer: {
        backgroundColor: 'white',
        borderColor: colors.Primary,
        borderWidth: 1,
        width: 200,
        paddingHorizontal: 30,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 5
    },
    text: {
        color: "white"
    },
    activeText: {
        color: colors.Secondary
    }
})

export default PrimaryButton