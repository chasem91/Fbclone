import React from 'react';

export default class Photos extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !!nextProps.currentUser;
  }

  render() {
    return (
      <div className="">

      </div>
    );
  }
}
