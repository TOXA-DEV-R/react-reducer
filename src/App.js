import React, { useEffect, useReducer, useState } from "react";
import Reducer from "./reducer/Reducer";

const App = () => {
  const [name, setName] = useState("");
  const [todos, dispatch] = useReducer(Reducer, []);
  const [conrolRender, setConrolRender] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "add", payload: { name } });
    setName("");
    setConrolRender(!conrolRender);
  };

  useEffect(() => {}, [conrolRender]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>add</button>
      </form>
      <ol>
        {todos.map((item, index) => {
          return (
            <li key={item.id}>
              <h1 style={{ color: item.completed ? "red" : "black" }}>
                {item.name}
              </h1>
              <button
                onClick={() =>
                  dispatch({ type: "toggle", payload: { id: item.id } })
                }
              >
                toggle
              </button>
              <button
                onClick={() =>
                  dispatch({ type: "delete", payload: { id: item.id } })
                }
              >
                delete
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default App;
