import React from 'react';
import { Link } from 'react-router';
import SearchBarContainer from '../search_bar/search_bar_container';

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <nav className="header-nav">
      <ul className="header-nav-links">
        <li><span className="small-logo">F</span></li>
        <li className="search-bar-container"><SearchBarContainer /></li>
        <li><button className="header-button" onClick={logout}>Log Out</button></li>
        <li><Link to="/profile" activeClassName="current">Profile</Link></li>
        <li><Link to="/profiles" activeClassName="current">Profiles</Link></li>
      </ul>
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
