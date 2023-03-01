import React from "react";
import TodoHeader from "./TodoHeader";
import TodoItem from "./TodoItem";

const todoItems = [
  {
    description: "Get out of bed",
    deadline: "Wed Sep 13 2017",
  },
  {
    description: "Brush teeth",
    deadline: "Thu Sep 14 2017",
  },
  {
    description: "Eat breakfast",
    deadline: "Fri Sep 15 2017",
  },
];

function TodoList() {
  return (
    <div>
      <TodoHeader />
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          description={item.description}
          deadline={item.deadline}
        />
      ))}
    </div>
  );
}

export default TodoList;
