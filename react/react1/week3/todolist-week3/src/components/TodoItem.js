import React from "react";
import BorderWrapper from "./BorderWrapper";

function TodoItem({ todo, handleDone, handleDelete }) {
  const { id, description, deadline, done } = todo;

  return (
    <div className="todo-item">
      <ul>
        <BorderWrapper>
          <input
            type="checkbox"
            checked={done}
            onChange={() => handleDone(id)}
          />
          <span style={{ textDecoration: done ? "line-through" : "none" }}>
            {description}
          </span>
          <span className="deadline"> {deadline} </span>
          <button className="delete-btn" onClick={() => handleDelete(id)}>
            Delete
          </button>
        </BorderWrapper>
      </ul>
    </div>
  );
}

export default TodoItem;
