import React, { Fragment, useState, useContext } from 'react'
import { TouchableOpacity, StyleSheet, Slider, Modal, AsyncStorage } from 'react-native'
import { Icon, View, Text, Button } from 'native-base'
import { Colors } from '../../../styles'
import { voiceStoreContext } from '../../../contexts'

const SettingsRight = () => {
  const voiceStore = useContext(voiceStoreContext)

  const [isShowSettings, setIsShowSettings] = useState(false)
  const [rate, setRate] = useState(voiceStore.rate)
  const [pitch, setPitch] = useState(voiceStore.pitch)

  const toggleIsShowSettings = () => {
    setIsShowSettings(!isShowSettings)
  }

  const onIncreaseRate = () => {
    if (voiceStore.rate < 2) {
      setRate(rate + 0.5)
      voiceStore.setRate(voiceStore.rate + 0.5)
    }
  }

  const onDecreaseRate = () => {
    if (voiceStore.rate > 0.5) {
      setRate(rate - 0.5)
      voiceStore.setRate(voiceStore.rate - 0.5)
    }
  }

  const onIncreasePitch = () => {
    if (voiceStore.pitch < 2) {
      setPitch(pitch + 0.5)
      voiceStore.setPitch(voiceStore.pitch + 0.5)
    }
  }

  const onDecreasePitch = () => {
    if (voiceStore.pitch > 0.5) {
      setPitch(pitch - 0.5)
      voiceStore.setPitch(voiceStore.pitch - 0.5)
    }
  }

  const onSaveSettings = async () => {
    let voiceSettings = JSON.parse(await AsyncStorage.getItem('envidictVoiceSettings'))
    if (voiceSettings === null) {
      await AsyncStorage.setItem(
        'envidictVoiceSettings',
        JSON.stringify({ rate: 1, pitch: 1, volume: 1 })
      )
    } else {
      voiceSettings.rate = voiceStore.rate
      voiceSettings.pitch = voiceStore.pitch
      voiceSettings.volume = voiceStore.volume
      await AsyncStorage.setItem('envidictVoiceSettings', JSON.stringify(voiceSettings))
    }
    toggleIsShowSettings()
  }

  return (
    <Fragment>
      <TouchableOpacity onPress={toggleIsShowSettings}>
        <Icon style={styles.rootIcon} name="voice" type="MaterialCommunityIcons" />
      </TouchableOpacity>
      {isShowSettings && (
        <TouchableOpacity onPressOut={toggleIsShowSettings}>
          <Modal
            animationType="fade"
            visible={isShowSettings}
            transparent={true}
            onAccessibilityEscape={toggleIsShowSettings}
            onRequestClose={toggleIsShowSettings}
          >
            <View style={styles.modalView} onAccessibilityEscape={toggleIsShowSettings}>
              <View>
                <Text style={styles.label}>Tốc độ đọc</Text>
                <View style={styles.row}>
                  <TouchableOpacity onPress={onIncreaseRate}>
                    <Icon name="caret-up" type="FontAwesome" />
                  </TouchableOpacity>

                  <View>
                    <Text>{rate + 'x'}</Text>
                  </View>
                  <TouchableOpacity onPress={onDecreaseRate}>
                    <Icon name="caret-down" type="FontAwesome" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.label}>Độ cao</Text>
                <View style={styles.row}>
                  <TouchableOpacity onPress={onIncreasePitch}>
                    <Icon name="caret-up" type="FontAwesome" />
                  </TouchableOpacity>

                  <View>
                    <Text>{pitch + 'x'}</Text>
                  </View>
                  <TouchableOpacity onPress={onDecreasePitch}>
                    <Icon name="caret-down" type="FontAwesome" />
                  </TouchableOpacity>
                </View>
                <Button small style={styles.button} onPress={onSaveSettings}>
                  <Text>Lưu</Text>
                </Button>
              </View>
            </View>
          </Modal>
        </TouchableOpacity>
      )}
    </Fragment>
  )
}

const styles = StyleSheet.create({
  modalView: {
    left: 120,
    top: 70,
    width: 200,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontWeight: 'bold',
    color: Colors.PRIMARY,
  },
  rootIcon: {
    color: Colors.WHITE,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    width: 100,
    backgroundColor: Colors.PRIMARY,
  },
})
export default SettingsRight
