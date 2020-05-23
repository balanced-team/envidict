import * as Speak from 'expo-speech'
import { AsyncStorage } from 'react-native'

export default class VoiceStore {
  constructor() {
    // rate of voice
    this.rate = 1 // double between [0.25-2]

    // pitch
    this.pitch = 1 // double between [0.25-2]

    this.volume = 0.5

    this.speaker = Speak
    this.autoSpeak = false

    return this // when done
  }

  setRate(newRate) {
    this.rate = newRate
  }

  setPitch(newPitch) {
    this.pitch = newPitch
  }

  setVolume(newVolume) {
    this.volume = newVolume
  }

  toggleAutoSpeak() {
    this.autoSpeak = !this.autoSpeak
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
      volume: this.volume,
    }

    this.speaker.speak(text, options)
  }
}
