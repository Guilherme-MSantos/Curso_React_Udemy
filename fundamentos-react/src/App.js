import Events from "./components/Events";
import FirstComponent from "./components/FirstComponent"; //não precisa botar o .js pois o react entende que o arquivo e js mas as outras extensões é necessário que seja colocado como é no caso dos estilos
import TemplateExpressions from "./components/TemplateExpressions";
import Challenge from "./components/Challenge";
import Challenge4 from "./components/Challenge4";
import Imagens from "./components/ComoColocarImagens";
import Hooks from "./components/Hooks";
import ListRender from "./components/ListRender";
import RenderizacaoCondicional from "./components/RenderizacaoCondicional";
import Props from "./components/props";
import PropsDestructuring from "./components/PropsDestructuring";
import Fragment  from "./components/fragment";
import Container from './components/container';
import Message from './components/Message';

function App() {
  const cars = [
    { id: 1, brand: "Ferrari", color: "red" , bomEstado: false,km:0},
    { id: 2, brand: "Ferrari", color: "black" , bomEstado: true,km:0},
    { id: 3, brand: "Ferrari", color: "red", bomEstado:false ,km:0},
  ];

  function showMessage () {
    console.log("Evento do componente pai")
  }

  const [message,setMessage] = useState("");

  const handleMessage = (msg) =>{
    setMessage(msg)
  };
  return (
    <div>
      <FirstComponent />
      <TemplateExpressions />
      <Events />
      <Challenge />
      <Imagens />
      <Hooks />
      <ListRender />
      <RenderizacaoCondicional />
      <Props name="Guilherme Moreira dos Santos " />{" "}
      {/***pode passar o props tanto variáveis como estados */}
      <PropsDestructuring
        brand="Tesla"
        km={20000}
        color="Branco"
        bomEstado={true}
      />
      {/**Reaproveitar componentes */}
      <PropsDestructuring
        brand="VW"
        km={100000}
        color="Vermelho"
        bomEstado={false}
      />
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <PropsDestructuring
          key={car.id}
          brand={car.brand}
          km={car.km}
          color={car.color}
          bomEstado={car.bomEstado}
        />
      ))}
      {/* Fragment  */}
      <Fragment propFragment="test" />
      {/* Children Props */}
      <Container title="teste 01">
        <p> Esse é o conteúdo </p>
      </Container>
      {/* executar função como prop */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      <Challenge4 />
    </div>
  );
}

export default App;
