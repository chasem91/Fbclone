// import React from 'react';
// import { Provider } from 'react-redux';
// import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// import App from './app';
// import UserContainer from './user/user_container';
// import UserIndexContainer from './user_index/user_index_container';
// import NewsfeedContainer from './newsfeed/newsfeed_container';
// import SessionContainer from './session/session_container';
//
//
// const Root = ({ store }) => {
//
//   const _ensureLoggedIn = (nextState, replace) => {
//     const currentUser = store.getState().session.currentUser;
//     if (!currentUser) {
//       replace('/login');
//     }
//   };
//
//   const _redirectIfLoggedIn = (nextState, replace) => {
//     const currentUser = store.getState().session.currentUser;
//     if (currentUser) {
//       replace('/');
//     }
//   }
//
//   return (
//     <Provider store={store}>
//       <Router history={hashHistory}>
//         <Route path="/login" component={SessionContainer} onEnter={_redirectIfLoggedIn}/>
//         <Route path="/" component={App}>
//           <IndexRoute component={NewsfeedContainer} onEnter={_ensureLoggedIn}/>
//           <Route path="/users/:userId" component={UserContainer} onEnter={_ensureLoggedIn}/>
//         </Route>
//       </Router>
//     </Provider>
//   );
// };
//
// export default Root;
