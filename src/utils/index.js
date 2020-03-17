const backHandleToExitApp = (Alert, BackHandler) => {
  const backAction = () => {
    Alert.alert('Thoát', 'Bạn có chắc chắn muốn thoát không?', [
      {
        text: 'Hủy',
        onPress: () => null,
        style: 'cancel'
      },
      { text: 'Thoát', onPress: () => BackHandler.exitApp() }
    ])
    return true
  }
  const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)

  return () => backHandler.remove()
}

module.exports = { backHandleToExitApp }
