import React from 'react';
import Comment from '../comment/comment';

export default ({ post, currentProfile }) => {
  const currentProfileName = `${currentProfile.first_name} ${currentProfile.last_name}`;
  return (
    <div className="post group">
      <ul className="post-details group">
        <ul className="post-header">
          <li><img className="post-author-picture" src={window.homeProfileImages.profilePicture}></img></li>
          <ul>
            <li className="post-author">Author: {post.author_id} > {currentProfileName}</li>
            <li className="post-date">{post.created_at}</li>
          </ul>
        </ul>
        <li className="post-content">{post.content}</li>
        <ul className="post-actions">
          <li className="post-like">** Like </li>
          <li>** Comment </li>
        </ul>
        <li className="post-likes">** (Names of users who liked)</li>
        <li className="post-comments">
          <ul>
            {post.comments.map(comment => <li><Comment comment={comment}/></li>)}
          </ul>
        </li>
        <ul className="comment-compose">
          <li><img className="comment-compose-author-picture" src={window.homeProfileImages.profilePicture}></img></li>
          <textarea className="comment-input" placeholder="Write a comment..."></textarea>
        </ul>
      </ul>
    </div>
  );
};
