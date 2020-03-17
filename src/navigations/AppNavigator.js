import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import Home from '../scenes/Home'
import Favorite from '../scenes/Favorite'
import Vocabulary from '../scenes/Vocabulary'
import Learning from '../scenes/Learning'
import Settings from '../scenes/Settings'
import TabBarIcon from '../components/atoms/navigations/TabBarIcon'
const Tab = createBottomTabNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{ showLabel: false }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => <TabBarIcon name="md-home" focused={focused} />
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={Favorite}
          options={{
            tabBarIcon: ({ focused }) => <TabBarIcon name="md-heart" focused={focused} />
          }}
        />
        <Tab.Screen
          name="Vocabulary"
          component={Vocabulary}
          options={{
            tabBarIcon: ({ focused }) => <TabBarIcon name="md-book" focused={focused} />
          }}
        />
        <Tab.Screen
          name="Learning"
          component={Learning}
          options={{
            tabBarIcon: ({ focused }) => <TabBarIcon name="md-ribbon" focused={focused} />
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon name="md-settings" focused={focused} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
