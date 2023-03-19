import React, { createContext, useState } from "react";

export const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchUsers = async (query) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.github.com/search/users?q=${query}`
      );
      const data = await response.json();
      if (data.items) {
        setUsers(data.items);
        setError(null);
      } else {
        setUsers([]);
        setError("No results");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <GithubContext.Provider value={{ users, loading, error, searchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};
