import React, { useState } from 'react'
import { Text, View, Textarea, Row, Icon, Left, Right, Button, Toast } from 'native-base'
import { StyleSheet, TouchableOpacity, ScrollView, Clipboard } from 'react-native'

import LanguagePicker from '../components/atoms/online-translation.js/LanguagePicker'
import { Colors } from '../styles'
import { translateOnlineAPI } from '../api'
import { InstanceSpeaker } from '../utils'

const OnlineTranslation = () => {
  const [text, setText] = useState('')
  const [translatedText, setTranslatedText] = useState('')
  const [fromLang, setFromLang] = useState('en')
  const [toLang, setToLang] = useState('vi')

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
    <ScrollView>
      <View style={styles.box}>
        <Row style={styles.row}>
          <Left>
            <TouchableOpacity onPress={() => InstanceSpeaker.speak(text, fromLang)}>
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
          <LanguagePicker
            langs={langs}
            defaultSelected={fromLang}
            onChangeLang={setFromLang}
          />
          <TouchableOpacity onPress={switchLang}>
            <Icon name="exchange" type="FontAwesome" style={styles.icon} />
          </TouchableOpacity>
          <LanguagePicker
            langs={langs}
            defaultSelected={toLang}
            onChangeLang={setToLang}
          />
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
            <TouchableOpacity
              onPress={() => InstanceSpeaker.speak(translatedText, toLang)}
            >
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

const langs = [
  {
    label: 'Tiếng Việt',
    value: 'vi',
  },
  {
    label: 'Tiếng Anh',
    value: 'en',
  },
  {
    label: 'Tiếng Nhật',
    value: 'ja',
  },
  {
    label: 'Tiếng Trung',
    value: 'zh',
  },
  {
    label: 'Tiếng Nam Phi',
    value: 'af',
  },
  {
    label: 'Tiếng Amharic ',
    value: 'am',
  },
  {
    label: 'Tiếng Ả Rập',
    value: 'ar',
  },
  {
    label: 'Tiếng Azerbaijani',
    value: 'az',
  },
  {
    label: 'Tiếng Bashkir',
    value: 'ba',
  },
  {
    label: 'Tiếng Belarus',
    value: 'be',
  },
  {
    label: 'Tiếng Bulgari',
    value: 'bg',
  },
  {
    label: 'Tiếng Bengali',
    value: 'bn',
  },
  {
    label: 'Tiếng Bosni',
    value: 'bs',
  },
  {
    label: 'Tiếng Catalan',
    value: 'ca',
  },
  {
    label: 'Tiếng Cebuano',
    value: 'ceb',
  },
  {
    label: 'Tiếng Séc',
    value: 'cs',
  },
  {
    label: 'Tiếng Chuvash',
    value: 'cv',
  },
  {
    label: 'Tiếng Wales',
    value: 'cy',
  },
  {
    label: 'Tiếng Đan Mạch',
    value: 'da',
  },
  {
    label: 'Tiếng Đức',
    value: 'de',
  },
  {
    label: 'Tiếng Hi Lạp',
    value: 'el',
  },

  {
    label: 'Tiếng Esperanto',
    value: 'eo',
  },
  {
    label: 'Tiếng Tây Ban Nha',
    value: 'es',
  },
  {
    label: 'Tiếng Estonia',
    value: 'et',
  },
  {
    label: 'Tiếng xứ Basque',
    value: 'eu',
  },
  {
    label: 'Tiếng Ba Tư',
    value: 'fa',
  },
  {
    label: 'Tiếng Phần Lan',
    value: 'fi',
  },
  {
    label: 'Tiếng Pháp',
    value: 'fr',
  },
  {
    label: 'Tiếng Ailen',
    value: 'ga',
  },
  {
    label: 'Tiếng Gaelic Scotland',
    value: 'gd',
  },
  {
    label: 'Tiếng Galician',
    value: 'gl',
  },
  {
    label: 'Tiếng Gujarati',
    value: 'gu',
  },
  {
    label: 'Tiếng Do Thái',
    value: 'he',
  },
  {
    label: 'Tiếng Hindi',
    value: 'hi',
  },
  {
    label: 'Tiếng Croatian',
    value: 'hr',
  },
  {
    label: 'Tiếng Haiti',
    value: 'ht',
  },
  {
    label: 'Tiếng Hungari',
    value: 'hu',
  },
  {
    label: 'Tiếng Armenian',
    value: 'hy',
  },
  {
    label: 'Tiếng Indonesia',
    value: 'id',
  },
  {
    label: 'Tiếng Iceland',
    value: 'is',
  },
  {
    label: 'Tiếng Ý',
    value: 'it',
  },
  {
    label: 'Tiếng Java',
    value: 'jv',
  },
  {
    label: 'Tiếng Georgia',
    value: 'ka',
  },
  {
    label: 'Tiếng Kazakhstan',
    value: 'kk',
  },
  {
    label: 'Tiếng Khmer',
    value: 'km',
  },
  {
    label: 'Tiếng Kannada',
    value: 'kn',
  },
  {
    label: 'Tiếng Hàn',
    value: 'ko',
  },
  {
    label: 'Tiếng Kyrgyz',
    value: 'ky',
  },
  {
    label: 'Tiếng Latin',
    value: 'la',
  },
  {
    label: 'Tiếng Do Thái',
    value: 'lb',
  },
  {
    label: 'Tiếng Lào',
    value: 'lo',
  },
  {
    label: 'Tiếng  Litva',
    value: 'lt',
  },
  {
    label: 'Tiếng Latvia',
    value: 'lv',
  },
  {
    label: 'Tiếng Malagasy',
    value: 'mg',
  },
  {
    label: 'Tiếng Mari',
    value: 'mhr',
  },
  {
    label: 'Tiếng Maori',
    value: 'mi',
  },
  {
    label: 'Tiếng Macedonia',
    value: 'mk',
  },
  {
    label: 'Tiếng Malayalam',
    value: 'ml',
  },
  {
    label: 'Tiếng Mông cổ',
    value: 'mn',
  },
  {
    label: 'Tiếng Marathi',
    value: 'mr',
  },
  {
    label: 'Tiếng Hill Mari',
    value: 'mrj',
  },
  {
    label: 'Tiếng Mã Lai',
    value: 'ms',
  },
  {
    label: 'Tiếng Malta',
    value: 'mt',
  },
  {
    label: 'Tiếng Miến Điện',
    value: 'my',
  },
  {
    label: 'Tiếng Nepal',
    value: 'ne',
  },
  {
    label: 'Tiếng Hà Lan',
    value: 'nl',
  },
  {
    label: 'Tiếng Na Uy',
    value: 'no',
  },
  {
    label: 'Tiếng  Ba Tư',
    value: 'pa',
  },
  {
    label: 'Tiếng Papiamento',
    value: 'pap',
  },
  {
    label: 'Tiếng Ba Lan',
    value: 'pl',
  },
  {
    label: 'Tiếng Bồ Đào Nha',
    value: 'pt',
  },
  {
    label: 'Tiếng Rumani',
    value: 'ro',
  },
  {
    label: 'Tiếng Nga',
    value: 'ru',
  },
  {
    label: 'Yakut',
    value: 'sah',
  },
  {
    label: 'Tiếng Sinhalese',
    value: 'si',
  },
  {
    label: 'Tiếng Slovak',
    value: 'sk',
  },
  {
    label: 'Tiếng Slovenia',
    value: 'sl',
  },
  {
    label: 'Tiếng Albania',
    value: 'sq',
  },
  {
    label: 'Tiếng Serbia',
    value: 'sr',
  },
  {
    label: 'Tiếng Sundan',
    value: 'su',
  },
  {
    label: 'Tiếng Thụy Điển',
    value: 'sv',
  },
  {
    label: 'Tiếng Swahili',
    value: 'sw',
  },
  {
    label: 'Tiếng Tamil',
    value: 'ta',
  },
  {
    label: 'Tiếng Telugu',
    value: 'te',
  },
  {
    label: 'Tiếng Tajik',
    value: 'tg',
  },
  {
    label: 'Tiếng Thái',
    value: 'th',
  },
  {
    label: 'Tiếng Tagalog',
    value: 'tl',
  },
  {
    label: 'Tiếng Thổ Nhĩ Kỳ',
    value: 'tr',
  },
  {
    label: 'Tiếng Tatar',
    value: 'tt',
  },
  {
    label: 'Tiếng Udmurt',
    value: 'udm',
  },
  {
    label: 'Tiếng Ukraina',
    value: 'uk',
  },
  {
    label: 'Tiếng Urdu',
    value: 'ur',
  },
  {
    label: 'Tiếng Uzbek',
    value: 'uz',
  },

  {
    label: 'Tiếng Xhosa',
    value: 'xh',
  },
  {
    label: 'Yiddish',
    value: 'yi',
  },
]
const buttonStyle = {
  backgroundColor: Colors.BLUE_DARK,
  width: 150,
}

const styles = StyleSheet.create({
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
