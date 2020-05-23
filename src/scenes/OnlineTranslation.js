import React, { useState, useEffect, useContext } from 'react'
import { Text, View, Textarea, Row, Icon, Left, Right, Button, Toast } from 'native-base'
import { StyleSheet, TouchableOpacity, ScrollView, Clipboard } from 'react-native'

import LanguagePicker from '../components/atoms/online-translation.js/LanguagePicker'
import { Colors } from '../styles'
import { translateOnlineAPI } from '../api'
import { voiceStoreContext } from '../contexts'

const OnlineTranslation = ({ route, navigation }) => {
  const voiceStore = useContext(voiceStoreContext)

  const { initText } = route.params
  const [text, setText] = useState(initText ? initText : '')
  const [translatedText, setTranslatedText] = useState('')
  const [fromLang, setFromLang] = useState('en')
  const [toLang, setToLang] = useState('vi')

  useEffect(() => {
    if (text !== '') {
      onTranslate()
    }
  }, [initText, initText])

  const switchLang = () => {
    const from = fromLang
    const to = toLang

    setFromLang(to)
    setToLang(from)

    const temp = text
    setTranslatedText(temp)
    setText(translatedText)
  }

  const onTranslate = async () => {
    setTranslatedText('Đang dịch văn bản...')
    const result = await translateOnlineAPI.translate(text, fromLang, toLang)
    setTranslatedText(result)
    if (voiceStore.autoSpeak === true) {
      voiceStore.speak(translatedText, toLang)
    }
  }

  const onReset = () => {
    setText('')
    setTranslatedText('')
  }

  const onCopy = () => {
    Clipboard.setString(translatedText)
    Toast.show({ text: 'Đã sao chép', duration: 1000 })
  }

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.box}>
        <Row style={styles.row}>
          <Left>
            <TouchableOpacity onPress={() => voiceStore.speak(text, fromLang)}>
              <Icon name="volume-high" style={styles.icon} />
            </TouchableOpacity>
          </Left>
          <Right>
            <TouchableOpacity onPress={onReset}>
              <Icon name="delete" style={styles.icon} type="Feather" />
            </TouchableOpacity>
          </Right>
        </Row>
        <Textarea
          rowSpan={5}
          style={styles.textarea}
          placeholder="Nhập để dịch"
          placeholderTextColor={Colors.SECONDARY_LIGHT}
          onChangeText={setText}
          value={text}
        ></Textarea>
      </View>
      <View>
        <View style={styles.switchLanguage}>
          <LanguagePicker defaultSelected={fromLang} onChangeLang={setFromLang} />
          <TouchableOpacity onPress={switchLang}>
            <Icon name="exchange" type="FontAwesome" style={styles.icon} />
          </TouchableOpacity>
          <LanguagePicker defaultSelected={toLang} onChangeLang={setToLang} />
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <Button style={buttonStyle} onPress={onTranslate} iconLeft block rounded>
          <Icon name="translate" type="MaterialCommunityIcons" />
          <Text style={styles.buttonText} uppercase={false}>
            Dịch
          </Text>
        </Button>
      </View>
      <View style={styles.box}>
        <Row style={styles.row}>
          <Left>
            <TouchableOpacity onPress={() => voiceStore.speak(translatedText, toLang)}>
              <Icon name="volume-high" style={styles.icon} />
            </TouchableOpacity>
          </Left>
          <Right>
            <TouchableOpacity onPress={onCopy}>
              <Icon
                name="content-copy"
                type="MaterialCommunityIcons"
                style={styles.icon}
              />
            </TouchableOpacity>
          </Right>
        </Row>
        <Textarea
          value={translatedText}
          rowSpan={5}
          style={styles.textarea}
          disabled
          placeholderTextColor={Colors.SECONDARY_LIGHT}
        ></Textarea>
      </View>
    </ScrollView>
  )
}

// button' style
const buttonStyle = {
  backgroundColor: Colors.BLUE_DARK,
  width: 150,
}

// component' style
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.WHITE,
  },
  box: {
    flexDirection: 'column',
    borderColor: Colors.BLUE_DARK,
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
  },
  icon: {
    color: Colors.BLUE_DARK,
  },
  row: {
    padding: 10,
  },
  textarea: {
    fontSize: 20,
  },
  switchLanguage: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  switchIcon: {
    marginHorizontal: 10,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 0 },
    shadowColor: Colors.BLACK,
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    borderTopColor: Colors.WHITE,
  },
  buttonText: {
    fontSize: 16,
  },
})

export default OnlineTranslation
