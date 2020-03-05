import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [text, setText] = useState('')

  return (
    <div className="App">
      <input value={text} onChange={(event) => {
        setText(event.target.value)
      }}/>
      <br />
    <p>{text}</p>
    </div>
  );
}

export default App;
