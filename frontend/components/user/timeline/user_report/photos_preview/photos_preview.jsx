import React from 'react';

export default class PhotosPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !!nextProps.currentUser;
  }

  thumbsList() {
    const photos = this.props.user.photos;
    const thumbs = [];

    let i = 0;
    for(const key in photos) {
      if (i >= (Object.keys(photos).length - 9)) {
        const photo = photos[key];
        thumbs.push(<img key={photo.id} className="friends-preview-thumb" src={photo.url} />)
      }
      i++;
    }
    return thumbs;
  };

  render() {
    return (
      <div className="friends-preview group">
        <div className="friends-preview-header">
          <div className="photos-preview-icon"></div>
          Photos
        </div>
        <div className="friends-preview-thumbs">
          {this.thumbsList()}
        </div>
      </div>
    );
  }
}
