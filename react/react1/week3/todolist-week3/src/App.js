import React from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Timer from "./components/Timer";
import BorderWrapper from "./components/BorderWrapper";

function App() {
  return (
    <div className="App">
      <Header />
      <BorderWrapper>
        <TodoList />
      </BorderWrapper>{" "}
      <Timer />
    </div>
  );
}

export default App;
