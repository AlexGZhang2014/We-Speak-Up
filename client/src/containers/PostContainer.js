import React, { Component } from 'react';
import Posts from '../components/Posts';

class PostContainer extends Component {
  render() {
    return (
      <div className="posts">
        <Posts />
      </div>
    )
  }
}

export default PostContainer
