import React from 'react'
import { Text, Image, StyleSheet } from 'react-native'
import { View, List, ListItem, Left, Body, Right } from 'native-base'
import { Typography, Colors } from '../../../styles'

const Courses = (props) => {
  return (
    <View>
      <Text style={styles.coursesName}>Ôn luyện kĩ năng</Text>
      <List>
        <ListItem avatar noIndent>
          <Left>
            <Image
              style={styles.image}
              source={{ uri: 'https://reactjs.org/logo-og.png' }}
            />
          </Left>
          <Body>
            <Text style={styles.title}>600 từ vựng TOEIC</Text>
            <Text> Số bài học: 50</Text>
          </Body>
        </ListItem>
      </List>
    </View>
  )
}
const styles = StyleSheet.create({
  coursesName: {
    fontSize: Typography.FONT_SIZE_18,
    paddingLeft: 8,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Colors.SECONDARY_LIGHT,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    paddingLeft: 8,
  },
  title: {
    fontSize: Typography.FONT_SIZE_20,
    fontWeight: 'bold',
    color: Colors.BLUE_TITLE,
  },
})
export default Courses
