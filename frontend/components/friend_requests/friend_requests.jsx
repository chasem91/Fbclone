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
  }

  render() {
    const friendRequests = [];
    for (const key in this.props.friendRequests) {
      const request = this.props.friendRequests[key];
      friendRequests.push(
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

    return (
      <div className="friend-requests">
        <div className="friend-requests-header">
          Friend Requests
        </div>
        <div className="friend-requests-pointer">
        </div>
        <ul className="friend-requests-list">
          {friendRequests}
        </ul>
      </div>
    );
  }
}
