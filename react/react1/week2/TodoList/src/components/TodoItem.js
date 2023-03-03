import React from "react";

function TodoItem(props) {
  return (
    <div>
      <h2>{props.description}</h2>
      <p>{props.deadline}</p>
    </div>
  );
}

export default TodoItem;
