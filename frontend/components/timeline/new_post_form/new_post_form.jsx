import React from 'react';

export default () => {
  return (
    <div className="new-post-form">
      <div className="new-post-form-header">
        <ul className="new-post-form-tabs">
          <li><a>Status</a></li>
          <li><a>Photo/Video</a></li>
          <li><a>Live Video</a></li>
          <li><a>Life Event</a></li>
        </ul>
      </div>
      <div className="new-post-form-input">
        <img src={window.homeUserImages.profilePicture} className="poster-profile-thumb" />
        <textarea className="new-post-form-text-input"></textarea>
      </div>
      <div className="new-post-form-footer">
        <input className="new-post-submit" type='submit'></input>
      </div>
    </div>
  );
};
