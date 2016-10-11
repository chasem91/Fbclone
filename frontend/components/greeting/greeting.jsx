import React from 'react';
import { Link } from 'react-router';
import SearchBarContainer from '../search_bar/search_bar_container';
import NotificationsContainer from '../notifications/notifications_container';
import FriendRequestsContainer from '../friend_requests/friend_requests_container';

const personalGreeting = (currentUser, logout) => (
  <div className="personal-greeting group">
    <div className="personal-greeting-elements">
      <NotificationsContainer />
      <FriendRequestsContainer />
      <span className="small-logo">F</span>
      <SearchBarContainer />
      <Link to={`/`} onClick={logout} className="header-button">Log Out</Link>
      <Link to={`/users/${currentUser.id}`} activeClassName="current">Profile</Link>
    </div>
  </div>
);
// <button className="header-button" onClick={logout}>Log Out</button>

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return personalGreeting(currentUser, logout);
  } else {
    return (<div></div>);
  }
}

export default Greeting;
