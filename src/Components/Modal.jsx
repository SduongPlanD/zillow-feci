import React from 'react';

class Modal extends React.Component {
  render() {
    if (!this.props.modalState) {
      return null;
    }
    return (
      <div>
        <h2>Show Modal</h2>
        <button onClick={this.props.closeModal}>Close</button>
      </div>
    )
  }
}

export default Modal