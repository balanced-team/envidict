import React, { Fragment, useState } from 'react'
import { TouchableOpacity, StyleSheet, Slider } from 'react-native'
import { Icon, View, Text, Grid, Col } from 'native-base'
import { Colors } from '../../../styles'

const SettingsRight = () => {
  const [isShowSettings, setIsShowSettings] = useState(false)

  const toggleIsShowSettings = () => {
    setIsShowSettings(!isShowSettings)
  }

  return (
    <Fragment>
      <TouchableOpacity onPress={toggleIsShowSettings}>
        <Icon style={styles.rootIcon} name="voice" type="MaterialCommunityIcons" />
      </TouchableOpacity>
      {isShowSettings && (
        <View style={styles.floatCard} onAccessibilityEscape={toggleIsShowSettings} on>
          <View>
            <Text>Tốc độ đọc</Text>
            <View style={styles.row}>
              <TouchableOpacity>
                <Icon name="caret-up" type="FontAwesome" />
              </TouchableOpacity>

              <View>
                <Text>2x</Text>
              </View>
              <TouchableOpacity>
                <Icon name="caret-down" type="FontAwesome" />
              </TouchableOpacity>
            </View>
            <Text>Độ cao</Text>
            <View style={styles.row}>
              <TouchableOpacity>
                <Icon name="caret-up" type="FontAwesome" />
              </TouchableOpacity>

              <View>
                <Text>2x</Text>
              </View>
              <TouchableOpacity>
                <Icon name="caret-down" type="FontAwesome" />
              </TouchableOpacity>
            </View>
            <Text>Tốc độ đọc</Text>
            <View>
              <Slider
                minimumValue={0}
                maximumValue={100}
                step={1}
                value={50}
                onValueChange={(value) => console.log(value)}
                onSlidingComplete={(e) => {
                  console.log(e)
                }}
              />
            </View>
          </View>
        </View>
      )}
    </Fragment>
  )
}

const styles = StyleSheet.create({
  rootIcon: {
    color: Colors.WHITE,
    marginRight: 10,
  },
  floatCard: {
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    position: 'absolute',
    top: 50,
    right: 25,
    padding: 10,
    width: 200,
    zIndex: 0,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})
export default SettingsRight
