import React from 'react';
import { Link, hashHistory } from 'react-router';

class Profile extends React.Component {
	constructor(props) {
		super(props);
	}

  componentDidMount() {
    const id = this.props.route.path === "/users/*" ? this.props.params.splat : this.props.currentUser.id;
    this.props.getProfile(id);
  }

	render() {
    const profile = this.props.currentProfile;
		return (
			<div className="profile">
        <h1>{profile.first_name} {profile.last_name}</h1>
        <h3>GENDER: {profile.gender}</h3>
        <h3>BIRTHDAY: {profile.birthday}</h3>
			</div>
		);
	}
}

export default Profile;
