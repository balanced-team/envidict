import React from 'react'
import { Form, Picker } from 'native-base'
import { languages } from '../../../constants'

const LanguagePicker = (props) => {
  const { defaultSelected, onChangeLang } = props
  const onValueChange = (value) => {
    onChangeLang(value)
  }

  return (
    <Form>
      <Picker
        mode="dropdown"
        style={{ width: 140 }}
        selectedValue={defaultSelected}
        onValueChange={onValueChange}
      >
        {languages.map((lang, index) => {
          return (
            <Picker.Item key={'word' + index} label={lang.label} value={lang.value} />
          )
        })}
      </Picker>
    </Form>
  )
}

export default LanguagePicker
