import { createContext } from 'react'
import { DictStore, VoiceStore } from '../stores'

export const dictStoreContext = createContext(new DictStore())
export const voiceStoreContext = createContext(new VoiceStore())
