import React from 'react';
import { Link } from 'react-router';


export default class FriendsPreview extends React.Component {
  constructor (props) {
    super(props);
    this.friends = {};
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !!nextProps.currentUser;
  }

  thumbsList () {
    const friendThumbs = [];

    for (const key in this.friends) {
      const friend = this.friends[key];
      if (friendThumbs.length < 9) {
        const thumb = (
          <Link key={friend.id} to={`/users/${friend.id}`} >
            <img className="friends-preview-thumb" src={friend.profilePicture} />
          </Link>
        );
        friendThumbs.push(thumb);
      }
    }
    return friendThumbs;
  }

  render () {
    this.friends = this.props.currentUser.id === this.props.user.id ? this.props.currentUser.friends : this.props.user.friends;
    return (
      <div className="friends-preview group">
        <div className="friends-preview-header">
          <div className="friends-preview-icon"></div>
          Friends - {Object.keys(this.friends).length}
        </div>
        <div className="friends-preview-thumbs">
          {this.thumbsList()}
        </div>
      </div>
    );
  }
}
