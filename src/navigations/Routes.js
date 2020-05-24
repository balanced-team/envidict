import React from 'react'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'

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
import Learning from '../scenes/Learning'

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
  const scheme = useColorScheme()
  return (
  <AppearanceProvider>

    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="App"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={RoutesConstants.Learning}
          component={Learning}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={RoutesConstants.WordView}
          component={WordView}
          options={headerOptions}
        />
        <Stack.Screen
          name={RoutesConstants.SearchWord}
          component={SearchWord}
          options={{
            headerShown: false,
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name={RoutesConstants.LessonDetail}
          component={LessonDetail}
          options={headerOptions}
        />
        <Stack.Screen
          name={RoutesConstants.LessonList}
          component={LessonList}
          options={headerOptions}
        />
        <Stack.Screen
          name={RoutesConstants.LearnNow}
          component={LearnNow}
          options={headerOptions}
        />
        <Stack.Screen
          name={RoutesConstants.MainLearning}
          component={MainLearning}
          options={headerOptions}
        />
        <Stack.Screen
          name={RoutesConstants.ListWord}
          component={ListWord}
          options={headerOptions}
        />
        <Stack.Screen
          name={RoutesConstants.OnlineTranslation}
          component={OnlineTranslation}
          options={headerOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>   
  </AppearanceProvider>
  )
}

export default Routes
