(function () {
  function getReply(command) {
    let name = null;
    let todos = [];

    if (command.startsWith("Hello my name is ")) {
      name = command.substring(17);
      return `Nice to meet you, ${name}`;
    } else if (command === "What is my name?") {
      if (name) {
      }
      return `Your name is ${name}`;
    } else if (command.startsWith("Add ")) {
      const todo = command.substring(4, command.indexOf(" to my todo"));
      todos.push(todo);
      return `${todo} added to your todo`;
    } else if (command.startsWith("Remove ")) {
      const todo = command.substring(7, command.indexOf(" from my todo"));
      const index = todos.indexOf(todo);
      if (index !== -1) {
        todos.splice(index, 1);
        return `Removed ${todo} from your todo`;
      } else {
        return `${todo} is not on your todo`;
      }
    } else if (command === "What is on my todo?") {
      if (todos.length === 0) {
        return "You have no todos";
      } else {
        return `You have ${todos.length} todos - ${todos.join(" and ")}`;
      }
    } else if (command === "What day is it today?") {
      const today = new Date();
      const options = { day: "numeric", month: "long", year: "numeric" };
      return today.toLocaleDateString("en-US", options);
    } else if (command.includes("Set a timer for ")) {
      const time = command.substring(
        command.indexOf("for ") + 4,
        command.indexOf(" minutes")
      );
      const milliseconds = time * 60 * 1000;
      setTimeout(() => console.log("Timer done"), milliseconds);
      return `Timer set for ${time} minutes`;
    }
  }
})();
