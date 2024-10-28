import React, { useState } from 'react'
import './Counter.css'
const countercard = () => {

    const [count, setCount] = useState(0);
  return (
    <div className='counter-container'>
        <p id='para'>You have clicked {count} times</p>
        <button id='button' onClick={()=>{setCount(count+1)}}>Click me</button>

    </div>
  )
}

export default countercard