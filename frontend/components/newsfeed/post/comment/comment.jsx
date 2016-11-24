import React from 'react';
import { Link } from 'react-router';

export default class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.comment = this.props.comment;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !!nextProps.currentUser;
  }

  authorProfilePicDisplay() {
    if (this.comment.author.id === this.props.currentUser.id) {
      return (
        <img className="comment-author-picture" src={this.props.currentUser.profilePicture}></img>
      );
    } else {
      return (
        <img className="comment-author-picture" src={this.comment.author.profilePicture}></img>
      );
    }
  }

  render() {
    return (
      <div className="comment group">
        {this.authorProfilePicDisplay()}
        <ul className="comment-contents">
          <li className="comment-content">
            <span className="comment-author">
              <Link to={`users/${this.comment.author.id}`}>{this.comment.author.full_name}</Link>
            </span>
            {` ${this.comment.content}`}
          </li>
          <li className="comment-actions"><span className="comment-date">{this.comment.time_ago}</span></li>
        </ul>
      </div>
    );
  };
}
