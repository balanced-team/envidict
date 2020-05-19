import React, { useEffect } from 'react'
import {
  StyleSheet,
  ProgressBarAndroid,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native'
import { View, Text, Grid, Col, Button, Icon } from 'native-base'
import { Colors } from '../../../styles'

const CurrentVocabularies = (props) => {
  const { onClickPreView, onClickLearnNow, onClickPractise } = props

  useEffect(() => {}, [props])

  return (
    <View>
      <Text style={styles.tittle}>Bộ từ vựng 1</Text>
      <TouchableHighlight onPress={onClickPreView}>
        <View style={styles.card}>
          <Text style={styles.lessonName}>{'Bài ' + (props.index + 1)}</Text>
          <Grid>
            <Col size={60}>
              <ProgressBarAndroid
                styleAttr="Horizontal"
                indeterminate={false}
                progress={7 / 10}
                color={Colors.SUCCESS}
              ></ProgressBarAndroid>
            </Col>
            <Col size={40}>
              <Text style={styles.information}>
                {'Đã thuộc: 7/' + props.wordIds.length}
              </Text>
            </Col>
          </Grid>
          <View style={styles.buttons}>
            <Button style={buttonStyle} small onPress={onClickPreView}>
              <Text uppercase={false}>Xem trước</Text>
            </Button>
            <Button style={buttonStyle} small onPress={onClickLearnNow}>
              <Text uppercase={false}>Học ngay</Text>
            </Button>
            <Button style={buttonStyle} small>
              <Text
                uppercase={false}
                onPress={() => onClickPractise(props.id, props.courseId)}
              >
                Luyện tập
              </Text>
            </Button>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  tittle: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 15,
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.BLUE_TITLE,
  },
  card: {
    padding: 10,
    borderRadius: 2,
    backgroundColor: Colors.WHITE,
    margin: 10,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: Colors.BLACK,
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
  },
  lessonName: {
    color: Colors.BLUE_DARK,
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  information: {
    color: Colors.BLUE_DARK,
    alignSelf: 'flex-end',
  },
})

const buttonStyle = {
  marginRight: 5,
  backgroundColor: Colors.BLUE_DARK,
}

export default CurrentVocabularies
