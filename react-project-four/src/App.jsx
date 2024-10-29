/* eslint-disable react/no-children-prop */
// import Cards from './components/cards'
import Button from './components/Button'
import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <div>
        <h1>{count}</h1> {}
        <Button incrementCount={handleClick} text="Click me" />
      </div>
    </>
  );
}

export default App;
