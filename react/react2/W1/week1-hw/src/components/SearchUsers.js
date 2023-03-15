import React, { useState, useContext } from "react";
import { GithubContext } from "../GithubContext";

const SearchUsers = () => {
  const [query, setQuery] = useState("");
  const { users, loading, error, searchUsers } = useContext(GithubContext);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchUsers(query);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      {loading && <div>Loading...</div>}
      {error && <div>Error fetching ({error})</div>}
      {users.length === 0 && !loading && !error && <div>No results...</div>}
      {users.map((user) => (
        <div key={user.id}>{user.login}</div>
      ))}
    </div>
  );
};

export default SearchUsers;
