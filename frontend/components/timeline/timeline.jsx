import React from 'react';
import PostContainer from '../post/post_container';
import NewPostFormContainer from './new_post_form/new_post_form_container';

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPosts(this.props.timelineUserId);
  }

  componentWillReceiveProps(newProps) {
    if (parseInt(this.props.timelineUserId) !== parseInt(newProps.timelineUserId)) {
      this.props.getPosts(parseInt(newProps.timelineUserId));
    }
  }

  displayTimelinePosts(posts) {
    const timelinePosts = [];
    for(const key in posts) {
      timelinePosts.push( <PostContainer key={posts[key].id} postFromTimeline={posts[key]} /> );
    }
    return timelinePosts.reverse();
  }

  render() {
    return (
      <div className="timeline group">
        <div className="timeline-pointer" />
        <NewPostFormContainer />
        {this.displayTimelinePosts(this.props.timeline.posts.posts)}
      </div>
    );
  }
}
