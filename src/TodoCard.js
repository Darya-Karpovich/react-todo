import style from "./TodoCard.module.css";
import React, { useState } from 'react'
export default function TodoCard({ handleRemove, todo }) {
  const [checked, setChecked] = useState(todo?.isDone);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className={style.todo_card}>
      <div className="row justify-content-between">
        <div className="col-4">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              checked={todo.isDone}
              onChange={handleChange}
            />
            <h5>{todo.title}</h5>
          </div>

          <span>{todo.isDone ? "Done" : "To dooooo"}</span>
        </div>
        <div className="col-2">
          <div className="row">
            <button className="btn btn-secondary btn-sm mb-2">Edit</button>
          </div>
          <div className="row">
            <button
              className="btn btn-danger  btn-sm"
              onClick={() => handleRemove(todo.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
