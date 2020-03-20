import * as React from 'react'
import { Button, View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Favorite from '../scenes/Favorite'
import WordView from '../scenes/WordView'

const Stack = createStackNavigator()

function MoveScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Favorite">
        <Stack.Screen name="Favorite" component={Favorite} />
        <Stack.Screen name="WordView" component={WordView} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MoveScreen
