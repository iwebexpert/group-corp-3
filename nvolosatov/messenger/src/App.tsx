import React from "react";
import "./App.css";
import { Messenger } from "./components";

function App() {
  return (
    <>
      <header className="header">
        <h1>Messenger</h1>
      </header>
      <div className="container">
        <Messenger />
      </div>
    </>
  );
}

export default App;
