import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Todos } from './components/todos';
import { Todo } from './components/todo';

function App() {
  return (
      <>
        <Todos/>
        <hr/> 
        <Todo/>
      </>
  );
}


export default App;
