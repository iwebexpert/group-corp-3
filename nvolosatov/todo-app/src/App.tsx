import React from "react";
import "./App.css";
import { Todo as TodoClass } from "./classes";
import { Todo as TodoFunc } from "./func";

function App() {
  return (
    <>
      <header className="header">
        <h1>Todo apps</h1>
      </header>
      <div className="container">
        <div className="container__item">
          <h2>Class components</h2>
          <TodoClass />
        </div>
        <div className="container__item">
          <h2>Func components</h2>
          <TodoFunc />
        </div>
      </div>
    </>
  );
}

export default App;
