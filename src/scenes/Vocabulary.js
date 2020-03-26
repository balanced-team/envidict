import React, { useEffect } from 'react'
import { Text, Alert, BackHandler, StyleSheet } from 'react-native'
import { View, List, ListItem } from 'native-base'

import { backHandleToExitApp } from '../utils'
import MainLayout from '../components/templates/MainLayout'
import ListWord from './ListWord'
import { Colors, Typography } from '../styles/index'

const Vocabulary = ({ navigation }) => {
  useEffect(() => {
    backHandleToExitApp(Alert, BackHandler)
  }, [])

  return (
    <MainLayout voiceButtonIsVisible={true}>
      <List>
        <ListItem
          noIndent
          // style={{ backgroundColor: '#cde1f9' }}
          onPress={() => {
            navigation.navigate('ListWord')
          }}
        >
          <Text style={styles.vocabulary}>Business English Vocabulary</Text>
        </ListItem>
        <ListItem noIndent>
          <Text style={styles.vocabulary}>Easy Vocabulary</Text>
        </ListItem>
        <ListItem noIndent>
          <Text style={styles.vocabulary}>GMAT Core English</Text>
        </ListItem>
        <ListItem noIndent>
          <Text style={styles.vocabulary}>Hard Vocabulary</Text>
        </ListItem>
        <ListItem noIndent>
          <Text style={styles.vocabulary}>IELTS Core English</Text>
        </ListItem>
        <ListItem noIndent>
          <Text style={styles.vocabulary}>SAT Core English</Text>
        </ListItem>
        <ListItem noIndent>
          <Text style={styles.vocabulary}>Hard Core English</Text>
        </ListItem>
        <ListItem noIndent>
          <Text style={styles.vocabulary}>TOEFL Core English</Text>
        </ListItem>
        <ListItem noIndent>
          <Text style={styles.vocabulary}>TOEFL Core English</Text>
        </ListItem>
        <ListItem noIndent>
          <Text style={styles.vocabulary}>TOEFL Core English</Text>
        </ListItem>
        <ListItem noIndent>
          <Text style={styles.vocabulary}>TOEFL Core English</Text>
        </ListItem>
      </List>
    </MainLayout>
  )
}
const styles = StyleSheet.create({
  vocabulary: {
    color: Colors.BLUE_TITLE,
    fontSize: Typography.LINE_HEIGHT_20,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 5
  }
})

export default Vocabulary
