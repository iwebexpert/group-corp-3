import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './components/todo-list';

function App() {
  const initialItems = ['Buy milk', 'Kill Bill'];
  return (
    <TodoList initialItems={initialItems} />
  );
}

export default App;
