import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { List, ListItem } from 'native-base'

import { backHandleToExitApp } from '../utils'
import MainLayout from '../components/templates/MainLayout'
import { useBackHandleToExitApp } from '../hooks'
import ListWord from './ListWord'
import { Colors, Typography } from '../styles/index'

const Vocabulary = ({ navigation }) => {

  useBackHandleToExitApp();
  return (
    <MainLayout voiceButtonIsVisible={true}>
      <List>
        <ListItem
          noIndent
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
