import React from 'react';
import { Link } from 'react-router';

export default class FriendRequests extends React.Component {
  constructor(props) {
    super(props);
    this.handleFriendApproval = this.handleFriendApproval.bind(this);
  }

  componentDidMount () {
    this.props.getFriendRequests(this.props.currentUser.id);
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
            <Link to={`/users/${request.requester_id}`} className="friend-request-link">
              {request.requester_name}
            </Link>
          </div>
          <input
            type="submit"
            className="friend-request-approve"
            value="Approve"
            id={key}
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
