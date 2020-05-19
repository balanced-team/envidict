import React, { useState, useEffect, useContext } from 'react'
import { Text, StyleSheet, Alert, BackHandler } from 'react-native'
import { ListItem, Icon, Left, Body, Right, Switch, Button, Content } from 'native-base'

import MainLayout from '../components/templates/MainLayout'
import { backHandleToExitApp } from '../utils'
import { Colors, Typography } from '../styles'
import { voiceStoreContext } from '../contexts'

const Frame = (props) => {
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
  const voiceStore = useContext(voiceStoreContext)
  const [stateEnable, setStateEnable] = useState({
    quickSearch: false,
    sound: !voiceStore.autoSpeak,
    notification: false,
    alertEveryDay: false,
  })

  const toggleSwitch = (key, value) => {
    setStateEnable({
      ...stateEnable,
      [key]: value,
    })
  }

  const extractFrameProps = (key) => {
    if (key === 'sound') {
      voiceStore.toggleAutoSpeak()
    }
    return {
      enable: stateEnable[key],
      toggleSwitch: (val) => toggleSwitch(key, val),
    }
  }

  useEffect(() => {
    backHandleToExitApp(Alert, BackHandler)
  }, [])

  return (
    <MainLayout autoFocusSearchInput={false} voiceButtonIsVisible={true}>
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
        enable={stateEnable.sound}
      />
      <ListItem icon>
        <Left>
          <Button info>
            <Icon active name="mic" />
          </Button>
        </Left>
        <Body>
          <Text>Cài đặt phát âm</Text>
        </Body>
        <Right>
          <Icon active name="arrow-forward" />
        </Right>
      </ListItem>
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
    padding: 20,
  },
  contentStyle: {
    color: Colors.BLACK,
    fontSize: Typography.FONT_SIZE_16,
  },
})
export default Settings
