import React from 'react';
import { Link } from 'react-router';

export default class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !!nextProps.currentUser
  }

  handleClick(e) {
    debugger
  }

  messages() {
    const messages = [];
    for (const key in this.props.currentUser.conversations) {
      const convoMessages = this.props.currentUser.conversations[key].messages;
      const message = convoMessages[Object.keys(convoMessages)[0]];
      if (message) {
        messages.push(
          <li key={key} className="message" onClick={this.handleClick}>
            <div className="message-details">
              <img className="message-thumb" src={window.homeUserImages.profilePicture}/>
              <div className="message-detail-name-and-content">
                <Link to={`/users/${message.user.id}`} className="message-link">
                  {`${message.user.first_name} ${message.user.last_name}`}
                </Link>
                <div className="message-content">{message.content}</div>
                <div className="message-created-at">{message.created_at}</div>
              </div>
            </div>
          </li>
        );
      }
    }
    if (messages.length > 0) {
      return messages;
    } else {
      return (
        <div className="no-messages">
          No new messages
        </div>
      );
    }
  }

  render() {
    return (
      <div className="messages">
        <div className="messages-header">
          Messages
        </div>
        <div className="messages-pointer">
        </div>
        <ul className="messages-list">
          {this.messages()}
        </ul>
      </div>
    );
  }
}
