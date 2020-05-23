import { QUESTION_TYPE } from '../constants'

const backHandleToExitApp = (Alert, BackHandler) => {
  // const backAction = () => {
  //   Alert.alert('Thoát', 'Bạn có chắc chắn muốn thoát không?', [
  //     {
  //       text: 'Hủy',
  //       onPress: () => null,
  //       style: 'cancel',
  //     },
  //     { text: 'Thoát', onPress: () => BackHandler.exitApp() },
  //   ])
  //   return true
  // }
  // const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)
  // return () => backHandler.remove()
}

const shuffle = async (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const generateVocabularyToMeaningQuestion = async (word, words) => {
  let answers = []
  const wrongAnswerQuantity = Math.floor(3 + Math.random() * 3)
  for (let i = 0; i < wrongAnswerQuantity; i++) {
    const randomIndex = Math.floor(Math.random() * words.length)
    answers.push({ content: words[randomIndex].description, isCorrect: false })
    words.splice(randomIndex, 1)
  }
  answers.push({ content: word.description, isCorrect: true })
  answers = await shuffle(answers)
  return {
    word: word.word,
    type: QUESTION_TYPE.VOCABULARY_TO_MEANING,
    pronounce: word.pronounce,
    description: word.description,
    answers,
  }
}

const generateMeaningToVocabularyQuestion = async (word, words) => {
  let answers = []
  const wrongAnswerQuantity = Math.floor(3 + Math.random() * 3)
  for (let i = 0; i < wrongAnswerQuantity; i++) {
    const randomIndex = Math.floor(Math.random() * words.length)
    answers.push({ content: words[randomIndex].word, isCorrect: false })
    await words.splice(randomIndex, 1)
  }
  answers.push({ content: word.word, isCorrect: true })
  answers = await shuffle(answers)
  return {
    word: word.word,
    type: QUESTION_TYPE.MEANING_TO_VOCABULARY,
    pronounce: word.pronounce,
    description: word.description,
    answers,
  }
}

const generatePronuciationQuestion = async (word, words) => {
  let answers = []
  const wrongAnswerQuantity = Math.floor(3 + Math.random() * 3)
  for (let i = 0; i < wrongAnswerQuantity; i++) {
    const randomIndex = Math.floor(Math.random() * words.length)
    answers.push({ content: words[randomIndex].word, isCorrect: false })
    words.splice(randomIndex, 1)
  }
  answers.push({ content: word.word, isCorrect: true })
  answers = await shuffle(answers)
  return {
    word: word.word,
    type: QUESTION_TYPE.PRONUNCIATION,
    pronounce: word.pronounce,
    description: word.description,
    answers,
  }
}

const generateWritingQuestion = async (word) => {
  return {
    word: word.word,
    type: QUESTION_TYPE.WRITING,
    pronounce: word.pronounce,
    description: word.description,
  }
}

const generateQuestionFromWord = async (word, words) => {
  const randomType = Math.floor(1 + Math.random() * 4)
  // 1: VOCABULARY_TO_MEANING
  // 2: MEANING_TO_VOCABULARY
  // 3: PRONUCIATION
  // 4: WRITING

  words = await words.filter((e) => e !== word)

  let question
  switch (randomType) {
    case 1:
      question = await generateVocabularyToMeaningQuestion(word, words)
      break
    case 2:
      question = await generateMeaningToVocabularyQuestion(word, words)
      break
    case 3:
      question = await generatePronuciationQuestion(word, words)
      break
    case 4:
      question = await generateWritingQuestion(word)
      break
    default:
      question = await generateMeaningToVocabularyQuestion(word, words)
  }
  return question
}
module.exports = { backHandleToExitApp, generateQuestionFromWord }
