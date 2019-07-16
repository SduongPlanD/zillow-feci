import React from 'react';
import ModalRight from './ModalRight.jsx';
import ModalLeft from './ModalLeft.jsx';

class Modal extends React.Component {
  render() {
    if (!this.props.modalState.show) {
      return null;
    }
    return (
      <div class="modal">
        <h2>Modal Content</h2>
        <ModalLeft position={this.props.modalState.position} decrease={this.props.decrease}></ModalLeft>
        <div class="content">{this.props.modalState.photos[this.props.modalState.position]}</div>
        <ModalRight position={this.props.modalState.position} increase={this.props.increase}></ModalRight>
        <button onClick={this.props.closeModal}>Close</button>
      </div>
    )
  }
}

export default Modal