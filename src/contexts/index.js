import { createContext } from 'react'
import { DictStore } from '../stores'

export const dictStoreContext = createContext(new DictStore())
