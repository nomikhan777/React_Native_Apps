import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import colors from '../../assets/colors'
import { useState } from 'react'

const IconButton = () => {
    const [active, setactive] = useState(false);
    function handleClick() {
        setactive(!active)
        console.log("active")
    }
    return (
        <TouchableOpacity onPress={handleClick} style={active ? styles.activeContainer : styles.container}>

            <AntDesign style={active ? styles.activeText : styles.text} name='right' />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.Secondary,
        width: 150,
        borderWidth: 1,
        paddingHorizontal: 50,
        paddingVertical: 20,
        borderRadius: 3,

        justifyContent: 'center',
        alignItems: "center",

    },
    activeContainer: {
        backgroundColor: "white",
        borderColor: colors.Secondary,
        borderWidth: 1,
        paddingHorizontal: 50,
        paddingVertical: 20,
        borderRadius: 3,
        width: 150,
        justifyContent: 'center',
        alignItems: "center",



    },
    text: {
        color: colors.Primary,
    },
    activeText: {
        color: colors.Primary
    }
})

export default IconButton