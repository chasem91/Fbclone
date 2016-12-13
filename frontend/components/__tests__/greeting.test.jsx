import React from 'react'
import Greeting from '../greeting/greeting'
import renderer from 'react-test-renderer'

test('Greeting displays properly', () => {
  const component = renderer.create(
    <Greeting></Greeting>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
