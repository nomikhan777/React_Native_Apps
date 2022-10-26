import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import colors from '../assets/colors'
import profile from '../assets/images/profile.jpg'

const users = [{
    id: 1,
    name: 'My Account',
    image: require('../assets/images/profile1.png'),
},
{
    id: 2,
    name: 'Wallet',
    image: require('../assets/images/profile3.png'),
},
{
    id: 3,
    name: 'Invite Friends',
    image: require('../assets/images/profile4.png'),
},
{
    id: 4,
    name: 'Setting',
    image: require('../assets/images/profile2.jpg'),
},

]

const ProfileScreen = () => {
    return (
        <ScrollView style={{}} >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: colors.Primary, height: 150 }}>
                <Text style={{ color: 'white' }}>My Profile</Text>
                <EvilIcons style={{ color: 'white' }} name='pencil' size={30} />
            </View>
            <View style={{ marginTop: -50, }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: 120, height: 120, borderRadius: 100 / 2, backgroundColor: "white" }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                            <Image style={{ width: 80, height: 90, borderRadius: 50, }} source={profile} />
                        </View>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{ color: colors.text1, fontSize: 24, fontWeight: 'bold' }}>NUMAN.KHAN</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{}}>khannuman843@gmail.com</Text>
                </View>
            </View>
            <View style={{ backgroundColor: "#eee", margin: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>
                    <Text>Number of Bookings</Text>
                    <Text>Bookings Cancelled</Text>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30, }}>
                    <Text style={{ backgroundColor: colors.Secondary, borderRadius: 80, marginBottom: 20, padding: 5 }}>45</Text>
                    <Text style={{ backgroundColor: colors.Primary, color: "white", borderRadius: 80, marginBottom: 20, padding: 5 }}>5</Text>
                </View>
            </View>
            {
                users.map((item) => (
                    <View key={item.id} style={{
                        marginTop: 5, flexDirection: 'row', justifyContent: "space-between", backgroundColor: 'white', alignItems: 'center', margin: 20, padding: 5,
                        shadowColor: "#000", shadowOpacity: 1, shadowRadius: 20, elevation: 5, shadowOffset: { height: 1, width: 0 }, borderRadius: 10
                    }}>
                        <View style={{
                            flexDirection: 'row', alignItems: 'center',

                        }}>
                            <Image style={{ width: 40, height: 40, borderRadius: 60, }} source={item.image} />
                            <Text style={{ marginLeft: 10, }}>{item.name}</Text>

                        </View>


                    </View>
                ))
            }


        </ScrollView >
    )
}

export default ProfileScreen