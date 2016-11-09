import React from 'react';

export default class UserActionBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddFriend = this.handleAddFriend.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !!nextProps.currentUser;
  }

  handleAddFriend(e) {
    this.props.requestFriend(this.props.currentUser.id, this.props.user.id);
  }

  addFriendButton(requestedFriends) {
    const userId = this.props.user.id;

    let hasRequested = false;
    for (const key in this.props.friendRequests) {
      if (this.props.friendRequests[key].requester.id === userId) {
        hasRequested = true;
      }
    }

    let hasBeenRequested = false;
    for (const key in this.props.requestedFriends) {
      if (this.props.requestedFriends[key].requested.id === userId) {
        hasBeenRequested = true;
      }
    }

    const areFriends = Object.keys(this.props.user.friends).includes(this.props.currentUser.id);

    if (areFriends){
      return <div className="update-action-friends">Friends</div>;
    } else if(hasBeenRequested){
      return <div className="update-action-requested">Requested</div>;
    } else if (hasRequested) {
      return <a className="update-action-requesting">Approve</a>
    } else {
      return <a className="update-action" onClick={this.handleAddFriend}>Add Friend</a>;
    }
  }

  render() {
    if (this.props.user.id === this.props.currentUser.id) return null;

    return (
      <div className="user-action-bar">
        {this.addFriendButton()}
      </div>
    );
  }
}
