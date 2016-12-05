import React from 'react';
import FriendsPreviewContainer from './friends_preview/friends_preview_container';
import PhotosPreviewContainer from './photos_preview/photos_preview_container';
import IntroContainer from './intro/intro_container';

export default (props) => (
  <div className="user-report group">
    <IntroContainer />
    <PhotosPreviewContainer />
    <FriendsPreviewContainer />
  </div>
);
