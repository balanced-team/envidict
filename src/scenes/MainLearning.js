import React from 'react'
import { Text, View } from 'react-native'
import PronounceQuestion from '../components/molecules/learning/PronounceQuestion'
import VocabularyQuestion from '../components/molecules/learning/VocabularyQuestion'
import WriteQuestion from '../components/molecules/learning/WriteQuestion'

const MainLearning = ({ navigation }) => {
  return (
    <View>
      <PronounceQuestion />
      {/* <VocabularyQuestion /> */}
      {/* <WriteQuestion /> */}
    </View>
  )
}
export default MainLearning
