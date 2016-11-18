import React from 'react';

export default class ActiveUserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.user = null;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const user = {};
    user[this.user.id] = { id: this.user.id };
    this.props.receiveChatBox(user);
  }

  render() {
    this.user = this.user || this.props.currentUser.activeUsers[this.props.userId];
    return (
      <div className="active-user-detail" onClick={this.handleClick}>
        <img src={window.homeUserImages.profilePicture} className="active-user-detail-image"></img>
        <div className="active-user-detail-name">{`${this.user.first_name} ${this.user.last_name}`}</div>
      </div>
    );
  }
}
