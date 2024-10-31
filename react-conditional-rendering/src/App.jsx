<<<<<<< HEAD

import './App.css'

import Countercard from './components/countercard'

function App() {
  

  return (
    <>
      <div>
        <Countercard/>
      </div>
    </>
  )
}

export default App
=======
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import Logoutbtn from './compontes/Logoutbtn';
import Loginbtn from './compontes/Loginbtn';

function App() {
const[isLoggedIn,setLoggedIn] = useState(false);



// by using early return

if(!isLoggedIn){
  return(
    <Loginbtn/>
  )
}

 

// by using logical operator
  return(
    <div>
      <h1>Yo!!!! bro</h1>
      {isLoggedIn && <Logoutbtn/> || <Loginbtn/>}      
    </div>
  )


   // by using tertinary operator
  return (

    <div>
      {isLoggedIn ?<Logoutbtn/> : <Loginbtn/>}
    </div>
  )

  
  // by using if-else loop 

  if(isLoggedIn){
    return(
      <Logoutbtn/>
    )
  }
  else{
    return (
      <Loginbtn/>
    )
  }
  

}

export default App
>>>>>>> dafaa11 (Initial commit)
