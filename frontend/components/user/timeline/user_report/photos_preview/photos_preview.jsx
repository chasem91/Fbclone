import React from 'react';

const thumbsList = () => {
  const friends = [1, 2, 3, 4, 5, 6];
  return friends.map( friend => (
    <img key={friend} className="friends-preview-thumb" src={window.homeUserImages.profilePicture} />
  ));
};

export default () => (
  <div className="friends-preview group">
    <div className="friends-preview-header">
      <div className="photos-preview-icon"></div>
      Photos
    </div>
    <div className="friends-preview-thumbs">
      {thumbsList()}
    </div>
  </div>
);
