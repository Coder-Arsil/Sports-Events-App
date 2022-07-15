import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Circle = () => {
    return (
        <View style={styles.circle}></View>
    )
}

const styles = StyleSheet.create({
    circle: {
        backgroundColor: '#e8463f',
        height: 380,
        width: 380,
        borderRadius: 380 / 2,
        position: 'absolute',
        top: "40%",
        left: "-70%",
    }
})

export default Circle
