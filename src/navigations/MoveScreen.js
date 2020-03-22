import * as React from 'react'
import { Button, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack'

import Favorite from '../scenes/Favorite'
import Home from '../scenes/Home'
import WordView from '../scenes/WordView'

const Stack = createStackNavigator()

const MoveScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Favorite">
      <Stack.Screen
        name="Favorite"
        component={Favorite}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WordView"
        component={WordView}
        options={{
          headerStyle: {
            backgroundColor: '#4297d3',
            height: 60,
            justifyContent: 'center'
          }
        }}
      />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default MoveScreen
