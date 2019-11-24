import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
  <div className="App">
    <a href="mailto:ycc525@nyu.edu">Contact Us!</a>
    <img src="https://bit.ly/2XIAS4d"/>
    <p id="title">Your Stair Safety Guard</p>
    <div className="description">  
      <div className="typewriter">
        <h3 className="typewriter-text">Keep your phone DOWN and head UP</h3>
      </div>
        <p>Have you ever been walking-distracted by phone?</p>
        <p>Free your hand from swiping your phone while on stairs!</p>
        <button onClick={jumpPage}>Download</button>
    </div>
    </div>
  )
  };
function jumpPage(){
  alert("This will automatically download our app, continue?")
}

export default App;
