import { useEffect, useState } from "react";

const HookUseEffect = () => {
  // 1 useEffect sem dependências

  useEffect(() => {
    console.log("Estou sendo executado");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  // 2 - array de depêndencias vazio
  useEffect(() => {
    console.log("serei executado apenas uma vez");
  }, []);

  // 3 item no array de depêndencias
  const [anotherNumber, setAnotherNumber] = useEffect();
  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("sou executado apenas quado o another number é alterado");
    }
  }, [anotherNumber]);

  // 4 Cleanup do useEffect
  useEffect(() => {
    // const timer = setTimeout(() => {
    //   console.log("Olá");
    // }, 2000);
    // return () => clearTimeout(timer);
  }, [anotherNumber]);

  return (
    <div>
      <h2>useEffect </h2>
      <p>Number : {number}</p>
      <button onClick={changeSomething}>Mudar número</button>
      <button
        onClick={() => {
          setAnotherNumber(anotherNumber + 1);
        }}
      >
        Mudar another number
      </button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
