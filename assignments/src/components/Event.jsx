import { useState } from 'react';
export const Event = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter + 1);
  };

  const [boxes, setBoxes] = useState([]);
  const boxColors = ['red', 'green', 'blue'];
  const spawnBox = () => {
    let randomColor = boxColors[Math.floor(Math.random() * boxColors.length)];

    const newBox = {
      height: '100px',
      width: '100px',
      backgroundColor: `#${Math.floor(Math.random()*16777215).toString(16)}`,
    };
    setBoxes((previousState) => [...previousState, newBox]);
  };

  return (
    <div>
      <h1>Event handling</h1>
      <div>
        <h2>Click counter</h2>
        <button onClick={handleClick}>Click counter: {counter}</button>
        <button onClick={() => setCounter(0)}>Reset clicks</button>
      </div>
      <div>
        <h2>Box spawner</h2>
        <div>
          <button onClick={spawnBox}>Spawn a random box</button>
          <button onClick={() => setBoxes([])}>Remove boxes</button>
        </div>
        <div style={{ display: 'flex' }}>
          {boxes.map((x, y) => (
            <div
              key={y}
              style={{
                height: x.height,
                width: x.width,
                backgroundColor: x.backgroundColor,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
