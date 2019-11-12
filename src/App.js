import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
  <div className="App">
    <img className="mainImage" src="https://bit.ly/2O1vmW9"/>
    <img class="swipeUP" src="https://bit.ly/2NFNO7E"/>
      <div className="text">
      <div className="typewriter-text"> Have you even been "walking-distracted" by phone?</div>
      <div id="bullean">
        <p>
        <input id="Yes" type="checkbox" onClick={followUP} ></input>
        <label>Definitely YES.</label></p>
        <p>
          <input id="No" type="checkbox" onClick={opposite} ></input>
          <label>Of course NO!</label>
        </p>
      </div>
      <div id="followUP" >
      <div className="typewriter2">
        <p className="typewriter-text2">20% of people have endangered themselves on stairs by sticking to their cellphones.</p>
      </div>
        <div className="form">   
        <div>Save yourself by signing up:</div> 
        <input id="name" type="text" placeholder="Your Name"></input>
        <input id="concern" type="text" placeholder="Your Concern"></input>
        <button >Submit!</button>
        </div>
        
      </div>
      <div id="opposite">Conguatulations!!!</div>
      </div>
  </div>
  
  );
  }
 



function followUP(){
  
  let checkBox = document.getElementById("Yes");
  let text = document.getElementById("followUP");
  // If the checkbox is checked, display the output text
  if(checkBox.checked == true){
    text.style.visibility="visible";
  }else{
    text.style.visibility="hidden";
  }
}

function opposite(){
  
  let checkBox2 = document.getElementById("No");
  let text2 = document.getElementById("opposite");
  // If the checkbox is checked, display the output text
  if(checkBox2.checked == true){
    text2.style.visibility="visible";
  }else{
    text2.style.visibility="hidden";
  }
}


 

export default App;
