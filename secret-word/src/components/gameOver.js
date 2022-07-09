import './gameOver.css'
const gameOver = ({retry,score}) => {
  return (
    <div>
      <h1>Fim de jogo</h1>
      <h2>A sua pontuação foi : <span>{score}</span> </h2>
      <button onClick={retry}> reiniciar game </button>
      </div>
  )
}

export default gameOver