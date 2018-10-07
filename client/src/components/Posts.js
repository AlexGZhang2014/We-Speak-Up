import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  render() {
    const posts = this.props.posts.map(post => <Post
      post={post}
      deletePost={this.props.deletePost}
      updatePost={this.props.updatePost}
      displayEditForm={this.props.displayEditForm}
      editId={this.props.editId}
      toggleEditStatus={this.props.toggleEditStatus}
      />);
    return (
      <div>
        {posts}
      </div>
    )
  }
}

export default Posts
