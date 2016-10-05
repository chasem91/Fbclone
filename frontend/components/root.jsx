import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import ProfileContainer from './profile/profile_container';
import HomeProfileContainer from './home_profile/home_profile_container';
import ProfileIndexContainer from './profile_index/profile_index_container';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    } else {
      store.dispatch({type: ""})
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }
  // <Link to="/" className="header-link"><h1>fbclone</h1></Link>

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="/profiles" component={ProfileIndexContainer} onEnter={_ensureLoggedIn}/>
          <Route path="/users/*" component={ProfileContainer} onEnter={_ensureLoggedIn}/>
          <Route path="/profile" component={HomeProfileContainer} onEnter={_ensureLoggedIn}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
