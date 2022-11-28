import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import img2 from '../assets/images/gas.png';
import img3 from '../assets/images/images.png';
import colors from '../assets/colors';
import TextField from '../components/inputFields/TextField';
import SecondaryButton from '../components/buttons/SecondaryButton';

const SignupScreen = ({ navigation }) => {
    return (
        <View style={styles.conatiner}>
            <View style={{ flexDirection: 'row', marginVertical: 15, marginHorizontal: 20, justifyContent: 'space-between' }}>
                <AntDesign name='left' style={{ color: "grey" }} size={20} />
                <AntDesign name='questioncircle' style={{ color: "grey" }} size={20} />
            </View>

            <View style={styles.frontView}>
                <Image style={styles.image1} source={img3} />
            </View>

            <View style={styles.bottomView}>
                <View style={{ padding: 40, justifyContent: 'center', alignItems: 'center', }}>
                    <Image style={styles.image2} source={img2} />
                    <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', margin: 10 }}>Sign Up</Text>
                </View>
                <View>
                    <TextField name="Mobile Number" holderColor={'#eee'} color={'white'} />
                </View>
                <View style={{ marginTop: 40, alignItems: 'center', marginBottom: 40 }}>
                    <SecondaryButton text={"Send OTP"} />
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    conatiner: {
        flex: 1,

    },
    frontView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',


    },
    image1: {



    },
    bottomView: {
        backgroundColor: colors.Primary,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',

        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
    },
    image2: {
        width: 35,
        height: 35,


    }
})

export default SignupScreen