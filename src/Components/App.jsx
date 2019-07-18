import React from 'react';
import PhotoGallery from './PhotoGallery.jsx';
import Modal from './Modal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      photos: [
        { url: 'https://photochews.s3.us-east-2.amazonaws.com/food1.jpg', caption: 'This is my cake' },
        { url: 'https://photochews.s3.us-east-2.amazonaws.com/food10.jpg', caption: 'This is my sushi' },
        { url: 'https://photochews.s3.us-east-2.amazonaws.com/food14.jpg', caption: 'This is my ice cream' }
      ],
      show: false
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.decrease = this.decrease.bind(this);
    this.increase = this.increase.bind(this);
  }

  openModal(e) {
    e.preventDefault();
    this.setState({ show: true });
  }

  closeModal(e) {
    e.preventDefault();
    this.setState({ show: false });
  }
  decrease() {
    let currentPosition = this.state.position;
    if (currentPosition === 0) {
      currentPosition = this.state.photos.length - 1;
    } else {
      currentPosition--;
    }
    this.setState({ position: currentPosition });
  }

  increase() {
    let currentPosition = this.state.position;
    if (currentPosition === this.state.photos.length - 1) {
      currentPosition = 0;
    } else {
      currentPosition++;
    }
    this.setState({ position: currentPosition });
  }

  render() {
    const modal = this.state.show ? (
      <Modal closeModal={this.closeModal} modalState={this.state} increase={this.increase} decrease={this.decrease}>
      </Modal>
    ) : null;

    return (
      <div>
        <PhotoGallery openModal={this.openModal}></PhotoGallery>
        {modal}
      </div>
    )
  }
}

export default App;


