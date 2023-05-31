import React, { Component } from 'react'

export default class EditModal extends Component {
    state = {
        title: this.props.selectedPost.title
    }

    handleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handleSave = () => {
        this.props.onEdit(this.state.title);
    }
  render() {
    return (
      <div className='modal'>
        <textarea
        name='title'
        value={this.state.title}
        onChange={this.handleChange}
        />
        <div className='modal-buttons'>
            <button className='button button-primary close-modal'onClick={this.handleSave}>Save</button>
            <button className='button close-modal' onClick={this.props.onToggleModal}>Cancel</button>
        </div>
        
      </div>
    )
  }
}
