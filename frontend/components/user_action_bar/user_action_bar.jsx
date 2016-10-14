import React from 'react';

export default class UserActionBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddFriend = this.handleAddFriend.bind(this);
  }

  handleAddFriend(e) {
    this.props.requestFriend(this.props.currentUser.id, this.props.user.id);
  }

  addFriendButton(requestedFriends) {
    const userId = this.props.user.id;
    const hasBeenRequested = Object.keys(this.props.requestedFriends).includes(`${userId}`);
    let areFriends;
    if (Object.keys(this.props.currentUser).includes('friends')) {
      areFriends = Object.keys(this.props.currentUser.friends).includes(`${userId}`);
    } else {
      areFriends = false;
    }
    if (areFriends){
      return <div className="update-action-friends">Friends</div>;
    } else if(hasBeenRequested){
      return <div className="update-action-requested">Requested</div>;
    } else {
      return <a className="update-action" onClick={this.handleAddFriend}>Add Friend</a>;
    }
  }

  render() {
    return (
      <div className="user-action-bar">
        {this.addFriendButton()}
        <aside className="side-actions">
          <a>Message</a>
          <a>...</a>
        </aside>
      </div>
    );
  }
}
