import React from 'react';
import { Link, hashHistory } from 'react-router';

class Profile extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
    // this.props.currentUser.username
    this.props.getProfile("chasem91");
	}

	render() {
    debugger
		return (
			<div>
				<ul>
          <li>{this.currentProfile}</li>
				</ul>
			</div>
		);
	}
}

export default Profile;
