import 'react-native'
import React from 'react'

import renderer from 'react-test-renderer'

import Settings from '../src/scenes/Settings'

describe('Settings', () => {
  jest.useFakeTimers()

  it(`renders screen`, () => {
    const tree = renderer.create(<Settings />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
