import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostContainer from './containers/PostContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>We Speak Up</h1>
          <p>This is a discussion board for survivors of abuse to discuss their thoughts, feelings, experiences, and opinions in a safe, non-judgmental environment. Feel free to share anything that you are comfortable with.</p>
        </header>
        <PostContainer />
      </div>
    );
  }
}

export default App;
