const Desafio = ()=> {

  let v1 = 500;
  let v2= 20;

  const Somar = ( ) => {

    const resultado = Number(v1 + v2);
      console.log(resultado)
    
  }

  return (
    <div>
      <div>
        <p> O Valor 1 é : {v1}</p>
        <p> O valor 2 é : {v2}</p>
      </div>

      <div>
        <button onClick={Somar}> Somar </button>
      </div>

     
    </div>
  );
}


export default Desafio