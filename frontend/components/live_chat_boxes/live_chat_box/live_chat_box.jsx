import React from 'react';
import { Link } from 'react-router';

export default class LiveChatBoxes extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !!nextProps.currentUser
  }

  handleOpen() {
    return;
  }

  handleClose() {
    return;
  }

  handleKeyPress(e) {
    if(e.key === "Enter") {
      // example of final message object
      // const message = {
      //   author_id: this.props.currentUser.id,
      //   recipient_id: this.props.userId
      //   body: e.target.value
      // };

      const message = e.target.value;
      this.props.sendMessage(message);
    }
  }

  render() {
    if (true) {
      return (
        <div className="live-chat-box-container-opened" onClick={this.handleClose}>
          <div className="live-chat-box-header">
            <Link to="/users/1">First Last</Link>
            <div className="chat-box-x-icon"></div>
          </div>
          <div className="chat-box-conversation">
            Conversation
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
}
