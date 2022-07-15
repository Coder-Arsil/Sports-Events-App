import { Image, StyleSheet, Text, TextInput, View, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import user from "../assets/cuser.png"
import mail from "../assets/cmail.png"
import phone from "../assets/cphone.png"
import pass from "../assets/clock.png"
import Menu from '../components/Menu'
import Circle from './Circle'


const Contact = () => {

    const progress = useRef(new Animated.Value(0)).current;
    const scale = useRef(new Animated.Value(1)).current;

    useEffect(() => {

        Animated.spring(progress, { toValue: 1, useNativeDriver: true }).start();
        Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start();
    }, [])
    return (
        //     <View style={{flex:1}}>
        //       <View style={{ position: 'absolute', width: "100%", bottom: 0 }}>
        //                 <Menu />
        //             </View>
        //     </View>
        <View style={{ flex: 1 }}>
            <Circle />
            <View style={{ position: 'absolute', width: "100%", bottom: 0 }}>
                <Menu />
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.outer}>
                    <Text style={{ marginTop: 15, color: '#fff' }}>Create Account</Text>
                    <Animated.View style={[styles.innerBox, {
                        opacity: progress, transform: [{ scale }]
                    }]}>
                        <View style={styles.inputBox}>
                            <Image source={user} style={{ height: 25, width: 25 }} />
                            <TextInput style={{ color: '#fff', marginLeft: 10 }} placeholder="Enter your name" placeholderTextColor='gray' spellCheck={false} />
                        </View>

                        <View style={styles.inputBox}>
                            <Image source={mail} style={{ height: 25, width: 25 }} />
                            <TextInput style={{ color: '#fff', marginLeft: 10 }} placeholder="Enter Email Id" placeholderTextColor='gray' />
                        </View>

                        <View style={styles.inputBox}>
                            <Image source={phone} style={{ height: 25, width: 25 }} />
                            <TextInput style={{ color: '#fff', marginLeft: 10 }} placeholder="Your Mobile no." placeholderTextColor='gray' />
                        </View>

                        <View style={styles.inputBox}>
                            <Image source={pass} style={{ height: 25, width: 25 }} />
                            <TextInput style={{ color: '#fff', marginLeft: 10 }} placeholder="Set Password" placeholderTextColor='gray' />
                        </View>

                        <View style={styles.LoginBtn}>
                            <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>Login Now</Text>
                        </View>
                    </Animated.View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    LoginBtn: {
        backgroundColor: '#e8463f',
        paddingVertical: 15,
        borderRadius: 25
    },
    inputBox: {
        paddingVertical: 0,
        borderBottomColor: "#e8463f",
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 35,
    },
    outer: {
        marginTop:150,
        width: "85%",
        backgroundColor: '#262626',
        position: 'absolute',
        top: -50,
        borderRadius: 25,
        alignItems: 'center',
    },
    innerBox: {
        width: "100%",
        height: "90%",
        backgroundColor: '#2b2b2b',
        borderRadius: 25,
        marginTop: "5%",
        paddingHorizontal: 35,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
        padding: 15,
        paddingTop: 25
    }
})

export default Contact
