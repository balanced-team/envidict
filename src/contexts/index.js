import { createContext } from 'react'
import { DictStore, VoiceStore, TopicStore } from '../stores'

export const voiceStoreContext = createContext(new VoiceStore())
export const dictStoreContext = createContext(new DictStore())
export const topicStoreContext = createContext(new TopicStore())
