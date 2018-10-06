import React, { Component } from 'react';

class Post extends Component {
  render() {
    return (
      <div>
        <h1>Title: {this.props.post.title}</h1>
        <h5>By: {this.props.post.author}</h5>
        <p>Content: {this.props.post.content}</p>
      </div>
    )
  }
}

export default Post
