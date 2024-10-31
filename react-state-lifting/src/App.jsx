import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  // create ststae
  // manage state 
  // change state
  // 

  const [name , setName] = useState('');
  return (
    
      <div>
        <Card title="Card1" name={name} setName ={setName}/>
        <Card title="Card2" name={name} setName ={setName}/>
        {/* <p>I am inside parent components and value of name is {name}</p> */}
      </div>
    
  )
}

export default App
