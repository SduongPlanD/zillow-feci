import React from 'react';

export default class ModalRight extends React.Component {
  render() {
    return (
      <div>
        <i class="fas fa-chevron-circle-right" onClick={this.props.increase}></i>
      </div>
    )
  }
}