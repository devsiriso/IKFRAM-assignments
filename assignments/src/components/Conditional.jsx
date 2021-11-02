import { useState } from 'react';

export const Conditional = () => {
  const [blue, setBlue] = useState(false);
  const [red, setRed] = useState(false);
  const [green, setGreen] = useState(false);

  return (
    <div>
      <h1>Conditional Rendering</h1>
      <h2>Boxes and text</h2>
      <button onClick={() => setBlue(!blue)}>Toggle blue</button>
      <button onClick={() => setRed(!red)}>Toggle red</button>
      <button onClick={() => setGreen(!green)}>Toggle green</button>
      {blue || green || red ? blue && green && red ? <p>All colors selected</p> :<p>Some colors selected</p> : <p>No colors selected</p>}
      <div style={{display: "flex", justifyContent:'center'}}>
        {blue && (
          <div
            style={{ backgroundColor: 'blue', width: '100px', height: '100px' }}
          />
        )}
        {red && (
          <div
            style={{ backgroundColor: 'red', width: '100px', height: '100px' }}
          />
        )}
        {green && (
          <div
            style={{
              backgroundColor: 'green',
              width: '100px',
              height: '100px',
            }}
          />
        )}
      </div>
    </div>
  );
};
