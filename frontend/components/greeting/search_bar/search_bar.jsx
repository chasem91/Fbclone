import React from 'react';
import { Link } from 'react-router';

export default class SearchBar extends React.Component {

  constructor (props) {
    super(props);
    this.handleSearchText = this.handleSearchText.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.results = [0];
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !!nextProps.currentUser
  }

  handleSearchText(e) {
    e.preventDefault();
    this.props.getUsers(e.currentTarget.value);
  }

  handleKeyDown(e) {
    if (e.key === "ArrowUp") {
      let $result = $(`.search-result-${this.results[0]}`)
      $result.removeClass('selected');
      this.results.unshift(this.results.pop());
      $result = $(`.search-result-${this.results[0]}`)
      $result.addClass('selected');
    } else if (e.key === "ArrowDown") {
      let $result = $(`.search-result-${this.results[0]}`)
      $result.removeClass('selected');
      this.results.push(this.results.shift());
      $result = $(`.search-result-${this.results[0]}`)
      $result.addClass('selected');
    } else if (e.key === "Enter") {
      const $selected = $('.selected')[0];
      $selected.click();
      const $input = $('.search-bar-input')[0];
      $input.value = $selected.children[1].textContent;

      this.props.receiveUsers([]);
    }
  }

  renderResults() {
    this.results = [0];
    const userResults = this.props.currentUser.users.map(
      user => {
        this.results.push(user.id);
        return (
          <Link to={`/users/${user.id}`} key={user.id} className={`search-result search-result-${user.id}`}>
            <img src={window.homeUserImages.profilePicture} className="post-author-picture"/>
            <div className="name">{`${user.first_name} ${user.last_name}`}</div>
            <div>{user.email}</div>
          </Link>
        );
      }
    ) || [];
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
        <input
          className="search-bar-input"
          onChange={this.handleSearchText}
          onKeyDown={this.handleKeyDown}
          name="search"
          type="text"
          placeholder="Search Fbclone" />
        <button className="search-bar-submit" name="search" type="submit">
          <div className="search-submit-icon"/>
        </button>
        {this.renderResults()}
      </div>
    )
  }
}
