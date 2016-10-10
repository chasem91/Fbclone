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

  render() {
    return (
      <div className="timeline group">
        <NewPostFormContainer />
        { this.props.timeline.posts.map( post => <PostContainer key={post.id} postFromTimeline={post} /> ) }
      </div>
    );
  }
}
