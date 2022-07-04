import React from 'react'

const ExecuteFunction = ({myFunction}) => {
  return (
    <div>
      <button onclick={myFunction}>
      Clique aqui para executar a função.
      </button>
    </div>
  )
}

export default ExecuteFunction