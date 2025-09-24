import { useEffect, useState } from "react";
import TasksContext from "./TasksContext";

function TasksProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TasksContext.Provider
      value={{ tasks, setTasks, searchQuery, setSearchQuery }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export default TasksProvider;
