import React from 'react';

const thumbsList = () => {
  const friends = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return friends.map( friend => (
    <img key={friend} className="friends-preview-thumb" src={window.homeUserImages.profilePicture} />
  ));
};

export default (props) => (
  <div className="friends-preview group">
    <div className="friends-preview-header">
      <div className="friends-preview-icon"></div>
      Friends - {Object.keys(props.currentUser.friends).length}
    </div>
    <div className="friends-preview-thumbs">
      {thumbsList()}
    </div>
  </div>
);
