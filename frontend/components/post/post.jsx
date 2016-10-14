import React from 'react';
import Comment from '../comment/comment';
import { Link } from 'react-router';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreateComment = this.handleCreateComment.bind(this);
    this.createLike = this.createLike.bind(this);
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

  shouldComponentUpdate(nextProps) {
    return !!nextProps.currentUser;
  }

  componentWillMount() {
    if (this.props.path !== "/") {
      this.props.receivePost(this.props.postFromTimeline);
      this.props.getComments(this.props.postFromTimeline.id);
    }
  }

  authorDisplay(post) {
    if (post.author.id === post.user.id) {
      return (
        <li className="post-author">
          <Link to={`/users/${post.author.id}`}>{post.author.full_name}</Link>
        </li>
      );
    } else {
      return (
        <li className="post-author">
          <Link to={`/users/${post.author.id}`}>{post.author.full_name}</Link>
          <div className="post-author-arrow" />
          <Link to={`/users/${post.user.id}`}>{post.user.full_name}</Link>
        </li>
      );
    }
  }

  createLike(e) {
    const liker_id = this.props.currentUser.id;
    let likeable_id;
    if (this.props.path === "/") {
      likeable_id = this.props.post.id;
    } else {
      likeable_id = this.props.postFromTimeline.id;
    }
    const likeable_type = "Post";
    this.props.createLike(liker_id, likeable_id, likeable_type);
  }

  likers(post, friends) {
    const names = [];
    const likes = post.likes || {};
    let i = 1;
    let remaining = 0;
    for(const key in likes) {
      const like = likes[key];
      if (Object.keys(friends).includes(`${like.liker.id}`) || this.props.currentUser.id === like.liker.id) {
        if (i === Object.keys(likes).length) {
          names.push(
            <Link
              className="post-like-user-link"
              key={like.id}
              to={`/users/${like.liker.id}`}>
              {like.liker.full_name}
            </Link>
          );
        } else {
          names.push(
            <Link
              className="post-like-user-link"
              key={like.id}
              to={`/users/${like.liker.id}`}>
              {like.liker.full_name}, &nbsp;
            </Link>
          );
        }
      } else {
        remaining++;
      }
      i++;
    }
    if (Object.keys(likes).length === 0) {
      return (<div></div>);
    } else if (names.length === 0){
      return (
        <li className="post-likes">
          <div className="liker-names-icon" />
          <div>{Object.keys(likes).length}</div>
        </li>
      );
    } else if (remaining === 0) {
      return (
        <li className="post-likes">
          <div className="liker-names-icon" />
          {names}
        </li>
      );
    }
    return (
      <li className="post-likes">
        <div className="liker-names-icon" />
        {names}
        <div>&nbsp; and {remaining} others</div>
      </li>
    );
  }

  renderLike (post) {
    const likers = [];
    for (const key in post.likes) {
      likers.push(post.likes[key].liker.id);
    }
    if (likers.includes(this.props.currentUser.id)) {
      return (
        <div className="post-liked-container">
          <div className="post-liked"></div>
          <div className="post-liked-name">Like</div>
        </div>
      );
    } else {
      return (
        <div onClick={this.createLike} className="post-comment-container">
          <div className="post-like"></div>
          <div className="post-like-name">Like</div>
        </div>
      );
    }
  }

  renderComments(post) {
    const comments = [];
    for (const key in post.comments) {
      let comment = post.comments[key];
      comments.push(<li key={comment.id}><Comment comment={comment} /></li>);
    }
    if (comments.length === 0) {
      return (<div></div>);
    } else {
      return (
        <ul className="comments-list" ref="comments_list">
          {comments}
        </ul>
      );
    }
  }

  render() {
    let post;
    if (this.props.path === "/") {
      post = this.props.post;
    } else {
      post = this.props.postFromState.posts[this.props.postFromTimeline.id];
    }
    return (
      <div className="post group">
        <ul className="post-details group">
          <ul className="post-header">
            <li><img className="post-author-picture" src={window.homeUserImages.profilePicture}></img></li>
            <ul>
              {this.authorDisplay(post)}
              <li className="post-date">{post.time_ago}</li>
            </ul>
          </ul>
          <li className="post-content">{post.content}</li>
          <ul className="post-actions">
            <div className="post-action-buttons">
              <div className="post-like-container">
                {this.renderLike(post)}
              </div>
              <div className="post-comment-container">
                <div className="post-comment"></div>
                <div className="post-comment-name">Comment</div>
              </div>
            </div>
          </ul>
          {this.likers(post, this.props.user.friends)}
          <li className="post-comments">
            {this.renderComments(post)}
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
