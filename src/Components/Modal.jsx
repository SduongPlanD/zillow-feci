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
        <h2 className="photoPosition">Photo {this.props.modalState.position + 1} of {this.props.modalState.photos.length}</h2>
        <div className="contentCont">
          <ModalLeft position={this.props.modalState.position} decrease={this.props.decrease}></ModalLeft>
          <div className="content">
            <img src={this.props.modalState.photos[this.props.modalState.position]['url']}></img>
          </div>
          <ModalRight position={this.props.modalState.position} increase={this.props.increase}></ModalRight>
        </div>
        {/* caption */}
        <div>{this.props.modalState.photos[this.props.modalState.position]['caption']}</div>
        <button onClick={this.props.closeModal}>Close</button>
      </div>,
      document.getElementById('modal-root')
    );
  }
}

export default Modal