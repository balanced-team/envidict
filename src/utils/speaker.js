// import Tts from 'react-native-tts'
import * as Speak from 'expo-speech'

class Speaker {
  constructor() {
    this.speaker = Speak
    this.rate = 1
    this.pitch = 1
  }

  speak(text, language) {
    // check if whether the speaker utility is currently speaking, stop it
    if (this.speaker.isSpeakingAsync()) {
      this.speaker.stop()
    }

    const options = {
      language: language ? language : 'en',
      rate: this.rate,
      pitch: this.pitch,
    }

    this.speaker.speak(text, options)
  }
}

export const InstanceSpeaker = new Speaker()
