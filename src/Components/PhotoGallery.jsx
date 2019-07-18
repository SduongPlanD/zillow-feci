import React from 'react';


class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <div className="thumbnail" onClick={this.props.openModal}>Photo Gallery</div>
      </div>
    )
  }
}


export default PhotoGallery;