import { Ionicons } from '@expo/vector-icons'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import React, { useState } from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import AppNavigator from './src/navigations/AppNavigator'

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
      <View style={styles.container}>
        <StatusBar backgroundColor="red" hidden={false} barStyle="light-content" />
        <AppNavigator />
      </View>
    )
  }
}

const loadResourcesAsync = async () => {
  await Font.loadAsync({
    ...Ionicons.font,
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
  })
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
