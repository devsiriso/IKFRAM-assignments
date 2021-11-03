import { useState, useEffect } from 'react';

export const TimerSpawner = () => {
  const [timers, setTimers] = useState([]);
  const [newTime, setNewTime] = useState(0);
  const [newName, setNewName] = useState('Unnamed timer');

  const createTimer = () => {
    if (newTime > 0) {
      setTimers((old) => [...old, { seconds: newTime, name: newName }]);
    } else {
      alert('Timer must have more than 0 seconds.');
    }
  };

  const removeTimer = (y) => {
    let newArray = timers.filter((_, index) => index !== y);
    setTimers(newArray);
  };

  const removeAllTimers = () => {
    setTimers([]);
  };

  const getPermissionForNotifications = () => {
    let promise = Notification.requestPermission();
  };

  const addVariableTime = (amount) => {
    setNewTime(parseInt(newTime) + parseInt(amount));
  };

  useEffect(() => {
    if (newTime === '') setNewTime(0);
  }, [newTime]);

  return (
    <div>
      <div>
        <button onClick={getPermissionForNotifications}>
          Enable notifications
        </button>
      </div>
      <div>
        <button onClick={removeAllTimers}>Remove all timers</button>
      </div>
      <div>
        <button onClick={() => addVariableTime(60)}>Add a minute</button>
        <button onClick={() => addVariableTime(600)}>Add 10 minutes</button>
        <button onClick={() => addVariableTime(1800)}>Add 30 minutes</button>
      </div>
      <input
        type="text"
        name="name"
        id="name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <input
        type="number"
        name="time"
        id="time"
        min="1"
        step="1"
        value={newTime}
        onChange={(e) => setNewTime(e.target.value)}
      />
      <button onClick={createTimer}>Add timer</button>
      {timers.map((x, y) => (
        <div>
          <Timer key={y} seconds={x.seconds} name={x.name} />
          <button onClick={() => removeTimer(y)}>Destroy timer</button>
        </div>
      ))}
    </div>
  );
};

const Timer = (props) => {
  const initialSeconds = props.seconds;
  const [seconds, setSeconds] = useState(props.seconds);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (seconds === 0) {
      new Notification('Timer finished');
      setProgress(0);
      return;
    }

    const interval = setInterval(() => {
      setSeconds(seconds - 1);
      setProgress(seconds/initialSeconds * 100);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const restart = () => {
    setSeconds(initialSeconds);
    setProgress(100);
  }

  let progressBarStyle = {
    width: progress,
    height: '10px',
    backgroundColor: 'black',
  };

  return (
    <div>
      <h1>
        {props.name} {seconds} / {initialSeconds}
      </h1>
      <div style={progressBarStyle}></div>
      <button onClick={restart}>Restart</button>
    </div>
  );
};
