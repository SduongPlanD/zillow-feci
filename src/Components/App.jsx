import React from 'react';
import PhotoGallery from './PhotoGallery.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal(e) {
    e.preventDefault();
    this.setState({ show: true });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <PhotoGallery openModal={this.openModal} modalState={this.state.show}></PhotoGallery>
      </div>
    )
  }
}

export default App;


