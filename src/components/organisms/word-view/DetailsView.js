import React from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'
import { View, Container, Icon, Button } from 'native-base'
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
    color: '#044470',
    paddingLeft: 6,
    paddingTop: 16
  },
  pronounce: {
    color: '#4e4e4e',
    fontSize: 18,
    paddingLeft: 18,
    paddingTop: 10
  },
  typeText: {
    fontSize: 16,
    color: '#0468b6',
    paddingLeft: 4,
    paddingTop: 18
  },
  explain: {
    color: '#003764',
    fontSize: 16,
    paddingTop: 10
  },
  example: {
    color: '#4297d3',
    fontSize: 16,
    fontStyle: 'italic',
    paddingLeft: 16,
    paddingTop: 8
  },
  exampleTrans: {
    color: '#8b8b8b',
    fontSize: 16,
    paddingLeft: 4,
    paddingTop: 6
  },
  iconVolume: {
    color: '#1c74bb',
    fontSize: 24,
    paddingLeft: 10,
    paddingTop: 10
  },
  iconType: {
    color: '#0468b6',
    fontSize: 14,
    paddingLeft: 10,
    paddingTop: 22
  },
  iconRight: {
    color: '#8b8b8b',
    paddingLeft: 10,
    fontSize: 14,
    paddingTop: 10
  },
  inLine: {
    flexDirection: 'row',
    paddingLeft: 10
  }
})
