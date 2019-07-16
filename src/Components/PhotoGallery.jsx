import React from 'react';
import Modal from './Modal.jsx';

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <h1>Photos2</h1>
        <img src='https://loremflickr.com/320/240/house' onClick={this.props.openModal}></img>
      </div>
    )
  }
}


export default PhotoGallery;