import React from "react";

const BorderWrapper = ({ children }) => {
  return (
    <div style={{ border: "1px solid black", padding: "1rem" }}>{children}</div>
  );
};

export default BorderWrapper;
