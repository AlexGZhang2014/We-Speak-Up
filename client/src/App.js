import React, { Component } from 'react';
import './App.css';
import PostContainer from './containers/PostContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>We Speak Up</h1>
            <p>This is a discussion board for survivors of abuse to discuss their thoughts, feelings, experiences, and opinions in a safe, non-judgmental environment. Feel free to share anything that you are comfortable with. We welcome open discussion about many hard issues, but please do your best to keep all discourse civil. For a list of helpful resources for survivors, please click <a href="#footer">here</a>.</p>
          </header>
          <Route exact path="/" component={PostContainer} />
          <footer id="footer">
            <h2>Resources for survivors: </h2>
            <h3><a href="https://thehotline.org" target="_blank">National Domestic Violence Hotline</a> (1-800-799-SAFE)</h3>
            <h3><a href="https://www.rainn.org" target="_blank">RAINN</a></h3>
            <h3><a href="http://ocrcc.org" target="_blank">Orange County Rape Crisis Center</a></h3>
            <h3><a href="https://compassctr.org/" target="_blank">Compass Center for Women and Families</a></h3>
            <h3><a href="https://metoomvmt.org/resources" target="_blank">Me Too Resources</a></h3>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
