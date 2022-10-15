import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import colors from '../assets/colors'
import TextField from '../components/inputFields/TextField'
import SecondaryButton from '../components/buttons/SecondaryButton'


const PassowrdScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginVertical: 30, marginHorizontal: 20 }}>
                <AntDesign name='left' style={{ color: "grey" }} size={20} />
                <Text style={{ color: "grey", fontWeight: '900', marginLeft: 20 }}>Reset Password</Text>
            </View>
            <View></View>
            <View style={styles.card}>
                <Text style={{ color: 'white' }}>Create New Password</Text>
                <View style={{ margin: 100, }}>
                    <TextField name="New Passowrd" holderColor={'white'} />
                    <TextField name=" Confirm Password" holderColor={'white'} />
                    <View style={{ marginTop: 20, alignItems: 'center' }}>
                        <SecondaryButton text="Save" />
                    </View>
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {

    },

    card: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.Primary,
        height: 500,
        marginHorizontal: 15,
        marginTop: 'auto',
    },
})

export default PassowrdScreen