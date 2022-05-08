import React, { useState } from 'react';

const UseStateBasics = () => {
  //conventionally hooks and their functions are named as name and setName
  //starts with use
  //first letter of component must be caps
  //can't use hooks inside conditionally
  //must be inside function/component body.
  const [heading,setHeading] = useState('Sample Heading');
  const clickHandler = ()=>{
    if(heading === "Sample Heading"){
      setHeading("New Heading");
    }
    else{
      setHeading("Sample Heading");
    }
  }
  return (
    <React.Fragment>
      <h1>
        {heading}
      </h1>  
      <button type = "button" onClick = {clickHandler} className = "btn">
        changeHeading
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
