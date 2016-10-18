import React from 'react';
import { Link } from 'react-router';

export default class SearchBar extends React.Component {

  constructor (props) {
    super(props);
    this.handleSearchText = this.handleSearchText.bind(this);
  }

  handleSearchText(e) {
    e.preventDefault();
    this.props.getUsers(e.currentTarget.value);
  }

  renderResults() {
    const userResults = this.props.user.users.map(
      user => (
        <Link to={`/users/${user.id}`} key={user.id} className="search-result">
          <img src={window.homeUserImages.profilePicture} className="post-author-picture"/>
          <div>{`${user.first_name} ${user.last_name}`}</div>
        </Link>
      )
    )
    if (userResults.length > 0) {
      return (
        <div className="search-results-container">
          {userResults}
        </div>
      );
    } else {
      return (
        <div className="hidden" />
      );
    }
  }
  render() {
    return (
      <div className="search-bar group">
        <input className="search-bar-input" onChange={this.handleSearchText} name="search" type="text" placeholder="Search Fbclone"></input>
        <button className="search-bar-submit" name="search" type="submit">
          <div className="search-submit-icon"/>
        </button>
        {this.renderResults()}
      </div>
    )
  }
}
