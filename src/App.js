import data from "./data/todos.json";
import TodoCard from "./TodoCard";
import { useEffect, useState } from "react";
import ManageTodo from "./ManageTodo";
export function App() {
  const [todos, setTodos] = useState(() => {
    const localTodo = localStorage.getItem("todos");
    return localTodo ? JSON.parse(localTodo) : data;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleRemove(id) {
    setTodos((p) => p.filter((e) => e.id !== id));
  }

  function handleSubmit(todo) {
    setTodos((p) => [
      ...p,
      {
        ...todo,
        isDone: false,
        priority: 1,
        id: Date.now(),
      },
    ]);
  }

  return (
    <>
      <div className="container-sm">
        <div className="d-flex align-items-center flex-column  my-5">
          <h3>Todos</h3>
          <ManageTodo handleSubmit={handleSubmit} />
        </div>
        <div className="container">
          <div className="row">
            {todos.map((e) => (
              <div className="col-6" key={e.id}>
                <TodoCard handleRemove={handleRemove} todo={e} />{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
