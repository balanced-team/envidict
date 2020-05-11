import React from 'react'
import { Text, StyleSheet, ProgressBarAndroid } from 'react-native'
import {
  View,
  Body,
  List,
  Card,
  CardItem,
  Grid,
  Col,
  Icon,
  Right,
  Button,
} from 'native-base'

import { Typography, Colors } from '../../../styles'

const Lesson = (props) => {
  return (
    <Card style={styles.card}>
      <CardItem>
        <Body>
          <Text style={styles.namLesson}>{props.name}</Text>
        </Body>
        <Right>
          <Icon active name="md-bookmark" type="Ionicons" style={styles.icon} />
        </Right>
      </CardItem>
      <CardItem>
        <Body>
          <Grid>
            <Col size={60}>
              <ProgressBarAndroid
                styleAttr="Horizontal"
                indeterminate={false}
                progress={0.7}
                color={Colors.SUCCESS}
              ></ProgressBarAndroid>
            </Col>
            <Col size={40}>
              <Text style={styles.information}>Đã thuộc: 7/10</Text>
            </Col>
          </Grid>
        </Body>
      </CardItem>
    </Card>
  )
}
const styles = StyleSheet.create({
  card: {
    marginLeft: 10,
    marginRight: 10,
  },
  namLesson: {
    color: Colors.BLUE_TEXT,
    fontSize: Typography.FONT_SIZE_18,
    fontWeight: 'bold',
  },
  information: {
    color: Colors.BLUE_TITLE,
    alignSelf: 'flex-end',
  },
  icon: {
    fontSize: 18,
    color: Colors.SUCCESS,
    alignSelf: 'flex-end',
    top: 0,
  },
})
export default Lesson
