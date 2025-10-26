import { useState, useContext } from "react";
import useLocalStorage from "../context/useLocalStorage";
import { ThemeContext } from "../context/ThemeContext";
import Button from "./Button";

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("All");
  const { dark, toggle } = useContext(ThemeContext);

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([{ id: Date.now(), text: input.trim(), completed: false }, ...tasks]);
    setInput("");
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = id => setTasks(tasks.filter(t => t.id !== id));

  const filtered = tasks.filter(task => {
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  return (
    <div>
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Add new task"
          value={input}
          onChange={e => setInput(e.target.value)}
          className="border p-2 rounded flex-grow mr-2"
          onKeyDown={e => e.key === "Enter" && addTask()}
        />
        <Button onClick={addTask} variant="primary">Add</Button>
        <Button onClick={toggle} variant="secondary" className="ml-4">
          {dark ? "Light Mode" : "Dark Mode"}
        </Button>
      </div>
      <div className="flex space-x-4 mb-4">
        {["All", "Active", "Completed"].map(f => (
          <Button key={f} variant={filter === f ? "primary" : "secondary"} onClick={() => setFilter(f)}>
            {f}
          </Button>
        ))}
      </div>
      <ul>
        {filtered.length === 0 && <p>No tasks found.</p>}
        {filtered.map(task => (
          <li key={task.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
              className="mr-2"
            />
            <span className={task.completed ? "line-through text-gray-500" : ""}>{task.text}</span>
            <Button onClick={() => deleteTask(task.id)} variant="danger" className="ml-auto">Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
