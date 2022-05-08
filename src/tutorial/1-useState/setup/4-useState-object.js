import React, { useState } from 'react';

const UseStateObject = () => {
  const [person,setPerson] = useState({
    name:'sahil',
    age:15,
    message:'Hello Sahil',
  });
  const changeMessage = ()=>{
    // if we want to preserve the old values then we need to use spread Operator to gett all the previous values and modify only those that we want
    setPerson({...person,message:'Bye Sahil'});
  }
  return (<>
    <h1>{person.name}</h1>
    <h1>{person.age}</h1>
    <h1>{person.message}</h1>
    <button type = "button" className = "btn" onClick = {changeMessage}>
      change message
    </button>
  </>);
};

export default UseStateObject;
