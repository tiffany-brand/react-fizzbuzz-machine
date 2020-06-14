import React from "react";
import "./App.css";
import FbDisplay from "./FbDisplay";

function App() {
  return (
    <div className="App">
      <FbDisplay />
      <FbDisplay fizz={4} buzz={7} />
    </div>
  );
}

export default App;
