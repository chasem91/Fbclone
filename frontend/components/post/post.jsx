import React from 'react';
import Comment from '../comment/comment';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreateComment = this.handleCreateComment.bind(this);
  }

  handleCreateComment(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const commentTextarea = this.refs.comment_input;
      const content = commentTextarea.value;
      const comment = {
        author_id: this.props.currentUser.id,
        post_id: this.props.post.id,
        content
      };
      this.props.createComment({ comment });
      commentTextarea.value = "";
    }
  }

  componentDidMount() {

  }

  // ({ post, currentProfile }) =>
  render() {
    const currentProfileName = `${this.props.currentProfile.first_name} ${this.props.currentProfile.last_name}`;
    const post = this.props.post;
    return (
      <div className="post group">
        <ul className="post-details group">
          <ul className="post-header">
            <li><img className="post-author-picture" src={window.homeProfileImages.profilePicture}></img></li>
            <ul>
              <li className="post-author">{post.author.full_name} > {currentProfileName}</li>
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
              {post.comments.map( comment => <li key={comment.id}><Comment comment={comment} /></li> )}
            </ul>
          </li>
          <ul className="comment-compose">
            <li><img className="comment-compose-author-picture" src={window.homeProfileImages.profilePicture}></img></li>
            <textarea className="comment-input" ref="comment_input" onKeyPress={this.handleCreateComment} placeholder="Write a comment..."></textarea>
          </ul>
        </ul>
      </div>
    );
  }
}
