/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react'
// import img from '../assets/my_imgae.jpeg'
import './usercard.css'
import img from '../assets/my_imgae.jpg'
import maharana from '../assets/MaharanaPratap.jpg'
import pruthvi from '../assets/pruthvi_raj_chauhaun.jpg'


const Usercard = (props) => {
  return (
    <div className='user-container' style={props.style}>
        <p id='user-name'> {props.name}</p>
        <img  id='user-img' src={props.image} alt={props.name}></img>
        <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default Usercard