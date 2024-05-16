import React from "react";
import Todo from "./components/Todo";
import "./App.css";

function App() {
  return (
    <>
      <header id='header'>
        <div className='container'>
          <h1>My To-Do List</h1>
        </div>
      </header>
      <main id='main'>
        <div className='container'>
          <Todo />
        </div>
      </main>
    </>
  );
}

export default App;
