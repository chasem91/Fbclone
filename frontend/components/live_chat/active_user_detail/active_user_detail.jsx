import React from 'react';

export default class ActiveUserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.convo = this.props.currentUser.conversations[this.props.conversationId];
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !!nextProps.currentUser
  }

  componentWillMount() {
    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    const pusher = new Pusher('923b60e10128cda9e9ef', {
      encrypted: true
    });

    const channel = pusher.subscribe(`${this.convo.id}`);
    channel.bind('my_event', data => {
      const message = data.message;
      // {
      //   id: data.message.id,
      //   user: data.message.user,
      //   conversation_id: data.message.conversation_id,
      //   content: data.message.content
      // };
      this.props.receiveMessage(message);
    });
  }

  handleClick() {
    const conversation = {};
    conversation[this.convo.id] = { id: this.convo.id };
    this.props.receiveChatBox(conversation);
  }

  render() {
    return (
      <div className="active-user-detail" onClick={this.handleClick}>
        <img src={window.homeUserImages.profilePicture} className="active-user-detail-image"></img>
        <div className="active-user-detail-name">{this.renderNames()}</div>
      </div>
    );
  }

  renderNames() {
    const usersToDisplay = [];
    const users = this.convo.users || {};
    for(const key in users) {
      const user = users[key]
      if (user.id !== this.props.currentUser.id) {
        usersToDisplay.push(`${user.first_name} ${user.last_name}`);
      }
    }
    return usersToDisplay;
  }
}
