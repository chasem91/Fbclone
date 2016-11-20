import React from 'react';
import { Link } from 'react-router';
import SearchBarContainer from './search_bar/search_bar_container';
import NotificationsContainer from './notifications/notifications_container';
import FriendRequestsContainer from './friend_requests/friend_requests_container';
import MessagesContainer from './messages/messages_container';

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMessages = this.toggleMessages.bind(this);
    this.toggleFriendRequests = this.toggleFriendRequests.bind(this);
    this.toggleNotifications = this.toggleNotifications.bind(this);
  }

  toggleAll() {
    const $friendRequests = $('.friend-requests-container');
    if ($friendRequests.length) {
      $friendRequests.removeClass('friend-requests-container');
      $friendRequests.addClass('hidden');
    }
    const $friendRequestsIcon = $('.friend-requests-icon-clicked');
    if ($friendRequestsIcon.length) {
      $friendRequestsIcon.removeClass('friend-requests-icon-clicked');
      $friendRequestsIcon.addClass('friend-requests-icon');
    }

    const $messages = $('.messages-container');
    if ($messages.length) {
      $messages.removeClass('messages-container');
      $messages.addClass('hidden');
    }
    const $messagesIcon = $('.messages-icon-clicked');
    if ($messagesIcon.length) {
      $messagesIcon.removeClass('messages-icon-clicked');
      $messagesIcon.addClass('messages-icon');
    }

    const $notifications = $('.notifications-container');
    if ($notifications.length) {
      $notifications.removeClass('notifications-container');
      $notifications.addClass('hidden');
    }
    const $notificationsIcon = $('.notifications-icon-clicked');
    if ($notificationsIcon.length) {
      $notificationsIcon.removeClass('notifications-icon-clicked');
      $notificationsIcon.addClass('notifications-icon');
    }
  }

  toggleFriendRequests (e) {
    const target = e.currentTarget;
    const child = e.currentTarget.children[0];
    const clicked = "friend-requests-icon-clicked";
    const unclicked = "friend-requests-icon";
    const hidden = "hidden";
    const shown = "friend-requests-container";
    const newTargetClassName = target.className === clicked ? unclicked : clicked;
    const newChildClassName = child.className === hidden ? shown : hidden;
    this.toggleAll();
    target.className = newTargetClassName;
    child.className = newChildClassName;
  }

  toggleNotifications (e) {
    const target = e.currentTarget;
    const child = e.currentTarget.children[0];
    const clicked = "notifications-icon-clicked";
    const unclicked = "notifications-icon";
    const hidden = "hidden";
    const shown = "notifications-container";
    const newTargetClassName = target.className === clicked ? unclicked : clicked;
    const newChildClassName = child.className === hidden ? shown : hidden;
    this.toggleAll();
    target.className = newTargetClassName;
    child.className = newChildClassName;
  }

  toggleMessages (e) {
    const target = e.currentTarget;
    const child = e.currentTarget.children[0];
    const clicked = "messages-icon-clicked";
    const unclicked = "messages-icon";
    const hidden = "hidden";
    const shown = "messages-container";
    const newTargetClassName = target.className === clicked ? unclicked : clicked;
    const newChildClassName = child.className === hidden ? shown : hidden;
    this.toggleAll();
    target.className = newTargetClassName;
    child.className = newChildClassName;
  }

  personalGreeting () {
    return (
      <div>
        <div className="personal-greeting group">
          <div className="personal-greeting-elements">
            <div className="icon-and-search">
              <Link to="/" >
                <div className="small-logo"></div>
              </Link>
              <SearchBarContainer />
            </div>
            <div className="header-icons-and-logout">
              <Link to={`/users/${this.props.currentUser.id}`} className="my-profile-link">
                <img className="my-profile-link-thumb" src={window.homeUserImages.profilePicture}></img>
                <div className="my-profile-link-name">
                  {this.props.currentUser.first_name}
                </div>
              </Link>
              <div className="pipe"/>
              <Link to={`/`} className="newsfeed-link">Home</Link>
              <div className="friend-requests-icon-and-container">
                <div className="friend-requests-icon" onClick={this.toggleFriendRequests}>
                  <div className="hidden">
                    <FriendRequestsContainer />
                  </div>
                </div>
              </div>
              <div className="messages-icon-and-container">
                <div className="messages-icon" onClick={this.toggleMessages}>
                  <div className="hidden">
                    <MessagesContainer />
                  </div>
                </div>
              </div>
              <div className="notifications-icon-and-container">
                <div className="notifications-icon" onClick={this.toggleNotifications}>
                  <div className="hidden">
                    <NotificationsContainer />
                  </div>
                </div>
              </div>
              <div onClick={this.props.logout} className="logout-button">Log Out</div>
            </div>
          </div>
        </div>
        <div className="header-bar-fix"/>
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
