import React from 'react';
import FriendsPreviewContainer from './friends_preview/friends_preview_container';
import PhotosPreview from './photos_preview/photos_preview';
import IntroContainer from './intro/intro_container';

export default (props) => (
  <div className="user-report group">
    <IntroContainer />
    <PhotosPreview />
    <FriendsPreviewContainer />
  </div>
);
