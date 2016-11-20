import React from 'react';
import { Link } from 'react-router';

export default class Messages extends React.Component {
  constructor(props) {
    super(props);
  }

  messages() {
    return null;
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
