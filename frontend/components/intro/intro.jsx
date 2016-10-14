import React from 'react';

export default (props) => {
  return (
    <div className="intro group">
      <div className="intro-header">
        <div className="intro-icon"></div>
        Intro
      </div>
      <div className="intro-details">
        <div className="intro-elements">
          <div className="intro-element">
            <div className="intro-element-category">Birthday:</div>
            <div className="intro-element-value">{props.currentUser.birthday}</div>
          </div>
          <div className="intro-element">
            <div className="intro-element-category">Gender:</div>
            <div className="intro-element-value">{props.currentUser.gender}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
