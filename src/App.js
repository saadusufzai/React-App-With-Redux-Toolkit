import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <a href='https://github.com/saadusufzai/React-App-With-Redux-Toolkit' target='blank'>GITHUB REPO</a>
      </header>
    
    </div>
  );
}

export default App;
