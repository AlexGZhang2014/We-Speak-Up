import React, { Component } from 'react';
import Comment from './Comment'

class Comments extends Component {
  render() {
    const comments = this.props.comments.map(comment => <Comment comment={comment}/>)
    return (
      <div>
        <h4>Comments: </h4>
        {comments}
      </div>
    )
  }
}

export default Comments
