import React from 'react';
import ModalRight from './ModalRight.jsx';
import ModalLeft from './ModalLeft.jsx';
import ReactDOM from 'react-dom';


class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ReactDOM.createPortal(
      <div className="modal">
        <h2>Modal Content</h2>
        <div className="contentCont">
          <ModalLeft position={this.props.modalState.position} decrease={this.props.decrease}></ModalLeft>
          <div class="content">{this.props.modalState.photos[this.props.modalState.position]}</div>
          <ModalRight position={this.props.modalState.position} increase={this.props.increase}></ModalRight>
        </div>
        <button onClick={this.props.closeModal}>Close</button>
      </div>,
      document.getElementById('modal-root')
    );
  }
}

export default Modal