import envi from '../assets/dict/envi.json'
import vien from '../assets/dict/vien.json'

export default class DictStore {
  constructor() {
    //
  }

  findWord(s) {
    s = s.trim().toLowerCase() // normalize input

    let entry = envi.find((entry) => entry.word === s)
    if (entry) return new Word(entry, 'envi')
    entry = vien.find((entry) => entry.word === s)
    if (entry) return new Word(entry, 'vien')
    return new Word({}, '')
  }
}

class Word {
  type = '' // either "envi" or "vien" or ""
  id = 0
  word = ''
  description = ''
  html = ''
  pronounce = ''

  constructor(data, type) {
    Object.assign(this, data)
    this.type = type
  }
}
