import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../scenes/Home'
import Favorite from '../scenes/Favorite'
import Vocabulary from '../scenes/Vocabulary'
import Learning from '../scenes/Learning'
import Settings from '../scenes/Settings'
import TabBarIcon from '../components/atoms/navigations/TabBarIcon'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{ showLabel: true }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Nhà',
          tabBarIcon: ({ focused }) => <TabBarIcon name="md-home" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarLabel: 'Yêu thích',
          tabBarIcon: ({ focused }) => <TabBarIcon name="md-heart" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Vocabulary"
        component={Vocabulary}
        options={{
          tabBarLabel: 'Bộ từ',
          tabBarIcon: ({ focused }) => <TabBarIcon name="md-book" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Learning"
        component={Learning}
        options={{
          tabBarLabel: 'Học tập',
          tabBarIcon: ({ focused }) => <TabBarIcon name="md-ribbon" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Cài đặt',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="md-settings" focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator
