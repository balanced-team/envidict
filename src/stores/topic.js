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

class Topic {
  @observable lessionColl = db.collection('lessions')
  @observable id = ''
  @observable name = ''
  @observable lessionIds = []
  @observable lessions = []

  constructor(json) {
    this.fromJson(json)
  }

  @action
  fromJson(json) {
    Object.assign(this, json)
  }

  @action
  async fetch() {
    const lessions = await Promise.all(
      this.lessionIds.map(async (id) => {
        const doc = await this.lessionColl.doc(id).get()
        return new Lession({ id: doc.id, ...doc.data() })
      })
    )

    runInAction(() => {
      this.lessions = lessions
    })
  }
}

class Lession {
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
