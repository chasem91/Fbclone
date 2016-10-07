import React from 'react';
import { Link, hashHistory } from 'react-router';
import ProfileHeaderNavContainer from '../profile_header_nav/profile_header_nav_container';
import ProfileActionBar from '../profile_action_bar/profile_action_bar_container';
import TimelineContainer from '../timeline/timeline_container';
import Photo from '../photo/photo';

class HomeProfile extends React.Component {
	constructor(props) {
		super(props);
	}

  componentDidMount() {
    this.props.getProfile(this.props.currentUser.id);
    this.props.getPhoto(1);
  }

	render() {
    const profile = this.props.currentProfile;
    const photo = this.props.currentPhoto;
		return (
			<div className="home-profile group">
        <div className="home-profile-main">
          <img src={window.homeProfileImages.profileBanner} className="profile-header-image"></img>
          <img src={window.homeProfileImages.profilePicture}className="profile-picture"></img>
          <h3 className="profile-name">{profile.first_name} {profile.last_name}</h3>
          <ProfileActionBar />
          <ProfileHeaderNavContainer />
          <TimelineContainer />
          <Photo photo={photo} />
        </div>
			</div>
		);
	}
}


export default HomeProfile;
