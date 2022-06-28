import Events from "./components/Events";
import FirstComponent from "./components/FirstComponent"; //não precisa botar o .js pois o react entende que o arquivo e js mas as outras extensões é necessário que seja colocado como é no caso dos estilos
import TemplateExpressions from "./components/TemplateExpressions";
import Challenge from "./components/Challenge";
import Imagens from "./components/ComoColocarImagens";
import Hooks from "./components/Hooks";
import ListRender from "./components/ListRender";
import RenderizacaoCondicional from "./components/RenderizacaoCondicional";

function App() {
  return (
    <div>
      <FirstComponent />
      <TemplateExpressions />
      <Events />
      <Challenge />
      <Imagens/>
      <Hooks/>
      <ListRender/>
    </div>
  );
}

export default App;
