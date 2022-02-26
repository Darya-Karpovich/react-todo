import { useEffect, useState } from "react";
import ManageTodo from "../components/ManageTodo";
import TodoCard from "../components/TodoCard/TodoCard";
import data from "../data/todos.json";

export function TodoList() {
  const [todos, setTodos] = useState(() => {
    const localTodos = localStorage.getItem("todos");
    return localTodos ? JSON.parse(localTodos) : data;
  });
  const [todoEdit, setTodoEdit] = useState();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleRemove(id) {
    setTodos((p) => p.filter((e) => e.id !== id));
  }

  function handleChange(id) {
    setTodos((p) =>
      p.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  }

  function handleCreate(todo) {
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

  function handleEdit(todo) {
    setTodoEdit(todo);
  }

  function handleEditSubmit(todo) {
    setTodos((p) => p.map((e) => (e.id === todo.id ? { ...todo } : e)));
  }

  function handleClose() {
    setTodoEdit(undefined);
  }

  return (
    <div className="container-sm">
      <div className="d-flex align-items-center flex-column my-5">
        <h3>Todos</h3>
        <ManageTodo
          todo={todoEdit}
          handleClose={handleClose}
          handleEdit={handleEditSubmit}
          handleCreate={handleCreate}
        />
      </div>
      <div className="container">
        <div className="row">
          {todos.map((todo) => (
            <div className="col-6" key={todo.id}>
              <TodoCard
                handleChange={handleChange}
                handleRemove={handleRemove}
                handleEdit={handleEdit}
                todo={todo}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
