import React from 'react';

export default (props) => (
  <div className="search-bar group">
    <input className="search-bar-input" name="search" type="text" placeholder="Search Fbclone"></input>
    <button className="search-bar-submit" name="search" type="submit">
      <div className="search-submit-icon"/>
    </button>
  </div>
);
