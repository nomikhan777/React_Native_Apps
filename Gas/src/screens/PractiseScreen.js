import { Dimensions, ImageBackground, ScrollView, Text, View, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/Ionicons'

const PractiseScreen = ({ navigation }) => {
    return (
        //  container Start

        <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }}
            showsVerticalScrollIndicator={false}>

            {/* Brand View */}
            <ImageBackground source={require('../assets/images/a.jpg')}
                style={{ height: Dimensions.get('window').height / 2.5 }}>
                <View style={styles.brandView}>
                    <Icon name='location-sharp' style={{ color: '#ffffff', fontSize: 100 }} />
                    <Text style={styles.brandViewText}>Vision Go</Text>
                </View>
            </ImageBackground>

            {/* BottomView */}

            <View style={styles.bottomView}>
                {/* Welcome View */}
                <View style={{ padding: 40 }}>
                    <Text style={{ color: '#4632A1', fontSize: 34 }}>Welcome</Text>
                    <Text>Don't have an account?
                        <Text style={{ color: 'red', fontStyle: 'italic' }}>

                            Register now
                        </Text>
                    </Text>

                    {/* Form Input View */}
                    <View style={{ marginTop: 50, }}>


                    </View>
                </View>

            </View>


        </ScrollView>
    )
}
const styles = StyleSheet.create({
    brandView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    brandViewText: {
        color: '#ffffff',
        fontSize: 40,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    bottomView: {
        flex: 1.5,

        bottom: 50,
        borderTopStartRadius: 60,
        borderTopEndRadius: 60,



    }
})

export default PractiseScreen