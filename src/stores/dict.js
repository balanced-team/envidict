import { EnViWord, ViEnWord } from '../models'

export default class DictStore {
  constructor() {
    //
  }

  async findWord(word) {
    // always find in "av" table first
    let word = await EnViWord.findBy({ word })
    if (word) return word
    word = await ViEnWord.findBy({ word })
    return word
  }
}
