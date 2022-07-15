import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import Menu from '../components/Menu'
import me from "../assets/ArsilMalek.png"
import pic1 from "../assets/avt1.png"
import pic2 from "../assets/avt2.png"
import pic3 from "../assets/avt3.png"
const NotiData = [
  {
    id: "1",
    user: "Arsil Malek",
    pic: me
  },
  {
    id: "2",
    user: "Javed Khan",
    pic: pic1
  },
  {
    id: "3",
    user: "Jayesh Jadav",
    pic: pic2
  },
  {
    id: "4",
    user: "Hardik Patel",
    pic: pic3
  },
  {
    id: "5",
    user: "Arsil Malek",
    pic: me
  },
  {
    id: "6",
    user: "Javed Khan",
    pic: pic1
  },
  {
    id: "7",
    user: "Jayesh Jadav",
    pic: pic2
  },
  {
    id: "8",
    user: "Hardik Patel",
    pic: pic3
  },
  {
    id: "9",
    user: "Arsil Malek",
    pic: me
  },
  {
    id: "10",
    user: "Javed Khan",
    pic: pic1
  },
  {
    id: "11",
    user: "Jayesh Jadav",
    pic: pic2
  },
  {
    id: "12",
    user: "Hardik Patel",
    pic: pic3
  },
]
const Noti = ({item}) => {
  return (
    <>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 25, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
            {item.user}
          </Text>
          <Text>
            simply dummy text of the typesetting industry.
          </Text>
        </View>
        <View>
          <Image source={item.pic} style={{ height: 55, width: 55 }} />
        </View>
      </View>
    </>
  )
}
const Notify = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ position: 'absolute', width: "100%", bottom: 0 }}>
        <Menu />
      </View>
      <Text style={[styles.fpText, { paddingVertical: 20, textAlign: 'center' }]}>
        Notifications
      </Text>
      <View style={styles.notiBox}>
        <FlatList
          keyExtractor={(item) => {item.id}}
          data = {NotiData}
          renderItem={Noti}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  notiBox: {
    width: '100%',
  },
  fpText: {
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#e8463f',
    fontSize: 18,
  },
})

export default Notify
