import React from 'react'
import { Container, Content } from 'native-base'
import { ScrollView } from 'react-native'
import { useScrollToTop } from '@react-navigation/native'

import SearchHeader from '../molecules/main-layout/SearchHeader'

const MainLayout = (props) => {
  const { onGoToSearchView, autoFocusSearchInput } = props
  const ref = React.useRef(null)
  useScrollToTop(ref)
  return (
    <Container>
      <SearchHeader
        autoFocus={autoFocusSearchInput}
        onGoToSearchView={onGoToSearchView}
        voiceButtonIsVisible={props.voiceButtonIsVisible}
      />
      <Content>
        <ScrollView ref={ref}>{props.children}</ScrollView>
      </Content>
    </Container>
  )
}

export default MainLayout
