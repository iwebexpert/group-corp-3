import React, { useState } from 'react';
import { Messages } from './components/Messages';
import { Button } from './components/Button';
//import './App.css';

function App() {

  const [items, setItems] = useState(['Default Message']);
  
  const setItem = (value: string) : void => setItems(state => [...state, value]);
  
  return (
    <>
      <Messages items={items} />
      <hr/>
      <Button text="Send" callback={() => { setItem("Random Text") }}/>
    </>
  );

}

export default App;
