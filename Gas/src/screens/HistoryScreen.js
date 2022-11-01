import { View, Text } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import colors from '../assets/colors'

const HistoryScreen = () => {
    return (
        <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: colors.Primary, }}>
                <View style={{ flexDirection: 'row', height: 50, justifyContent: 'space-between', }}>
                    <AntDesign style={{ color: '#fff', marginTop: 10, marginLeft: 10 }} name='left' size={25} />

                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', marginTop: 10, marginLeft: 20 }}>History</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <AntDesign style={{ color: '#fff', marginRight: 30, marginTop: 10 }} name='search1' size={30} />
                    <AntDesign style={{ color: '#fff', marginRight: 10, marginTop: 10 }} name='filter' size={30} />

                </View>
            </View >
            <View style={{ backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, margin: 10 }}>
                <View style={{ backgroundColor: colors.Secondary, flex: 0.25, height: 150 }}>
                    <Text style={{ textAlign: 'center', fontWeight: '900' }}>Delivered on</Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 50 / 2, width: 50, height: 50, marginTop: 30 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>19</Text>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>MAY</Text>
                        </View>
                    </View>

                </View>

                <View style={{ backgroundColor: colors.Primary, flex: 0.75, }}>
                    <Text style={{ color: '#fff', marginLeft: 10 }}>Booking Details:</Text>
                    <View style={{ backgroundColor: colors.Caution2, width: 10, height: 10, borderRadius: 10 / 2, position: 'absolute', left: 260, top: 4 }}>

                    </View>

                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: colors.text2, marginLeft: 10 }}>Domestic LPG : 14.2 KG</Text>
                        <Text style={{ color: colors.text2, marginLeft: 10 }}>Amount : Paid</Text>
                        <Text style={{ color: colors.text2, marginLeft: 10 }}>Booked On : 18/06/2022 </Text>
                    </View>



                </View>

            </View>
            <View style={{ backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, margin: 10 }}>
                <View style={{ backgroundColor: colors.Secondary, flex: 0.25, height: 150 }}>
                    <Text style={{ textAlign: 'center', fontWeight: '900' }}>Delivered on</Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 50 / 2, width: 50, height: 50, marginTop: 30 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>27</Text>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>JUNE</Text>
                        </View>
                    </View>

                </View>

                <View style={{ backgroundColor: colors.Primary, flex: 0.75 }}>
                    <Text style={{ color: '#fff', marginLeft: 10 }}>Booking Details:</Text>
                    <View style={{ backgroundColor: colors.Caution2, width: 10, height: 10, borderRadius: 10 / 2, position: 'absolute', left: 260, top: 4 }}>

                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: colors.text2, marginLeft: 10 }}>Domestic LPG : 14.2 KG</Text>
                        <Text style={{ color: colors.text2, marginLeft: 10 }}>Amount : Paid</Text>
                        <Text style={{ color: colors.text2, marginLeft: 10 }}>Booked On : 18/06/2022 </Text>
                    </View>
                </View>
            </View>
            <View style={{ backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, margin: 10 }}>
                <View style={{ backgroundColor: colors.Secondary, flex: 0.25, height: 150 }}>
                    <Text style={{ textAlign: 'center', fontWeight: '900' }}>Delivered on</Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 50 / 2, width: 50, height: 50, marginTop: 30 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>19</Text>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>JULY</Text>
                        </View>
                    </View>

                </View>

                <View style={{ backgroundColor: colors.Primary, flex: 0.75 }}>
                    <Text style={{ color: '#fff', marginLeft: 10 }}>Booking Details:</Text>
                    <View style={{ backgroundColor: colors.Caution2, width: 10, height: 10, borderRadius: 10 / 2, position: 'absolute', left: 260, top: 4 }}>

                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: colors.text2, marginLeft: 10 }}>Amount : Paid</Text>
                        <Text style={{ color: colors.text2, marginLeft: 10 }}>Domestic LPG : 5 KG</Text>
                        <Text style={{ color: colors.text2, marginLeft: 10 }}>Booked On : 18/06/2022 </Text>
                    </View>
                </View>
            </View>
            <View style={{ backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, margin: 10 }}>
                <View style={{ backgroundColor: colors.Secondary, flex: 0.25, height: 150 }}>
                    <Text style={{ textAlign: 'center', fontWeight: '900' }}>Yet to Deliver</Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 50 / 2, width: 50, height: 50, marginTop: 30 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>--</Text>
                        </View>
                    </View>

                </View>

                <View style={{ backgroundColor: colors.Primary, flex: 0.75 }}>
                    <Text style={{ color: '#fff', marginLeft: 10 }}>Booking Details:</Text>
                    <View style={{ backgroundColor: colors.Caution1, width: 10, height: 10, borderRadius: 10 / 2, position: 'absolute', left: 260, top: 4 }}>

                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: colors.text2, marginLeft: 10 }}>Domestic LPG : 14.2 KG</Text>
                        <Text style={{ color: colors.text2, marginLeft: 10 }}>Amount : Paid</Text>
                        <Text style={{ color: colors.text2, marginLeft: 10 }}>Booked On : 18/06/2022 </Text>
                    </View>
                </View>
            </View>
        </>

    )
}

export default HistoryScreen