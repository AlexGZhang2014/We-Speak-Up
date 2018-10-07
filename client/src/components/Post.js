import React, { Component } from 'react';
import CommentsContainer from '../containers/CommentsContainer'

class Post extends Component {
  render() {
    return (
      <div className="post">
        <h1>{this.props.post.title}</h1>
        <h5>By: {this.props.post.author}</h5>
        <p>{this.props.post.content}</p>
        <button onClick={() => this.props.toggleEditStatus(this.props.post.id)}>Edit this post</button>
        <button onClick={() => this.props.deletePost(this.props.post.id)}>Delete this post</button>
        {this.props.editId ? this.props.displayEditForm() : null}
        <h4>Add a comment below: </h4>
        <CommentsContainer post={this.props.post}/>
      </div>
    )
  }
}

export default Post
