import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const addTodoItem = () => {
    const newTodoItem = {
      id: Math.random(),
      description: `New todo item ${todos.length + 1}`,
      done: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodoItem]);
  };

  const markTodoItemAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todoItem) =>
        todoItem.id === id ? { ...todoItem, done: true } : todoItem
      )
    );
  };

  const deleteTodoItem = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todoItem) => todoItem.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTodoItem={addTodoItem} />
      {todos.length === 0 ? (
        <p>No items...</p>
      ) : (
        <TodoList
          todos={todos}
          markTodoItemAsDone={markTodoItemAsDone}
          deleteTodoItem={deleteTodoItem}
        />
      )}
      <p>Time spent: {time} seconds</p>
    </div>
  );
};

export default TodoApp;
