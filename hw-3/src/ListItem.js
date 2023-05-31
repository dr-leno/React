import React, { Component } from 'react'

export default class ListItem extends Component {

  handleEdit = () => {
    this.props.onSelectPost(this.props.post);
    this.props.onEditShow();
  }
  handleDelete = () => {
    this.props.onSelectPost(this.props.post);
    this.props.onDeleteShow();
  }
  render() {
    return (
        <li >
            <h3>{this.props.post.title}</h3>
            <p>{this.props.post.body}</p>
            <button onClick={this.handleEdit}>Edit</button>
            <button onClick={this.handleDelete}>Delete</button>
        </li>
    )
  }
}
