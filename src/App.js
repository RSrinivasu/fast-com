import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './Content';

function App() {
  let image = "https://fast.com/assets/new-logo-vert-fit-f0bf05.png";
  return (
    <div className="App">
      <div className="header">
        <img src={image} /> 
      </div> 
      <Content />
    </div>
  );
}

export default App;
