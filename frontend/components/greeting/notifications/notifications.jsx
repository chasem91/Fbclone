import React from 'react';
import { Link } from 'react-router';

export default class Notifications extends React.Component {
  constructor(props) {
    super(props);
  }

  notifications() {
    return null;
  }

  render() {
    return (
      <div className="notifications">
        <div className="notifications-header">
          Notifications
        </div>
        <div className="notifications-pointer">
        </div>
        <ul className="notifications-list">
          {this.notifications()}
        </ul>
      </div>
    );
  }
}
