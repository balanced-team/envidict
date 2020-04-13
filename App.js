import { Ionicons } from '@expo/vector-icons'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Root } from 'native-base'
import React, { useState } from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import Routes from './src/navigations/Routes'

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
          <Routes />
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
  },
})

export default App
