import React, { useState } from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { AppLoading } from 'expo'
import { Asset } from 'expo-asset'
import * as FileSystem from 'expo-file-system'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'

import AppNavigator from './src/navigations/AppNavigator'
import { Root } from 'native-base'

const App = (props) => {
  const [isLoadingComplete, setLoadingComplete] = useState(false)

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    )
  } else {
    return (
      <Root>
        <View style={styles.container}>
          <StatusBar backgroundColor="red" hidden={false} barStyle="light-content" />
          <AppNavigator />
        </View>
      </Root>
    )
  }
}

const loadResourcesAsync = async () => {
  await Font.loadAsync({
    ...Ionicons.font,
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
  })

  await FileSystem.downloadAsync(
    Asset.fromModule(require('./dict.db')).uri,
    `${FileSystem.documentDirectory}/SQLite/dict.db`
  )
}

const handleLoadingError = (error) => {
  console.warn(error)
}

const handleFinishLoading = (setLoadingComplete) => {
  setLoadingComplete(true)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight,
  },
})

export default App
