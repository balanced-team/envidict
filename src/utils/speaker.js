// import Tts from 'react-native-tts'
import * as Speak from 'expo-speech'

class Speaker {
  constructor() {
    this.speaker = Speak
  }

  speak(text, language, rate, pitch) {
    // check if whether the speaker utility is currently speaking, stop it
    if (this.speaker.isSpeakingAsync()) {
      this.speaker.stop()
    }

    const options = {
      language: language ? language : 'en',
      rate: rate ? rate : 1,
      pitch: pitch ? pitch : 1,
    }

    this.speaker.speak(text, options)
  }
}

export default Speaker
