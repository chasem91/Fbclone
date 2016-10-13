import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

export default class NewPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.openModal = this.openModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
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

  handleClick (e) {
    e.preventDefault();
  }

  hideTransparentLayer (e) {
    e.currentTarget.className = "hidden";
    document.getElementById('post_form').className = "new-post-form";
  }

  showTransparencyLayer (e) {
    document.getElementById('trans').className = "transparent-background";
    e.currentTarget.className = "raised-new-post-form";
  }

  // this.state = {
  //   open: true
  // };

  // componentWillMount() {
  //   Modal.setAppElement('body');
  // }

  // openModal () {
  //   this.setState({open: true});
  // }
  //
  // closeModal () {
  //   this.setState({open: false});
  // }
  //
  // onClick={this.handleClick}

  // <button onClick={this.closeModal}>Close</button>
  render () {
    return (
      <div>
        <div onClick={this.hideTransparentLayer} id="trans" className="hidden" />
        <div onClick={this.showTransparencyLayer} id="post_form" className="new-post-form">
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
      </div>
    );
  }
}

// <div className="modal-container">
//   <Modal isOpen={this.state.open} onRequestClose={this.closeModal} className="contained-modal">
//     <div className="new-post-form">
//       <div className="new-post-form-header">
//         <ul className="new-post-form-tabs">
//           <li><a>Status</a></li>
//         </ul>
//       </div>
//       <form onSubmit={this.handlePostSubmit}>
//         <div className="new-post-form-input">
//           <img src={window.homeUserImages.profilePicture} className="poster-profile-thumb" />
//           <textarea
//             type="textarea"
//             value={this.props.postText}
//             onChange={this.handleChange}
//             className="new-post-form-text-input">
//           </textarea>
//         </div>
//         <div className="new-post-form-footer">
//           <input className="new-post-submit" type='submit' value='Post'></input>
//         </div>
//       </form>
//     </div>
//   </Modal>
// </div>
