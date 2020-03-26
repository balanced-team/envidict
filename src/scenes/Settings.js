import React, { useState } from 'react'
import { Text, StyleSheet } from 'react-native'
import { ListItem, Icon, Left, Body, Right, Switch, Button, Content } from 'native-base'

import { useBackHandleToExitApp } from '../hooks'
import MainLayout from '../components/templates/MainLayout'
import { Colors, Typography } from '../styles'

const Frame = (props) => {
  // ty tu sua nhe
  const { enable, nameIcon, toggleSwitch, content } = props
  return (
    <ListItem icon>
      <Left>
        <Button info>
          <Icon active name={nameIcon} />
        </Button>
      </Left>
      <Body>
        <Text>{content}</Text>
      </Body>
      <Right>
        <Switch
          value={enable}
          onValueChange={toggleSwitch}
          thumbColor={enable ? Colors.BLUE_LIGHT : Colors.BLUE_TRANSLATE}
        />
      </Right>
    </ListItem>
  )
}

const Settings = () => {
  const [stateEnable, setStateEnable] = useState({
    quickSearch: false,
    sound: false,
    notification: false,
    alertEveryDay: false
  })

  const toggleSwitch = (key, value) => {
    setStateEnable({
      ...stateEnable,
      [key]: value
    })
  }

  const extractFrameProps = (key) => {
    return {
      enable: stateEnable[key],
      toggleSwitch: (val) => toggleSwitch(key, val)
    }
  }

  useBackHandleToExitApp()

  return (
    <MainLayout voiceButtonIsVisible={true}>
      <Content>
        <Text style={styles.textTile}>Dictionary</Text>
        <Frame
          {...extractFrameProps('quickSearch')}
          nameIcon="search"
          content="Tra nhanh"
        />
      </Content>
      <Content>
        <Text style={styles.textTile}>Sound</Text>
      </Content>
      <Frame
        {...extractFrameProps('sound')}
        nameIcon="volume-high"
        content="Tự động phát âm"
      />
      <Frame nameIcon="mic" content="Cài đặt phát âm" />
      <Content>
        <Text style={styles.textTile}>Notification</Text>
        <Frame
          {...extractFrameProps('notification')}
          nameIcon="alarm"
          content="Nhắc học từ vựng mỗi ngày"
        />
        <Frame
          {...extractFrameProps('alertEveryDay')}
          nameIcon="navigate"
          content="Nhận thông báo từ hàng ngày"
        />
      </Content>
    </MainLayout>
  )
}
const styles = StyleSheet.create({
  textTile: {
    color: Colors.BLUE_LIGHT,
    fontSize: Typography.FONT_SIZE_14,
    fontWeight: 'bold',
    padding: 20
  }
})
export default Settings
