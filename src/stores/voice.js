export default class VoiceStore {
  constructor() {
    this.autoSpeak = false

    // rate of voice
    this.rate = 1 // double between [0-1]

    // pitch
    this.pitch = 1 // double between [0-1]

    this.volume = 1
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
}
