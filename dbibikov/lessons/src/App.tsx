import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Lesson2Component } from './lesson2/Lesson2Component';
import { Lesson1Component } from './lesson1/Lesson1Component';

function App() {
  return (
    <div className="row">
      <div className="col-6">
        <h2>1 Функции</h2>
        <Lesson1Component /> 
      </div>
      <div className="col-6">
      <h2>2 Классы</h2>
        <Lesson2Component />
      </div>
    </div>
  );
}

export default App;
