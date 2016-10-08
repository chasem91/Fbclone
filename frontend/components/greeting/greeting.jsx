import React from 'react';
import { Link } from 'react-router';
import SearchBarContainer from '../search_bar/search_bar_container';

const personalGreeting = (currentUser, logout) => (
  <div className="personal-greeting group">
    <div className="personal-greeting-elements">
      <span className="small-logo">F</span>
      <SearchBarContainer />
      <button className="header-button" onClick={logout}>Log Out</button>
      <Link to="/user" activeClassName="current">Profile</Link>
      <Link to="/users" activeClassName="current">Profiles</Link>
    </div>
  </div>
);

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return personalGreeting(currentUser, logout);
  } else {
    return (<div></div>);
  }
}

export default Greeting;
