import React from 'react';

const ErrorExample = () => {
  let title = 'Random Title';
  const clickHandler = () =>{
    title = 'Hello World';
    console.log(title);
  }
  return (
    <React.Fragment>
      <h1>
        {title}
      </h1>
      <button type = "button" className = "btn" onClick = {clickHandler}> change title</button>
    </React.Fragment>
    );
};

export default ErrorExample;
