/* eslint-disable no-unused-vars */
import React from 'react';

const Button = (props) => {
  return (
    <div>
      <button onClick={props.incrementCount}> 
        {props.text}
      </button>
    </div>
  );
};

export default Button;
