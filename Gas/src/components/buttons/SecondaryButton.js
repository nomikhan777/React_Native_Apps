import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react'
import colors from '../../assets/colors'

const SecondaryButton = (props) => {
    const [active, setactive] = useState(false);

    function handleSecondPress() {
        setactive(!active)
        console.log("active")
    }

    return (
        <TouchableOpacity onPress={handleSecondPress} style={active ? styles.activeContainer : styles.container} >
            <Text style={active ? styles.activeText : styles.text} >{props.text}</Text>
        </TouchableOpacity >
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.Secondary,
        width: 250,
        paddingHorizontal: 30,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 5,

    },
    activeContainer: {
        backgroundColor: 'white',
        borderColor: colors.Secondary,
        borderWidth: 1,
        width: 200,
        paddingHorizontal: 30,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 5
    },
    text: {
        color: colors.Primary
    },
    activeText: {
        color: colors.Primary
    }

})

export default SecondaryButton