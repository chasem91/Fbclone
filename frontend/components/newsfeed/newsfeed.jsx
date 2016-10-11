import React from 'react';
import PostContainer from '../post/post_container'

export default class Newsfeed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.getUser(this.props.currentUser.id);
  }

  newsfeedPosts () {
    let newsfeedPosts = this.props.user.newsfeed_posts || {};
    const posts = [];
    for (const key in newsfeedPosts){
      let post = newsfeedPosts[key];
      posts.push(<PostContainer key={post.id} path="/newsfeed" post={post} />);
    }
    return posts;
  }

  render () {
    return (
      <div className="newsfeed group">
        { this.newsfeedPosts() }
      </div>
    );
  }
}
