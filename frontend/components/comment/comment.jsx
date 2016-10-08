import React from 'react';

export default ({ comment }) => (
  <div className="comment group">
    <img className="comment-author-picture" src={window.homeUserImages.profilePicture}></img>
    <ul className="comment-contents">
      <li className="comment-content"><span className="comment-author">{comment.author.full_name} </span> {comment.content} </li>
      <li className="comment-actions">Like - Reply - <span className="comment-date">{comment.created_at}</span></li>
    </ul>
  </div>
);
