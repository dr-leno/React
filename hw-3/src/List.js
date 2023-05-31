import React, { Component } from 'react'
import ListItem from './ListItem'

export default class List extends Component {

    
  render() {
    return (
        <ul>
            {this.props.posts.map((post) => (
                <ListItem 
                    key = {post.id}
                    post = {post}
                    onSelectPost = {this.props.onSelectPost}
                    onDeleteShow = {this.props.onDeleteShow}
                    onEditShow = {this.props.onEditShow}
                />
            ))

            }
        </ul>
    )
  }
}
