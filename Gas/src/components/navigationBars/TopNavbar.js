import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import colors from '../../assets/colors'

const TopNavbar = (props) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: colors.Primary }}>
            <FontAwesome style={{ color: 'white' }} name={props.iconLeft} size={20} />
            <Text style={{ color: props.myColor, fontSize: 18, fontWeight: 'bold' }}> {props.text}</Text>
            <FontAwesome style={{ color: 'white' }} name={props.iconRight} size={20} />

        </View>
    )
}

export default TopNavbar