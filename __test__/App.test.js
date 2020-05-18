import 'react-native'
import React from 'react'

import renderer from 'react-test-renderer'

import App from '../App'

jest.mock('expo', () => ({
  AppLoading: 'AppLoading',
}))

jest.mock('../src/navigations/Routes.js', () => 'Route')

describe('App', () => {
  jest.useFakeTimers()

  it(`renders the loading screen`, () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it(`renders the loading and after screen`, () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()

    tree.props.onFinish = () => {
      expect(tree.children.length).toBe(1)
    }
  })
})
