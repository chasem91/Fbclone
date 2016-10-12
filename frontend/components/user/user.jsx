import React from 'react';
import { Link, hashHistory } from 'react-router';
import UserHeaderNavContainer from '../user_header_nav/user_header_nav_container';
import UserActionBar from '../user_action_bar/user_action_bar_container';
import TimelineContainer from '../timeline/timeline_container';
import UserReportContainer from '../user_report/user_report_container';
import Photo from '../photo/photo';

class User extends React.Component {
	constructor(props) {
		super(props);
	}

  componentDidMount() {
    this.props.getUser(parseInt(this.props.params.userId));
  }

  componentWillReceiveProps(newProps) {
    if (this.props.user.id !== parseInt(newProps.params.userId)) {
      this.props.getUser(parseInt(newProps.params.userId));
    }
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
          <UserReportContainer />
          <TimelineContainer timelineUserId={this.props.params.userId} />
        </div>
			</div>
		);
	}
}

export default User;
