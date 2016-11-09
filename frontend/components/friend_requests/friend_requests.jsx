import React from 'react';
import { Link } from 'react-router';

export default class FriendRequests extends React.Component {
  constructor(props) {
    super(props);
    this.handleFriendApproval = this.handleFriendApproval.bind(this);
  }

  componentDidMount () {
    if (Object.keys(this.props.friendRequests).keys.length === 0) {
      if (Object.keys(this.props.currentUser.friend_requests).length > 0) {
        this.props.receiveFriendRequests(this.props.currentUser.friend_requests);
      }
    }
  }

  handleFriendApproval (e) {
    e.preventDefault();
    this.props.acceptRequest(
      this.props.currentUser.id,
      parseInt(e.currentTarget.id)
    );
    const target = e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode;
    const parent = e.currentTarget.parentNode.parentNode.parentNode.parentNode;
    const clicked = "friend-requests-icon-clicked";
    const unclicked = "friend-requests-icon";
    const hidden = "hidden";
    const shown = "friend-requests-container";
    target.className = target.className === clicked ? unclicked : clicked;
    parent.className = parent.className === hidden ? shown : hidden;
  }

  friendRequests() {
    const requests = [];
    for (const key in this.props.friendRequests) {
      const request = this.props.friendRequests[key];
      requests.push(
        <li key={key} className="friend-request">
          <div className="friend-request-details">
            <img className="friend-request-thumb" src={window.homeUserImages.profilePicture}/>
            <Link to={`/users/${request.requester.id}`} className="friend-request-link">
              {request.requester.full_name}
            </Link>
          </div>
          <input
            type="submit"
            className="friend-request-approve"
            value="Approve"
            id={request.requester.id}
            onClick={this.handleFriendApproval}
            />
        </li>
      );
    }
    if (requests.length > 0) {
      return requests;
    } else {
      return (
        <div className="no-friend-requests">
          No new requests
        </div>
      );
    }
  }

  render() {

    return (
      <div className="friend-requests">
        <div className="friend-requests-header">
          Friend Requests
        </div>
        <div className="friend-requests-pointer">
        </div>
        <ul className="friend-requests-list">
          {this.friendRequests()}
        </ul>
      </div>
    );
  }
}
