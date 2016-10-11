import React from 'react';
import FriendsPreview from '../friends_preview/friends_preview';
import PhotosPreview from '../photos_preview/photos_preview';

export default (props) => (
  <div className="user-report group">
    <PhotosPreview />
    <FriendsPreview />
  </div>
);
