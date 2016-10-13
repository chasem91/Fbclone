import React from 'react';

export default class NewPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.currentPostText = "";
  }

  handlePostSubmit (e) {
    e.preventDefault();
    const post = {
      content: this.currentPostText,
      user_id: this.props.user.id,
      author_id: this.props.currentUser.id
    };
    this.props.createPost(post);
    e.currentTarget.reset();
  }

  handleChange (e) {
    e.preventDefault();
    this.currentPostText = e.currentTarget.value;
  }
  //
  // handleClick (e) {
  //   e.preventDefault();
  // }
  // onClick={this.handleClick} 

  render () {
    return (
      <div className="new-post-form">
        <div className="new-post-form-header">
          <ul className="new-post-form-tabs">
            <li><a>Status</a></li>
          </ul>
        </div>
        <form onSubmit={this.handlePostSubmit}>
          <div className="new-post-form-input">
            <img src={window.homeUserImages.profilePicture} className="poster-profile-thumb" />
            <textarea
              type="textarea"
              value={this.props.postText}
              onChange={this.handleChange}
              className="new-post-form-text-input">
            </textarea>
          </div>
          <div className="new-post-form-footer">
            <input className="new-post-submit" type='submit' value='Post'></input>
          </div>
        </form>
      </div>
    );
  }
}
