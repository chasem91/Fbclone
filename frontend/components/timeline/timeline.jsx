import React from 'react';
import PostContainer from '../post/post_container';
import NewPostForm from './new_post_form/new_post_form';

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getPosts(this.props.currentUser.id);
  }

  render() {
    return (
      <div className="timeline group">
        <NewPostForm />
        { this.props.timeline.posts.map( post => <PostContainer key={post.id} postFromTimeline={post} /> ) }
      </div>
    );
  }
}
