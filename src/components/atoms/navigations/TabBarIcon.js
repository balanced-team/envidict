import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const TabBarIcon = (props) => {
  return (
    <Ionicons
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? '#000000' : '#d3d3d3'}
    />
  )
}

export default TabBarIcon
