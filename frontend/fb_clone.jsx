import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const initialState = {session: {currentUser: window.currentUser}};
    store = configureStore(initialState);
  } else {
    store = configureStore();
  }

  window.store = store;

  // const pusher = new Pusher("270713");
  // const channel = pusher.subscribe('my-channel');
  // channel.bind('my-event', data => {
  //   alert('An event was triggered with message: ' + data.message);
  // })

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
