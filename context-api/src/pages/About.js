import React from "react";
// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";
const About = () => {
  const { counter } = useCounterContext();
  // 5 contexto  mais complexo
  const { color } = useTitleColorContext();
  return (
    <div>
      <h1 style={{ color: color }}>About</h1>
      <p>O valor do contador é : {counter}</p>
    </div>
  );
};

export default About;
