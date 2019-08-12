import React from 'react';
import './style.css';
import Navigation from './navigation'

function App() {
  return (
    <div className="App">
      <div className="title"> 
        <img src={require('./images/logo.png')} alt="Cool logo" width="54px" height="65px" float="left"/>
        <div>
          <h4><strong>Peter Jacobsen</strong></h4>
          <h5>Game Programmer & Software Developer</h5>
        </div>
      </div>
      <br/>
      <Navigation/>
      
      <footer className="footer">
        <a href="https://github.com/Yawmus">
          <img src={require('./images/GitHub-Mark-64px.png')} alt="Link to github" width="32px" height="32px"/>
        </a>
        <p>Site written by me using Node/React</p>
      </footer>
    </div>
  );
}

//<h1>...@</h1>

export default App;
