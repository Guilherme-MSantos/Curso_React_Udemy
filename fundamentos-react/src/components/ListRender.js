import {useState} from 'react'

const ListRender = () => {
  const [list] = useState(["Matheus","Pedro","Josias"])

  const [users,setUsers] = useState([
    {id:1,name:"Guilherme",age:23},
    {id:2,name:"Karina",age:22},
    {id:3,name:"Fulano",age:21}])

    const deleteRandom = ()=>{
      const randomNumber = Math.floor ( Math.random() * 4 )

      setUsers ( ( prevUsers ) => {
        return prevUsers.filter( ( user ) => randomNumber !== user.id )
      } ) 

      
    }
  return (
    <div>
      ListRender

        <ul>
          {list.map((item,i) =>(
            <li key={i}>{item}</li> //* key ou chave única é obrigatório nesses casos , se não o navegador fica com um warning 
          ))}
        </ul>

        <ul>
          {users.map((user) =>{
           return <li key={user.id}>{user.name} - {user.age}</li>
          })}
        </ul>
        <button onClick={deleteRandom}> Delete random User</button>
    </div>


  )
}

export default ListRender