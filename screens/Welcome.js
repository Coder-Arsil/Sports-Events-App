import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Welcome = () => {
    return (
        <View>
            <View style={styles.title}>
                <Text style={{ color: '#FDBB02', fontSize: 35, paddingVertical: 120, textAlign: 'center', fontWeight: 'bold' }}>Welcome Back</Text>
            </View>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    title: {
        width: '100%',
    }
})