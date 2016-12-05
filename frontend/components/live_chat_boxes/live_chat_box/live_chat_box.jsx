import React from 'react'
import { Link } from 'react-router'

export default class LiveChatBoxes extends React.Component {
  constructor(props) {
    super(props)
    this.handleExpand = this.handleExpand.bind(this)
    this.handleCollapse = this.handleCollapse.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleCloseChatBox = this.handleCloseChatBox.bind(this)
    this.conversation = null
    this.chatBox = null
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !!nextProps.currentUser
  }

  handleExpand() {
    const chatBox = {}
    const chatBoxDetails = { id: this.conversation.id, open: true}
    chatBox[this.conversation.id] = chatBoxDetails
    this.props.receiveChatBox(chatBox)
  }

  handleCollapse(e) {
    const chatBox = {}
    const chatBoxDetails = { id: this.conversation.id, open: false}
    chatBox[this.conversation.id] = chatBoxDetails
    this.props.receiveChatBox(chatBox)
  }

  handleCloseChatBox(e) {
    if (e.target.className === "chat-box-closed-x-icon") {
      this.props.removeChatBox(this.conversation.id)
      return
    }
    $(e.target).parent().parent().addClass('closing-chat-box')
    setTimeout(() => this.props.removeChatBox(this.conversation.id), 190)
  }

  handleKeyPress(e) {
    if(e.key === "Enter") {
      const message = {
        user_id: this.props.currentUser.id,
        conversation_id: this.conversation.id,
        content: e.target.value
      }
      e.target.value = ""
      this.props.sendMessage(message)
    }
  }

  render() {
    this.conversation = this.conversation || this.props.currentUser.conversations[this.props.userId]
    this.chatBox = this.props.currentUser.chatBoxes[this.conversation.id]
    if (this.chatBox.open) {
      return (
        <div className="live-chat-box-container-opened">
          <div className="live-chat-box-header">
            <div className="chat-box-header-names">
              {this.renderChatBoxHeaderNames()}
            </div>
            <div className="chat-box-header-click-area" onClick={this.handleCollapse} />
            <div className="chat-box-x-icon" onClick={this.handleCloseChatBox}></div>
          </div>
          <div className="chat-box-conversation">
            {this.renderConversation()}
          </div>
          <input
            placeholder="Type a message..."
            className="chat-box-message-input"
            onKeyPress={this.handleKeyPress}
            />
        </div>
      )
    } else {
      return (
        <div className="live-chat-box-container-closed">
          <div className="chat-box-closed-name" onClick={this.handleExpand}>{this.renderChatBoxHeaderNames()}</div>
          <div className="chat-box-closed-x-icon" onClick={this.handleCloseChatBox}/>
        </div>
      )
    }
  }

  renderChatBoxHeaderNames() {
    const usersToDisplay = []
    const users = this.conversation.users
    for(const key in users) {
      const user = users[key]
      if (user.id !== this.props.currentUser.id) {
        if (this.chatBox.open) {
          usersToDisplay.push(
            <Link to={`/users/${user.id}`} key={user.id}>
              {`${user.first_name} ${user.last_name}`}
            </Link>
          )
        } else {
          usersToDisplay.push(
            <div key={user.id}>{`${user.first_name} ${user.last_name}`}</div>
          )
        }
      }
    }
    return usersToDisplay
  }

  renderConversation() {
    const messages = []
    const convo = this.props.currentUser.conversations[this.conversation.id].messages || {}
    for(const key in convo) {
      const message = convo[key]
      if (message.user.id === this.props.currentUser.id) {
        messages.push(
          <div key={message.id} className="authored-chat-message">
            <div className="authored-chat-message-content">
              {message.content}
            </div>
          </div>
        )
      } else {
        messages.push(
          <div key={message.id} className="chat-message">
            <Link to={`/users/${message.user.id}`} >
              <img className="chat-message-thumb" src={message.user.profilePicture}></img>
            </Link>
            <div className="chat-message-content">
              {message.content}
            </div>
          </div>
        )
      }
    }
    return messages
  }
}































//
