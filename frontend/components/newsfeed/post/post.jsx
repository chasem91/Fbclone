import React from 'react';
import CommentContainer from './comment/comment_container';
import { Link } from 'react-router';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreateComment = this.handleCreateComment.bind(this);
    this.like = this.like.bind(this);
    this.post = null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    this.post = null;
    return !!nextProps.currentUser &&
      (
        !!nextProps.user.timelinePosts[this.props.postId] ||
        !!nextProps.currentUser.newsfeedPosts[this.props.postId]
      );
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
      this.props.createComment(comment, comment.post_id);
      e.currentTarget.value = "";
    }
  }

  like(e) {
    const liker_id = this.props.currentUser.id;
    const likeable_id = this.post.id;
    const likeable_type = "Post";
    this.props.createLike(liker_id, likeable_id, likeable_type);
  }

  render() {
    if (this.props.path === "/") {
      this.post = this.props.currentUser.newsfeedPosts[this.props.postId];
    } else {
      this.post = this.props.user.timelinePosts[this.props.postId];
    }
    if (this.post) {
      return (
        <div className="post group">
          <ul className="post-details group">
            <ul className="post-header">
              {this.authorProfilePicDisplay()}
              <ul>
                {this.authorDisplay()}
                <li className="post-date">{this.post.time_ago}</li>
              </ul>
            </ul>
            <li className="post-content">{this.post.content}</li>
            <ul className="post-actions">
              <div className="post-action-buttons">
                <div className="post-like-container">
                  {this.renderLike()}
                </div>
              </div>
            </ul>
            {this.likers()}
            <li className="post-comments">
              {this.renderComments()}
            </li>
            <ul className="comment-compose">
              <li><img className="comment-compose-author-picture" src={this.props.currentUser.profilePicture}></img></li>
              <textarea className="comment-input" id={this.post.id} onKeyPress={this.handleCreateComment} placeholder="Write a comment..."></textarea>
            </ul>
          </ul>
        </div>
      );
    } else {
      return null;
    }

  }

  authorProfilePicDisplay() {
    if (this.post.author.id === this.props.currentUser.id) {
      return (
        <li><img className="post-author-picture" src={this.props.currentUser.profilePicture}></img></li>
      );
    } else {
      return (
        <li><img className="post-author-picture" src={this.post.author.profilePicture}></img></li>
      )
    }
  }

  authorDisplay() {
    if (this.post.author.id === this.post.user.id) {
      return (
        <li className="post-author">
          <Link to={`/users/${this.post.author.id}`}>{this.post.author.full_name}</Link>
        </li>
      );
    } else {
      return (
        <li className="post-author">
          <Link to={`/users/${this.post.author.id}`}>{this.post.author.full_name}</Link>
          <div className="post-author-arrow" />
          <Link to={`/users/${this.post.user.id}`}>{this.post.user.full_name}</Link>
        </li>
      );
    }
  }

  displayLikerName(like) {
    // if (like.liker.id === this.props.currentUser.id) {
    //   return "You";
    // } else {
      return like.liker.full_name;
    // }
  }

  likers() {
    const names = [];
    const likes = this.post.likes || {};
    const friends = this.props.currentUser.friends || {};
    const length = Object.keys(likes).length;

    let i = 1;
    let remaining = 0;
    for(const key in likes) {
      const like = likes[key];
      if (Object.keys(friends).includes(`${like.liker.id}`) || this.props.currentUser.id === like.liker.id) {
        if (length === 1 || (i === length - 1)) {
          names.push(
            <Link
              className="post-like-user-link"
              key={like.id}
              to={`/users/${like.liker.id}`}>
              {this.displayLikerName(like)}
            </Link>
          );
        } else if (i === length) {
          names.push(
            <Link
              className="post-like-user-link"
              key={like.id}
              to={`/users/${like.liker.id}`}>
              &nbsp;{`and ${this.displayLikerName(like)}`}
            </Link>
          );
       } else {
          names.push(
            <Link
              className="post-like-user-link"
              key={like.id}
              to={`/users/${like.liker.id}`}>
              {`${this.displayLikerName(like)},`}&nbsp;
            </Link>
          );
        }
      } else {
        remaining++;
      }
      i++;
    }
    if (length === 0) {
      return (<div></div>);
    } else if (names.length === 0){
      return (
        <li className="post-likes">
          <div className="liker-names-icon" />
          <div>{length}</div>
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
        <div>{` and ${remaining} others`}</div>
      </li>
    );
  }

  renderLike () {
    const likers = [];
    for (const key in this.post.likes) {
      likers.push(this.post.likes[key].liker.id);
    }
    if (this.props.currentUser && likers.includes(this.props.currentUser.id)) {
      return (
        <div className="post-liked-container">
          <div className="post-liked"></div>
          <div className="post-liked-name">Like</div>
        </div>
      );
    } else {
      return (
        <div onClick={this.like} className="post-comment-container">
          <div className="post-like"></div>
          <div className="post-like-name">Like</div>
        </div>
      );
    }
  }

  renderComments() {
    const comments = [];
    for (const key in this.post.comments) {
      let comment = this.post.comments[key];
      comments.push(<li key={comment.id}><CommentContainer comment={comment} /></li>);
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
}
