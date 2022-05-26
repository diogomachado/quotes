import React from "react";
import { Quote } from "./components/Quote";
import "./App.css";

function App() {
  return (
    <div className="grid-quotes">
      <Quote text="Code!" />
      <Quote text="HTML" />
      <Quote text="CSS" />
      <Quote text="JS" />
    </div>
  );
}

export default App;
