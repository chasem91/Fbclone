import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
import UserHeaderNavContainer from './user_header_nav/user_header_nav_container';
import UserActionBar from './user_action_bar/user_action_bar_container';

class User extends React.Component {
	constructor(props) {
		super(props);
		this.id = parseInt(this.props.params.userId);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return !!nextProps.currentUser;
	}

	componentWillMount() {
		if (this.props.currentUser.id === this.id) {
			this.props.receiveUser(this.props.currentUser);
		} else {
			this.props.getUser(this.id);
		}
	}

  componentWillReceiveProps(newProps) {
		const id = parseInt(newProps.params.userId);
		const user = this.props.user;
		const currentUser = this.props.currentUser;

		if (user.id !== id) {
			if (currentUser.id === id) {
				this.props.receiveUser(currentUser);
				// this.props.receiveCurrentSection(0);
			} else {
				this.props.getUser(id);
			}
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
					{this.props.children}
        </div>
			</div>
		);
	}
}

export default User;
