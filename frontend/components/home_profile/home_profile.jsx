import React from 'react';
import { Link, hashHistory } from 'react-router';
import ProfileHeaderNavContainer from '../profile_header_nav/profile_header_nav_container';

class HomeProfile extends React.Component {
	constructor(props) {
		super(props);
	}

  componentDidMount() {
    this.props.getProfile(this.props.currentUser.id);
  }

	render() {
    const profile = this.props.currentProfile;
		return (
			<div className="profile">Home Profile
        <img className="profile-header-image"></img>
        <div className="profile-header-nav-container group" >
          <ProfileHeaderNavContainer />
        </div>
			</div>
		);
	}
}

export default HomeProfile;









// <h1>{profile.first_name} {profile.last_name}</h1>
// <h3>GENDER: {profile.gender}</h3>
// <h3>BIRTHDAY: {profile.birthday}</h3>
