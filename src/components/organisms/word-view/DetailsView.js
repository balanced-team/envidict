import React, { useContext, useEffect } from 'react'
import { Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { View, Icon } from 'native-base'
import HTMLView from 'react-native-htmlview'

import { Colors } from '../../../styles/index'
import { voiceStoreContext } from '../../../contexts'

const DetailsView = (props) => {
  const { word } = props
  const voiceStore = useContext(voiceStoreContext)

  useEffect(() => {
    if (voiceStore.autoSpeak) {
      voiceStore.speak(word.word)
    }
  }, [word])

  const renderNode = (node, index, siblings, parent, defaultRenderer) => {
    if (node.name === 'h1' || node.name === 'h3') {
      return null
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titleText}>{word.word}</Text>
      <View style={styles.inLine}>
        <TouchableOpacity onPress={() => voiceStore.speak(word.word)}>
          <Icon name="volume-high" style={styles.iconVolume}></Icon>
        </TouchableOpacity>
        <Text style={styles.pronounce}>{'/' + word.pronounce + '/'}</Text>
      </View>

      {props.isShowTranslate === true && (
        <View>
          <View style={styles.baseText}>
            <HTMLView
              value={word.html}
              addLineBreaks={true}
              renderNode={renderNode}
              stylesheet={htmlStyles}
            />
          </View>
        </View>
      )}
    </ScrollView>
  )
}

export default DetailsView
const styles = StyleSheet.create({
  baseText: {
    paddingLeft: 16,
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.BLUE_TEXT,
    paddingLeft: 6,
    paddingTop: 16,
  },
  pronounce: {
    color: Colors.SECONDARY,
    fontSize: 18,
    paddingLeft: 18,
    paddingTop: 10,
  },
  typeText: {
    fontSize: 16,
    color: Colors.BLUE_TYPE,
    paddingLeft: 4,
    paddingTop: 18,
  },
  explain: {
    color: Colors.BLUE_EXPLAIN,
    fontSize: 16,
    paddingTop: 10,
  },
  example: {
    color: Colors.BLUE_LIGHT,
    fontSize: 16,
    fontStyle: 'italic',
    paddingLeft: 16,
    paddingTop: 8,
  },
  exampleTrans: {
    color: Colors.BLUE_TRANSLATE,
    fontSize: 16,
    paddingLeft: 4,
    paddingTop: 6,
  },
  iconVolume: {
    color: Colors.BLUE_DARK,
    fontSize: 24,
    paddingLeft: 10,
    paddingTop: 10,
  },
  iconType: {
    color: Colors.BLUE_TYPE,
    fontSize: 14,
    paddingLeft: 10,
    paddingTop: 22,
  },
  iconRight: {
    color: Colors.BLUE_TRANSLATE,
    paddingLeft: 10,
    fontSize: 14,
    paddingTop: 10,
  },
  inLine: {
    flexDirection: 'row',
    paddingLeft: 10,
  },
})

const htmlStyles = StyleSheet.create({
  // Type
  h2: {
    fontSize: 16,
    color: Colors.BLUE_TYPE,
    paddingLeft: 4,
    paddingTop: 10,
    paddingBottom: 0,
  },
  // Meaning
  ul: {
    color: Colors.BLUE_EXPLAIN,
    fontSize: 16,
    marginHorizontal: 18,
  },
  ol: {
    marginHorizontal: 18,
    fontSize: 16,
  },
  li: {
    lineHeight: 28,
  },
})
