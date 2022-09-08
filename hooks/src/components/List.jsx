import { useEffect, useState } from "react";

const List = ({ getItems }) => {
  const [myItems, setMyItens] = useState([]);

  useEffect(() => {
    console.og("Buscando dados de banco de dados");
    setMyItens(getItems);
  }, [getItems]);
  return (
    <div>
      {myItems.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
};

export default List;
