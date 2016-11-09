// import React from 'react';
// import { Link } from 'react-router';
// import SearchBarContainer from '../search_bar/search_bar_container';
// import NotificationsContainer from '../notifications/notifications_container';
// import FriendRequestsContainer from '../friend_requests/friend_requests_container';
//
// export default class Greeting extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   toggleFriendRequests (e) {
//     const target = e.currentTarget;
//     const child = e.currentTarget.children[0];
//     const clicked = "friend-requests-icon-clicked";
//     const unclicked = "friend-requests-icon";
//     const hidden = "hidden";
//     const shown = "friend-requests-container";
//     target.className = target.className === clicked ? unclicked : clicked;
//     child.className = child.className === hidden ? shown : hidden;
//   }
//
//   personalGreeting () {
//     return (
//       <div>
//         <div className="personal-greeting group">
//           <div className="personal-greeting-elements">
//             <div className="icon-and-search">
//               <Link to="/" >
//                 <div className="small-logo"></div>
//               </Link>
//               <SearchBarContainer />
//             </div>
//             <div className="header-icons-and-logout">
//               <Link to={`/users/${this.props.currentUser.id}`} className="my-profile-link">
//                 <img className="my-profile-link-thumb" src={window.homeUserImages.profilePicture}></img>
//                 <div className="my-profile-link-name">
//                   {this.props.currentUser.first_name}
//                 </div>
//               </Link>
//               <div className="pipe"/>
//               <Link to={`/`} className="newsfeed-link">Home</Link>
//               <div className="friend-requests-icon-and-container">
//                 <div className="friend-requests-icon" onClick={this.toggleFriendRequests}>
//                   <div className="hidden">
//                     <FriendRequestsContainer />
//                   </div>
//                 </div>
//               </div>
//               <div className="notifications-icon-and-container">
//                 <div className="notifications-icon" />
//                 <div className="notifications-container">
//                 </div>
//               </div>
//               <div onClick={this.props.logout} className="logout-button">Log Out</div>
//             </div>
//           </div>
//         </div>
//         <div className="header-bar-fix"/>
//       </div>
//     );
//   }
//
//   render () {
//     if (this.props.currentUser) {
//       return this.personalGreeting();
//     } else {
//       return (<div></div>);
//     }
//   }
// }
