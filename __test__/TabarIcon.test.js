import 'react-native'
import React from 'react'

import renderer from 'react-test-renderer'

import TabBarIcon from '../src/components/atoms/navigations/TabBarIcon'

describe('Loading navigation icons', () => {
  it(`renders icon heart`, () => {
    const tree = renderer.create(<TabBarIcon name="md-heart" focused={true} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it(`renders icon home`, () => {
    const tree = renderer.create(<TabBarIcon name="md-home" focused={false} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it(`renders icon book`, () => {
    const tree = renderer.create(<TabBarIcon name="md-book" focused={false} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it(`renders icon settings`, () => {
    const tree = renderer
      .create(<TabBarIcon name="md-settings" focused={false} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
