const TemplateExpressions = () => {
  const name = "Guilherme Moreira";
  const data = {
    age: 23,
    job: 'Estudante'
  };

  return (
    <div>
        <h1> Olá {name}</h1>
        <p>Você atua como : {data.job}  e tem {data.age} anos </p>
    </div>
  )
}


export default  TemplateExpressions; 