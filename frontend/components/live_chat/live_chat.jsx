import React from 'react';
import { Link } from 'react-router';
import ActiveUserDetailContainer from './active_user_detail/active_user_detail_container';
import LiveChatSearchContainer from './live_chat_search/live_chat_search_container';

export default class LiveChat extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !!nextProps.currentUser
  }

  activeUsersList() {
    const userDetails = [];
    const users = this.props.currentUser.activeUsers || {};
    for(const key in users) {
      const user = users[key];
      userDetails.push(
        <ActiveUserDetailContainer userId={user.id} key={user.id} />
      );
    }
    return userDetails;
  }

  render() {
    return (
      <div className="live-chat-container">
        <div className="live-chat-active-users-list">
          {this.activeUsersList()}
        </div>
        <LiveChatSearchContainer />
      </div>
    );
  }
}
