import { useEffect, useLayoutEffect, useState } from "react";

const HookUseLayoutEffect = () => {
  const [name, setName] = useState("teste");

  useEffect(() => {
    console.log("2");
    setName("Mudou de novo");
  }, []);

  useLayoutEffect(() => {
    console.log("1");
    setName("O nome foi alterado pela primeira vez ");
  }, []);

  console.log(name);
  return (
    <div>
      <h2>useLayoutEffect</h2>
      <p>Nome: {name}</p>
      <hr />
    </div>
  );
};

export default HookUseLayoutEffect;
