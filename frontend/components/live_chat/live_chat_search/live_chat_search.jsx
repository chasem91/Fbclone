import React from 'react';

export default class LiveChatSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="live-chat-search-container">
        <input placeholder="search" ></input>
      </div>
    );
  }

}
