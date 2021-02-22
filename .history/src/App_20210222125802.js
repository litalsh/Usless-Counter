import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const clickHandler = () => {
    setCounter(counter + 1)
  }

  const btnText = () => {
    if(counter < 1) {
      'Hit me!'
    }
    if(1 <= counter < 10 ) {
      'OUCH!'
    }
    if(counter > 10) {
      'Stop it!'
    }
  }

  return (
    <div className="App">
     {counter === 0 ? <h3>Hit the button to start</h3> : <h3>I clicked it <span>{counter}</span> times already. Nothing is happaning!</h3>}
     <button onClick={() => clickHandler()}>{btnText}</button>
    </div>
  );
}

export default App;
