const Events = () => {

  const handleMyEvent = (e)=>{
    
    console.log('evento iniciado')
    console.log(e)
  
  }

  const renderSomething = (x) => {
    if (x) {
      return <h1> Renderizando isso </h1>
    } else {
      return <h1> estou renderizando isso também</h1>
    }
  }
  return (
    <div>
      <div>
        <button onClick={ handleMyEvent }> Clique aqui </button>
      </div>

      <div>
        <button onClick={()=> console.log('clicou no segundo botão')}> </button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  )
}

export default Events;