import "./App.css";
import MyComponent from "./components/MyComponent";
import {useState} from "react";

function App() {
  const n = 10 ;
  const [name] = useState("Guilherme");
  const redTitle = true;
  return (
    <div>
      {/* CSS global */}
      <h1>React com Css</h1>
      {/* Css em componente */}
      <MyComponent />
      {/* Css inline */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado inline
      </p>
      {/* Css inline dinâmico */}
      <h2 style={n < 10 ? { color: "red" } : { color: "purple" }}>
        Style dinâmico
      </h2>
      <h2 style={n > 10 ? { color: "green" } : { color: "yellow" }}>
        Style dinâmico 2
      </h2>
      <h2
        style={
          name === "Guilherme"
            ? { color: "white", backgroundColor: "black" }
            : null
        }
      >
        
        Style dinâmico 3
      </h2>
      {/* Css com classe dinâmica  */}
      <h2 className={redTitle ? "red-title" : "normal-text"}>
        
        Este titulo esta recebendo classes dinâmicas
      </h2>

      {/* Css Module */}
      
    </div>
  );
}

export default App;
