import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';

// <GreetingContainer />
// <Link to="/" className="header-link"><h1>fbclone</h1></Link>

const _redirectIfLoggedIn = (nextState, replace) => {
  const currentUser = store.getState().session.currentUser;
  if (currentUser) {
    replace('/');
  }
}

const App = ({children}) => (
  <div>
    <SessionFormContainer />
    {children}
  </div>
);

export default App;
