import './MyComponent.css' // css na mesma pasta que o componente
const MyComponent = () => {
  return (
    <div>
      <h2>MyComponent</h2>
      <p className="Component-p"> Css em componente , estou usando classe para que o estilo não vaze e altere elementos fora deste componente</p>
    </div>
  );
}

export default MyComponent