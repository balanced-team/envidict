import React from 'react'
import { View, Spinner, Text } from 'native-base'
import { StyleSheet } from 'react-native'
import { Typography, Colors } from '../../../styles'

const Loading = () => {
  return (
    <View style={styles.loadingContainer}>
      <Spinner color={Colors.BLUE_DARK} />
      <Text style={styles.loadingText}>Đang tải dữ liệu...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  loadingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.BLUE_TEXT,
    textAlign: 'center',
  },
})

export default Loading
