import React, { Fragment, useState, useContext } from 'react'
import { TouchableOpacity, StyleSheet, Slider, Modal } from 'react-native'
import { Icon, View, Text, Button } from 'native-base'
import { Colors } from '../../../styles'
import { voiceStoreContext } from '../../../contexts'

const SettingsRight = () => {
  const [isShowSettings, setIsShowSettings] = useState(false)

  const voiceStore = useContext(voiceStoreContext)

  const toggleIsShowSettings = () => {
    setIsShowSettings(!isShowSettings)
  }

  const onChangeVolume = (value) => {
    voiceStore.setVolume(value / 100)
  }

  const onIncreaseRate = () => {
    if (voiceStore.rate < 2) {
      voiceStore.setRate(voiceStore.rate + 0.5)
    }
  }

  const onDecreaseRate = () => {
    if (voiceStore.rate > 0) {
      voiceStore.setRate(voiceStore.rate - 0.5)
    }
  }

  const onIncreasePitch = () => {
    if (voiceStore.pitch < 2) {
      voiceStore.setPitch(voiceStore.pitch + 0.5)
    }
  }

  const onDecreasePitch = () => {
    if (voiceStore.pitch > 0) {
      voiceStore.setPitch(voiceStore.pitch - 0.5)
    }
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
                    <Text>{voiceStore.rate + 'x'}</Text>
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
                    <Text>{voiceStore.pitch + 'x'}</Text>
                  </View>
                  <TouchableOpacity onPress={onDecreasePitch}>
                    <Icon name="caret-down" type="FontAwesome" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.label}>Âm lượng</Text>
                <View>
                  <Slider
                    minimumValue={0}
                    maximumValue={100}
                    step={1}
                    value={voiceStore.volume * 100}
                    onValueChange={onChangeVolume}
                    onSlidingComplete={onChangeVolume}
                  />
                </View>
                <Button small style={styles.button} onPress={toggleIsShowSettings}>
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
