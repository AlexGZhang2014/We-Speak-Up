import React, { Component } from 'react';
import Posts from '../components/Posts';
import { connect } from 'react-redux';
import { fetchPosts, addPost } from '../actions/postActions'

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      author: ''
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
      title: '',
      content: '',
      author: ''
    })
  }

  componentDidMount() {
    this.props.fetchPosts();
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
        <Posts posts={this.props.posts}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts
});

const mapDispatchToProps = dispatch => ({
  addPost: state => dispatch(addPost(state)),
  fetchPosts: () => dispatch(fetchPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)
