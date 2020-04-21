import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import BottomTabNavigator from './BottomTabNavigator'
import WordView from '../scenes/WordView'
import MainLearning from '../scenes/MainLearning'
import LessonList from '../scenes/LessonList'
import LessonDetail from '../scenes/LessonDetail'
import LearnNow from '../scenes/LearnNow'
import ListWord from '../scenes/ListWord'
import OnlineTranslation from '../scenes/OnlineTranslation'
import { Colors } from '../styles'
import SearchWord from '../scenes/SearchWord'
import { RoutesConstants } from './route-constants'

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
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={RoutesConstants.WordView}
          component={WordView}
          options={headerOptions}
        />
        <Stack.Screen
          name="Tìm kiếm"
          component={SearchWord}
          options={{
            headerShown: false,
            animationEnabled: false,
          }}
        />
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
        <Stack.Screen
          name={RoutesConstants.OnlineTranslation}
          component={OnlineTranslation}
          options={headerOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
