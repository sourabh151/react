import React, { useState } from "react";
import Menu from "./Menu";
import items from "./data";
import "./App.css";

function App() {
  return (
    <main className="container">
      <header className="title">
        <h1>Our Menu</h1>
      </header>
      <Menu items={items} />
    </main>
  );
}

export default App;
