import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
    )
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.log(error));
  }, []);

  const handleDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const handleAdd = (description, deadline) => {
    const newTodo = {
      id: todos.length + 1,
      description,
      deadline,
      done: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p>No items...</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDone={handleDone}
            handleDelete={handleDelete}
          />
        ))
      )}
      <TodoForm handleAdd={handleAdd} />
    </div>
  );
}

export default TodoList;
