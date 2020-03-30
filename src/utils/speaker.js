// import Tts from 'react-native-tts'

import * as Speak from 'expo-speech'
class Speaker {
  constructor() {
    this.speaker = Speak
    this.language = 'en'
    // this.voice = ''
    this.rate = 1
    this.pitch = 1
  }

  speak(text) {
    // check if whether the speaker utility is currently speaking, stop it
    if (this.speaker.isSpeakingAsync()) {
      this.speaker.stop()
    }

    const options = {
      language: this.language,
      //   voice: this.voice,
      rate: this.rate,
      pitch: this.pitch,
    }

    this.speaker.speak(text, options)
  }
}

export const InstanceSpeaker = new Speaker()
