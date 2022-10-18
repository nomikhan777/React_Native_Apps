import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import TopNavbar from '../components/navigationBars/TopNavbar'
import BottomNavbar from '../components/navigationBars/BottomNavbar'
import HomeButton from '../components/buttons/HomeButton'
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
    image: require('../assets/images/home3.png'),
},
{
    id: 4,
    name: '   Help  ',
    image: require('../assets/images/home4.png'),
},
]
const checkers = [{
    value: 1,
    text: "FastBook",
    img: require('../assets/images/home5.png'),
},
{
    value: 2,
    text: " Newsroom",
    img: require('../assets/images/home6.jpg'),

},
{
    value: 3,
    text: " Updates",
    img: require('../assets/images/home7.png'),
},
{
    value: 4,
    text: "About",
    img: require('../assets/images/home8.png'),
}
]
const delivery = [{
    value: 1,
    text: "Refineries",
    img: require('../assets/images/home9.jpeg'),
},
{
    value: 2,
    text: " R & D",
    img: require('../assets/images/home10.jpeg'),

},
{
    value: 3,
    text: " Lubricants",
    img: require('../assets/images/home11.jpeg'),
},
{
    value: 4,
    text: "Natural gas",
    img: require('../assets/images/home12.jpeg'),
}
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
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Text style={{ color: colors.Primary, fontSize: 24, fontWeight: 'bold', marginLeft: 10 }}>Our </Text>
                <Text style={{ color: colors.Secondary, fontSize: 24, fontWeight: 'bold', }}>Services</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30, }}>
                {
                    users.map((item) => (

                        <View key={item.id} >

                            <Image style={{ width: 70, height: 60, borderRadius: 70 }} source={item.image} />
                            <Text style={{ marginLeft: 5, color: colors.text1, fontWeight: '900', marginTop: 15 }}>{item.name}</Text>




                        </View>

                    ))
                }
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Text style={{ color: colors.Primary, fontSize: 24, fontWeight: 'bold', marginLeft: 10 }}>Quick </Text>
                <Text style={{ color: colors.Secondary, fontSize: 24, fontWeight: 'bold', }}>Checks</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30, }}>
                {
                    checkers.map((items) => (

                        <View key={items.value} >

                            <Image style={{ width: 60, height: 60, borderRadius: 70 }} source={items.img} />
                            <Text style={{ marginLeft: 5, color: colors.text1, fontWeight: '900', marginTop: 15 }}>{items.text}</Text>




                        </View>

                    ))
                }
            </View>
            <View style={{ marginTop: 30, margin: 10 }}>
                <HomeButton text="WE DELIVER IN" />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30, }}>
                {
                    delivery.map((items) => (

                        <View key={items.value} >

                            <Image style={{ width: 70, height: 40 }} source={items.img} />
                            <Text style={{ marginLeft: 5, color: colors.text1, fontWeight: '900', marginTop: 15 }}>{items.text}</Text>




                        </View>

                    ))
                }
            </View>
            <View style={{ marginTop: 110 }}>
                <BottomNavbar />
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