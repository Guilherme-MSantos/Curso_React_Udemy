import { useReducer, useState } from "react";

const HookUseReducer = () => {
  // começando com useReducer
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  // avançando no reducer
  const initialTasks = [
    { id: 1, text: "estudar" },
    { id: 2, text: "comprar comida " },
  ];

  const TaskReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const NewTask = {
          id: Math.random(),
          text: taskText,
        };
        setTaskText("");
        return [...state, NewTask];
      case "DELETE":
        return state.filter((task) => task.id !== action.id);
      default:
        return state;
    }
  };

  const [taskText, setTaskText] = useState("");
  const [tasks, dispatchTasks] = useReducer((TaskReducer, initialTasks));

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatchTasks({ type: "ADD" });
  };
  const RemoveTasks = (id) => {
    dispatchTasks({ type: "DELETE", id: id });
  };

  return (
    <div>
      <h2>useReducer </h2>
      <p>Número:{number}</p>
      <button onClick={dispatch}> Mudar número </button>
      <h3>Tarefas</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}
        />
        <input type="submit" value="Enviar" />
      </form>
      {tasks.map((task) => (
        <li key={task.id} onDoubleClick={RemoveTasks}>
          {task.text}
        </li>
      ))}
      <hr />
    </div>
  );
};

export default HookUseReducer;
