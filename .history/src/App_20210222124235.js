import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const clickHandler = () => {
    setCounter(counter + 1)
  }
  return (
    <div className="App">
     {counter === 0 ? <h3>Hit the button to start</h3> : <h3>I clicked it <span>{counter}</span> times already but nothing is happaning!</h3>}
     <button onClick={() => clickHandler()}>Hit me!</button>
    </div>
  );
}

export default App;
