import React, { Component } from 'react'

export default class DeleteModal extends Component {
  render() {
    return (
      <div className='modal'>
        <p>Are you sure that you want to delete post?</p>
        <div className='modal-buttons'>
            <button className='button button-primary close-modal' onClick={this.props.onDelete}>Ok</button>
            <button className='button close-modal' onClick={this.props.onToggleModal}>Cancel</button>
        </div>
      </div>
    )
  }
}
