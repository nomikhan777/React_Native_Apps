import { View, Text, Image } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import image2 from '../../assets/images/gas.png'
import colors from '../../assets/colors'

const BottomNavbar = () => {
    return (
        <View style={{
            flexDirection: 'row', justifyContent: 'space-between', backgroundColor: colors.Primary,
            paddingHorizontal: 30,
        }}>
            <AntDesign style={{ color: 'white', marginTop: 10 }} name='plus' size={30} />
            <Image style={{ width: 50, height: 50, backgroundColor: colors.Secondary, borderRadius: 30, padding: 30, marginTop: -50 }} source={image2} />
            <FontAwesome5 style={{ color: 'white', marginTop: 10 }} name='gas-pump' size={30} />
        </View>
    )
}

export default BottomNavbar