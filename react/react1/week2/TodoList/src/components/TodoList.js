import React, { Component } from "react";

const todos = [
  {
    id: 1,
    description: "Get out of bed",
  },
  {
    id: 2,
    description: "Brush teeth",
  },
  {
    id: 3,
    description: "Eat breakfast",
  },
];

class TodoList extends Component {
  state = {
    todos: todos,
    newTodo: "",
    timeSpent: 0,
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ timeSpent: this.state.timeSpent + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleInputChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  handleAddTodo = () => {
    const newId = this.state.todos.length + 1;
    const newTodo = {
      id: newId,
      description: this.state.newTodo,
    };
    this.setState({ todos: [...this.state.todos, newTodo], newTodo: "" });
  };

  handleTodoDone = (id) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  handleDeleteTodo = (id) => {
    const filteredTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: filteredTodos });
  };

  render() {
    const { todos, newTodo, timeSpent } = this.state;

    return (
      <div>
        <h1>Todo List</h1>
        <input type="text" value={newTodo} onChange={this.handleInputChange} />
        <button onClick={this.handleAddTodo}>Add</button>
        {todos.length === 0 ? (
          <p>No items...</p>
        ) : (
          <ul>
            {todos.map((todo) => (
              <li
                key={todo.id}
                style={{ textDecoration: todo.done ? "line-through" : "none" }}
              >
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => this.handleTodoDone(todo.id)}
                />
                {todo.description}
                <button onClick={() => this.handleDeleteTodo(todo.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
        <p>Time spent on the website: {timeSpent} seconds</p>
      </div>
    );
  }
}

export default TodoList;
