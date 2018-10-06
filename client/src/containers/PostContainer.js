import React, { Component } from 'react';
import Posts from '../components/Posts';

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      author: '',
      posts: []
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
    this.setState({
      ...this.state,
      posts: this.state.posts.concat({
        title: this.state.title,
        content: this.state.content,
        author: this.state.author
      })
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
        <Posts posts={this.state.posts}/>
      </div>
    )
  }
}

export default PostContainer
