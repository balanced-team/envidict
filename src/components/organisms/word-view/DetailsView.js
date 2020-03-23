import React from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'
import { View, Container, Icon, Button } from 'native-base'
import { Colors } from '../../../styles/index'

const DetailsView = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titleText}>representatives</Text>
      <View style={styles.inLine}>
        <Icon name="volume-high" style={styles.iconVolume}></Icon>
        <Text style={styles.pronounce}>/ˌrɛ.prɪ.ˈzɛn.tə.tɪv/</Text>
      </View>

      <View style={styles.inLine}>
        <Icon type="FontAwesome" name="angle-right" style={styles.iconType} />
        <Text style={styles.typeText}>adj</Text>
      </View>

      <View style={styles.baseText}>
        <Text style={styles.explain}>1. tiêu biểu, điển hình</Text>
        <Text style={styles.example}>
          a meeting of representative of monastic life. This is a long lineeeeeeeee.
        </Text>

        <View style={styles.inLine}>
          <Icon type="FontAwesome" name="angle-right" style={styles.iconRight} />
          <Text style={styles.exampleTrans}>
            cuộc họp của những người tiêu biểu
            {'\n'}
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default DetailsView
const styles = StyleSheet.create({
  baseText: {
    paddingLeft: 16
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.BLUE_TEXT,
    paddingLeft: 6,
    paddingTop: 16
  },
  pronounce: {
    color: Colors.SECONDARY,
    fontSize: 18,
    paddingLeft: 18,
    paddingTop: 10
  },
  typeText: {
    fontSize: 16,
    color: Colors.BLUE_TYPE,
    paddingLeft: 4,
    paddingTop: 18
  },
  explain: {
    color: Colors.BLUE_EXPLAIN,
    fontSize: 16,
    paddingTop: 10
  },
  example: {
    color: Colors.BLUE_LIGHT,
    fontSize: 16,
    fontStyle: 'italic',
    paddingLeft: 16,
    paddingTop: 8
  },
  exampleTrans: {
    color: Colors.BLUE_TRANSLATE,
    fontSize: 16,
    paddingLeft: 4,
    paddingTop: 6
  },
  iconVolume: {
    color: Colors.BLUE_DARK,
    fontSize: 24,
    paddingLeft: 10,
    paddingTop: 10
  },
  iconType: {
    color: Colors.BLUE_TYPE,
    fontSize: 14,
    paddingLeft: 10,
    paddingTop: 22
  },
  iconRight: {
    color: Colors.BLUE_TRANSLATE,
    paddingLeft: 10,
    fontSize: 14,
    paddingTop: 10
  },
  inLine: {
    flexDirection: 'row',
    paddingLeft: 10
  }
})
