import { db } from '../utils/firestore'

export class DictStore {
  constructor() {
    this.envi = db.collection('envi')
    this.vien = db.collection('vien')
  }

  async findWords(s) {
    s = s.trim().toLowerCase() // normalize input

    const enviWords = (await this.envi.where('word', '==', s).get()).docs.map(
      (doc) => new Word(doc.data(), 'envi')
    )
    const vienWords = (await this.vien.where('word', '==', s).get()).docs.map(
      (doc) => new Word(doc.data(), 'vien')
    )
    return [...enviWords, ...vienWords]
  }

  async findWord(s) {
    const words = await this.findWords(s)
    return words[0] // be cautious, this may be undefined
  }
}

export class Word {
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
