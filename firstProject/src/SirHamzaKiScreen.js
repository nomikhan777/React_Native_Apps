import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign'


const users = [{
    id: 1,
    name: 'Darrel Steward',
    image: require('./Assets/avatar.jpg'),
},
{
    id: 2,
    name: 'Wade Warren',
    image: require('./Assets/avatar2.jpeg'),
},
{
    id: 3,
    name: 'Dianne Russel',
    image: require('./Assets/avatar3.png'),
},
{
    id: 4,
    name: 'Code Fisher',
    image: require('./Assets/avatar.jpg'),
},
{
    id: 5,
    name: 'Kathryn Murphy',
    image: require('./Assets/avatar5.png'),
},
]

function SirHamzaKiScreen(props) {
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 30, marginHorizontal: 20 }}>
                <AntDesign name='left' style={{ color: "grey" }} size={25} />
                <Text style={{ color: "black", fontWeight: '900' }}>Clean</Text>
            </View>

            <View style={styles.home}>
                <Text style={{ color: "black", fontSize: 20, fontWeight: '900', marginTop: 10 }}>Invite Guest</Text>
                <TouchableOpacity style={{ backgroundColor: "orange", padding: 10, borderRadius: 10 }}><Text style={{ color: "white", fontSize: 20, fontWeight: '900' }}>Invite Now</Text></TouchableOpacity>
            </View>
            {/* search */}
            <View style={{ flexDirection: "row", alignItems: "center", paddingLeft: 15, marginHorizontal: 20, backgroundColor: "#eee", borderRadius: 5, marginVertical: 30 }}>
                <FontAwesome name='search' />
                <TextInput style={{ width: 500, height: 50, }} placeholder='Search' />

            </View>
            {
                users.map((item) => (
                    <View key={item.id} style={{ marginTop: 10, flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', marginHorizontal: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={{ width: 80, height: 80, borderRadius: 60 }} source={item.image} />
                            <Text style={{ marginLeft: 10, color: "black", fontWeight: '900', }}>{item.name}</Text>

                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: "#eee", width: 40, height: 40, borderRadius: 5 }}>
                            <Fontisto name='plus-a' style={{ color: 'grey' }} />
                        </View>
                    </View>
                ))
            }


        </View>

    );
}

const styles = StyleSheet.create({
    home: {

        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: "#fff"
    }
})

export default SirHamzaKiScreen;