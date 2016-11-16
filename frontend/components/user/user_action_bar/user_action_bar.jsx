import React from 'react';

export default class UserActionBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddFriend = this.handleAddFriend.bind(this);
    this.handleApproveFriend = this.handleApproveFriend.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !!nextProps.currentUser;
  }

  handleAddFriend(e) {
    this.props.requestFriend(this.props.currentUser.id, this.props.user.id);
  }

  handleApproveFriend(e) {
    this.props.acceptRequest(this.props.currentUser.id, this.props.user.id);
  }

  addFriendButton() {
    const areFriends = Object.keys(this.props.currentUser.friends).includes(String(this.props.user.id));

    if (areFriends){
      return <div className="update-action-friends">Friends</div>;
    } else if(this._userHasBeenRequested()){
      return <div className="update-action-requested">Requested</div>;
    } else if (this._userHasRequested()) {
      return <a className="update-action-requesting" onClick={this.handleApproveFriend}>Approve</a>
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

  _userHasRequested() {
    const userId = this.props.user.id;

    let hasRequested = false;
    const receivedRequests = this.props.currentUser.receivedRequests;
    for (const key in receivedRequests) {
      if (receivedRequests[key].requester.id === userId) {
        hasRequested = true;
      }
    }
    return hasRequested;
  }

  _userHasBeenRequested() {
    const userId = this.props.user.id;

    let hasBeenRequested = false;
    const sentRequests = this.props.currentUser.sentRequests;
    for (const key in sentRequests) {
      if (sentRequests[key].requested.id === userId) {
        hasBeenRequested = true;
      }
    }
    return hasBeenRequested;
  }
}
