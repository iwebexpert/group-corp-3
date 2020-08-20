import React from 'react';
import logo from './logo.svg';
//import './App.css';
import {ToDoList} from './components/ToDoList';

const items = [{text: 'First Task', isDone: false} , {text: 'Second Task', isDone: true}];

function App() {
  return (
    <>
      <ToDoList items={items} />
    </>
  );
}

export default App;
