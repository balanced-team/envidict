import 'react-native'
import React from 'react'

import renderer from 'react-test-renderer'

import OnlineTranslation from '../src/scenes/OnlineTranslation'

describe('Online translate', () => {
  jest.useFakeTimers()

  it(`renders online translation screen`, () => {
    const tree = renderer
      .create(<OnlineTranslation route={{ params: { initText: 'Hello' } }} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
