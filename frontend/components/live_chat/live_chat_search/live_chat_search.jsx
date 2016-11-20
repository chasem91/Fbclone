import React from 'react';

export default class LiveChatSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="live-chat-search-container">
        <div className="chat-search-icon" />
        <input placeholder="Search" ></input>
      </div>
    );
  }

}
