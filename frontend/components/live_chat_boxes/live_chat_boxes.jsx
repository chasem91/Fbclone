import React from 'react';
import { Link } from 'react-router';
import LiveChatBoxContainer from './live_chat_box/live_chat_box_container';

export default class LiveChatBoxes extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !!nextProps.currentUser
  }

  chatBoxes() {
    const boxes = []
    const chatBoxes = this.props.currentUser.chatBoxes;
    for(const key in chatBoxes) {
      const box = chatBoxes[key]
      boxes.push(<LiveChatBoxContainer userId={box.id} key={box.id} />)
    }
    return boxes;
  }

  render() {
    return (
      <div className="live-chat-boxes-container">
        {this.chatBoxes()}
      </div>
    );
  }
}
