import React, { useState } from 'react';

const UseStateCounter = () => {
  const [count,setCount] = useState(0);
  const resetCount = ()=>{
    setCount(0);
  }
  const delayedIncrease = ()=>{
    setTimeout(()=>{
      //count gets the delayed state
      // setCount(count + 1);
      //functional parameter in the useState setter gets the latest version of count after previously handling all the callbacks.
      setCount((prevState) =>{
        return prevState + 1;
      })
    },2000)
  }
  return (
    <>
    <section style = {{margin:'4rem 0'}}>
      <h2>Regular Counter</h2>
      <h1>
        {count}
      </h1>
      <button type = "button" className = "btn" onClick = {()=>setCount(count-1)}>
        decrease
      </button>
      <button type = "button" className = "btn" onClick = {resetCount}>
        reset
      </button>
      <button type = "button" className = "btn" onClick = {()=>setCount(count+1)}>
        increase
      </button>
    </section>
    <section style = {{margin:'4rem 0'}}>
      <h2>More Complex Counter</h2>
      <h1>
        {count}
      </h1>
      <button type = "button" className = "btn" onClick = {delayedIncrease}>
        Delayed Increase
      </button>
    </section>


    </>);
};

export default UseStateCounter;
