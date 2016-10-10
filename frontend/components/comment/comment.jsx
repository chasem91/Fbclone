import React from 'react';
import { Link } from 'react-router';

export default ({ comment }) => {
  return (
    <div className="comment group">
      <img className="comment-author-picture" src={window.homeUserImages.profilePicture}></img>
      <ul className="comment-contents">
        <li className="comment-actions">Like - Reply - <span className="comment-date">{comment.created_at}</span></li>
        <li className="comment-content">
          <span className="comment-author">
            <Link to={`users/${comment.author.id}`}>{comment.author.full_name}</Link>
          </span>
          {` ${comment.content}`}
        </li>
      </ul>
    </div>
  );
};
