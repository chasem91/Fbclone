import React from 'react';
import { Link, hashHistory } from 'react-router';
import ProfileHeaderNavContainer from '../profile_header_nav/profile_header_nav_container';
import ProfileActionBar from '../profile_action_bar/profile_action_bar_container';

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
			<div className="home-profile group">
        <img src={window.homeProfileImages.profileBanner} className="profile-header-image"></img>
        <img src={window.homeProfileImages.profilePicture}className="profile-picture"></img>
        <h3 className="profile-name">{profile.first_name} {profile.last_name}</h3>
        <ProfileActionBar />
        <ProfileHeaderNavContainer />
			</div>
		);
	}
}


export default HomeProfile;
