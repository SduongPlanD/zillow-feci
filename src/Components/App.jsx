import React from 'react';
import PhotoGallery from './PhotoGallery.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(e) {
    e.preventDefault();
    this.setState({ show: true });
  }

  closeModal(e) {
    e.preventDefault();
    this.setState({ show: false });
  }

  render() {
    return (
      <div>
        <PhotoGallery openModal={this.openModal} closeModal={this.closeModal} modalState={this.state.show}></PhotoGallery>
      </div>
    )
  }
}

export default App;


