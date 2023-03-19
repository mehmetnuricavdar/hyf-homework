import React from "react";
import { GithubProvider } from "./GithubContext";
import SearchUsers from "./components/SearchUsers";

const App = () => {
  return (
    <GithubProvider>
      <SearchUsers />
    </GithubProvider>
  );
};

export default App;
