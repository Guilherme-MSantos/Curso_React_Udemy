import React from 'react'

const RenderizacaoCondicional = () => {

  const [x] = useState(true);

const [name,setName] = useState("Marcelo")
  return (
    <div>
      Renderização Condicional
      {x && <p>O valor de X é true </p>}
      {!x && <p>O valor de X é falso </p>}
      <h2> Condição com ternário </h2>
      {name === "João" ? (
        <div>
          <p>O nome é João </p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado</p>
        </div>
      )}

      <button onClick={()=> setName("João")}> Mudar o nome para João </button>
    </div>
  );
}

export default RenderizacaoCondicional