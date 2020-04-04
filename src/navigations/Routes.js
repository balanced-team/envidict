import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import AppNavigator from './AppNavigator'
import WordView from '../scenes/WordView'
import MainLearning from '../scenes/MainLearning'
import LessonList from '../scenes/LessonList'
import LessonDetail from '../scenes/LessonDetail'
import LearnNow from '../scenes/LearnNow'
import ListWord from '../scenes/ListWord'
import { Colors } from '../styles'
const Stack = createStackNavigator()
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

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="App"
          component={AppNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="WordView" component={WordView} options={headerOptions} />
        <Stack.Screen
          name="LessonDetail"
          component={LessonDetail}
          options={headerOptions}
        />
        <Stack.Screen name="LessonList" component={LessonList} options={headerOptions} />
        <Stack.Screen name="LearnNow" component={LearnNow} options={headerOptions} />
        <Stack.Screen
          name="MainLearning"
          component={MainLearning}
          options={headerOptions}
        />
        <Stack.Screen name="ListWord" component={ListWord} options={headerOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
