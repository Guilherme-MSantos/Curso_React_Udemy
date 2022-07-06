import './App.css';
import MyForm from './components/MyForm'

function App() {
  return (
   <div>
    <h2>Formulários</h2>
    <MyForm user = {{name:"Fulano",email:"Fulano@gmail.com",bio:"Sou estudante de psicologia", role:"user"}}/>
   </div>
  );
}

export default App;
