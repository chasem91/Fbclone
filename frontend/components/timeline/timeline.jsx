import React from 'react';
import PostContainer from '../post/post_container';
import NewPostFormContainer from './new_post_form/new_post_form_container';

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
  }

  displayTimelinePosts(posts) {
    const timelinePosts = [];
    for(const key in this.props.user.timelinePosts) {
      const post = this.props.user.timelinePosts[key];
      timelinePosts.push(
        <PostContainer key={post.id} postId={post.id} />
      );
    }
    return timelinePosts.reverse();
  }

  render() {
    return (
      <div className="timeline group">
        <div className="timeline-pointer" />
        <NewPostFormContainer />
        {this.displayTimelinePosts()}
      </div>
    );
  }
}
