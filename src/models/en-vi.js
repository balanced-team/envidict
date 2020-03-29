import { SQLite } from 'expo-sqlite'
import { BaseModel, types } from 'expo-sqlite-orm'

export default class EnViWord extends BaseModel {
  constructor(data) {
    super(data)
  }

  get type() {
    return 'en-vi'
  }

  static get database() {
    return async () => SQLite.openDatabase('dict.db')
  }

  static get tableName() {
    return 'av'
  }

  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true },
      word: { type: types.TEXT },
      html: { type: types.TEXT },
      description: { type: types.TEXT },
      pronounce: { type: types.TEXT },
    }
  }
}
