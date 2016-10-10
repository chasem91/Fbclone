import React from 'react';
import Comment from '../comment/comment';
import { Link } from 'react-router'

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreateComment = this.handleCreateComment.bind(this);
  }

  handleCreateComment(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const content = e.currentTarget.value;
      const comment = {
        author_id: this.props.currentUser.id,
        post_id: e.currentTarget.id,
        content
      };
      this.props.createComment({ comment }, comment.post_id);
      e.currentTarget.value = "";
    }
  }

  componentWillMount() {
    this.props.receivePost(this.props.postFromTimeline);
    this.props.getComments(this.props.postFromTimeline.id);
  }

  // const currentProfileName = `${this.props.post.first_name} ${this.props.post.last_name}`;
  render() {
    const post = this.props.post.posts[this.props.postFromTimeline.id];
    const comments = [];
    for (const key in post.comments) {
      let comment = post.comments[key];
      comments.push(<li key={comment.id}><Comment comment={comment} /></li>);
    }
    return (
      <div className="post group">
        <ul className="post-details group">
          <ul className="post-header">
            <li><img className="post-author-picture" src={window.homeUserImages.profilePicture}></img></li>
            <ul>
              <li className="post-author">
                <Link to={`/users/${post.author.id}`}>{post.author.full_name}</Link>
                <span> >  </span>
                <Link to={`/users/${post.user.id}`}>{post.user.full_name}</Link>
              </li>
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
            <ul ref="comments_list">
              {comments}
            </ul>
          </li>
          <ul className="comment-compose">
            <li><img className="comment-compose-author-picture" src={window.homeUserImages.profilePicture}></img></li>
            <textarea className="comment-input" id={post.id} onKeyPress={this.handleCreateComment} placeholder="Write a comment..."></textarea>
          </ul>
        </ul>
      </div>
    );
  }
}
