import React from 'react';

class Modal extends React.Component {
  render() {
    if (!this.props.modalState) {
      return null;
    }
    return <div>Show Modal</div>;
  }
}

export default Modal