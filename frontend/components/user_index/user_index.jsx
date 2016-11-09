import React from 'react';
import { Link, hashHistory } from 'react-router';
import UserIndexItem from './user_index_item';

class UserIndex extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
    const users = this.props.users.map( user => {
      return (
        <div className="user_index_item">
          <UserIndexItem props={user} />
        </div>
      );
    });
    return (
      <div className="user-index">
        <ul>
          {users}
        </ul>
      </div>
    );
	}
}

export default UserIndex;
