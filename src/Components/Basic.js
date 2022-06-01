import React, { useState } from 'react';

const Basic = () => {
  //let title = "random text"
  const [state, setSate] = useState('randomText');
  const handlerEvent = () => {
    if (state === 'random text') {
      setSate('hello perple');
    } else {
      setSate('random text');
      //console.log(title)
    }
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={handlerEvent}> Change text </button>
    </div>
  );
};
export default Basic;
