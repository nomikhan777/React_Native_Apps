import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import TopNavbar from '../components/navigationBars/TopNavbar'
import colors from '../assets/colors'
import { SliderBox } from 'react-native-image-slider-box'

const HomeScreen = () => {
    const images = [
        require('../assets/images/slide1.jpeg'),
        require('../assets/images/slide2.jpeg'),

    ]

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>

            <TopNavbar iconLeft="navicon" text="SERVIO" iconRight="history" myColor={colors.Secondary} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.textinner}>

                    <Text style={{ color: colors.Primary, fontSize: 24, fontWeight: 'bold', marginRight: 10 }}>New</Text>
                    <Text style={{ color: colors.Secondary, fontSize: 24, fontWeight: 'bold' }}>Feeds</Text>


                </View>
                <Text style={{ color: colors.Primary, marginTop: 20, fontSize: 18, fontWeight: 'bold' }}>See all</Text>
            </View>
            <View>
                <SliderBox images={images} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    textinner: {
        flexDirection: 'row',
        padding: 10
    }
})

export default HomeScreen