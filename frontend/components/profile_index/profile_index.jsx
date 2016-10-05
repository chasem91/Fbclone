import React from 'react';
import { Link, hashHistory } from 'react-router';
import ProfileIndexItem from './profile_index_item';

class ProfileIndex extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
    this.props.getProfiles();
	}

	render() {
    const profiles = this.props.profiles.map( profile => {
      return (
        <div className="profile_index_item">
          <ProfileIndexItem props={profile} />
        </div>
      );
    });
    return (
      <div className="profile-index">
        <ul>
          {profiles}
        </ul>
      </div>
    );
	}
}

export default ProfileIndex;
