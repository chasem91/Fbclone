import React from 'react';

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !!nextProps.currentUser;
  }

  render() {
    return (
      <div className="about-container">
        <div className="about-box-header">About</div>
        <div className="about-box-contents">
          <div className="about-box-nav">Overview</div>
          <div className="about-box-section"></div>
        </div>
      </div>
    );
  }
}
