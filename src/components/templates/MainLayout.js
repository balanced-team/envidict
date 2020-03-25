import React from 'react'
import { Container, Content } from 'native-base'
import { ScrollView } from 'react-native'

import SearchHeader from '../molecules/main-layout/SearchHeader'

const MainLayout = (props) => {
  return (
    <Container>
      <SearchHeader voiceButtonIsVisible={props.voiceButtonIsVisible} />
      <Content>
        <ScrollView>{props.children}</ScrollView>
      </Content>
    </Container>
  )
}

export default MainLayout
