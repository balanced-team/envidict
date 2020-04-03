import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from 'native-base'
import { Colors, Typography } from '../../../styles'

const HeaderTest = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inLine}>
        <View style={[styles.block, styles.inLine]}>
          <Icon name="question" type="AntDesign" style={styles.icon} />
          <View>
            <Text style={styles.text}>Câu</Text>
            <Text style={styles.text}>3/10</Text>
          </View>
        </View>

        <View style={[styles.block, styles.inLine]}>
          <Icon name="clock" type="Feather" style={styles.icon} />
          <View>
            <Text style={styles.text}>Thời gian</Text>
            <Text style={styles.text}>01:45</Text>
          </View>
        </View>

        <View style={[styles.block, styles.inLine]}>
          <Icon
            name="check"
            type="AntDesign"
            style={[styles.icon, { color: Colors.SUCCESS }]}
          />
          <View>
            <Text style={styles.textCorrect}>Chính xác</Text>
            <Text style={styles.textCorrect}>3</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  inLine: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  block: {
    width: 100,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.BLUE_DARK,
    borderRadius: 10,
  },
  text: {
    color: Colors.BLUE_TEXT,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textCorrect: {
    color: Colors.SUCCESS,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  icon: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: Colors.BLUE_DARK,
  },
})
export default HeaderTest
