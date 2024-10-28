
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Usercard from "./components/usercard"
import img from './assets/my_imgae.jpg'
import maharana from './assets/MaharanaPratap.jpg'
import pruthvi from './assets/pruthvi_raj_chauhaun.jpg'

function App() {
  
  return (
    <>
      <div className="container">
       <Usercard name="Saurabh" desc ="description1" image = {img} style={{"border-radius":"10px"}}/>
       <Usercard name="Maharana" desc ="description1" image = {maharana} style={{"border-radius":"10px"}}/>
       <Usercard name="Pruthavi raj chauhaun" desc ="description1" image = {pruthvi} style={{"border-radius":"10px"}}/>
       {/* you have to create only one tag at root level not more than one  */}
      </div>
    {/* means you cannot do this 
    <div>

    </div> */}
    </>

  )
}

export default App
