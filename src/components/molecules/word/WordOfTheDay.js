import React from 'react'
import { Text, View, Icon, Button, Right, Row, Left } from 'native-base'
import { StyleSheet } from 'react-native'

import { Colors } from '../../../styles'
import { FONT_SIZE_14, FONT_SIZE_12 } from '../../../styles/typography'

const WordOfTheDay = () => {
  return (
    <View style={styles.card}>
      <Row>
        <Left>
          <View style={styles.row}>
            <Icon name="md-calendar" style={[styles.icon, styles.blueDarkColor]} />
            <Text style={styles.title}>TỪ CỦA HÔM NAY</Text>
          </View>
        </Left>
        <Right>
          <View style={styles.row}>
            <Icon name="md-sync" style={[styles.icon, styles.blueDarkColor]} />
          </View>
        </Right>
      </Row>
      <View style={styles.row}>
        <Text style={styles.word}>unbelievable</Text>
        <Icon name="volume-high" style={[styles.icon, styles.blueDarkColor]} />
      </View>
      <Text style={styles.type}>tính từ</Text>
      <Text style={styles.meaning}>không thể tin nổi</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 2,
    backgroundColor: Colors.WHITE,
    marginTop: 10,
    marginHorizontal: 10,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: Colors.BLACK,
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  word: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.BLUE_MEDIUM,
    marginVertical: 10
  },
  type: {
    color: Colors.SECONDARY,
    fontWeight: 'bold',
    fontSize: FONT_SIZE_14
  },
  meaning: {
    color: Colors.BLUE_EXPLAIN,
    fontSize: FONT_SIZE_14,
    marginTop: 5
  },
  icon: {
    marginHorizontal: 5,
    fontSize: 26
  },
  blueDarkColor: {
    color: Colors.BLUE_MEDIUM
  },
  title: {
    color: Colors.SECONDARY,
    fontSize: FONT_SIZE_12
  }
})

export default WordOfTheDay
