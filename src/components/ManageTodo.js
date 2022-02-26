import React, { useEffect, useState } from "react";

export default function ManageTodo({ handleClose, handleCreate, handleEdit, todo }) {
  const [title, setTitle] = useState(todo?.title || '');

  useEffect(() => {
    setTitle(todo?.title || '');
  }, [todo]);

  return (
    <div className="d-flex w-75">
      <input
        type="text"
        className="align-content-center d-inline form-control"
        placeholder="Write your todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="button"
        className="flex-shrink-0 btn btn-primary ms-3"
        onClick={() => {
          if (todo) {
            return handleEdit({ ...todo, title });
          }
          setTitle("");
          return handleCreate({ title });
        }}
      >
        {todo ? "Save " : "Add"} todo
      </button>
      <span className="btn btn-outline-primary ms-2" onClick={() => {
        setTitle('');
        handleClose();
      }}>&times;</span>
    </div>
  );
}
