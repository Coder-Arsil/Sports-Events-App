import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import Home from './screens/Home'
import User from './screens/User';
import Notify from './screens/Notify';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contact from './screens/Contact';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      <StatusBar backgroundColor='#e8463f' barStyle={'default'} />
      <NavigationContainer >
        <Stack.Navigator screenOptions={{
          headerShown: false,
          animation:'slide_from_right'
        }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="User" component={User} />
          <Stack.Screen name="Notify" component={Notify} />
          <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App