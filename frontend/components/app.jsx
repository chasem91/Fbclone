import React from 'react'
import { Link } from 'react-router'
import GreetingContainer from './greeting/greeting_container'
import LiveChatContainer from './live_chat/live_chat_container'
import LiveChatBoxesContainer from './live_chat_boxes/live_chat_boxes_container'

const _redirectIfLoggedIn = (nextState, replace) => {
  const currentUser = store.getState().session.currentUser
  if (currentUser) {
    replace('/')
  }
}

const App = ({children}) => (
  <div>
    <GreetingContainer />
    <LiveChatContainer />
    <LiveChatBoxesContainer />
    {children}
  </div>
)

export default App
