
const PropsDestructuring = ({brand,km,color,bomEstado}) => {
  return (
    <div>
      <h1> PropsDestructuring</h1>

      <h2> Detalhes do carro</h2>
      <ul>
        <li>Marca : {brand}</li>
        <li>KM : {km}</li>
        <li>Cor: {color}</li>
      </ul>
      {bomEstado && <p>Este carro é novo </p>}
    </div>
  );
}

export default PropsDestructuring