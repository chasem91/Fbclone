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

  componentDidMount() {
    $(window).resize( e => {
      if ($(window).width() < 1230) {
        $('.live-chat-container').addClass('compact-chat');
        $('.live-chat-boxes-container').addClass('shifted-chat-boxes');
        $('.live-chat-compact-header').removeClass('hidden-chat-header');
        $('.live-chat-search-container').addClass('chat-search-border');
      } else {
        $('.live-chat-container').removeClass('compact-chat');
        $('.live-chat-boxes-container').removeClass('shifted-chat-boxes')
        $('.live-chat-compact-header').addClass('hidden-chat-header');
        $('.live-chat-search-container').removeClass('chat-search-border');
      }
    })
  }

  activeUsersList() {
    const userDetails = [];
    const conversations = this.props.currentUser.conversations || {};
    for(const key in conversations) {
      const convo = conversations[key];
      userDetails.push(
        <ActiveUserDetailContainer conversationId={convo.id} key={convo.id} />
      );
    }
    return userDetails;
  }

  render() {
    return (
      <div className="live-chat-container">
        <div className="live-chat-compact-header hidden-chat-header">
          <div className="compact-chat-header-text">Chat</div>
        </div>
        <div className="live-chat-active-users-list">
          {this.activeUsersList()}
        </div>
        <LiveChatSearchContainer />
      </div>
    );
  }
}
