import React from 'react';


export default class UserActionBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddFriend = this.handleAddFriend.bind(this);
  }

  handleAddFriend(e) {
    this.props.requestFriend(this.props.currentUser.id, this.props.user.id);
  }

  addFriendButton() {
    if(this.props.requestedFriends[this.props.user.id]){
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
