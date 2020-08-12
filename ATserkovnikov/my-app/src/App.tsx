import React from 'react';
import {MessagesBlock} from "./Components/MessagesBlock";

const element = (<h1 className="test1">Hello!</h1>);
const items: string[] = [];
const addValue: string = "Нормально";

function App() {
  return (
    <>
      {element}
      <hr/>
      <MessagesBlock items={items} addValue={addValue}/>
    </>
  );
}

export default App;
