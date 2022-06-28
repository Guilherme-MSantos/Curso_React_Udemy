import {useState} from 'react'
const Hooks = () => {
  let  someData = 10;

  const [number, setNumber ] = useState(15);
  return (
    <div>
      Hooks
      <div>
        <p> valor é : {someData}</p>
        <button onClick={() => (someData = 15)}>Mudar Valor</button>
      </div>
      <p> valor é : {number}</p>
      <button onClick={() => setNumber(number + 1)}>Mudar state</button>
      <div></div>
    </div>
  );
}

export default Hooks