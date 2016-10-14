import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';

const _redirectIfLoggedIn = (nextState, replace) => {
  const currentUser = store.getState().session.currentUser;
  if (currentUser) {
    replace('/');
  }
}

const App = ({children}) => (
  <div>
    <GreetingContainer />
    {children}
  </div>
);

export default App;
