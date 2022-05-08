import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className="btn" onClick={()=>setShow(!show)}>
        show/hide
      </button>
      {show && <Item />}
    </>
  );
};
const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    // even though useEffect is only called once when the element mounts
    //show/hide toggle causes it to mount multiple times and thus we must set a cleanup 
    //function as best practise
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  console.log('created item');
  return (
    <div>
      <h1>Window Size</h1>
      <h2>{size} px</h2>
    </div>
  );
};

export default ShowHide;
