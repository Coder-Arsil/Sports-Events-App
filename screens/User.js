import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'
import Menu from '../components/Menu'

const User = () => {
    return (

        <View style={{ flex: 1 }}>
            <View style={{ position: 'absolute', width: "100%", bottom: 0 }}>
                <Menu />
            </View>
            <View style={{ paddingHorizontal: 10, paddingVertical: 20, backgroundColor: '#e8463f', paddingBottom: 50 }}>
                <View style={styles.upper}>
                    <View>
                        <Image source={require('../assets/watch.png')} style={{ height: 25, width: 25 }} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../assets/search.png')} style={{ height: 25, width: 25, marginHorizontal: 10 }} />
                        <Image source={require('../assets/cart.png')} style={{ height: 25, width: 25 }} />
                    </View>
                </View>
            </View>

            <View style={styles.UsersBox}>
                <Text style={[styles.fpText, { marginTop: 20 }]}>
                    Recently Updated Events
                </Text>
                <View style={styles.cartFeature}>
                    <View style={{ height: "30%", justifyContent: 'space-around', alignItems: 'center', width: '100%' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-around', paddingHorizontal: 15 }}>
                            <Image source={require("../assets/ArsilMalek.png")} style={{ height: 50, width: 50, borderColor: 'gray', borderWidth: 1, borderRadius: 25 }} />
                            <Text style={{ fontWeight: 'bold' }}>Arsil Malek's Production ( Version 3.6 )</Text>
                        </View>
                    </View>
                    <View style={[styles.inCart, { height: "70%" }]}>
                        <Image source={require("../assets/tech.jpg")} style={{ height: "100%", width: "100%", borderRadius: 25 }} />
                    </View>
                </View>
                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={{ textAlign: 'justify' }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Text>
                    
                </View>
                <View style={{ paddingHorizontal: 50,paddingVertical:10,marginTop:20,borderRadius:30, backgroundColor: '#e8463f'}}>
                        <Text style={{fontWeight:'bold',color:'white'}}>Join Now</Text>
                    </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    upper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    UsersBox: {
        backgroundColor: 'white',
        flex: 1,
        width: '100%',
        marginTop: -35,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        alignItems: 'center',
    },
    cartFeature: {
        height: 350,
        width: "90%",
        backgroundColor: '#f0f0f0',
        borderRadius: 25,
        elevation: 5,
        marginHorizontal: 5,
        marginVertical: 10,
        marginTop: 25
    },
    fpText: {
        fontWeight: 'bold',
        color: '#942722',
        fontSize: 18,
    },
})
export default User
