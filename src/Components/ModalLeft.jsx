import React from 'react';

export default class ModalRight extends React.Component {
  render() {
    return (
      <div>
        <i class="fas fa-chevron-circle-left" onClick={this.props.decrease} ></i>
      </div>
    )
  }
}