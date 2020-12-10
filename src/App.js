import React from "react";
import AnimalForm from "./components/AnimalForm";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Add New Animal</h1>
      <p>Hey buddy! Add new animal to the database, friend</p>
      <AnimalForm />
    </div>
  );
}

export default App;
