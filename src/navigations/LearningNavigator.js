import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Colors } from '../styles'
import Learning from '../scenes/Learning'
import MainLearning from '../scenes/MainLearning'
import LessonList from '../scenes/LessonList'
import LessonDetail from '../scenes/LessonDetail'

const Stack = createStackNavigator()

const LearningNavigator = () => {
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
    <Stack.Navigator initialRouteName="Learning">
      <Stack.Screen
        name="Learning"
        component={Learning}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainLearning"
        component={MainLearning}
        options={headerOptions}
      />
      <Stack.Screen
        name="LessonDetail"
        component={LessonDetail}
        options={headerOptions}
      />
      <Stack.Screen name="LessonList" component={LessonList} options={headerOptions} />
    </Stack.Navigator>
  )
}

export default LearningNavigator
