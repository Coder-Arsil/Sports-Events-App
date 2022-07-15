import React from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Lottie from 'lottie-react-native';
import me from "../assets/ArsilMalek.png"
import img1 from "../assets/pic1.jpg"
import img2 from "../assets/pic2.jpg"
import img3 from "../assets/pic3.jpg"
import img4 from "../assets/pic4.jpeg"
import pic1 from "../assets/avt1.png"
import pic2 from "../assets/avt2.png"
import pic3 from "../assets/avt3.png"
import Menu from '../components/Menu';
const CartData = [
    {
        id: "1",
        avatar: me,
        user: "Arsil Malek",
        pic: img1
    },
    {
        id: "2",
        avatar: pic1,
        user: " Hardik Shah",
        pic: img2
    },
    {
        id: "3",
        avatar: pic2,
        user: " Jayesh Patel",
        pic: img3
    },
    {
        id: "4",
        avatar: pic3,
        user: " Aamir Vohra",
        pic: img4
    },
    {
        id: "5",
        avatar: pic1,
        user: " Javed Khan",
        pic: img1
    },
    {
        id: "6",
        avatar: pic2,
        user: " Wasim Shah",
        pic: img2
    }
]
const Carts = ({ item }) => {
    return (
        <>
            <View style={styles.cartFeature}>
                <View style={{ height: "30%", justifyContent: 'space-around', alignItems: 'center', width: '100%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                        <Image source={item.avatar} style={{ height: 35, width: 35, borderColor: 'gray', borderWidth: 1, borderRadius: 25 }} />
                        <Text>{item.user}</Text>
                    </View>
                </View>
                <View style={[styles.inCart, { height: "70%" }]}>
                    <Image source={item.pic} style={{ height: "100%", width: "100%", borderRadius: 25 }} />
                </View>
            </View>
        </>
    )
}
const Package = ({title}) => {
    return (
        <>
            <Text style={[styles.fpText, { padding: 25 }]}>
               <Image source={{uri : "https://img.icons8.com/emoji/48/000000/soccer-ball-emoji.png"}}
               style={{height:25,width:25}} 
               /> {title}
            </Text>

            <FlatList
                keyExtractor={(item) => item.id}
                horizontal
                data={CartData}
                renderItem={Carts}
                showsHorizontalScrollIndicator={false}
            />
        </>
    )
}
const Home = () => {
    return (
        <View>
            <View style={styles.head}>
                <View style={styles.upper}>
                    <View>
                        <Image source={require('../assets/watch.png')} style={{ height: 25, width: 25 }} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../assets/search.png')} style={{ height: 25, width: 25, marginHorizontal: 10 }} />
                        <Image source={require('../assets/cart.png')} style={{ height: 25, width: 25 }} />
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: -15, marginBottom: 10 }}>
                    <Lottie source={require('../assets/cycle.json')} autoPlay loop style={{ height: 200, width: 250, marginBottom: 15 }} />
                </View>
            </View>
            <View style={styles.lower}>
                <View style={styles.featuredProducts}>
                    <ScrollView>
                        <Package title="Feature Products" />
                        <Package title="Popular Streams" />
                        <Package title="Updated Carts" />
                    </ScrollView>
                </View>
            </View>
            <Menu />
        </View>
    )
}

const styles = StyleSheet.create({

    cartFeature: {
        height: 180,
        width: 140,
        backgroundColor: '#f0f0f0',
        borderRadius: 25,
        elevation: 5,
        marginHorizontal: 5,
        marginVertical: 10
    },
    fpText: {
        fontWeight: 'bold',
        color: '#942722',
        fontSize: 18,
    },
    head: {

        width: '100%',
        backgroundColor: '#e8463f',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    upper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    lower: {
        backgroundColor: 'white',
        width: '100%',
        height: 470,
        marginTop: -50,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        overflow: 'hidden'
    }
})

export default Home
