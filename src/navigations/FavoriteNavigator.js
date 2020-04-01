import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Favorite from '../scenes/Favorite'
import WordView from '../scenes/WordView'
import { Colors } from '../styles'

const Stack = createStackNavigator()

const MainStackNavigator = () => {
  const headerOptions = {
    headerStyle: {
      backgroundColor: Colors.BLUE_DARK,
      height: 60,
    },
    headerTitleStyle: {
      color: Colors.WHITE,
    },
    headerTintColor: Colors.WHITE,
  }
  return (
    <Stack.Navigator initialRouteName="Favorite" options={headerOptions}>
      <Stack.Screen
        name="Favorite"
        component={Favorite}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="WordView" component={WordView} options={headerOptions} />
    </Stack.Navigator>
  )
}

export default MainStackNavigator
