import * as firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyDuVs4fMylajYaD400oHVKGtXZW3FT9Xss',
  authDomain: 'envidict-4c249.firebaseapp.com',
  databaseURL: 'https://envidict-4c249.firebaseio.com',
  projectId: 'envidict-4c249',
  storageBucket: 'envidict-4c249.appspot.com',
  messagingSenderId: '17743148956',
  appId: '1:17743148956:web:967ea767205aee123a3a59',
  measurementId: 'G-X1497GR21T',
})
const db = firebase.firestore()

export default class DictStore {
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
