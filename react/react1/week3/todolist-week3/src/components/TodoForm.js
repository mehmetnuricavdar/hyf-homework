import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";

function TodoForm({ handleAdd }) {
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState(new Date());

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAdd(description, deadline.toISOString());
    setDescription("");
    setDeadline(new Date());
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />
      </label>
      <label>
        Deadline:
        <DateTimePicker
          value={deadline}
          onChange={(value) => setDeadline(value)}
          required
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
