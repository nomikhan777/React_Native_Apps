import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { useState } from 'react'

import colors from '../../assets/colors'
function SmallButton() {

    const [active, setactive] = useState(false);

    function handleClick() {
        setactive(!active)
        console.log("active")
    }
    return (
        <TouchableOpacity onPress={handleClick} style={active ? styles.activeContainer : styles.container}>
            <Text style={active ? styles.activeText : styles.text}>OK</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({

    container: {
        backgroundColor: colors.Primary,
        width: 125,
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
        width: 125,
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
        color: colors.Primary
    }
})

export default SmallButton
