import AsyncStorage from '@react-native-community/async-storage'
import { action, computed, observable, runInAction } from 'mobx'
import { db } from '../utils/firestore'
import { Word } from './dict'

export class TopicStore {
  @observable topicColl = db.collection('topics')
  @observable topics = []

  @action
  async fetch() {
    const snapshot = await this.topicColl.get()
    const topics = snapshot.docs.map((doc) => {
      return new Topic({ id: doc.id, ...doc.data() })
    })

    runInAction(() => {
      this.topics = topics
    })
  }
}

export class Topic {
  @observable lessonColl = db.collection('lessons')
  @observable id = ''
  @observable name = ''
  @observable lessonIds = []
  @observable lessons = []

  constructor(json) {
    this.fromJson(json)
  }

  @action
  fromJson(json) {
    Object.assign(this, json)
  }

  @action
  async fetch() {
    const lessons = await Promise.all(
      this.lessonIds.map(async (id) => {
        const doc = await this.lessonColl.doc(id).get()
        return new Lesson({ id: doc.id, ...doc.data() })
      })
    )

    runInAction(() => {
      this.lessons = lessons
    })
  }
}

class Lesson {
  @observable enviColl = db.collection('envi')
  @observable id = ''
  @observable wordIds = []
  @observable learnedWordIds = new Set() // use Set to avoid accidentally duplicated words
  @observable words = []

  constructor(json) {
    this.fromJson(json)
  }

  @computed
  get wordCount() {
    return this.wordIds.length()
  }

  @computed
  get learnedWordCount() {
    return this.learnedWordIds.size
  }

  /**
   * Return progress as a float between 0 and 1
   **/
  @computed
  get progress() {
    return this.learnedWordCount / this.wordCount
  }

  @action
  fromJson(json) {
    Object.assign(this, json)
  }

  @action
  async fetch() {
    const words = await Promise.all(
      this.wordIds.map(async (id) => {
        const doc = await this.enviColl.doc(id).get()
        return new Word(doc.data(), 'envi')
      })
    )
    const learnedWordIds = new Set(JSON.parse(await AsyncStorage.getItem(this.id)))

    runInAction(() => {
      this.words = words
      this.learnedWordIds = learnedWordIds
    })
  }

  @action
  async markAsLearned(wordId) {
    this.learnedWordIds.add(wordId)
    await AsyncStorage.setItem(this.id, JSON.stringify(Array.from(this.learnedWordIds)))
  }
}
