import React from 'react'
import { Link } from 'react-router'
import ActiveUserDetailContainer from './active_user_detail/active_user_detail_container'
import LiveChatSearchContainer from './live_chat_search/live_chat_search_container'

export default class LiveChat extends React.Component {
  constructor(props) {
    super(props)
    this.toggleCompactLiveChat = this.toggleCompactLiveChat.bind(this)
    this.minimized = false
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !!nextProps.currentUser
  }

  componentDidMount() {
    $('.live-chat-active-users-list').slimScroll({
      height: `100%`,
      width: '100%',
      size: '8px',
      position: 'right',
      color: '#222',
      alwaysVisible: false,
      distance: '2px',
      railVisible: true,
      railColor: '#222',
      railOpacity: 0.1,
      wheelStep: 10,
      allowPageScroll: false,
      disableFadeOut: false
    })
    if ($(window).width() < 1230) {
      $('.live-chat-container').addClass('compact-chat')
      $('.live-chat-boxes-container').addClass('shifted-chat-boxes')
      $('.live-chat-compact-header').removeClass('hidden-chat-header')
      $('.live-chat-search-container').addClass('chat-search-border')
    }
    $(window).resize( e => {
      if ($(window).width() < 1230) {
        if (this.minimized && !$('.minimized-compact-chat')[0]) {
          $('.live-chat-container').toggleClass("minimized-compact-chat")
        }
        $('.live-chat-container').addClass('compact-chat')
        $('.live-chat-boxes-container').addClass('shifted-chat-boxes')
        $('.live-chat-compact-header').removeClass('hidden-chat-header')
        $('.live-chat-search-container').addClass('chat-search-border')
      } else {
        if (this.minimized && $('.minimized-compact-chat')[0]) {
          $('.live-chat-container').toggleClass("minimized-compact-chat")
        }
        $('.live-chat-container').removeClass('compact-chat')
        $('.live-chat-boxes-container').removeClass('shifted-chat-boxes')
        $('.live-chat-compact-header').addClass('hidden-chat-header')
        $('.live-chat-search-container').removeClass('chat-search-border')
      }
    })
  }

  activeUsersList() {
    const userDetails = []
    const conversations = this.props.currentUser.conversations || {}
    for(const key in conversations) {
      const convo = conversations[key]
      userDetails.push(
        <div key={convo.id}>
          <ActiveUserDetailContainer conversationId={convo.id} key={convo.id} />
        </div>
      )
    }
    return userDetails
  }

  toggleCompactLiveChat(e) {
    this.minimized = this.minimized ? false : true
    $(e.currentTarget).parent().toggleClass("minimized-compact-chat")
  }

  render() {
    return (
      <div className="live-chat-container">
        <div className="live-chat-compact-header hidden-chat-header" onClick={this.toggleCompactLiveChat}>
          <div className="compact-chat-header-text">Chat</div>
        </div>
        <div className="live-chat-active-users-list">
          {this.activeUsersList()}
        </div>
        <LiveChatSearchContainer />
      </div>
    )
  }
}
