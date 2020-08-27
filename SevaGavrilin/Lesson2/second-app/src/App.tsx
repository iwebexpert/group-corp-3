import React, { useState, ReactElement } from 'react';
import './App.css';

import { Todos } from './components/todos';
import { Todo } from './components/todo';

function App() {

  const [messages, setMessage] = useState<string[]>([]);

  var handleMessageAdd = (message: TodoFormState) =>{
    setMessage([...messages, message.text]);
  };

  return (
      <>
        <Todos items={messages}/>
        <hr/> 
        <Todo handlerOnAdd={handleMessageAdd}/>
      </>
  );
}


export default App;
