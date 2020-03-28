import React from 'react'
import { Button, Icon, Item } from 'native-base'
import { StyleSheet } from 'react-native'
import { Colors } from '../../../styles'

const VoiceButton = () => {
  return (
    <Item style={styles.voiceButton}>
      <Button rounded style={styles.button}>
        <Icon name="mic" style={styles.icon} />
      </Button>
    </Item>
  )
}

const styles = StyleSheet.create({
  voiceItem: {
    justifyContent: 'center',
    flex: 1
  },
  button: {
    backgroundColor: Colors.BLUE_DARK,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    elevation: 0
  },
  icon: {
    color: Colors.WHITE
  }
})

export default VoiceButton
