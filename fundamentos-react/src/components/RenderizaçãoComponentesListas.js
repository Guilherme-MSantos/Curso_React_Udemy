import React from 'react'

const RenderizaçãoComponentesLista = () => {

  const cars = [
    {id:1,brand:"Ferrari",color:"red"},
    {id:2,brand:"Ferrari",color:"black"},
    {id:3,brand:"Ferrari",color:"red"}
  ]
  return (
    <div>
      <h2> Renderização Componentes em listas </h2>
      {cars.map((car)=>{
        <div>
          <p>{car.id}</p>
          <p>{car.brand}</p>
          <p>{car.color}</p>
        </div>;
      })}
    </div>
  );
}

export default RenderizaçãoComponentesLista