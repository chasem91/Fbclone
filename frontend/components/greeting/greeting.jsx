import React from 'react';
import { Link } from 'react-router';
import SearchBarContainer from '../search_bar/search_bar_container';
import NotificationsContainer from '../notifications/notifications_container';
import FriendRequestsContainer from '../friend_requests/friend_requests_container';

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   if(!this.props.currentUser){
  //     return;
  //   } else {
  //     this.props.getRequestedFriends(this.props.currentUser.id);
  //   }
  // }

  personalGreeting () {
    return (
      <div className="personal-greeting group">
        <div className="personal-greeting-elements">
          <NotificationsContainer />
          <FriendRequestsContainer />
          <span className="small-logo">F</span>
          <SearchBarContainer />
          <Link to={`/`} onClick={this.props.logout} className="header-button">Log Out</Link>
          <Link to={`/users/${this.props.currentUser.id}`} activeClassName="current">Profile</Link>
          <Link to={`/newsfeed`} activeClassName="current">Newsfeed</Link>
        </div>
      </div>
    );
  }

  render () {
    if (this.props.currentUser) {
      return this.personalGreeting();
    } else {
      return (<div></div>);
    }
  }
}
