import React from 'react'
import { Link } from 'react-router'

export default class Notifications extends React.Component {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !!nextProps.currentUser
  }

  notifications() {
    return null
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
    )
  }

  notifications() {
    const notifications = []
    const notifs = this.props.currentUser.notifications
    for (const key in notifs) {
      const notification = notifs[key]
      if (notification) {
        notifications.push(
          <li key={key} className="notification" id={key} onClick={this.handleClick}>
            <div className="notification-details">
              <img className="notification-thumb" src={window.homeUserImages.profilePicture}/>
              <div className="notification-detail-name-and-content">
                <div className="notification-link">
                  {`${notification.user.first_name} ${notification.user.last_name}`}
                </div>
                <div className="notification-content">{notification.content}</div>
                <div className="notification-created-at">{notification.created_at}</div>
              </div>
            </div>
          </li>
        )
      }
    }
    if (notifications.length > 0) {
      return notifications
    } else {
      return (
        <div className="no-notifications">
          No new notifications
        </div>
      )
    }
  }
}
