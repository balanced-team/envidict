import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Vocabulary from '../scenes/Vocabulary'
import ListWord from '../scenes/ListWord'
import WordView from '../scenes/WordView'
import { Colors } from '../styles'

const Stack = createStackNavigator()

const MainStackNavigator = () => {
  const headerOptions = {
    headerStyle: {
      backgroundColor: Colors.BLUE_DARK,
      height: 60
    },
    headerTitleStyle: {
      color: Colors.WHITE
    },
    headerTintColor: Colors.WHITE
  }
  return (
    <Stack.Navigator initialRouteName="Vocabulary">
      <Stack.Screen
        name="Vocabulary"
        component={Vocabulary}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ListWord" component={ListWord} options={headerOptions} />
      <Stack.Screen name="WordView" component={WordView} options={headerOptions} />
    </Stack.Navigator>
  )
}

export default MainStackNavigator
