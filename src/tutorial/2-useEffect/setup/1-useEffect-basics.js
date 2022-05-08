import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect");
    if (count > 0) {
      document.title = `New Messages(${count})`;
    }
  },[count]);
  // [] dependency list if empty only runs useEffect on first load
  // but if there is a dependency variable it would run when that var changes
  // if no second param useEffect would run after every rerender
  console.log("render component");

  return (
    <>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
