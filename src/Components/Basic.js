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
      <UsestateArray />
    </div>
  );
};
export default Basic;

const data = [
  { id: 1, Name: 'perter' },
  { id: 2, Name: 'Anna' },
  { id: 3, Name: 'sefi' },
  { id: 4, Name: 'deo' },
];

const UsestateArray = () => {
  const [people, setPeople] = useState(data);
  return (
    <div>
      <h1>use state array example</h1>
      {people.map((person) => {
        console.log(person);
        const { id, Name } = person;
        return (
          <div key={id}>
            <h2>
              {id}. {Name}
            </h2>
          </div>
        );
      })}
    </div>
  );
};
