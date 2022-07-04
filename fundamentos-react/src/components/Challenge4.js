const UserDetails = ()=>{

const pessoas = [
  { Name: "João", Age: 23, Job: "Atendente de telemarketing" },
  { Name: "Maria", Age: 54, Job: "Frentista" },
  { Name: "Eduardo", Age: 53, Job: "Uber" },
  { Name: "Julia", Age: 8, Job: "Estudante" },
];



  return (
    <div>
      {pessoas.map((pessoa) => (
        <div>
          {pessoa.Age >= 18 ? (
            <div>
              <p> {pessoa.Name}</p>
              <p> {pessoa.Age}</p>
              <p> {pessoa.Job}</p>
              <strong>PODE TIRAR HABILITAÇÃO</strong>
              <hr />
            </div>
          ) : (
            <div>
              <div>
                <p> {pessoa.Name}</p>
                <p> {pessoa.Age}</p>
                <p> {pessoa.Job}</p>
                <strong>NÃO PODE TIRAR HABILITAÇÃO</strong>
                <hr />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}


export default UserDetails;