import { action, observable, runInAction } from 'mobx'
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
  @observable words = []

  constructor(json) {
    this.fromJson(json)
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

    runInAction(() => {
      this.words = words
    })
  }
}
