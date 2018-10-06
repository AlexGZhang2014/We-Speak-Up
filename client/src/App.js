import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostContainer from './containers/PostContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostContainer />
      </div>
    );
  }
}

export default App;
