import React from 'react'
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router'
import UserHeaderNavContainer from './user_header_nav/user_header_nav_container'
import UserActionBar from './user_action_bar/user_action_bar_container'

class User extends React.Component {
	constructor(props) {
		super(props)
		// does this.id need to be reassigned in a lifecycle method?
		this.id = parseInt(this.props.params.userId)
		this.updateProfilePic = this.updateProfilePic.bind(this)
		this.updateBannerPic = this.updateBannerPic.bind(this)
	}k

	shouldComponentUpdate(nextProps, nextState) {
		console.log(this.id)
		return !!nextProps.currentUser && this.id !== nextProps.params.userId
	}

	componentWillMount() {
		// TODO this component is rendering too many times... creating screen flickering
		if (this.props.currentUser.id === this.id) {
			this.id = this.props.currentUser.id
			this.props.receiveUser(this.props.currentUser)
		} else {
			this.props.getUser(this.id)
		}
	}

  componentWillReceiveProps(newProps) {
		const newId = parseInt(newProps.params.userId)
		const user = this.props.user
		const currentUser = this.props.currentUser

		if (user.id !== newId) {
			if (currentUser.id === newId) {
				this.props.receiveUser(currentUser)
				window.scrollTo(0, 0)
			} else {
				this.props.getUser(newId)
			}
		} else if (newProps.currentUser && currentUser.id === newId) {
			if (currentUser.profilePicture !== newProps.currentUser.profilePicture) {
				this.props.receiveUser(newProps.currentUser)
			} else if (currentUser.bannerPicture !== newProps.currentUser.bannerPicture) {
				this.props.receiveUser(newProps.currentUser)
			}
		}
  }

	render() {
		const user = this.props.user
		return (
			<div className="home-user group">
				<div className="home-user-main">
					<img src={this.props.user.bannerPicture} className="profile-header-image"></img>
					{this.renderProfileBanner()}
					<img src={this.props.user.profilePicture} className="profile-picture" />
					{this.renderProfilePictureUpload()}
					<h3 className="user-name">{user.first_name} {user.last_name}</h3>
					<UserActionBar />
					<UserHeaderNavContainer />
					{this.props.children}
				</div>
			</div>
		)
	}

	updateProfilePic(e) {
		const file = e.currentTarget.files[0]
		const reader = new FileReader()
		const formData = new FormData()
		if (file) {
			reader.readAsDataURL(file)
			formData.append("photo[image]", file)
			formData.append("photo[user_id]", this.props.currentUser.id)
			this.props.setProfilePicture(formData)
		}
	}

	updateBannerPic(e) {
		const file = e.currentTarget.files[0]
		const reader = new FileReader()

		if (file) {
			reader.readAsDataURL(file)
		}

		const formData = new FormData()
		formData.append("photo[image]", file)
		formData.append("photo[user_id]", this.props.currentUser.id)
		this.props.setBannerPicture(formData)
	}

	renderProfilePictureUpload() {
		if (this.props.user.id === this.props.currentUser.id) {
			return (
				<div>
					<label className="profile-image-drop">
						<input type="file" className="profile-pic-input" onChange={this.updateProfilePic} />
					</label>
				</div>
			)
		} else {
			return null
		}
	}

	renderProfileBanner() {
		if (this.props.user.id === this.props.currentUser.id) {
			return (
				<div>
					<label className="banner-image-drop">
						<input type="file" className="banner-pic-input" onChange={this.updateBannerPic} />
					</label>
				</div>
			)
		} else {
			return null
		}
	}
}

export default User
