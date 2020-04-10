import React from 'react'
import { Form, Picker } from 'native-base'

const LanguagePicker = (props) => {
  const { langs, defaultSelected, onChangeLang } = props
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
        {langs.map((lang, index) => {
          return (
            <Picker.Item key={'word' + index} label={lang.label} value={lang.value} />
          )
        })}
      </Picker>
    </Form>
  )
}

export default LanguagePicker
