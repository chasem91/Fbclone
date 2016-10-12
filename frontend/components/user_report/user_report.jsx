import React from 'react';
import FriendsPreview from '../friends_preview/friends_preview';
import PhotosPreview from '../photos_preview/photos_preview';
import Intro from '../intro/intro';

export default (props) => (
  <div className="user-report group">
    <Intro />
    <PhotosPreview />
    <FriendsPreview />
  </div>
);
