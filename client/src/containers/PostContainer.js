import React, { Component } from 'react';
import Posts from '../components/Posts';
import { connect } from 'react-redux';
import { fetchPosts, addPost, deletePost, updatePost } from '../actions/postActions';

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      author: '',
      editId: null
    }
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addPost(this.state);
    this.setState({
      ...this.state,
      title: '',
      content: '',
      author: ''
    })
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  handleUpdatePost = (event) => {
    event.preventDefault();
    this.props.updatePost(this.state);
    this.setState({
      title: '',
      content: '',
      author: '',
      editId: null
    })
  }

  displayEditForm = () => {
    return (
      <form onSubmit={this.handleUpdatePost}>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
          placeholder="Post title">
        </input>
        <br></br><br></br>
        <textarea
          type="text"
          name="content"
          value={this.state.content}
          onChange={this.handleChange}
          placeholder="Post content">
        </textarea>
        <br></br>
        <input
          type="text"
          name="author"
          value={this.state.author}
          onChange={this.handleChange}
          placeholder="Your username">
        </input>
        <br></br>
        <input type="submit"></input>
      </form>
    );
  }

  toggleEditStatus = (id) => {
    this.setState({
      ...this.state,
      editId: id
    })
  }

  render() {
    return (
      <div className="posts">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Post title">
          </input>
          <br></br><br></br>
          <textarea
            type="text"
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
            placeholder="Post content">
          </textarea>
          <br></br>
          <input
            type="text"
            name="author"
            value={this.state.author}
            onChange={this.handleChange}
            placeholder="Your username">
          </input>
          <br></br>
          <input type="submit"></input>
        </form>
        <Posts
          posts={this.props.posts}
          deletePost={this.props.deletePost}
          displayEditForm={this.displayEditForm}
          editId={this.state.editId}
          toggleEditStatus={this.toggleEditStatus}
          />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts
});

const mapDispatchToProps = dispatch => ({
  addPost: state => dispatch(addPost(state)),
  fetchPosts: () => dispatch(fetchPosts()),
  deletePost: id => dispatch(deletePost(id)),
  updatePost: (state) => dispatch(updatePost(state))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)
