import React, { useState, useEffect } from 'react'
import { Alert, BackHandler, StyleSheet, Text, View } from 'react-native'
import { List, Separator, Button, Icon } from 'native-base'

import MainLayout from '../components/templates/MainLayout'
import ListItemCourses from '../components/atoms/courses/ListItemCourses'
import CurrentVocabularies from '../components/molecules/home/CurrentVocabularies'
import Lesson from '../components/atoms/lesson/Lesson'
import { Colors } from '../styles'

const LessonList = ({ navigation }) => {
  const onClickPreView = () => {
    navigation.navigate('LessonDetail')
  }
  const onClickPractise = () => {
    navigation.navigate('MainLearning')
  }
  const onClickLearnNow = () => {
    navigation.navigate('LearnNow')
  }
  return (
    <MainLayout>
      <View style={styles.listItemCourses}>
        <ListItemCourses
          image="https://reactjs.org/logo-og.png"
          title="600 Từ vựng TOEIC"
          subTitle="Số bài học: 50"
        />
      </View>

      <Button
        bordered
        info
        style={styles.buttonChange}
        onPress={() => {
          navigation.push('Learning')
        }}
      >
        <Icon name="exchange-alt" type="FontAwesome5" style={styles.iconChange} />
        <Text style={{ color: Colors.BLUE_LIGHT }}>Chọn bộ từ khác</Text>
      </Button>
      <CurrentVocabularies
        onClickPreView={onClickPreView}
        onClickPractise={onClickPractise}
        onClickLearnNow={onClickLearnNow}
      />
      <Separator>
        <Text style={styles.tittle}>Danh sách bài đã học</Text>
      </Separator>
      <Lesson />
      <Lesson />
      <Lesson />
      <Lesson />
    </MainLayout>
  )
}

const styles = StyleSheet.create({
  buttonChange: {
    height: 35,
    right: 0,
    alignSelf: 'flex-end',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
    marginRight: 15,
    paddingRight: 10,
  },
  iconChange: {
    fontSize: 13,
    color: Colors.BLUE_LIGHT,
  },
  tittle: {
    fontSize: 16,
    color: Colors.BLACK,
  },
  listItemCourses: {
    paddingLeft: 10,
    paddingTop: 10,
  },
})
export default LessonList
