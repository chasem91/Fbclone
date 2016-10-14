import React from 'react';
import PostContainer from '../post/post_container';
import NewPostFormContainer from '../timeline/new_post_form/new_post_form_container';
import { hashHistory } from 'react-router';

export default class Newsfeed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.getUser(this.props.currentUser.id);
  }

  shouldComponentUpdate(nextProps) {
    return !!nextProps.currentUser;
  }

  newsfeedPosts () {
    let newsfeedPosts = this.props.user.newsfeed_posts || [];
    const posts = [];
    for (const key in newsfeedPosts){
      let post = newsfeedPosts[key];
      posts.push(<PostContainer key={post.id} path="/" post={post} />);
    }
    return posts.reverse();
  }

  render () {
    return (
      <div className="newsfeed-container">
        <div className="newsfeed group">
          <NewPostFormContainer />
          { this.newsfeedPosts() }
        </div>
      </div>
    );
  }
}
