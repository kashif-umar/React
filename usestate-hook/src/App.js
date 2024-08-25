import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
  let [count,setCount]=useState(0);
  function increase(){
    setCount(count++);
  }
  function decrease(){
    setCount(count--);
  }


  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
