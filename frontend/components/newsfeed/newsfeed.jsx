import React from 'react';
import PostContainer from './post/post_container';
import NewPostFormContainer from './new_post_form/new_post_form_container';
import { hashHistory } from 'react-router';

export default class Newsfeed extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !!nextProps.currentUser;
  }

  newsfeedPosts () {
    let newsfeedPosts = this.props.currentUser.newsfeedPosts;
    const posts = [];
    for (const key in newsfeedPosts){
      let post = newsfeedPosts[key];
      posts.push(<PostContainer key={post.id} postId={post.id} path="/" />);
    }
    return posts.reverse();
  }

  render () {
    return (
      <div className="newsfeed-container">
        <div className="newsfeed group">
          <NewPostFormContainer path="/" />
          { this.newsfeedPosts() }
        </div>
      </div>
    );
  }
}
