import React from 'react'
import { Container, Content } from 'native-base'
import { ScrollView } from 'react-native'

import SearchHeader from '../molecules/main-layout/SearchHeader'

const MainLayout = (props) => {
  const { onGoToSearchView, autoFocusSearchInput, isVocabularySearch } = props
  return (
    <Container>
      <SearchHeader
        autoFocus={autoFocusSearchInput}
        onGoToSearchView={onGoToSearchView}
        voiceButtonIsVisible={props.voiceButtonIsVisible}
        isVocabularySearch={isVocabularySearch}
      />
      <Content>
        <ScrollView>{props.children}</ScrollView>
      </Content>
    </Container>
  )
}

export default MainLayout
