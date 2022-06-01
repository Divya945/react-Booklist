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
  const removename = (id) => {
    let nameId = people.filter((persons) => persons.id !== id);
    setPeople(nameId);
  };
  return (
    <div>
      <h1>use state array example</h1>
      {people.map((person) => {
        console.log(person);
        const { id, Name } = person;
        return (
          <div key={id}>
            <h2>
              <span>{id}.</span>
              {Name}
            </h2>{' '}
            <span onClick={() => removename(id)}>remove</span>
          </div>
        );
      })}
      <button onClick={() => setPeople([])}> clear all</button>
    </div>
  );
};
