import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../assets/colors'
import Entypo from 'react-native-vector-icons/Entypo'




const TextField = (props) => {
    return (

        <View style={[styles.container, { backgroundColor: props.color }]}>
            <TextInput placeholder={props.name} placeholderTextColor={props.holderColor} />
            {
                props.icon &&
                <Entypo name={props.icon} size={20} />
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        borderColor: colors.Primary,
        width: 250,
        paddingHorizontal: 20,
        paddingVertical: 5,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#eee',
        flexDirection: 'row',
        justifyContent: 'space-between',




    },
    // text: {
    //     color: "white"
    // }
})

export default TextField