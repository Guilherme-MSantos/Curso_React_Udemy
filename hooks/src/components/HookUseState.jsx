import React, { useState } from "react";

const HookUseState = () => {
  // 1 useState
  let Nome = "Ciclano";
  const { Name, setName } = useState("Guilherme");

  const changeNames = () => {
    Nome = "Fulano";
    setName("Guilherme Moreira");
  };

  //2 useState com input
  const { Age, setAge } = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();

    // envio a uma API -EXEMPLO-
    console.log(Age);
  };
  return (
    <div>
      {/* 1 - useState */}
      <h2>useState</h2>
      <p>Variável : {Nome}</p>
      <p>UseState : {Name}</p>
      <br />
      <button onClick={changeNames}>Mudar o nome </button>
      <hr />
      {/* 2 - useState com input  */}

      <p>Digite a sua idade</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={Age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      <p>Você tem {Age} anos </p>
      <hr />
    </div>
  );
};

export default HookUseState;
