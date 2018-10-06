import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <div>
        <p>{this.props.comment.content}</p>
        <h5>Written by: {this.props.comment.author}</h5>
      </div>
    )
  }
}

export default Comment
