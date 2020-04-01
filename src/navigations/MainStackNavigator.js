import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../scenes/Home'
import WordView from '../scenes/WordView'
import LessonDetail from '../scenes/LessonDetail'
import MainLearning from '../scenes/MainLearning'
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
    <Stack.Navigator initialRouteName="Home" options={headerOptions}>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="WordView" component={WordView} options={headerOptions} />
      <Stack.Screen
        name="LessonDetail"
        component={LessonDetail}
        options={headerOptions}
      />
      <Stack.Screen
        name="MainLearning"
        component={MainLearning}
        options={headerOptions}
      />
    </Stack.Navigator>
  )
}

export default MainStackNavigator
