import React from 'react';
import FriendsPreviewContainer from '../friends_preview/friends_preview_container';
import PhotosPreview from '../photos_preview/photos_preview';
import Intro from '../intro/intro';

export default (props) => (
  <div className="user-report group">
    <Intro />
    <PhotosPreview />
    <FriendsPreviewContainer />
  </div>
);
