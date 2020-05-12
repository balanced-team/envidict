import 'react-native'
import React from 'react'

import renderer from 'react-test-renderer'

import Home from '../src/scenes/Home'
describe('Home', () => {
  it(`renders Home screen`, () => {
    const tree = renderer
      .create(<Home navigation={{ navigate: (route, params) => {} }} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
