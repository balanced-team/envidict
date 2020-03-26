import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { List, ListItem } from 'native-base'

import MainLayout from '../components/templates/MainLayout'
import { Colors, Typography } from '../styles/index'

const ListWord = ({ navigation }) => {
  return (
    <MainLayout voiceButtonIsVisible={false}>
      <List>
        <ListItem noIndent>
          <Text
            style={styles.vocabulary}
            onPress={() => {
              navigation.navigate('WordView')
            }}
          >
            representatives
          </Text>
        </ListItem>
        <ListItem noIndent>
          <Text style={styles.vocabulary}>Easy</Text>
        </ListItem>
        <ListItem noIndent>
          <Text style={styles.vocabulary}>English</Text>
        </ListItem>
        <ListItem noIndent>
          <Text style={styles.vocabulary}>Vocabulary</Text>
        </ListItem>
        <ListItem noIndent>
          <Text style={styles.vocabulary}>Core</Text>
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

export default ListWord
