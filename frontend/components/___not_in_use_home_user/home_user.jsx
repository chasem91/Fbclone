import React from 'react';
import { Link, hashHistory } from 'react-router';
import UserHeaderNavContainer from '../user_header_nav/user_header_nav_container';
import UserActionBar from '../user_action_bar/user_action_bar_container';
import TimelineContainer from '../timeline/timeline_container';
import Photo from '../photo/photo';

class HomeUser extends React.Component {
	constructor(props) {
		super(props);
	}

  componentWillMount() {
    this.props.getUser(this.props.currentUser.id);
  }

	render() {
    const user = this.props.user;
		return (
			<div className="home-user group">
        <div className="home-user-main">
          <img src={window.homeUserImages.profileBanner} className="profile-header-image"></img>
          <img src={window.homeUserImages.profilePicture} className="profile-picture"></img>
          <h3 className="user-name">{user.first_name} {user.last_name}</h3>
          <UserActionBar />
          <UserHeaderNavContainer />
          <TimelineContainer timelineUserId={this.props.currentUser.id} />
        </div>
			</div>
		);
	}
}

export default HomeUser;
