import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import TopNavbar from '../components/navigationBars/TopNavbar'
import colors from '../assets/colors'

const users = [{
    id: 1,
    name: 'Connections',
    image: require('../assets/images/home1.jpeg'),
},
{
    id: 2,
    name: 'Bookings',
    image: require('../assets/images/home2.jpg'),
},
{
    id: 3,
    name: 'Tracking',
    image: require('../assets/images/home1.jpeg'),
},
{
    d: 4,
    name: 'help',
    image: require('../assets/images/home1.jpeg'),
},
]


const HomeScreen = (props) => {


    return (
        <View style={{ flex: 1, backgroundColor: "white", }}>

            <TopNavbar iconLeft="navicon" text="SERVIO" iconRight="history" myColor={colors.Secondary} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.textinner}>

                    <Text style={{ color: colors.Primary, fontSize: 24, fontWeight: 'bold', marginRight: 10 }}>New</Text>
                    <Text style={{ color: colors.Secondary, fontSize: 24, fontWeight: 'bold' }}>Feeds</Text>


                </View>
                <Text style={{ color: colors.Primary, marginTop: 20, fontSize: 18, fontWeight: 'bold' }}>See all</Text>
            </View>
            <View style={{ flexDirection: 'row', }}>
                <Text style={{ color: colors.Primary, fontSize: 24, fontWeight: 'bold', marginLeft: 10 }}>Our </Text>
                <Text style={{ color: colors.Secondary, fontSize: 24, fontWeight: 'bold', }}>Services</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                {
                    users.map((item) => (

                        <View key={item.id} >

                            <Image style={{ width: 60, height: 60, borderRadius: 70 }} source={item.image} />
                            <Text style={{ marginLeft: 10, color: "black", fontWeight: '900', }}>{item.name}</Text>




                        </View>

                    ))
                }
            </View>

        </View >
    )
}
const styles = StyleSheet.create({
    textinner: {
        flexDirection: 'row',
        padding: 10
    }
})

export default HomeScreen