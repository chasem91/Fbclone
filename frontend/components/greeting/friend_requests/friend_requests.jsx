import React from 'react'
import { Link } from 'react-router'

export default class FriendRequests extends React.Component {
  constructor(props) {
    super(props)
    this.handleFriendApproval = this.handleFriendApproval.bind(this)
  }

  setScrollbar() {
    const $list = $('.friend-requests-list')
    const requests = Object.keys(this.props.currentUser.receivedRequests).length
    const maxRequests = 6

    const $scroll = $('.friend-requests .slimScrollDiv')
    if ($scroll[0]) {
      if (requests) {
        const justHeight = {'height': `${maxRequests * 63}px`}
        const heightAndColor = {'height': `${requests * 63}px`, 'color': 'rgba(0, 0, 0, 0)' }
        const options = (requests > maxRequests) ? justHeight : heightAndColor
        $scroll.css(options)
      } else {
        $scroll.css({'height': '41px'})
      }
    } else if (requests > maxRequests) {
      console.log("max scroll")
      $list.slimScroll({
        height: `${maxRequests * 63}px`,
        size: '8px',
        position: 'right',
        color: '#222',
        alwaysVisible: false,
        distance: '2px',
        railVisible: true,
        railColor: '#222',
        railOpacity: 0.1,
        wheelStep: 10,
        allowPageScroll: false,
        disableFadeOut: false
      })
    } else {
      console.log("no scroll")
      $list.slimScroll({
        height: `${requests * 63}px`,
        color: 'rgba(0, 0, 0, 0)'
      })
    }
  }

  componentDidMount() {
    if(Object.keys(this.props.currentUser.receivedRequests).length) {
      this.setScrollbar()
    }
  }

  componentDidUpdate() {
    if(Object.keys(this.props.currentUser.receivedRequests).length) {
      this.setScrollbar()
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !!nextProps.currentUser
  }

  handleFriendApproval (e) {
    e.preventDefault()
    this.props.acceptRequest(
      this.props.currentUser.id,
      parseInt(e.currentTarget.id)
    )

    const target = e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
    const parent = e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode
    const clicked = "friend-requests-icon-clicked"
    const unclicked = "friend-requests-icon"
    const hidden = "hidden"
    const shown = "friend-requests-container"
    target.className = target.className === clicked ? unclicked : clicked
    parent.className = parent.className === hidden ? shown : hidden
  }

  friendRequests() {
    const requests = []
    for (const key in this.props.currentUser.receivedRequests) {
      const request = this.props.currentUser.receivedRequests[key]
      requests.push(
        <li key={key} className="friend-request">
          <div className="friend-request-details">
            <img className="friend-request-thumb" src={request.requester.profilePicture}/>
            <Link to={`/users/${request.requester.id}`} className="friend-request-link">
              {request.requester.full_name}
            </Link>
          </div>
          <input
            type="submit"
            className="friend-request-approve"
            value="Approve"
            id={request.requester.id}
            onClick={this.handleFriendApproval}
            />
        </li>
      )
    }
    if (requests.length > 0) {
      return requests
    } else {
      return (
        <div className="no-friend-requests">
          No new requests
        </div>
      )
    }
  }

  render() {
    return (
      <div className="friend-requests">
        <div className="friend-requests-header">
          Friend Requests
        </div>
        <div className="friend-requests-pointer" />
        <ul className="friend-requests-list">
          {this.friendRequests()}
        </ul>
      </div>
    )
  }
}
