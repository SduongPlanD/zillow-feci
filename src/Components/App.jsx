import React from 'react';
import PhotoGallery from './PhotoGallery.jsx';
import Dog from '../../images/dog.jpg';
import Hen from '../../images/hen.svg';
import Modal from './Modal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      photos: [
        <img src={Dog}></img>,
        <img src={Hen}></img>,
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
    this.setState({ position: this.state.position -= 1 })
  }
  increase() {
    this.setState({ position: this.state.position += 1 })
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


