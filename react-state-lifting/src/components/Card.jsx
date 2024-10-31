// eslint-disable-next-line no-unused-vars
import React from 'react'


 const Card = (props) => {
  return (
    <div>
       <input type='text' onChange={(e)=> props.setName(e.target.value)} />
       <span></span>
       <p>Name state variable value inside card {props.title} : {props.name}</p>
       <br></br>
       
    </div>
  )
}

export default Card
