import React, { useCallback, useState } from "react";

import List from "../components/List";
const HookUseCallback = () => {
  const [counter, setCounter] = useState(0);

  const getItemsFromDatabase = useCallback(() => {
    return ["A", "B", "C"];
  }, []);
  return (
    <div>
      <h2> useCallback</h2>
      <List getItems={getItemsFromDatabase} />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Alterar
      </button>
      <p> {counter}</p>
      <hr />
    </div>
  );
};

export default HookUseCallback;
