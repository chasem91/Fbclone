import React from 'react';

export default class UserActionBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddFriend = this.handleAddFriend.bind(this);
  }

  handleAddFriend(e) {
    this.props.requestFriend(this.props.currentUser.id, this.props.user.id);
  }

  componentDidMount() {
    // if (Object.keys(this.props.requestedFriends).keys.length === 0) {
    //   if (Object.keys(this.props.currentUser.requested_friends).length > 0) {
    //     this.props.receiveRequestedFriends(this.props.currentUser.requested_friends);
    //   }
    // }
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
