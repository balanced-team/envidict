import React from 'react'
import { Text, View } from 'react-native'
import PronunticationQuestion from '../components/molecules/learning/PronunticationQuestion'
import VocabularyQuestion from '../components/molecules/learning/VocabularyQuestion'
import WriteQuestion from '../components/molecules/learning/WriteQuestion'

const MainLearning = ({ navigation }) => {
  return (
    <View>
      {/* <PronunticationQuestion /> */}
      {/* <VocabularyQuestion /> */}
      <WriteQuestion />
    </View>
  )
}
export default MainLearning
