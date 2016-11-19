import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import UserContainer from './user/user_container';
import UserIndexContainer from './user_index/user_index_container';
import NewsfeedContainer from './newsfeed/newsfeed_container';
import SessionContainer from './session/session_container';
import TimelineContainer from './user/timeline/timeline_container';
import AboutContainer from './user/about/about_container';
import FriendsContainer from './user/friends/friends_container';
import PhotosContainer from './user/photos/photos_container';


const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/login" component={SessionContainer} onEnter={_redirectIfLoggedIn}/>
        <Route path="/" component={App}>
          <IndexRoute component={NewsfeedContainer} onEnter={_ensureLoggedIn}/>
          <Route path="/users/:userId" component={UserContainer} onEnter={_ensureLoggedIn} >
            <IndexRoute component={TimelineContainer} />
            <Route path="/users/:userId/about" component={AboutContainer} />
            <Route path="/users/:userId/friends" component={FriendsContainer} />
            <Route path="/users/:userId/photos" component={PhotosContainer} />
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
