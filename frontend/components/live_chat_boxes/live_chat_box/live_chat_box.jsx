import React from 'react';
import { Link } from 'react-router';

export default class LiveChatBoxes extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.conversation = null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !!nextProps.currentUser
  }

  componentDidMount() {
    this.props.getConversation(this.props.currentUser.id, this.user.id);
  }

  handleOpen() {
    return;
  }

  handleClose() {
    return;
  }

  handleKeyPress(e) {
    if(e.key === "Enter") {
      const message = {
        user_id: this.props.currentUser.id,
        conversation_id: this.conversation.id,
        content: e.target.value
      };
      e.target.value = "";
      this.props.sendMessage(message);
    }
  }

  render() {
    this.user = this.user || this.props.currentUser.conversations[this.props.userId]
    if (true) {
      return (
        <div className="live-chat-box-container-opened" onClick={this.handleClose}>
          <div className="live-chat-box-header">
            <Link to={`/users/${this.user.id}`}>{`${this.user.first_name} ${this.user.last_name}`}</Link>
            <div className="chat-box-x-icon"></div>
          </div>
          <div className="chat-box-conversation">
            {this.conversation()}
          </div>
          <input
            placeholder="Type a message..."
            className="chat-box-message-input"
            onKeyPress={this.handleKeyPress}
            />
        </div>
      );
    } else {
      return (
        <div className="live-chat-box-container-closed" onClick={this.handleOpen}>
        </div>
      );
    }
  }

  conversation() {
    const messages = [];
    const conversation = this.props.currentUser.chatBoxes[this.user.id].conversation || {};
    for(const key in conversation) {
      const message = conversation[key];
      if (message.author_id === this.props.currentUser.id) {
        messages.push(
          <div key={message.id} className="authored-chat-message">
            <div className="authored-chat-message-content">
              {message.content}
            </div>
          </div>
        );
      } else {
        messages.push(
          <div key={message.id} className="chat-message">
            <div className="chat-message-content">
              {message.content}
            </div>
          </div>
        );
      }
    }
    return messages;
  }
}































//
