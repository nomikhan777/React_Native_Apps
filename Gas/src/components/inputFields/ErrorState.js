import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../assets/colors'


const ErrorState = () => {
    return (

        <TextInput style={styles.container} />

    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.text2,
        borderColor: colors.Primary,
        width: 200,
        paddingHorizontal: 30,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 5

    }
})

export default ErrorState