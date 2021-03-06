import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <p>{this.props.comment.content}</p>
        <h5>Written by: {this.props.comment.author}</h5>
        <button
          onClick={() => this.props.toggleEditStatus(this.props.comment.id)}
          >Edit this comment</button>
        {this.props.editCommentId ? this.props.displayEditForm() : null}
        <button
          onClick={() => this.props.deleteComment(this.props.comment.id)}
          >Delete this comment</button>
      </div>
    )
  }
}

export default Comment
