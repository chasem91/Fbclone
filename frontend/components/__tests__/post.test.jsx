import React from 'react'
import Post from '../newsfeed/post/post'
import renderer from 'react-test-renderer'

test('Post renders', () => {
  const component = renderer.create(
    <Post />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
