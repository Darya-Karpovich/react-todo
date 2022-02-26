import React from "react";
import style from "./TodoCard.module.css";

export default function TodoCard({ handleChange, handleRemove, handleEdit, todo }) {
  return (
    <div className={style.todo_card}>
      <div className="row justify-content-between">
        <div className="col-4">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={todo.isDone}
              onChange={() => handleChange(todo.id)}
            />
            <h5 style={{ textDecoration: todo.isDone ? 'line-through' : 'inherit'}}>{todo.title}</h5>
          </div>
        </div>
        <div className="col-2">
          <div className="row">
            <button className="btn btn-secondary btn-sm mb-2" onClick={() => handleEdit(todo)}>Edit</button>
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
