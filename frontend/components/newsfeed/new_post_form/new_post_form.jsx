import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'

export default class NewPostForm extends React.Component {
  constructor(props) {
    super(props)
    this.handlePostSubmit = this.handlePostSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.hideTransparentLayer = this.hideTransparentLayer.bind(this)
    this.showTransparentLayer = this.hideTransparentLayer.bind(this)
    this.currentPostText = ""
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !!nextProps.currentUser
  }

  componentDidMount() {
    $('.new-post-form-text-input').autosize()
  }

  handlePostSubmit (e) {
    this.hideTransparentLayer()
    this.hideTransparentLayer()

    e.preventDefault()
    let user_id
    if (this.props.path === "/") {
      user_id = this.props.currentUser.id
    } else {
      user_id = this.props.user.id
    }
    const post = {
      content: this.currentPostText,
      user_id,
      author_id: this.props.currentUser.id
    }
    this.props.createPost(post)
    e.currentTarget.reset()
  }

  handleChange (e) {
    e.preventDefault()
    this.currentPostText = e.currentTarget.value
  }

  handleClick (e) {
    e.preventDefault()
  }

  hideTransparentLayer () {
    $('#trans').toggleClass('hidden')
    $('#post-form').toggleClass('raised-new-post-form')
  }

  showTransparentLayer () {
    $('#trans').toggleClass('hidden')
    $('#post-form').toggleClass('raised-new-post-form')
  }

  render () {
    return (
      <div>
        <div onClick={this.hideTransparentLayer} id="trans" className="transparent-background hidden" />
        <div onClick={this.showTransparentLayer} id="post-form" className="new-post-form">
          <div className="new-post-form-header">
            <ul className="new-post-form-tabs">
              <li><a>Status</a></li>
            </ul>
          </div>
          <form onSubmit={this.handlePostSubmit}>
            <div className="new-post-form-input">
              <img src={this.props.currentUser.profilePicture} className="poster-profile-thumb" />
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
    )
  }
}
