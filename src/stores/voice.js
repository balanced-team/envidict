export default class VoiceStore {
  constructor() {
    this.autoSpeak = false
    this.rate = 1 // double between [0-1]
    this.pitch = 1 // double between [0-1]
  }

  setRate(newRate) {
    this.rate = newRate
  }

  setPitch(newPitch) {
    this.pitch = newPitch
  }

  toggleAutoSpeak() {
    this.autoSpeak = !this.autoSpeak
  }
}
