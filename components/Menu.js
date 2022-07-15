import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const Menu = () => {
    const navigation = useNavigation();
  return (
    <View>
            <View style={styles.menu}>
                <View style={{flexDirection:'row',justifyContent:'space-around',paddingVertical:15}}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Image source={require('../assets/home.png')} style={{height:30,width:30}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("User")}>
                    <Image source={require('../assets/category.png')} style={{height:30,width:30}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Notify")}>
                    <Image source={require('../assets/notify.png')} style={{height:30,width:30}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
                    <Image source={require('../assets/user.png')} style={{height:30,width:30}} />
                </TouchableOpacity>
                </View>
            </View>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
    menu:{
        backgroundColor:'white',
        width:'100%',
        zIndex:1
    },
})