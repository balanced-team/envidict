import { createContext } from 'react'
import { DictStore, TopicStore } from '../stores'

export const dictStoreContext = createContext(new DictStore())
export const topicStoreContext = createContext(new TopicStore())
