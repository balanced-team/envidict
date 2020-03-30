import { EnViWord, ViEnWord } from '../models'

export default class DictStore {
  constructor() {
    //
  }

  async findWord(word) {
    // always find in "av" table first
    let result = await EnViWord.findBy({ word })
    if (result) return result
    result = await ViEnWord.findBy({ word })
    return result
  }
}
