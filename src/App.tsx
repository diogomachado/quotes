import React from "react";
import { Quote } from "./components/Quote";
import "./App.css";
import { useSpring, animated } from "react-spring";

function App() {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  return (
    <animated.div style={props}>
      <div className="grid-quotes">
        <Quote text="Code!" />
        <Quote text="HTML" />
        <Quote text="CSS" />
        <Quote text="JS" />
      </div>
    </animated.div>
  );
}

export default App;
