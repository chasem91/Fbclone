import React from 'react';


export default class FriendsPreview extends React.Component {
  constructor (props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return !!nextProps.currentUser;
  }

  thumbsList () {
    const friends = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return friends.map( friend => (
      <img key={friend} className="friends-preview-thumb" src={window.homeUserImages.profilePicture} />
    ));
  }

  render () {
    return (
      <div className="friends-preview group">
        <div className="friends-preview-header">
          <div className="friends-preview-icon"></div>
          Friends - {Object.keys(this.props.currentUser.friends).length}
        </div>
        <div className="friends-preview-thumbs">
          {this.thumbsList()}
        </div>
      </div>
    );
  }
}
