import { useState } from 'react';
export const State = () => {
  const [stringState, setStringState] = useState('');

  const [item, setItem] = useState('');
  const [arrayState, setArrayState] = useState([]);
  const addItem = () => {
      setArrayState(prev => [...prev, item])
  }

  return (
    <div>
      <h1>State</h1>

      <h2>Simple string state</h2>
      <label>Change the state by typing in the box </label>
      <input type="text" onChange={(e) => setStringState(e.target.value)} />
      <p> String state: {stringState}</p>

      <h2>Object/Array state</h2>
      <input type="text" value={item} onChange={(e) => setItem(e.target.value)}/><button onClick={addItem}>Add to state</button><button onClick={() => setArrayState([])}>Clear state</button>

      <p>Array state: [{arrayState.toString()}]</p>
    </div>
  );
};
