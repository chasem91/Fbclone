import React from 'react';
import { Link } from 'react-router';
import SearchBarContainer from '../search_bar/search_bar_container';

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <nav className="header-nav">
      <div className="header-nav-links">
        <span className="small-logo">F</span>
        <SearchBarContainer />
        <button className="header-button" onClick={logout}>Log Out</button>
        <Link to="/profile" activeClassName="current">Profile</Link>
        <Link to="/profiles" activeClassName="current">Profiles</Link>
      </div>
    </nav>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return personalGreeting(currentUser, logout);
  } else {
    return (<div></div>);
  }
}

export default Greeting;
