import React from 'react';
import './App.css';
import List from './List';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';
import Notification from './Notification';

export default class App extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      posts: [],
      isSuccess: false,
      isError: false,
      isEditing: false, 
      isDeleting: false,
      selectedPost: null
    }
  }

  getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
       .then((res) => res.json())
       .then(posts => this.setState({posts: posts}))
       .catch(error => this.setState({isError: true}));
  }

  componentDidMount() {
    this.getPosts();
  }

  handleSelectedPost = (post) => {
    this.setState({
      selectedPost: post
    })
  }

  deletePost = () => {
    const postId = this.state.selectedPost.id;
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'DELETE',
    })
      .then(() => {
        this.setState({
          posts: this.state.posts.filter(post => post.id !== postId), 
          isDeleting: false,
          isSuccess: true,
          selectedPost: null
        })    
      })
      .catch(error => this.setState({isError: true}));   
  }

  editPost = (title) => {
    const postId = this.state.selectedPost.id;
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        title: title,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(() => {
        this.setState({
          posts: this.state.posts.map(post =>
            post.id === postId ? { ...post, title: title } : post), 
          isEditing: false,
          isSuccess: true,
          selectedPost: null
        })    
      })
      .catch(error => this.setState({isError: true}));
  }
 
  toggleEditModal = () => {
    this.setState({
      isEditing: !this.state.isEditing, 
    })
    if(this.state.isEditing) {
      this.setState({selectedPost: null});
    }
  }

  toggleDeleteModal = () => {
    this.setState({
      isDeleting: !this.state.isDeleting,
    })
    if(this.state.isDeleting) {
      this.setState({selectedPost: null});
    }
  }

  closeNotification = () => {
    this.setState({isSuccess: false});
  }

  render() {
    return(
      <div className='container'>
        <h1>List of posts</h1>
        {this.state.isSuccess ? <Notification 
          onCloseNotification = {this.closeNotification}
        /> : null}
        <List 
          posts = {this.state.posts}
          
          onSelectPost = {this.handleSelectedPost}
          onDeleteShow = {this.toggleDeleteModal}
          onEditShow = {this.toggleEditModal}
        />
        {this.state.isEditing ? <EditModal
          onToggleModal = {this.toggleEditModal}
          selectedPost = {this.state.selectedPost}
          onEdit = {this.editPost}
        /> : null}
        {this.state.isDeleting ? <DeleteModal
          onToggleModal = {this.toggleDeleteModal}
          onDelete = {this.deletePost}
        /> : null}
      </div>
    )
  }
}

