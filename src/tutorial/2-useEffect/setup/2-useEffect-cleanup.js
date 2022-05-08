import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const checkSize = () => {
    console.log('change size :1');
    setSize(window.innerWidth);
  };
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    console.log("added event listener :4");
    return () => {
      //the return statement (cleanup function) would be executed after the next render has been performed and then finally the next useeffect will be called 
      console.log("removed event listener :3");
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  console.log("render :2");
  return (
    <>
      <h1>{size}</h1>
    </>
  );
};

export default UseEffectCleanup;
