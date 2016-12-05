import React from 'react'

export default class LiveChatSearch extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    
  }

  render() {
    return (
      <div className="live-chat-search-container">
        <div className="chat-search-icon" />
        <input placeholder="Search" onChange={this.handleChange}></input>
      </div>
    )
  }
}
