import React, { useEffect } from 'react'
import { Text, Button, Alert, BackHandler } from 'react-native'

import MainLayout from '../components/templates/MainLayout'

const Favorite = ({ navigation }) => {
  const dicStore = useContext(dictStoreContext)
  const [word, setWord] = useState({})

  useEffect(() => {
    const fetchWord = async () => {
      const word = await dicStore.findWord('hello')
      console.log(word)
      return word
    }
    backHandleToExitApp(Alert, BackHandler)
    setWord(fetchWord())
  }, [])

  return (
    <MainLayout voiceButtonIsVisible={true}>
    <Text>{word.word}</Text>
      <Button
        title="Click Me"
        onPress={() => {
          navigation.navigate('WordView')
        }}
      />
      <Button title="Go Favorite Again" onPress={() => navigation.push('Favorite')} />
      <Button title="Go Home" onPress={() => navigation.push('Home')} />
      <Text></Text>
    </MainLayout>
  )
}

export default Favorite
