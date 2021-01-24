import './App.css';
import { useState } from 'react'


function App() {

  const [count, setCount] = useState(0)

  const incrementBtn = () => {
    setCount(prevCount => prevCount + 1)
  }

  const decrementBtn = () => {
    setCount(prevCount => prevCount - 1)

  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button class="btn" onClick={incrementBtn}>Increment</button>
      <button class="btn" onClick={decrementBtn}>Decrement</button>
    </div>
  );
}

export default App;
