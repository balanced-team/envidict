import { useEffect } from 'react'
import { Alert, BackHandler } from 'react-native'
import { backHandleToExitApp } from '../utils'

export default () => {
  useEffect(() => {
    backHandleToExitApp(Alert, BackHandler)
  }, [])
}
