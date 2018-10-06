import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  render() {
    const posts = this.props.posts.map(post => <Post post={post}/>);
    return (
      <div>
        {posts}
      </div>
    )
  }
}

export default Posts
