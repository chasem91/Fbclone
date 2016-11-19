import React from 'react';
import { Link } from 'react-router';

export default class UserHeaderNav extends React.Component {
  constructor(props) {
    super(props);
    this.sectionNames = ["Timeline", "About", "Friends", "Photos", "More"];
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !!nextProps.currentUser;
  }

  renderSections() {
    const sections = [];
    const active = "active-header-nav-tab";
    const inactive = "inactive-header-nav-tab"
    this.sectionNames.forEach( (name, idx) => {
      if (this.props.currentUser.currentSection === idx) {
        sections.push(
          <div
            key={idx}
            className={active}>
            {name}
            <div className={`header-nav-pointer`} />
          </div>
        );
      } else if (name === "Timeline"){
        sections.push(
          <Link
            onClick={this.handleClick}
            key={idx}
            to={`/users/${this.props.user.id}`}
            className={inactive}>
            {name}
          </Link>
        );
      } else {
        sections.push(
          <Link
            onClick={this.handleClick}
            key={idx}
            to={`/users/${this.props.user.id}/${name.toLowerCase()}`}
            className={inactive}>
            {name}
          </Link>
        );
      }
    });
    return sections;
  }

  handleClick(e) {
    const section = this.sectionNames.indexOf(e.target.text)
    this.props.receiveCurrentSection(section);
  }

  render() {
    const id = this.props.user.id;
    return (
      <div className="profile-header-nav group">
        <div className="profile-header-nav-links group">
          {this.renderSections()}
        </div>
      </div>
    );
  }
}
