import { useState, useEffect, createContext, useContext } from 'react';
export const Hooks = () => {
  const [count, setCount] = useState(0);

  const [testState, setTestState] = useState('');

  useEffect(() => {
      alert("You changed the state so the useEffect bound to it got fired.")
  }, [testState])

  useEffect(() => {
      alert('Fired on start up because of useEffect.')
  }, []);


  const data = {happy: '😊', sad:'😒'};
  const ContextHook = createContext(data);

  const ContextComponent = () => {
    const data = useContext(ContextHook);
    return (<p>{data.happy} {data.sad}</p>)
}

  return (
    <div>
      <h1>Hooks</h1>
      <div>
        <h2>Use state</h2>
        <p onClick={() => setCount(count + 1)}>
          Click me to change the state! {count}
        </p>
      </div>

      <div>
        <h2>Use effect</h2>
        <p>
          Changing the state by entering data into this field fill trigger the
          useEffect that is bound to the state.
        </p>
        <input
          type="text"
          value={testState}
          onChange={(e) => setTestState(e.target.value)}
        ></input>
        <div id="emptyOnStart"></div>
      </div>

      <div>
        <h2>Use context</h2>
        <p>This child component has access to data in a different component without passing it as a prop.</p>
        <ContextHook.Provider value={data}>
            <ContextComponent/>
        </ContextHook.Provider>
      </div>
    </div>
  );
};
