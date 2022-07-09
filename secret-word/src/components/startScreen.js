import "./startScreen.css"



const startScreen = ({startGame}) => {
  return (
    <div className="start">
      <h1>Secret word</h1>
      <p>Clique no botão para iniciar o jogo</p>
      <button onClick={startGame}>Iniciar</button>
      </div>
  )
}

export default startScreen