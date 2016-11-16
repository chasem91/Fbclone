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
    // const boxes = []
    // const activeBoxes = this.props.currentUser.activeConversations;
    // for(const key in activeBoxes) {
    //   const box = activeBoxes[key]
    //   boxes.push(<LiveChatBoxContainer key={box.id} />)
    // }
    return [
      <LiveChatBoxContainer key={1} />,
      <LiveChatBoxContainer key={2} />
    ];
  }

  render() {
    return (
      <div className="live-chat-boxes-container">
        {this.chatBoxes()}
      </div>
    );
  }
}
