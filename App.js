import React, { useState } from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'

import AppNavigator from './src/navigations/AppNavigator'
import MoveScreen from './src/navigations/MoveScreen'

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
        {/* <MoveScreen /> */}
        <AppNavigator />
      </View>
    )
  }
}

const loadResourcesAsync = async () => {
  await Font.loadAsync({
    ...Ionicons.font
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
    marginTop: StatusBar.currentHeight
  }
})

export default App
