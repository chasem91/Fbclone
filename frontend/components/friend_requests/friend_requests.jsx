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
    this.props.acceptRequest(parseInt(e.currentTarget.id));
  }

  render() {
    const friendRequests = [];
    for (const key in this.props.friendRequests) {
      const request = this.props.friendRequests[key];
      friendRequests.push(
        <li key={key} className="friend-request">
          <Link to={`/users/${request.requester_id}`}>
            {request.requester_name}
          </Link>
          <input
            type="submit"
            value="Approve"
            id={request.requester_id}
            onClick={this.handleFriendApproval}
          />
        </li>
      );
    }

    return (
      <div className="friend-requests">
        <ul>
          {friendRequests}
        </ul>
      </div>
    );
  }
}
